# CODEX_SESSION_SOURCE_DECODE.md

Tài liệu giải mã cấu trúc một session của **Codex** (coding agent trong ChatGPT app /
Codex desktop), dựa trên phân tích thực tế file:

```
C:\Users\hahah\.codex\sessions\2026\08\25\rollout-2026-08-25T11-53-36-01a03744-4579-75b2-8f47-59004d9a4009.jsonl
```

File đã được copy vào repo này ở dạng JSON dễ đọc:
**`codex_session_example.json`** (mỗi dòng JSONL gốc = 1 phần tử trong mảng JSON).

> So sánh nhanh: Claude Code lưu session dưới dạng JSONL với envelope `type/uuid/
> parentUuid` và `usage` nằm *trực tiếp trong mỗi* `assistant` message. Codex lưu
> dưới dạng JSONL với envelope `type/ordinal/timestamp` và token usage nằm trong một
> event loại riêng (`token_count`) — **không** gắn vào từng message. Chi tiết ở mục 5.

---

## 1. Bản chất của file

- File gốc là **JSONL** (JSON Lines): mỗi dòng là một JSON object độc lập, ngăn cách
  bởi ký tự xuống dòng. Dòng thứ N **không** lồng trong dòng thứ N-1.
- Mỗi dòng = một **event**. Trường phân biệt bắt buộc là **`type`** (cấp cao).
- Thứ tự các dòng là **thứ tự thời gian** (field `ordinal` tăng dần 0 → 53, khớp với
  `timestamp` tăng dần). Khác Claude Code dùng `parentUuid` để nối cây, Codex chủ yếu
  dùng `ordinal` tuần tự + `turn_id` để nhóm các event thuộc cùng một turn.
- Snapshot session này: **54 event**, ~318 KB, **1 turn duy nhất** (turn_id cố định),
  model `gpt-5.4-mini`, provider `openai`, chạy từ VS Code (`source: vscode`).

Envelope chung của mọi dòng:

```json
{
  "timestamp": "2026-08-25T04:53:55.739Z",
  "ordinal": 0,
  "type": "session_meta",
  "payload": { ... }
}
```

| Trường | Ý nghĩa |
|--------|---------|
| `timestamp` | Thời gian ISO-8601 event sinh ra. |
| `ordinal` | Số thứ tự event (0-based, tăng dần = thứ tự thời gian). |
| `type` | Loại event cấp cao (xem mục 3). |
| `payload` | Nội dung riêng theo từng `type` (và bên trong có thể có `payload.type` phân nhánh tiếp). |

---

## 2. Có bao nhiêu PATTERN (event `type`) cấp cao?

Toàn bộ session gồm đúng **5 pattern `type`** cấp cao. Phân bố:

| # | `type` | Số lần | Đại diện cho |
|---|--------|--------|--------------|
| 1 | `session_meta` | 1 | Metadata mở session (id, cwd, git, model, instructions...). |
| 2 | `event_msg` | 24 | Event điều khiển / trạng thái luồng (task start/complete, item xong, **token_count**, settings). |
| 3 | `response_item` | 27 | Các mục hội thoại thực sự (message, reasoning, function_call, function_call_output). |
| 4 | `world_state` | 1 | Snapshot toàn bộ trạng thái thế giới (skills, permissions, model...). |
| 5 | `turn_context` | 1 | Context của turn (model, approval, sandbox, effort...). |

Nếu tính thêm **sub-pattern** (bên trong `payload.type`), ta có:

- `event_msg` có **6 sub-pattern**: `task_started`, `item_completed`, `token_count`,
  `task_complete`, `thread_settings_applied` (và vài event không có `payload.type`).
- `response_item` có **4 sub-pattern** (theo `payload.type`): `message` (7),
  `reasoning` (4), `function_call` (8), `function_call_output` (8).
- `session_meta`, `world_state`, `turn_context` không có sub-pattern (mỗi loại 1 event).

---

## 3. Chi tiết từng pattern

### 3.1 `session_meta` (1 event, ordinal 0)

Metadata mở session. Các trường đáng chú ý trong `payload`:

