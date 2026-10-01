# SESSION_SOURCE_DECODE.md

Tài liệu giải mã cấu trúc một session của Claude Code, dựa trên phân tích thực tế
file transcript:

```
~/.claude/projects/c--Users-hahah-OneDrive-Documents-code-ics-ics-crm/d8a11a97-2612-47a3-976a-3c58ab974077.jsonl
```

File đã được copy vào repo này ở dạng JSON dễ đọc:
**`session_ics_crm_d8a11a97.json`** (mỗi dòng JSONL gốc = 1 phần tử trong mảng JSON).

> Lưu ý: session này vẫn đang hoạt động (live), nên số dòng/count dưới đây là snapshot
> tại thời điểm phân tích và có thể thay đổi mỗi khi bạn chat thêm.

---

## 1. Bản chất của file

- File gốc là **JSONL** (JSON Lines): mỗi dòng là một JSON object độc lập, ngăn cách
  bởi ký tự xuống dòng. Dòng thứ N **không** lồng trong dòng thứ N-1.
- Mỗi dòng được gọi là một **event** (sự kiện). Trường phân biệt bắt buộc là **`type`**.
- Thứ tự các dòng là **thứ tự thời gian (chronological event stream)**: từ lúc khởi tạo
  session, enqueue prompt, nạp context, model respond, gọi tool, cho đến các control event.
- Các event được liên kết thành cây/lịch sử bằng 2 trường UUID:
  - `uuid` — id của event này.
  - `parentUuid` — id của event "cha" (event ngay trước đó trong chuỗi hội thoại).
  - `leafUuid` (trong `last-prompt`) — trỏ tới event cuối của turn trước.

---

## 2. Các trường chung (envelope) xuất hiện trên hầu hết event

Những trường sau có mặt trên hầu hết các event hội thoại (`user`, `assistant`,
`attachment`, `system`, ...):

| Trường | Ý nghĩa |
|--------|---------|
| `sessionId` | ID session (cố định suốt file). |
| `type` | Loại event (xem mục 3). |
| `uuid` | ID duy nhất của event này. |
| `parentUuid` | ID event cha (xây dựng chuỗi hội thoại). `null` = gốc. |
| `isSidechain` | `true` nếu event thuộc nhánh phụ (vd. sub-agent). |
| `timestamp` | Thời gian ISO-8601 event sinh ra. |
| `userType` | Thường `"external"`. |
| `entrypoint` | Giao diện gọi (vd. `"claude-desktop"`). |
| `cwd` | Thư mục làm việc hiện tại. |
| `version` | Phiên bản Claude Code. |
| `gitBranch` | Branch git đang active. |
| `slug` | Slug ngắn định danh session (vd. `"elegant-kindling-sutton"`). |

---

## 3. CÁC PATTERN (event `type`) — trả lời câu hỏi "có bao nhiêu pattern"

Toàn bộ session chỉ gồm **10 pattern `type`** (tức 10 loại event). Đây chính là những
"dòng có pattern giống nhau, đại diện cho một cái gì đó chung" bạn thấy. Mỗi pattern lặp
lại nhiều lần, và một số pattern còn có **sub-pattern** lồng bên trong.

Phân bố (snapshot):

| # | `type` | Số lần | Đại diện cho |
|---|--------|--------|--------------|
| 1 | `ai-title` | 98 | Tiêu đề AI sinh ra cho session (ghi nhiều lần để đồng bộ). |
| 2 | `queue-operation` | 22 | Thao tác queue khi bạn gửi/nhận prompt (enqueue/dequeue). |
| 3 | `user` | ~342 | Một lượt input từ bạn HOẶC tool_result trả về. |
| 4 | `attachment` | ~181 | Các "phụ lục" ngữ cảnh được nạp/gắn vào (XEM 11 sub-pattern ở mục 5). |
| 5 | `last-prompt` | 98 | Bản tóm tắt prompt cuối cùng của mỗi turn. |
| 6 | `assistant` | ~536 | Một lượt phản hồi của model (có `usage`). |
| 7 | `system` | 8 | Event hệ thống (hook, compact_boundary...). |
| 8 | `mode` | 50 | Trạng thái mode (vd. `"normal"`). |
| 9 | `custom-title` | 47 | Tiêu đề do người dùng/user đặt thủ công. |
| 10 | `atis-latch` | 35 | Control marker nội bộ (latch) — thường mang giá trị rỗng `""`. |

**Tổng cộng: 10 pattern `type` cấp cao.** Nếu tính cả sub-pattern lồng bên trong thì:

