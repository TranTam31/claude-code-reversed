# CURSOR_SESSION_SOURCE_DECODE.md

Tài liệu giải mã cấu trúc một session của **Cursor** (agent transcript), dựa trên phân tích
thực tế file gốc:

```
~/.cursor/projects/c-Users-hahah-OneDrive-Documents-code-ai-guru-hkt/agent-transcripts/
  cd758675-f237-45c5-a64e-09ea9055f6c9/cd758675-f237-45c5-a64e-09ea9055f6c9.jsonl
```

File gốc đã được copy vào repo này và chuyển thành JSON dễ đọc:
**`cursor_session_example.json`** (mỗi dòng JSONL gốc = 1 phần tử trong mảng JSON).

> So sánh trực tiếp với `SESSION_SOURCE_DECODE.md` (phân tích session Claude Code).
> File Cursor này **chỉ có 12 dòng** (1 user + 10 assistant + 1 turn_ended) — ngắn hơn
> rất nhiều so với session Claude Code (hàng nghìn dòng).

---

## 1. Bản chất của file

- File gốc là **JSONL** (JSON Lines): mỗi dòng = 1 JSON object độc lập.
- Khác với Claude Code dùng trường `type` làm "envelope" (user/assistant/system/...),
  Cursor dùng trường **`role`** (`"user"` / `"assistant"`) để phân biệt vai trò, và chỉ có
  **1 event điều khiển** `{"type":"turn_ended"}` nằm ở cuối.
- Thứ tự dòng = thứ tự thời gian: user gửi prompt → assistant stream các tool + text →
  `turn_ended` báo kết thúc.
- **KHÔNG có cấu trúc cây (uuid / parentUuid)** như Claude Code. Các dòng chỉ nối nhau
  theo vị trí, không có liên kết ngược.

---

## 2. Envelope & các trường chung

| Trường | Có trong Cursor? | Ghi chú |
|--------|------------------|---------|
| `role` | ✅ | `"user"` hoặc `"assistant"` (thay cho `type` của Claude). |
| `type` | ⚠️ chỉ ở dòng cuối | `"turn_ended"` cho event kết thúc. |
| `message` | ✅ | `{ "content": [ ... ] }`. |
| `sessionId` | ❌ | Không có (id session nằm trong **tên file**, không nằm trong nội dung). |
| `uuid` / `parentUuid` | ❌ | Không có liên kết cây. |
| `timestamp` | ⚠️ không phải trường | Thời gian **chỉ nằm trong text** của message user đầu tiên (xem mục 4.1). |
| `model` | ❌ | Không ghi model dùng là gì. |
| `gitBranch` / `cwd` / `version` | ❌ | Không có metadata môi trường. |

→ Điểm khác biệt lớn nhất: **Cursor transcript là bản ghi "nội dung hội thoại + lời gọi tool",
không phải bản ghi vận hành (operational log) như Claude Code.**

---

## 3. CÁC PATTERN — "có bao nhiêu pattern"

Toàn bộ file chỉ gồm **3 pattern**:

| # | Pattern | Số lần | Đại diện cho |
|---|---------|--------|--------------|
| 1 | `role:"user"` | 1 | Prompt của người dùng (kèm timestamp trong text). |
| 2 | `role:"assistant"` | 10 | Các lượt phản hồi: text + tool_use. |
| 3 | `type:"turn_ended"` | 1 | Marker kết thúc turn (status success). |

Phân bổ nội dung bên trong các `assistant` (10 dòng):

| Loại block | Số lượng |
|------------|----------|
| `text` | 5 |
| `tool_use` | 25 (Read×19, Glob×2, GetDynamicTools×1, Grep×1, Write×1, StrReplace×1) |
| `tool_result` | **0** |

> ⚠️ **Phát hiện quan trọng:** file ghi lại các lời **gọi tool** (`tool_use`) nhưng
> **KHÔNG ghi lại kết quả tool** (`tool_result`). Nghĩa là transcript này chỉ capture
> "yêu cầu", không capture "phản hồi của tool". Khác hẳn Claude Code (nơi tool_result
> nằm trong các event `user` riêng).