| Trường | Giá trị mẫu | Ý nghĩa |
|--------|-------------|---------|
| `session_id` / `id` | `01a03744-...-4009` | ID session. |
| `cwd` | `c:\Users\hahah\...\ics_crm` | Thư mục làm việc. |
| `originator` | `codex_work_desktop` | Giao diện gọi. |
| `source` | `vscode` | Nguồn (VS Code app). |
| `cli_version` | `0.149.0-alpha.4.1` | Phiên bản Codex CLI. |
| `model_provider` | `openai` | Nhà cung cấp model. |
| `base_instructions` | `{ "text": "You are Codex..." }` | System prompt gốc (rất dài). |
| `dynamic_tools` | mảng (2 phần tử) | Tool được nạp động. |
| `history_mode` | `paginated` | Chế độ lưu lịch sử (khác hẳn compact của Claude). |
| `context_window` | `{ "window_id": "..." }` | Định danh cửa sổ context. |
| `git` | `{ commit_hash, branch, repository_url }` | Thông tin git: branch `feat/kpi-module`. |

### 3.2 `event_msg` (24 event) — control + **usage**

Sub-pattern qua `payload.type`:

| `payload.type` | Số | Ý nghĩa |
|----------------|----|---------|
| `task_started` | 1 | Bắt đầu turn: `turn_id`, `started_at`, `model_context_window`, `collaboration_mode_kind`. |
| `item_completed` | 17 | Một item (message/tool) hoàn thành: `thread_id`, `turn_id`, `item`, `started_at_ms`, `completed_at_ms`. |
| `token_count` | 4 | **★ Chứa usage/cache** (xem mục 5). |
| `task_complete` | 1 | Kết thúc turn: `turn_id`, `completed_at`. |
| `thread_settings_applied` | 1 | Cài đặt thread được áp dụng. |

Ví dụ `item_completed` (item là UserMessage):
```json
{ "type":"item_completed", "thread_id":"...", "turn_id":"...",
  "item": { "type":"UserMessage", "id":"...", "client_id":"...", "content":[...] },
  "started_at_ms":..., "completed_at_ms":... }
```

### 3.3 `response_item` (27 event) — nội dung hội thoại

Đây là phần tương đương với `user`/`assistant` của Claude, nhưng Codex tách nhỏ từng
"item" (một message, một bước reasoning, một lời gọi tool, một kết quả tool) thành event
riêng. Phân bố `payload.type`:

| `payload.type` | `role` | Số | Đại diện |
|----------------|--------|----|----------|
| `message` | `developer` | 1 | System/app-context được tiêm vào (vd. `<app-context>`). |
| `message` | `user` | 2 | Prompt thật của bạn (kèm `<recommended_plugins>`...). |
| `message` | `assistant` | 4 | Lời thoại model (`content[].type: output_text`). |
| `reasoning` | — | 4 | Bước suy luận (thinking) — `summary` rỗng, `encrypted_content` (mã hóa). |
| `function_call` | — | 8 | Lời gọi tool (`name`, `arguments`, `call_id`). |
| `function_call_output` | — | 8 | Kết quả tool (`call_id`, `output`). |

- `message` có `role` + `content[]` (block `input_text` với user/developer, `output_text`
  với assistant).
- `reasoning` / `function_call` / `function_call_output` **không có `role`** (nên trong
  phân tích thô chúng hiện ra là "(none)").
- `reasoning` chứa `encrypted_content` (nội dung reasoning bị mã hóa, không đọc được trần).
- Cặp `function_call` ↔ `function_call_output` liên kết qua `call_id`.

### 3.4 `world_state` (1 event)

Snapshot trạng thái thế giới tại một thời điểm. `payload.state` chứa:
`agents_md`, `apps_instructions`, `collaboration_mode`, `environments`,
`git_attribution`, `host_skills`, `model`, `multi_agent_mode`, `orchestrator_skills`,
`permissions`, `personality`, `plugins_instructions`, `realtime`, `skills`.
Đây là "phụ lục ngữ cảnh" tương đương các `attachment` của Claude nhưng gom thành 1 blob.

### 3.5 `turn_context` (1 event)

Context của turn, tương đương phần metadata môi trường. Các trường:
`turn_id`, `cwd`, `workspace_roots`, `current_date`, `timezone`, `approval_policy`
(`on-request`), `approvals_reviewer`, `sandbox_policy` (workspace-write, không network),
`permission_profile`, `model` (`gpt-5.4-mini`), `comp_hash`, `personality`,
`collaboration_mode`, `multi_agent_version`, `realtime_active`, `effort` (`medium`),
`summary` (`auto`).

---

## 4. So sánh cấu trúc với Claude Code (tóm tắt)