- `attachment` có **11 sub-pattern** (`attachment.type`): `deferred_tools_delta`,
  `agent_listing_delta`, `mcp_instructions_delta`, `skill_listing`, `task_reminder`,
  `edited_text_file`, `auto_mode`, `total_tokens_reminder`, `compact_file_reference`,
  `file`, `hook_non_blocking_error`.
- `system` có **3 subtype**: `stop_hook_summary`, `local_command`, `compact_boundary`.
- `queue-operation` có **2 operation**: `enqueue`, `dequeue`.

---

## 4. Chi tiết từng pattern

### 4.1 `ai-title` / `custom-title` / `last-prompt` (metadata tiêu đề)
```json
{ "type": "ai-title", "aiTitle": "Debug KPI data source input implementation issues", "sessionId": "..." }
{ "type": "custom-title", "customTitle": "[KPI - Data Source] ...", "sessionId": "..." }
{ "type": "last-prompt", "lastPrompt": "Bạn hãy đọc ...", "leafUuid": "19cac6f8-...", "sessionId": "..." }
```
- `ai-title`: tiêu đề do AI tự đặt, ghi lại nhiều lần (mỗi turn 1 lần) để resume/hiển thị.
- `custom-title`: tiêu đề bạn đặt thủ công.
- `last-prompt`: nội dung rút gọn của prompt cuối cùng trong turn → dùng để nối chuỗi.

### 4.2 `queue-operation`
```json
{ "type": "queue-operation", "operation": "enqueue", "timestamp": "...", "content": "<prompt gốc>" }
{ "type": "queue-operation", "operation": "dequeue", "timestamp": "..." }
```
Ghi lại lúc prompt được đưa vào queue (`enqueue`) và lúc được lấy ra xử lý (`dequeue`).

### 4.3 `user`
```json
{
  "type": "user",
  "promptId": "c8466eef-...",
  "message": { "role": "user", "content": [ ... ] },
  "uuid": "...", "parentUuid": "...",
  "permissionMode": "bypassPermissions", "origin": {"kind":"human"},
  "promptSource": "sdk", "userType": "external", "entrypoint": "claude-desktop", ...
}
```
Hai hình thức:
- **Prompt thật của bạn**: `message.content` là mảng text / image.
- **Tool result**: `message.content` chứa `{ "type": "tool_result", "tool_use_id": "...", "content": "..." }`
  và đi kèm `toolUseResult` + `sourceToolAssistantUUID` (trỏ ngược assistant đã gọi tool).
- **QUAN TRỌNG**: `user` event **KHÔNG** chứa `usage`. Token chỉ báo ở `assistant`.

### 4.4 `assistant`  ← chứa `usage`
```json
{
  "type": "assistant",
  "parentUuid": "19cac6f8-...",
  "message": {
    "model": "claude-opus-5",
    "id": "msg_011CdtrWyNgbnaWsrKUdfquE",
    "role": "assistant",
    "content": [ { "type": "text", "text": "..." }, { "type": "tool_use", ... } ],
    "stop_reason": "tool_use",
    "usage": { ... },
    "diagnostics": null
  },
  "requestId": "req_011...", "effort": "high", "uuid": "...", "timestamp": "..."
}
```
- `message.content` là mảng các block:
  - `{ "type": "text", "text": "..." }` — lời thoại.
  - `{ "type": "tool_use", "id": "toolu_...", "name": "Bash", "input": {...} }` — yêu cầu gọi tool.
- `stop_reason`: `"tool_use"` (đang gọi tool), `"end_turn"` (kết thúc), `"max_tokens"`, ...
- `usage` — xem mục 6.

### 4.5 `attachment`  (11 sub-pattern — xem mục 5)

### 4.6 `system`
```json
{ "type": "system", "subtype": "stop_hook_summary", "hookCount": 2, "hookInfos": [...], ... }
{ "type": "system", "subtype": "compact_boundary", "content": "Conversation compacted",
  "compactMetadata": { "trigger":"manual", "preTokens":497084, "postTokens":9708, ... } }
```
- `stop_hook_summary`: tóm tắt kết quả chạy Stop hook.
- `local_command`: lệnh local được thực thi.
- `compact_boundary`: **dấu mốc nén lịch sử** — chứa `compactMetadata` (số token trước/sau,
  segment được giữ lại). Khi gặp dòng này nghĩa là context đã bị compact.

### 4.7 `mode`
```json
{ "type": "mode", "mode": "normal", "sessionId": "..." }
```
Báo trạng thái chế độ (trong session này luôn `"normal"`).