---

## 4. Chi tiết từng pattern

### 4.1 `role: "user"` (dòng 1)

```json
{
  "role": "user",
  "message": {
    "content": [
      { "type": "text", "text": "<timestamp>Tuesday, Aug 25, 2026, 2:30 PM (UTC+7)</timestamp>\n<user_query>\nYou read PROBLEM.md and files in folder docs, then give me a comprehensive comment about this\n</user_query>" }
    ]
  }
}
```

- Nội dung user là **1 block text duy nhất**, trong đó timestamp và câu hỏi được bọc bằng
  tag `<timestamp>...</timestamp>` và `<user_query>...</user_query>` (text thuần, không phải
  trường có cấu trúc).
- Muốn lấy thời gian, bạn phải **parse text**, không có trường `timestamp` riêng.

### 4.2 `role: "assistant"` (dòng 2–11)

```json
{
  "role": "assistant",
  "message": {
    "content": [
      { "type": "text", "text": "I'll start by reading ..." },
      { "type": "tool_use", "name": "Read", "input": { "path": "..." } }
    ]
  }
}
```

- `content` là mảng các block:
  - `{ "type": "text", "text": "..." }` — lời thoại.
  - `{ "type": "tool_use", "name": "...", "input": {...} }` — yêu cầu gọi tool.
- **KHÔNG có** `id` trên `tool_use` (Claude Code có `toolu_01...`).
- **KHÔNG có** `stop_reason`, `requestId`, `model`, `usage`.
- Tên tool + params là Cursor-style:
  - `Glob` dùng `{ "target_directory": "...", "glob_pattern": "..." }` (Claude dùng `path`/`pattern`).
  - `Write` dùng `{ "path": "...", "contents": "..." }`.
  - `StrReplace` dùng `{ "path": "...", "old_string": "...", "new_string": "..." }`.
  - `GetDynamicTools` (`{ "namespace": "cursor-app-control", "toolName": "rename_chat" }`) —
    tool đặc thù của Cursor để lấy tool động (không có trong Claude Code).

### 4.3 `type: "turn_ended"` (dòng 12)

```json
{ "type": "turn_ended", "status": "success" }
```

- Event điều khiển duy nhất, báo hiệu turn kết thúc thành công.
- Không chứa usage, không chứa nội dung.

---

## 5. Usage & Cache — phần bạn quan tâm nhất

### 5.1 Kết luận trước: **Cursor KHÔNG ghi usage / cache vào file session này**

Tôi đã quét toàn bộ 12 dòng (cả raw JSONL lẫn JSON đã convert):

| Từ khóa | Số lần xuất hiện |
|---------|-----------------|
| `usage` | **0** |
| `cache` | **0** |
| `input_tokens` | **0** |
| `output_tokens` | **0** |
| `cache_creation_input_tokens` | **0** |
| `cache_read_input_tokens` | **0** |

→ **Không có bất kỳ trường token, cost, hay cache nào.** Khác hoàn toàn với Claude Code,
nơi mọi `assistant` message đều mang `message.usage` chi tiết (input/cache_creation/
cache_read/output, iterations, speed...).

> Hai từ "token" và một từ "cost" xuất hiện trong file là do **nằm trong nội dung văn bản**
> (vd. assistant viết "1,973 Reports parsed", "token" trong file canvas được đọc, hay chữ
> "cost" trong bài phân tích của chính model) — **không phải** trường usage có cấu trúc.

### 5.2 Tại sao Cursor không có, và bạn có thể tìm ở đâu?

- File `.jsonl` transcript của Cursor là **bản ghi hội thoại** (conversation replay), không
  phải bản ghi chi phí (billing/telemetry log). Nó phục vụ việc "xem lại chat", không phục vụ
  việc "tính tiền/token".
- Thông tin usage/cache của Cursor thường nằm ở **nơi khác**, không phải file transcript này:
  - **In-app Usage dashboard** (Settings → Cursor → Usage) — tổng token theo gói (Pro/Business).
  - **Server-side telemetry** của Cursor (không public, không nằm trong thư mục project local).
  - Một số phiên bản Cursor ghi `cost`-ish info vào **log riêng** (không phải `agent-transcripts/`).