| Khía cạnh | Claude Code | Codex |
|-----------|-------------|-------|
| Envelope | `type,uuid,parentUuid,timestamp` | `type,ordinal,timestamp` |
| Nối chuỗi | `parentUuid` (cây) | `ordinal` (tuần tự) + `turn_id` |
| Hội thoại | `user` / `assistant` (role) | `response_item` (`message`/`reasoning`/`function_call`/`function_call_output`) |
| Tool result | nằm trong `user` event | `function_call_output` riêng |
| Metadata ngữ cảnh | nhiều `attachment` sub-pattern | `world_state` + `turn_context` gom 1 blob |
| Usage | trong mỗi `assistant.message.usage` | `event_msg` type=`token_count` (riêng biệt) |
| Nén lịch sử | `compact_boundary` (system) | `history_mode: paginated` (không có marker compact trong file này) |

---

## 5. USAGE & CACHE — phần quan trọng nhất (trả lời: "Codex có lưu usage/cache không?")

**CÓ.** Codex ghi token usage VÀ thông tin cache vào file session, nhưng **không** nằm
trong từng message mà nằm trong các event `type: "event_msg"`, `payload.type: "token_count"`.
Trong session này có **4 event `token_count`** (ordinal 18, 32, 46, 51) — mỗi lần model
trả xong một đoạn/cập nhật context.

### 5.1 Cấu trúc một event `token_count`

```json
{
  "type": "event_msg",
  "ordinal": 32,
  "payload": {
    "type": "token_count",
    "info": {
      "total_token_usage": {
        "input_tokens": 43777,
        "cached_input_tokens": 25344,
        "cache_write_input_tokens": 0,
        "output_tokens": 609,
        "reasoning_output_tokens": 195,
        "total_tokens": 44386
      },
      "last_token_usage": {
        "input_tokens": 22792,
        "cached_input_tokens": 20864,
        "cache_write_input_tokens": 0,
        "output_tokens": 338,
        "reasoning_output_tokens": 90,
        "total_tokens": 23130
      },
      "model_context_window": 258400
    },
    "rate_limits": {
      "limit_id": "codex",
      "primary": { "used_percent": 4, "window_minutes": 43200, "resets_at": 1790223743 },
      "credits": { "has_credits": false, "unlimited": false, "balance": null },
      "plan_type": "free"
    }
  }
}
```

### 5.2 Ý nghĩa từng trường

Bên trong `info`:

| Trường | Ý nghĩa |
|--------|---------|
| `total_token_usage` | **Tích lũy** từ đầu session đến hiện tại. |
| `last_token_usage` | **Gia tăng** của riêng response vừa rồi (tương tự "request này tốn bao nhiêu"). |
| `model_context_window` | Kích thước cửa sổ context (258400). |

Các trường token (có mặt ở cả `total_` và `last_`):

| Trường | Ý nghĩa | Tương đương Claude |
|--------|---------|-------------------|
| `input_tokens` | Token input **mới, không cache** (tốn phí input thường). | `input_tokens` |
| `cached_input_tokens` | Token **đọc từ prompt cache** (rẻ). | `cache_read_input_tokens` |
| `cache_write_input_tokens` | Token **viết mới vào cache** (đắt). | `cache_creation_input_tokens` |
| `output_tokens` | Token model sinh ra (output thường). | `output_tokens` |
| `reasoning_output_tokens` | Token reasoning/thinking sinh ra. | (nằm trong `output_tokens_details`) |
| `total_tokens` | Tổng = input + cached + cache_write + output (+ reasoning). | — |

Bên trong `rate_limits`:

| Trường | Ý nghĩa |
|--------|---------|
| `primary.used_percent` | % quota đã dùng (4–5% trong session này). |
| `primary.window_minutes` | Cửa sổ reset (43200 phút = 30 ngày). |
| `primary.resets_at` | Thời điểm reset (epoch seconds). |
| `credits` | Thông tin credit (`has_credits`, `unlimited`, `balance`). |
| `plan_type` | Loại gói (`free`). |

### 5.3 KHÁC BIỆT LỚN vs Claude — cần lưu ý

1. **Không có usage trên từng message.** Claude gắn `usage` vào *mỗi* `assistant` → bạn
   tính được chính xác từng request. Codex chỉ phát `token_count` định kỳ (4 lần/1 turn
   ở đây) → chỉ có số **tích lũy** và **gia tăng gần nhất**, không có breakdown từng bước
   như `iterations[]` của Claude.