### 4.8 `atis-latch`
```json
{ "type": "atis-latch", "atis": "", "sessionId": "..." }
```
Control marker nội bộ (latch) của hệ thống — giá trị thường rỗng. Lặp lại 35 lần như một
"heartbeat"/anchor đánh dấu các điểm đồng bộ nội bộ.

---

## 5. Pattern lồng trong `attachment` (11 sub-pattern)

`attachment` mang một object `attachment` bên trong, với `attachment.type` phân biệt:

| `attachment.type` | Ý nghĩa |
|-------------------|---------|
| `deferred_tools_delta` | Danh sách tool bị deferred, được nạp dần (addedNames/addedLines). |
| `agent_listing_delta` | Danh sách sub-agent có sẵn. |
| `mcp_instructions_delta` | Hướng dẫn của các MCP server. |
| `skill_listing` | Danh sách skill được nạp vào context. |
| `task_reminder` | Nhắc nhở danh sách task đang active (`itemCount`). |
| `edited_text_file` | Snippet file vừa bị edit (filename + snippet). |
| `auto_mode` | Marker chuyển chế độ auto. |
| `total_tokens_reminder` | Nhắc nhở số token còn lại, dạng `<total_tokens>15000000 tokens left</total_tokens>`. |
| `compact_file_reference` | Tham chiếu file được giữ lại sau compact. |
| `file` | Một file được gắn đính kèm. |
| `hook_non_blocking_error` | Lỗi non-blocking từ hook. |

---

## 6. Giải mã `usage` (bên trong `assistant.message.usage`)

Đây là phần quan trọng nhất để biết prompt tốn bao nhiêu token.

```json
"usage": {
  "input_tokens": 2,
  "cache_creation_input_tokens": 16789,
  "cache_read_input_tokens": 34428,
  "output_tokens": 303,
  "server_tool_use": { "web_search_requests": 0, "web_fetch_requests": 0 },
  "service_tier": "standard",
  "cache_creation": { "ephemeral_1h_input_tokens": 16789, "ephemeral_5m_input_tokens": 0 },
  "inference_geo": "not_available",
  "iterations": [ { "input_tokens": 2, "output_tokens": 303, "cache_read_input_tokens": 34428,
                   "cache_creation_input_tokens": 16789, "cache_creation": {...}, "type": "message" } ],
  "speed": "standard",
  "output_tokens_details": { ... }
}
```

### 6.1 Các trường cấp 1

| Trường | Ý nghĩa |
|--------|---------|
| `input_tokens` | Số token input **mới, không nằm trong cache** gửi trong request này. Thường rất nhỏ (2) vì context chủ yếu đến từ cache. |
| `cache_creation_input_tokens` | Số token **viết mới vào prompt cache** ở request này (tốn chi phí cao hơn). |
| `cache_read_input_tokens` | Số token **đọc từ prompt cache** (rẻ hơn nhiều). |
| `output_tokens` | Số token model sinh ra (output). |
| `server_tool_use` | Số request tool phía server (web_search / web_fetch). |
| `service_tier` | Tầng dịch vụ (`"standard"`, ...). |
| `cache_creation` | Chi tiết cache creation theo thời hạn (xem 6.2). |
| `inference_geo` | Vị trí suy luận (`"not_available"` khi không xác định). |
| `iterations` | Mảng các bước lặp (vd. extended thinking) — mỗi bước có usage riêng (xem 6.3). |
| `speed` | Tốc độ (`"standard"` / `"fast"`). |
| `output_tokens_details` | Chi tiết output (vd. chia theo reasoning). |

### 6.2 `cache_creation` (phân rã cache write theo TTL)

| Trường | Ý nghĩa |
|--------|---------|
| `ephemeral_5m_input_tokens` | Token cache có thời hạn lưu **5 phút**. |
| `ephemeral_1h_input_tokens` | Token cache có thời hạn lưu **1 giờ** (phổ biến nhất). |

> Tổng `cache_creation_input_tokens` = `ephemeral_5m` + `ephemeral_1h`.

### 6.3 `iterations[]`

Khi model chạy nhiều bước (vd. thinking/agentic loop), mỗi bước được ghi 1 entry trong
`messages.usage.iterations`, mỗi entry lại có `input_tokens`, `output_tokens`,
`cache_read_input_tokens`, `cache_creation_input_tokens` riêng. Trong session này mỗi turn
thường chỉ có 1 iteration (`"type": "message"`).

### 6.4 CÔNG THỨC TÍNH TOKEN THỰC TẾ

