# Claude App (Desktop) — Reverse Engineering Map

Phân tích ngược bản cài **Claude Desktop** (win32-x64, MSIX `Claude_1.30096.5.0`, Electron) trên Windows,
rút từ `C:\Program Files\WindowsApps\Claude_1.30096.5.0_x64__pzs8sxrjxfjjc\app\resources\`.

Khác với phần CLI (đã reverse ở repo root `src_entrypoints_cli.prettified.js`), phần này là **ứng dụng desktop**
gồm: renderer web (ion-dist), main process Electron (`.vite/build`), và 3 native binary (cowork-svc, chrome-native-host, smol-bin.vhdx).

---

## 1. Kiến trúc tổng thể

```
┌─────────────────────────────────────────────────────────────────┐
│ Claude Desktop (Electron)                                        │
│                                                                  │
│  ion-dist/  (renderer, Vite SPA — web app claude.ai clone)       │
│     │  WebContents → claude.ai like UI (chat, cowork, settings)  │
│     │                                                            │
│  .vite/build/  index.pre.js + chunks + workers (main process)    │
│     │  quản lý: windows, IPC, VM, sessions, artifacts, auto-update│
│     └─────────────────────────────────────────────────────────── │
│           │  IPC:  $eipc_message$_1a6a86a9-...$_<ns>_$_<Cls>_$_<m>│
│           ▼                                                        │
│  ┌──────────────────────────────┐  ┌───────────────────────────┐  │
│  │ claude.exe (CLI, v2.1.x)     │  │ cowork-svc.exe (Go)       │  │
│  │ = Claude Code CLI riêng biệt │  │ = Hyper-V VM manager      │  │
│  │ %APPDATA%\Claude\claude-code │  │  HCS + gvisor-tap-vsock   │  │
│  └──────────────────────────────┘  └────────────┬──────────────┘  │
│                                                 │  ▌smol-bin.x64.vdhx│
│  ┌──────────────────────────────┐               │  (guest: Go+goja)│
│  │ chrome-native-host.exe (Rust)│──────────────►┘  Hyper-V VM     │
│  │ = MCP bridge ↔ Chrome        │                                  │
│  └──────────────────────────────┘                                  │
└────────────────────────────────────────────────────────────────────┘
```

- **Sessions (Cowork / code)**: main process chạy `claude.exe` dưới dạng child process (pty), renderer giao tiếp
  qua IPC `LocalSessions`/`LocalAgentModeSessions`/`ScheduledTasks`.
- **Kết nối server**: renderer + main đều gọi thẳng `https://api.claude.ai` / `https://api.anthropic.com`
  (đầy đủ endpoint trong `api-endpoints.txt`).
- **Security**: desktop-based auth (`/api/auth/*`, device registry — attestation/signature bằng key pairs).

## 2. Thành phần đã trích

| Thành phần | Vị trí | Ghi chú |
|---|---|---|
| Main bundle prettified | `prettified/index.pre.js.prettified.js` (5.4 MB) | toàn bộ main process |
| Main chunks | `prettified/index.chunk-*.prettified.js` | tách module |
| Workers | `prettified/*.prettified.js` (agent, buddy, pty, mcp, file-index, transcript-search…) | |
| Renderer URLs | `renderer-urls.txt` (~63000 bytes / 627 dòng) | API endpoints các host |
| IPC channels | `ipc-channels.txt` | 915 channels / 14 namespace |
| Native: cowork-svc.exe | bản copy tại repo | Go → Hyper-V VM manager |
| Native: chrome-native-host.exe | bản copy tại repo | Rust → MCP bridge |
| Native: smol-bin.x64.vhdx | bản copy tại repo | đĩa VM (goja) |
| app.asar + extracted | `app.asar`, `extracted/` | full payload |

## 3. IPC surface (14 namespaces, 915 channels)

Chi tiết từng channel: `ipc-channels.txt`. Namespace chính:

| Namespace | Số channel | Chức năng |
|---|---|---|
| `claude.web` | 666 | Toàn bộ feature web (sessions, cowork, VM, artifacts, scheduled tasks, plugins, git/PR, find-in-page, windows…) |
| `claude.settings` | 129 | Settings/MCP config, AppConfig, startup global shortcut, extensions (DXT) |
| `claude.internal.computerUse` | 22 | Computer Use teaching + watch-record UI |
| `claude.buddy` | 18 | Claude Buddy (mobile companion — BLE pairing) |
| `claude.parka` | 14 | Parka (recording/meeting notes plugin) |
| `claude.simulator` | 25 | Simulator (test env) |
| `claude.officeAddin` | 10 | Microsoft Office addin file sync |
| `claude.coworkArtifact` | 5 | Artifact bridge (askClaude, callMcpTool, navigateHost, openExternalUrl, runScheduledTask) |
| `claude.hybrid` | 3 | Locale desktop-native |
| khác | 13 | findInPage, localExecConsent, ui, skills, telemetry |