### 5.3 Hệ quả khi bạn muốn phân tích chi phí từ file này

- ❌ Không thể tính `input_tokens` / `cache_read` / `cache_creation` như ở mục 6 & 9 của
  `SESSION_SOURCE_DECODE.md`.
- ❌ Không thể phát hiện "cold start vs warm cache" (vì thiếu usage + thiếu timestamp có cấu trúc
  trên từng event).
- ⚠️ Ngay cả số lượt tool (`tool_use` count) cũng **không đại diện cho số request API** thực tế,
  vì tool_result bị bỏ qua — bạn chỉ thấy "model muốn gọi gì", không thấy "tool trả về gì" và
  không thấy vòng lặp agentic được thực thi bao nhiêu bước.

---

## 6. So sánh nhanh Cursor vs Claude Code (cùng 1 khía cạnh)

| Khía cạnh | Claude Code (`session_ics_crm_...json`) | Cursor (`cd758675...jsonl`) |
|-----------|------------------------------------------|------------------------------|
| Envelope định danh | `type` (user/assistant/system/...) | `role` (user/assistant) + 1 `turn_ended` |
| Liên kết cây | `uuid` + `parentUuid` + `leafUuid` | Không có |
| sessionId trong event | ✅ | ❌ (chỉ ở tên file) |
| timestamp có cấu trúc | ✅ ISO-8601 mỗi event | ❌ (chỉ trong text user đầu) |
| model | ✅ (`claude-opus-5`) | ❌ |
| **usage / cache** | ✅ chi tiết | ❌ **không có** |
| tool_result | ✅ (event user riêng) | ❌ (không ghi) |
| tool_use có `id` | ✅ (`toolu_...`) | ❌ |
| compact / system event | ✅ (`compact_boundary`, hooks) | ❌ |
| Số pattern `type` cấp cao | 10 (+ sub-pattern) | 3 |

---

## 7. Cách đọc file JSON đã copy

Mở `cursor_session_example.json` — là 1 mảng 12 phần tử. Mỗi phần tử = 1 event.

```js
const data = require('./cursor_session_example.json');

// Đếm pattern theo role/type
const byKind = {};
for (const e of data) {
  const k = e.role || e.type;
  byKind[k] = (byKind[k] || 0) + 1;
}
console.log(byKind); // { user:1, assistant:10, turn_ended:1 }

// Liệt kê các tool được gọi
const tools = {};
for (const e of data) {
  for (const b of (e.message?.content) || []) {
    if (b.type === 'tool_use') tools[b.name] = (tools[b.name]||0)+1;
  }
}
console.log(tools); // { Read:19, Glob:2, GetDynamicTools:1, Grep:1, Write:1, StrReplace:1 }

// Lấy timestamp từ text user đầu
const userText = data[0].message.content[0].text;
const ts = userText.match(/<timestamp>(.*?)<\/timestamp>/)[1];
console.log(ts); // Tuesday, Aug 25, 2026, 2:30 PM (UTC+7)

// Kiểm tra xác nhận KHÔNG có usage
const hasUsage = data.some(e => e.message?.usage);
console.log('hasUsage =', hasUsage); // false
```

---

## 8. Tóm tắt cho bạn

1. File session Cursor là **bản ghi hội thoại đơn giản** (role-based, 3 pattern), không phải
   operational log phức tạp như Claude Code.
2. **Không có usage / cache / token trong file này.** Nếu bạn muốn phân tích chi phí cho Cursor,
   file `agent-transcripts/*.jsonl` là **nhầm nguồn** — cần tìm ở Usage dashboard của Cursor
   hoặc server telemetry (không nằm trong project local).
3. Tool result bị bỏ qua → file chỉ cho biết "model định làm gì", không cho biết "kết quả thật".
4. Timestamp và sessionId nằm ngoài cấu trúc (trong text / tên file), nên khó tự động hóa
   hơn so với Claude Code.