```
input_thuc_te_cua_prompt = input_tokens
                         + cache_read_input_tokens
                         + cache_creation_input_tokens

tong_chi_phi_token = input_thuc_te + output_tokens
```

Vì Claude Code dùng prompt caching mạnh, `input_tokens` đơn lẻ gần như vô nghĩa — bạn
phải cộng `cache_read` + `cache_creation` mới ra đúng "độ nặng" của prompt.

---

## 7. Một vài quan sát thú vị từ session này

- **Dòng 1–11 chưa có `usage`**: vì trước khi model respond, file ghi toàn metadata
  (title, queue, user prompt, nạp tool/agent/skill listing). `usage` chỉ xuất hiện từ
  event `assistant` đầu tiên (dòng 12 trong snapshot cũ).
- **Nhiều dòng lặp cùng 1 bộ `usage`**: do assistant message được stream thành nhiều
  partial, mỗi partial ghi lại cùng 1 `usage`. Khi đọc, hãy **dedupe** theo bộ 4 số.
- **Cache creation vọt lên hàng trăm ngàn** (vd. `364013`) tại các event gần
  `compact_boundary` → đó là lúc context bị nén và viết lại cache lớn.
- **`total_tokens_reminder`** báo còn `~15,000,000 tokens` — quota context của session.

---

## 8. Cách đọc file JSON đã copy

Mở `session_ics_crm_d8a11a97.json`, đó là 1 mảng. Mỗi phần tử = 1 event. Để lọc nhanh:

```js
const data = require('./session_ics_crm_d8a11a97.json');
// Đếm pattern
const byType = {};
for (const e of data) byType[e.type] = (byType[e.type]||0)+1;
// Chỉ lấy các turn assistant có usage, bỏ trùng
const seen = new Set();
for (const e of data) {
  const u = e.message?.usage;
  if (!u) continue;
  const k = `${u.input_tokens}|${u.output_tokens}|${u.cache_read_input_tokens}|${u.cache_creation_input_tokens}`;
  if (seen.has(k)) continue; seen.add(k);
  const totalIn = u.input_tokens + u.cache_read_input_tokens + u.cache_creation_input_tokens;
  console.log(e.timestamp, 'in='+totalIn, 'out='+u.output_tokens);
}
```

---

## 9. PHÂN TÍCH THỰC TẾ: Cold-start (hết cache) vs Warm cache

Đây là một case study tuyệt vời nằm ngay trong session này. Bạn có một prompt:

> *"Trong các phần logic liên quan tới data source, thì mới đây đã có những update mới
> so với lần trước bạn làm. Bạn giúp tôi check xem đã thay đổi những gì nhé"*

Prompt này nằm ở event index **735** (`uuid e4b65710-...`), timestamp `2026-08-21T06:33:25Z`.
Event `assistant` ngay trước nó (index 731) có timestamp `2026-08-10T14:24:48Z` → **nghỉ ~11 ngày
(≈ 2 tuần)** rồi mới quay lại. Với prompt caching (TTL tối đa 1h), cache chắc chắn đã hết hạn.

### 9.1 Số liệu usage

| Event | Thời điểm | `input_tokens` | `cache_read` | `cache_creation` | `output` | TOTAL_IN |
|-------|-----------|---------------|--------------|------------------|----------|----------|
| **735 user** (prompt của bạn) | 06:33:25 | — | — | — | — | — |
| **744 assistant** (phản hồi đầu sau gap) | 06:33:39 | 2 | **38,723** | **393,982** | 540 | **432,707** |
| 753 assistant | 06:33:51 | 2 | 432,705 | 1,163 | 856 | 433,870 |
| 757 assistant | 06:34:06 | 2 | 433,868 | 1,226 | 851 | 435,096 |
| 761 assistant | 06:34:16 | 2 | 435,094 | 1,795 | 871 | 436,891 |
| 770 assistant | 06:34:29 | 2 | 436,889 | 1,152 | 449 | 438,043 |
| 782 assistant | 06:34:50 | 2 | 438,801 | 6,216 | 181 | 445,019 |

(Trong `usage.cache_creation` của event 744, toàn bộ 393,982 là `ephemeral_1h_input_tokens`
— tức được ghi vào cache 1 giờ.)

### 9.2 Đọc kết quả — chuyện gì xảy ra khi cache hết hạn