2. **Cache chỉ phân 2 trạng thái** (`cached_input_tokens` = read, `cache_write_input_tokens`
   = write). Claude còn phân rã TTL (`ephemeral_5m` / `ephemeral_1h`). Ở session này
   `cache_write_input_tokens` **luôn = 0** → nghĩa là Codex đang tận dụng cache có sẵn
   (read), không ghi mới trong turn này.
3. **Không có trường cost/billing thực tế** trong file (từ khóa `cost`/`billing` chỉ
   xuất hiện như substring của các từ khác, không phải trường riêng). Muốn tiền thật phải
   nhân với đơn giá OpenAI bên ngoài.
4. `reasoning_output_tokens` tách riêng → nếu model chạy reasoning (o-series / GPT-5
   thinking), bạn thấy rõ token "nghĩ" bao nhiêu.

### 5.4 Số liệu thực tế trong session này (4 điểm `token_count`)

| ordinal | `total.input` | `total.cached` | `total.cache_write` | `total.output` | `total.reasoning` | TOTAL (total) | used% |
|---------|---------------|----------------|---------------------|----------------|-------------------|---------------|-------|
| 18 | 20,985 | 4,480 | 0 | 271 | 105 | 21,256 | 4% |
| 32 | 43,777 | 25,344 | 0 | 609 | 195 | 44,386 | 4% |
| 46 | 69,828 | 47,744 | 0 | 896 | 231 | 70,724 | 5% |
| 51 | 99,827 | 73,728 | 0 | 2,406 | 669 | 102,233 | 5% |

Đọc kết quả:
- `cached_input_tokens` tăng dần (4.5k → 73.7k) và chiếm tỷ trọng ngày càng lớn → Codex
  **tận dụng prompt cache mạnh**: đến ordinal 51, ~74% input là cache hit (rẻ).
- `cache_write_input_tokens = 0` suốt → turn này không ghi cache mới (có thể prefix system
  đã nằm sẵn trong cache từ trước, hoặc Codex quản lý cache ở tầng khác).
- `total_tokens` chỉ ~102k trên tổng context 258k → mới dùng ~40% cửa sổ, quota `used_percent`
  chỉ 4–5%.

### 5.5 Công thức quy ra "độ nặng" của prompt (tương tự Claude)

```
input_thuc_te = input_tokens + cached_input_tokens + cache_write_input_tokens
tong_token    = input_thuc_te + output_tokens (+ reasoning_output_tokens)
```

Vì Codex cũng có prompt caching, `input_tokens` đơn lẻ không phản ánh đúng chi phí — phải
cộng `cached` + `cache_write` như Claude (mục 6.4 của SESSION_SOURCE_DECODE).

---

## 6. Cách đọc file JSON đã copy

Mở `codex_session_example.json`, đó là 1 mảng. Mỗi phần tử = 1 event. Lọc nhanh:

```js
const data = require('./codex_session_example.json');

// Đếm pattern cấp cao
const byType = {};
for (const e of data) byType[e.type] = (byType[e.type]||0)+1;
console.log(byType);

// Chỉ lấy các event token_count (usage)
for (const e of data) {
  if (e.type === 'event_msg' && e.payload?.type === 'token_count') {
    const t = e.payload.info.total_token_usage;
    const inReal = t.input_tokens + t.cached_input_tokens + t.cache_write_input_tokens;
    console.log(e.ordinal, 'total_in='+inReal, 'cached='+t.cached_input_tokens,
                'cache_write='+t.cache_write_input_tokens, 'out='+t.output_tokens,
                'reasoning='+t.reasoning_output_tokens);
  }
}

// Lọc các message hội thoại
for (const e of data) {
  if (e.type === 'response_item' && e.payload?.type === 'message') {
    console.log(e.payload.role, ':', JSON.stringify(e.payload.content).slice(0,120));
  }
}
```

---

## 7. Kết luận nhanh cho bạn

- **Codex CÓ lưu usage và cache** vào file session — nằm ở event `event_msg` /
  `payload.type: "token_count"` (không nằm trong message như Claude).
- Thông tin gồm: input / cached_input / cache_write / output / reasoning_output (cả bản
  tích lũy và gia tăng), plus `model_context_window` và `rate_limits`.
- **Thiếu** so với Claude: không có usage từng request, không có phân rã TTL cache
  (5m/1h), không có cost/billing thực tế, không có `iterations[]`.
- Session mẫu này cho thấy Codex tận dụng cache rất tốt (`cached_input_tokens` chiếm
  ~74% input ở cuối), `cache_write = 0`, và chỉ dùng ~40% context window.