Pattern channel:
`$eipc_message$_1a6a86a9-b6fb-4d64-8e14-a3eb46104c36_$_<namespace>_$_<Class>_$_<method>`

## 4. Native binaries

### cowork-svc.exe — Go, `github.com/anthropics/cowork-win32-service/cmd/cowork-svc`
- **Vai trò**: "Manages Hyper-V virtual machines for Claude Desktop" — service Windows quản lý VM Cowork.
- Dùng **HCS/HCN API** của Windows (`HcsCreateComputeSystem`, `HcsStartComputeSystem`, `HcsModifyComputeSystem`,
  `HcnOpenNetwork`, `CreateVirtualDisk`…) → tạo Hyper-V VM chạy **smol-bin.vhdx**.
- Dùng **`github.com/containers/gvisor-tap-vsock`** (gvisor networking + vsock) → VM có network gồm DNS/DHCP/forwarder.
- Message log: `[Server] Starting named pipe server`, `[HVSock] Listening on port…`, `[VM] Plan9 share added…`,
  `[VHDX] Creating dynamic VHDX`, `[VM] StartVMWithBundle (bundlePath=%s, memoryGB, cpuCount)`.
- Client auth: named pipe với **chữ ký client** (CA certs loaded từ store).
- Log path: `C:\ProgramData\Claude\Logs\cowork-service.log` (+ store log).
- Bundle VM ở `{userData}\vm_bundles\claudevm.bundle\`.

### chrome-native-host.exe — Rust (rustc 8bab26f4)
- **Vai trò**: `chrome-native-host` — MCP bridge giữa Claude Desktop ↔ Chrome extension.
- Tạo **Windows named pipe `\\.\pipe\claude-mcp-browser-bridge-<user>`** (thấy trong chrome-native-host.log).
- Giao tiếp JSON: đọc message length-prefixed từ MCP client (`Failed to read message from MCP client`), forward tới Chrome.
- Message types: `mcp_conn`, `mcp_disconnected`, handling Chrome message types.
- Log: `C:\Users\hahah\AppData\Local\Claude\Logs\chrome-native-host.log`.

### smol-bin.x64.vhdx — Hyper-V disk (37 MB)
- File VHDX hợp lệ (magic `vhdxfile`), boot disk cho VM Cowork ("smol-bin").
- Trong đĩa có dấu hiệu **goja** (JS engine thuần Go) + gvisor → guest là Go binary chạy JS (môi trường artifact/code isolation).
- Main process copy `resourcesPath/smol-bin.<arch>.vhdx` vào VM bundle rồi `startVM(a, b, x, 'gvisor', ...)`.

## 5. Kết nối server (tóm tắt, đầy đủ trong api-endpoints.txt)

- **API chính**: `https://api.claude.ai` (`/api/*`), Anthropic Messages API `https://api.anthropic.com` (`/v1/*`).
- **Auth**: `/api/auth/*` (magic_link, phone_code, webauthn, verify_google), `https://claude.ai/desktop/callback`,
  `platform.claude.com/oauth/code/*`, `console.anthropic.com/oauth/code/callback`.
- **Tải binary**: `/api/claude-code/{win32-x64, …}/latest/download?binary_name=claude.exe`;
  `/api/desktop/*/latest/redirect`.
- **MCP servers first-party**: `gmail.mcp.claude.com`, `gdrive.mcp.claude.com`, `gcal.mcp.claude.com`,
  `microsoft365.mcp.claude.com`, `mcp.slack.com`, `mcp.box.com` (Connections).
- **Artifact content**: `www.claudeusercontent.com`, `claude.site`, `sandbox.claudemcpcontent.com`.
- **Telemetry**: Sentry DSN `2f98127cbffe4740b1f767a2de77d23b@o1158394.ingest.us.sentry.io/4507368973008896`,
  `cdn.segment.com`, `cdn.growthbook.io`, `beacon.claude-ai.staging.ant.dev`.
- **Staging/reg xử lý local**: `api-staging.anthropic.com`, `claude-ai.staging.ant.dev`, `claude.fedstart.com`,
  `claude-staging.fedstart.com`.

## 6. Cách tạo lại từ nhị phân (repro steps)

```powershell
# 1. Cài công cụ
npm i --prefix C:\Users\hahah\AppData\Local\Temp\opencode\re-asartool @electron/asar prettier

# 2. Giải nén asar
node ...\re-asartool\node_modules\@electron\asar\bin\asar.mjs extract app.asar extracted

# 3. Prettify từng bundle (.vite/build/*.js) — chạy qua prettier
& ...\re-asartool\node_modules\.bin\prettier.cmd <file> | Out-File -Encoding utf8 <out>.js.prettified.js

# 4. Trích URLs / IPC / strings
node ...\Temp\opencode\scan-urls.js <dir> | out file
node ...\Temp\opencode\strings.js <binary> <regex> 8   # ASCII strings
```