- **Request đầu tiên sau gap (744) = COLD START:**
  - Phải **viết mới 393,982 token vào cache** (`cache_creation` khổng lồ).
  - Chỉ **38,723 token được cache hit** (`cache_read` nhỏ) — đây là prefix ổn định
    (system prompt + tool/agent/skill listing) có cache key không đổi qua các session,
    nên dù nghỉ 2 tuần Anthropic vẫn phục vụ như cache hit.
  - → Gần như TOÀN BỘ ~432k token context bị nạp lại và tính phí ghi cache.

- **Các request tiếp theo (753 trở đi) = WARM:**
  - `cache_read` vọt lên **~432k** (đọc lại từ cache, rẻ).
  - `cache_creation` tụt只剩 **1k–6k** (chỉ ghi thêm delta: output trước, tool result mới, prompt mới).
  - → Cực rẻ, vì context đã nằm trong cache.

### 9.3 Chênh lệch chi phí (tính theo đơn vị giá input cơ bản `p`)

Với mô hình giá prompt-caching chuẩn:
- Ghi cache (creation, 1h) ≈ **1.25×** input cơ bản.
- Đọc cache (read) ≈ **0.1×** input cơ bản.
- Input mới (uncached) = **1×**.

| | Công thức | Đơn vị `p` |
|---|-----------|------------|
| **COLD (744)** | 2×1 + 38,723×0.1 + 393,982×1.25 | **≈ 496,352** |
| **WARM (753)** | 2×1 + 432,705×0.1 + 1,163×1.25 | **≈ 44,726** |
| Warm lý tưởng (read hết, create=0) | 2×1 + 432,705×0.1 | ≈ 43,273 |

→ **Request COLD đầu tiên tốn ≈ 11× so với mỗi request WARM** về phần input.
(Nhân với đơn giá thực của model `claude-opus-5` của bạn để ra số tiền thật; tỷ lệ ~11× là cố định bất kể model.)

### 9.4 Kết luận / bài học

1. **Cache write cost chỉ trả 1 lần.** Lần đầu quay lại sau khi cache hết hạn, bạn "trả phí"
   ghi lại toàn bộ context (~394k token × 1.25×). Các turn sau trong cùng phiên đó đều rẻ.
2. **Nếu bạn chat liên tục (trong 1h), mọi request đều WARM** → chỉ tốn ~0.1× cho khối context lớn.
3. **Nghỉ > 1h = mất cache = lần request kế tiếp bị phạt ~11×** so với bình thường. Đây là
   trade-off của prompt caching: rẻ khi duy trì phiên, đắt khi "tái nhập" sau gián đoạn.
4. Một phần nhỏ (~39k) luôn được cache hit nhờ prefix ổn định (system/tool schema) — nên creation
   thực tế là ~394k chứ không phải full ~432k.

> Cách tự kiểm tra trên session của bạn: tìm event `user` chứa prompt, lấy `uuid`, rồi duyệt
> các `assistant` ngay sau đó đọc `message.usage`. Event có `cache_creation` vọt cao + `cache_read`
> thấp chính là điểm "cold start".

---

## 10. THỐNG KÊ TOÀN SESSION: mấy lần bị COLD & cache sống được bao lâu

Quét toàn bộ 275 turn `assistant` (đã gộp trùng stream) của session này, định nghĩa
**COLD** = `cache_creation / total_in > 0.3` (tức > 30% input phải ghi mới thay vì đọc cache).

### 10.1 Các event COLD

| # | idx | Thời điểm | `cache_read` | `cache_creation` | TOTAL_IN | coldRatio | Idle trước đó (từ turn liền trước) |
|---|-----|-----------|--------------|------------------|----------|-----------|------------------------------------|
| 1 | 11  | 2026-08-10 09:46:06 | 34,428 | 16,789 | 51,219 | 0.328 | — (bắt đầu session, luôn COLD) |
| 2 | 658 | 2026-08-10 14:19:44 | 34,428 | **364,013** | 398,443 | 0.914 | **~3.27h** (từ idx 650 @ 11:03) |
| 3 | 744 | 2026-08-21 06:33:39 | 38,723 | **393,982** | 432,707 | 0.911 | **~256h (≈10.7 ngày)** (từ idx 731 @ 08-10 14:24) |
| 4 | 961 | 2026-08-21 08:03:02 | 38,834 | 26,002 | 64,838 | 0.401 | **~1.02h** (từ idx 924 @ 07:01) |

Ngoài ra, có 1 điểm "nửa cold" đáng chú ý: **idx 204** (10:28:49) `cache_creation = 23,906`
(coldRatio 0.112) — không vượt ngưỡng 0.3 nhưng cao bất thường, do cache write breakpoint
dịch chuyển (chunk lớn được ghi lại). Không tính là COLD đầy đủ.

