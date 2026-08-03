# Claude Code 2.1.220 - Reverse Engineered Harness

> Extracted from `claude.exe` (Bun 1.4.0 standalone executable, `.bun` PE section).
> Bundle: `src_entrypoints_cli.js` (21.6 MB minified → 33 MB / 1,026,757 lines prettified).

## Structure

```
claude_src/
├── src_entrypoints_cli.js.js   # Full prettified harness (33MB, reference only)
├── modules/                    # 4,261 lazy-initialized modules (var X = S(()=>{...}))
├── tools/                      # 26 tool definitions with descriptions & schemas
├── agents/                     # Built-in subagent definitions
├── api-endpoints.txt           # API calls to Anthropic
└── COMPONENT-MAP.txt           # Line locations of key harness components
```

## How Claude Code works (the harness)

### 1. Process model
- `claude.exe` = Bun runtime + embedded JS bundle.
- VS Code extension (`extension.js`) spawns `claude.exe` as child process, talks over stdin/stdout using `stream-json` protocol (structured I/O).
- The CLI runs the agent loop internally; no per-message API call is made by the extension.

### 2. Agent loop (in bundle)
1. Build system prompt (assembly: line ~264297, coordinator ~273007, worker ~316985).
2. Send `messages` to API (`api.anthropic.com/v1/messages`).
3. Parse response: `tool_use` blocks → execute tools (`k8y()` executor).
4. Tool execution pipeline: **validate (Zod) → PreToolUse hooks → permission check → execute → PostToolUse hooks**.
5. Append tool results, loop until stop.

### 3. Tools (26 extracted)
File: `Read Write Edit MultiEdit Glob Grep NotebookRead NotebookEdit Cd`
Shell: `Bash`
Web: `WebFetch WebSearch`
Task/Agent: `TaskCreate TaskGet TaskList TaskStop TaskUpdate TaskOutput Agent SendMessage SendUserMessage ListAgents AskUserQuestion`
Other: `TodoWrite Skill ScheduleWakeup ListMcpResourcesTool ReadMcpResourceTool ReadMcpResourceDirTool`

Each tool in `tools/` shows: description (sent to model), zod input schema, permission validation rules.

### 4. Subagents (in `agents/`)
`main general-purpose worker statusline-setup` + generic `subagent`/`teammate`/`workflow-subagent`/`claude`/`main-session`. Each has `whenToUse`, `tools` allowlist, `model`, color.

### 5. API surface
- `api.anthropic.com/v1/messages` — primary chat
- `v1/agents`, `v1/sessions`, `v1/files` — agent/session/file APIs
- `api.anthropic.com/api/oauth/claude` — auth
- Optional: Amazon Bedrock, Google Vertex AI, Microsoft Foundry
- `claude.ai/api/...` — login/oauth

### 6. Permission & safety
- Permission modes: default/manual/acceptEdits/plan/bypassPermissions
- Per-tool permission rules (file patterns, bash prefixes)
- Hooks: PreToolUse / PostToolUse / PermissionRequest / UserPromptSubmit / Notification
- MCP isolation latch (`enforce_web_search_mcp_isolation`)
- Sandbox runtime (`ClaudeCodeSandbox`)

### 7. Scheduling & background
- `ScheduleWakeup`, scheduled tasks, background agents with timeout thresholds (default 120s, max 600s, auto-background).

## How to customize
- **Skills**: `.claude/skills/*/SKILL.md`
- **Hooks**: `.claude/settings.json` → `hooks`
- **MCP servers**: `.mcp.json`
- **Plugins**: marketplace plugins
- **Permissions**: `.claude/settings.json`
- To edit the harness itself: modify `modules/*.js` and re-bundle with Bun (`bun build --compile`), or run the extracted `cli.js` directly under Bun runtime.