### 10.2 Kết luận: cache sống được BAO LÂU?

Từ 4 event COLD, mọi lần COLD đều xảy ra sau một khoảng **nghỉ > 1 giờ**:

- Nghỉ 3.27h → COLD (idx 658)
- Nghỉ 10.7 ngày → COLD (idx 744)
- Nghỉ 1.02h → COLD (idx 961)  ← **sát ngưỡng nhất**
- Bắt đầu session → luôn COLD (idx 11)

→ **Cache (tầng `ephemeral_1h`) có TTL hiệu dụng ≈ 1 giờ.** Bất kỳ gap nào giữa 2 request
vượt ~1h đều khiến toàn bộ context hội thoại (~364k–394k token) phải ghi lại vào cache ở
request tiếp theo.

Thêm bằng chứng: trong `usage.cache_creation`, trường `ephemeral_5m_input_tokens` **luôn = 0**
suốt session (kiểm tra mọi turn), nghĩa là Claude Code chỉ dùng tầng cache 1 giờ, không dùng
tầng 5 phút. Vậy ngưỡng thực tế bạn phải nhớ là **1 giờ**.

### 10.3 Prefix ổn định — "miễn nhiễm" với hết hạn cache

Ở mọi COLD event, `cache_read` vẫn = **~34k–39k** (không bao giờ về 0, kể cả sau 10.7 ngày):

| COLD | cache_read |
|------|-----------|
| idx 11 | 34,428 |
| idx 658 | 34,428 |
| idx 744 | 38,723 |
| idx 961 | 38,834 |

Đây là **prefix cố định** (system prompt + tool/agent/skill listing) có cache key không đổi
qua các session, nên Anthropic vẫn phục vụ nó như cache hit dù bạn nghỉ rất lâu. Hệ quả:
khi COLD, phần phải ghi mới (`cache_creation`) là context hội thoại (~364k–394k), KHÔNG phải
toàn bộ context. Prefix ~35k này luôn "free".

### 10.4 Tổng kết chi phí cache của session này

- **Số lần COLD:** 4 (1 lần mở session + 3 lần nghỉ > 1h).
- **Phần context luôn warm:** trong các phiên liên tục (< 1h), `cache_read` tăng dần từ 34k →
  ~492k (idx 924), mỗi request chỉ tốn `cache_creation` 0.1k–6k (rẻ).
- **Phí tổn COLD:** mỗi lần COLD ghi lại ~26k–394k token (×1.25×). Lần nặng nhất là idx 744
  (393,982 token) do nghỉ 10.7 ngày.
- **Compaction:** 1 lần tại `2026-08-21T07:42:47` (manual), ép context từ 497,084 → 9,708 token
  (`cumDroppedTokens = 487,376`). Sau compact, context nhỏ nên các COLD tiếp theo (idx 961)
  chỉ tốn 26k thay vì 394k.

> **Lời khuyên thực tế:** giữ các request trong cùng 1 phiên cách nhau < 1 giờ để tận dụng
> cache 0.1×. Nếu bắt buộc nghỉ > 1h, hãy chấp nhận request "tái nhập" đầu tiên sẽ đắt
> (~11×) — và càng nghỉ lâu, context càng dài, cú COLD càng đắt (như idx 744).

---

## 11. PHÂN TÍCH COMPACTION (nén lịch sử hội thoại)

Session này có đúng **1 lần compaction** tại `2026-08-21T07:42:47Z` (trigger: **manual** —
bạn gõ lệnh `/compact`). Dưới đây là pattern đặc biệt và usage/cache quanh nó.

### 11.1 Pattern đặc biệt của một lần compact (3 event đi kèm)

Một compaction KHÔNG phải là 1 dòng duy nhất, mà là một **cụm 3 event** mang các marker
riêng biệt không bao giờ xuất hiện ở event thường:

**(a) Event `user` chứa lệnh `/compact`** (idx 942)
```json
{ "type": "user", "message": { "content": "<command-name>/compact</command-name> ..." } }
```
→ đánh dấu người dùng chủ động gọi nén. (Có thể là `trigger: "auto"` nếu context tự vỡ,
lúc đó không có event lệnh này mà `compactMetadata.trigger = "auto"`.)

**(b) Event `system` `subtype: "compact_boundary"`** (idx 939) — ★ marker quan trọng nhất
```json
{
  "type": "system",
  "subtype": "compact_boundary",
  "content": "Conversation compacted",
  "parentUuid": null,                 // << khác biệt: không nối vào cây hội thoại bình thường
  "logicalParentUuid": "f98e03ca-...", // << liên kết logic đến message cuối TRƯỚC khi nén
  "compactMetadata": {
    "trigger": "manual",
    "preTokens": 497084,
    "postTokens": 9708,
    "durationMs": 190101,             // nén mất ~190 giây (3.17 phút)
    "preCompactDiscoveredTools": ["TaskCreate", "TaskUpdate"],
    "preservedSegment": { "headUuid": "...", "anchorUuid": "ec7296b2-...", "tailUuid": "..." },
    "preservedMessages": { "uuids": [ "...", "...", "..." ] },
    "cumulativeDroppedTokens": 487376
  }
}
```
**Điểm đặc biệt nhận diện compact_boundary:**
- `type:"system"` + `subtype:"compact_boundary"` + `content:"Conversation compacted"`.
- `parentUuid: null` (event đứng độc lập, không có cha trực tiếp) — thay vì nối chuỗi bằng
  `parentUuid`, nó dùng `logicalParentUuid` để chỉ về message cuối cùng trước khi nén.
- Chỉ event này mới chứa `compactMetadata` (với `preTokens`/`postTokens`/`durationMs`/
  `cumulativeDroppedTokens`).

**(c) Event `user` chứa bản tóm tắt (summary)** (idx 940) — ★ UNIQUE nhất
```json
{
  "type": "user",
  "message": { "content": "This session is being continued from a previous conversation that ran out of context. The summary below covers ..." },
  "isCompactSummary": true,            // << CHỈ có ở đây
  "isVisibleInTranscriptOnly": true,   // << CHỈ có ở đây
  "uuid": "ec7296b2-58c5-462e-8532-a48f6245dbd5"
}
```
→ `uuid` của event này **trùng khớp với `anchorUuid`** trong `compactMetadata.preservedSegment`.
Nghĩa là: bản tóm tắt này chính là "mỏ neo" được giữ lại đầu phiên hội thoại sau nén. Hai flag
`isCompactSummary` + `isVisibleInTranscriptOnly` là chữ ký duy nhất để bạn lọc ra event tóm tắt.

### 11.2 Usage / cache TRƯỚC – TRONG – SAU compaction

| Thời điểm | idx | `cache_read` | `cache_creation` | TOTAL_IN | Ghi chú |
|-----------|-----|--------------|------------------|----------|---------|
| Trước nén | 924 | 492,138 | 2,633 | **494,773** | context cực lớn (~492k), đang WARM |
| **Compaction** | 939 | — | — | — | `preTokens=497,084` → `postTokens=9,708` (drop **487,376** ≈ 98%) |
| Sau nén (1h+ gap) | 961 | 38,834 | 26,002 | 64,838 | COLD do nghỉ >1h, nhưng context đã nhỏ nên creation chỉ 26k |

**Đọc kết quả:**

1. **Compaction không có `usage` riêng** — nó là `system` event, không phải `assistant`, nên
   không mang `message.usage`. Chi phí của nó nằm ở `compactMetadata.durationMs` (190s) và được
   "phản ánh" vào request `assistant` ngay sau đó.
2. **Trước nén:** context đạt đỉnh ~497k token (WARM, `cache_read` 492k). Đây là lúc gần kề giới
   hạn → hợp lý để nén.
3. **Hiệu quả nén:** từ 497,084 → 9,708 token (**giảm 98%**). `cumulativeDroppedTokens=487,376`.
4. **Sau nén:** vì có gap ~1h (07:42 → 08:03) nên request đầu (idx 961) là COLD, NHƯNG context
   lúc này chỉ còn ~9.7k + prefix ổn định, nên `cache_creation` chỉ **26,002** — rẻ hơn rất nhiều
   so với nếu context 497k bị COLD (sẽ ~490k creation như idx 744).
5. **Bài học:** compaction không chỉ giải phóng context mà còn **hạ thấp chi phí COLD** về sau,
   vì khối cần ghi cache nhỏ đi. Nếu bạn tiếp tục ngay sau nén (không nghỉ >1h), request đầu sẽ
   cực rẻ (context nhỏ + WARM).

### 11.3 Cách lọc ra các compact trong bất kỳ session nào

```js
const data = require('./session_ics_crm_d8a11a97.json');
// (1) boundary marker
const boundaries = data.filter(e => e.type === "system" && e.subtype === "compact_boundary");
// (2) bản tóm tắt
const summaries   = data.filter(e => e.isCompactSummary && e.isVisibleInTranscriptOnly);
// (3) lệnh gọi (nếu manual)
const commands    = data.filter(e => JSON.stringify(e.message).includes("/compact"));
for (const b of boundaries) {
  const m = b.compactMetadata;
  console.log(b.timestamp, "| trigger=" + m.trigger, "| pre=" + m.preTokens,
    "post=" + m.postTokens, "dropped=" + m.cumulativeDroppedTokens,
    "took=" + (m.durationMs/1000).toFixed(1) + "s");
}

---

## 12. Hiển thị usage realtime (overlay / statusline)

Mục tiêu: hiện token usage (input/output/cache read-write, % context, rate limit) để
theo dõi và kiểm soát. Có 3 hướng tuỳ loại app.

### 12.1 Cách 1 — statusLine có sẵn của Claude Code (KHUYÊN DÙNG)

Claude Code có tính năng `statusLine`: thanh ở đáy terminal, chạy 1 command bạn đặt,
nhận JSON session qua **stdin**, in ra 1 dòng tuỳ ý. Schema JSON chính thức (trích
từ source `src_entrypoints_cli.prettified.js:316830`):

```jsonc
{
  "session_id": "string",
  "model": { "id": "string", "display_name": "string" },
  "context_window": {
    "total_input_tokens": number,
    "total_output_tokens": number,
    "context_window_size": number,
    "current_usage": {                      // null nếu chưa có message
      "input_tokens": number,
      "output_tokens": number,
      "cache_creation_input_tokens": number,
      "cache_read_input_tokens": number
    },
    "used_percentage": number | null,        // 0-100
    "remaining_percentage": number | null
  },
  "rate_limits": {                           // chỉ có sau API response đầu
    "five_hour":  { "used_percentage": number, "resets_at": number },
    "seven_day":  { "used_percentage": number, "resets_at": number }
  }
}
```
> LƯU Ý: payload statusLine **KHÔNG** chứa `cost.total_cost_usd` (cost nằm ở telemetry
> riêng `Opn()` tại dòng 587664). Nên đừng parse trường cost ở đây.

Cài đặt (đã thực hiện cho máy này):
- Script: `C:\Users\hahah\.claude\usage-statusline.mjs` (Node, đọc stdin → in 1 dòng).
- `~/.claude/settings.json` thêm:
```json
"statusLine": { "type": "command", "command": "node \"C:/Users/hahah/.claude/usage-statusline.mjs\"" }
```
Output mẫu: `[claude-opus-5] ctx 23% (77% left) | in 12.0k out 3.0k | read 40.0k / write 5.0k | 5h:12% 7d:34%`

### 12.2 Cách 2 — overlay riêng đọc file JSONL (cho cả Desktop lẫn Code)

App desktop (Claude Desktop là Electron) ghi session JSONL vào `~/.claude/projects/<enc>/<uuid>.jsonl`
giống hệt Claude Code. Có thể build 1 cửa sổ **always-on-top, transparent, click-through**
(Tauri / Electron / Python) mà **tail** file JSONL → parse `message.usage` (đúng cấu trúc
mục 6) → render panel nổi. Ưu điểm: hoạt động cho mọi app Claude, KHÔNG động code gốc,
không mất chữ ký số, không break khi update. Tái dùng code parse usage ở mục 9.

**Đã implement:** `claude_usage_overlay.py` (Python thuần stdlib: `tkinter` + polling thư mục
`~/.claude/projects` mỗi 1s, tự chọn session mới nhất theo mtime, tail dòng `assistant` cuối có
`usage`). Chạy: `python claude_usage_overlay.py`. Kéo bằng chuột trái, chuột phải để thoát.
Là process độc lập — KHÔNG tự mở theo Claude Desktop, nhưng tự cập nhật sau mỗi câu trả lời
nhờ đọc file JSONL.

### 12.3 Cách 3 — tiêm JS vào DOM app Electron (Claude Desktop)

Vì Claude Desktop là Chromium renderer → có DOM thật. Về lý thuyết tiêm JS vào preload
để nhét panel usage vào footer (dự án cộng đồng CCDEX làm y hệt). THỰC TẾ: phải tắt
fuse `EnableEmbeddedAsarIntegrityValidation` + đập lại code-signature → **mất chữ ký,
dễ crash sau update**. Chỉ làm nếu bắt buộc cần panel nằm *trong* UI app.

### 12.4 Chốt

- Muốn nhanh + chuẩn → **Cách 1** (statusLine, xong trong 5 phút).
- Muốn widget nổi đè lên màn hình cho mọi app → **Cách 2** (tail JSONL).
- Tránh **Cách 3** trừ khi cực kỳ cần nằm trong DOM app.
```
