# Khảo sát lượng token của plan qua % usage

Tài liệu này dùng để giao cho một session Claude Code mới thực hiện lần đo tiếp theo. Gồm: ý tưởng, kết quả lần 1, bài học rút ra, và kế hoạch lần 2.

---

## 1. Ý tưởng

Plan (Team) chỉ cho thấy **% usage** (hạn mức 5 giờ, hạn mức tuần), không cho biết số token. Nhưng:

- App có tool `mcp__ccd_session_mgmt__get_usage`, trả về `percentUsed` (số nguyên) của từng hạn mức, kèm `resetsAt`.
- Mọi lời gọi API đều được ghi vào `.jsonl`, có `timestamp` và `message.usage` chia theo 4 hạng mục:
  `input_tokens`, `cache_creation_input_tokens` (tách sẵn `ephemeral_5m` / `ephemeral_1h`), `cache_read_input_tokens`, `output_tokens`.

Cách làm:

1. **Bắt các lần nhảy %.** Token tiêu giữa hai lần nhảy liên tiếp (k → k+1 rồi k+1 → k+2) **đúng bằng 1%**, không bị sai số làm tròn. Không dùng khoảng 0 → 1%, vì chưa biết % được làm tròn xuống hay làm tròn thông thường.
2. **Mỗi khoảng đo cho một phương trình:**
   `b·CW + c·CR + d·OUT = Δ%` (input không cache gần như bằng 0 nên bỏ qua).
3. **Đo nhiều khoảng với hỗn hợp token khác hẳn nhau**, rồi hồi quy để ra b, c, d.
4. **Kết quả nhắm tới:** tỷ lệ b : c : d (so với tỷ lệ giá API), hạn mức 5 giờ quy ra token, 1% ≈ bao nhiêu token với kiểu làm việc thực tế. Nếu % tuần nhảy ≥ 2 lần trong lúc đo thì ước lượng thêm tỷ lệ giữa hạn mức tuần và hạn mức 5 giờ.

### Nơi lưu dữ liệu
```
~/.claude/projects/<project>/<sessionId>.jsonl                      ← session chính
~/.claude/projects/<project>/<sessionId>/subagents/agent-<id>.jsonl ← từng subagent
~/.claude/projects/<project>/<sessionId>/subagents/agent-<id>.meta.json
```
Entry của subagent có `isSidechain: true` và `agentId`. Model ghi trong `message.model`. Entry `<synthetic>` là lỗi, không có usage thật.

### Quy tắc cộng token (bắt buộc)
- **Bỏ trùng theo `message.id`.** Một message bị tách thành nhiều entry (mỗi content block một entry).
- **Lấy `usage` có `output_tokens` lớn nhất** trong các entry của cùng `message.id`. Entry đầu được ghi lúc message còn đang stream, nên `output_tokens` chỉ khoảng 2.
- **Timestamp của message = entry cuối** (lúc message hoàn tất).
- Gom **cả session chính lẫn mọi file trong `subagents/`**, lọc theo khoảng thời gian.
- Cộng **riêng từng loại token**, không gộp lại.

---

## 2. Kết quả lần 1 (01/10/2026, 04:10–04:30 UTC)

- Model: `claude-opus-5-5` cho cả session chính và subagent. Subagent ghi cache 5 phút, session chính ghi cache 1 giờ.
- Ngân sách 12%, **thực tế tiêu 38%** hạn mức 5 giờ. Hạn mức tuần tăng từ 4 lên 10%.

### Diễn biến
| Giờ (UTC) | 5 giờ | Tuần | Tải đang chạy |
|---|---|---|---|
| 04:11 | 0% | 4% | Bắt đầu D (2 subagent viết code) |
| 04:12:41 | 3% | 4% | D. Dừng bớt 1 subagent |
| 04:14:00 | 5% | 5% | Dừng D, bắt đầu A (viết chương truyện) |
| 04:16:44 | 7% | 5% | A |
| 04:20:04 | 8% | 5% | A |
| 04:23:17 | 9% | 5% | A |
| 04:26:09 | 10% | 5% | A |
| 04:28:04 | 10% | 5% | Dừng A, bắt đầu C (đọc dữ liệu để tạo cache write) |
| 04:28:32 | 10% | 5% | C. 2/3 subagent bị bộ lọc an toàn chặn |
| 04:29:42 | **38%** | **10%** | C. Thêm 3 subagent bị chặn. **Dừng toàn bộ** |

### Các khoảng 1% sạch (giả định trọng số theo tỷ lệ giá API: cache read 0,1 · cache write 5 phút 1,25 · output 5)
| Khoảng | Cache write / cache read / output | Token input quy đổi mỗi 1% |
|---|---|---|
| 7→8 đến 9→10 (2%) | 13K / 2,36M / 31K | khoảng 195–205K |
| 6→7 đến 8→9 (2%) | 17K / 2,89M / 35K | khoảng 240–250K |
| Từng khoảng 1% riêng lẻ | | 156–233K |
| Từ reset đến 6→7 | 152K / 4,58M / 42K | khoảng 115–130K (**bất thường, không dùng**) |

**Kết luận thô:** 1% hạn mức 5 giờ ≈ **200K token input quy đổi (±25%)**, tức cả hạn mức 5 giờ khoảng **20M**. Con số này dựa trên giả định trọng số giống giá API, **chưa phải số đo ra**.

**Chưa tính được:** trọng số b : c : d (hỗn hợp token của các khoảng gần như giống nhau), và hạn mức tuần (do cú nhảy bất thường).

---

## 3. Rút kinh nghiệm

| # | Vấn đề lần 1 | Cách xử lý lần 2 |
|---|---|---|
| 1 | **Chi phí theo dõi quá lớn.** Context của session theo dõi khoảng 150–200K, mỗi lần đọc usage tốn bấy nhiêu token cache read, chiếm 55–60% mỗi khoảng đo. Hỗn hợp token của tải D và A vì thế gần như giống nhau (cache read khoảng 57%, output khoảng 38%), nên không giải được ba ẩn. | Theo dõi từ **session mới, chỉ đọc file này** (context khoảng 30–40K). Mỗi lần đọc usage chỉ dùng **một message** gồm `get_usage`, cộng token và `sleep` chạy nền. Trả lời giữa các lần đọc càng ngắn càng tốt. |
| 2 | **1% trôi qua rất nhanh** (30 giây đến 3 phút). Khoảng 1–2% có sai số lớn so với thời gian giữa hai lần đọc. | Đo các khoảng **3%**. Mỗi lần **chỉ chạy một subagent**. |
| 3 | **Tải A gọi 12 lệnh Write song song trong một message.** Message kéo dài hơn 13 phút, chưa xong thì đã bị dừng, nên `usage` cuối cùng **không bao giờ được ghi**. Output phải ước lượng bằng số ký tự / 4. | **Mỗi message đúng một lệnh Write, gọi tuần tự** (chờ kết quả rồi mới viết tiếp). Mỗi chương ngắn, khoảng 3.000 từ (khoảng 4K token). Không cho subagent viết thẳng ra câu trả lời, vì câu trả lời cuối được trả nguyên về session theo dõi và làm phình context. |
| 4 | **Message bị dừng giữa chừng thì mất `usage`.** | **Chỉ dừng subagent ở ranh giới giữa hai message:** chạy nền một vòng lặp chờ số dòng của file `.jsonl` tăng lên, rồi mới gọi `TaskStop`. Kiểm tra mỗi message đều có `stop_reason` khác null. |
| 5 | **Đọc file transcript bị bộ lọc an toàn chặn** (`[reasoning_extraction]`), 5 trên 9 subagent. Nhiều khả năng đây là nguyên nhân cú nhảy +28%: các lời gọi bị chặn không có `usage` trong `.jsonl` nhưng vẫn bị tính usage. | **Chỉ dùng nội dung trung tính:** văn bản do tải A tự viết, code, tài liệu kỹ thuật. **Tuyệt đối không cho đọc transcript hay session JSON.** |
| 6 | **Khởi động 4 subagent cùng lúc mà không kiểm tra từng bước.** | **Chốt chặn:** dừng tất cả ngay khi (a) gặp lỗi API hoặc lỗi bộ lọc an toàn, (b) Δ% lớn hơn 2 lần mức dự kiến theo số token đã cộng, hoặc (c) còn cách ngân sách 2%. |
| 7 | **% hiển thị trễ 30–60 giây và tăng theo bậc** (ví dụ 3 → 5 trong 30 giây). | Đo **giữa hai lần nhảy** để độ trễ tự triệt tiêu. Khi phân tích, thử lại với độ trễ 0, 30 và 60 giây. |
| 8 | Khoảng đầu từ reset bị lệch gần gấp đôi, do token không được ghi lại (subagent bị dừng khi đang stream, cú nhảy 0 → 3%). | Không dùng khoảng từ reset để tính. Bước đầu tiên chỉ dùng để hiệu chỉnh nhịp đọc. |

---

## 4. Kế hoạch lần 2

### Theo dõi
- Session mới, chỉ đọc file này.
- Mỗi lần đọc usage là một message gồm `get_usage`, script cộng token từ mốc reset, và `sleep N` chạy nền. App đánh thức session khi `sleep` xong.
- N = 30–60 giây. Giãn ra khi còn xa lần nhảy dự kiến, dày lại (15–20 giây) khi sắp tới. Thời điểm nhảy dự kiến = token đã cộng so với lượng token của 1% đo được ở khoảng trước.
- Ghi % tuần ở **mọi** lần đọc, để bắt được lần nhảy của hạn mức tuần nếu có.
- Mỗi lần nhảy được ghi dưới dạng **khoảng**: giữa lần đọc t1 và lần đọc t2.

### Các loại tải
Chạy lần lượt, mỗi lần một subagent, cùng model. Cuối mỗi tải, kiểm tra trong `.jsonl` rằng mọi message đều có `stop_reason` và `output_tokens` thật.

| Tải | Cách tạo | Loại token chiếm phần lớn |
|---|---|---|
| **A. Nhiều output** | Viết từng chương khoảng 4K token, **mỗi message đúng một lệnh Write**, tuần tự. Không đọc file, không chạy lệnh khác. | Output |
| **B. Nhiều cache read** | Nạp context khoảng 300K nội dung trung tính (các chương của A, code trong repo), sau đó thực hiện rất nhiều thao tác nhỏ (ví dụ `echo`) với câu trả lời rất ngắn. | Cache read |
| **C. Nhiều cache write** | Các subagent mới chạy **nối tiếp nhau**, mỗi subagent có **mã chạy riêng ở đầu prompt** (để không dùng chung cache), đọc song song 8 file trung tính trong **một** message, trả lời "ok" rồi dừng. | Cache write |
| **D. Như thực tế** | Một tác vụ code điển hình (đọc, sửa, chạy), làm trong scratchpad. | Hỗn hợp, dùng để kiểm chứng |

Nếu chưa có nội dung trung tính cho tải B và C, hãy chạy tải A trước để tạo ra.

### Trình tự (ngân sách đề xuất 18%)
| Bước | Khoảng | Tải | Ghi chú |
|---|---|---|---|
| 0 | Ngay sau reset | | `get_usage` để xác nhận 0% |
| 1 | 0 → 1% | A | Hiệu chỉnh nhịp đọc, **không dùng để tính** |
| 2 | 1 → 4% | A | Khoảng đo nhiều output |
| 3 | 4 → 7% | B | Khoảng đo nhiều cache read |
| 4 | 7 → 10% | C | Khoảng đo nhiều cache write |
| 5 | 10 → 13% | D | Kiểm chứng: dự đoán trước token của 1% bằng b, c, d rồi so với số đo |
| Dự phòng | khoảng 5% | | Đo lại nếu một khoảng bị nhiễu |

Chỉ đổi loại tải **ngay sau một lần nhảy %**, và chỉ dừng subagent **ở ranh giới giữa hai message**.

### Phân tích
1. Cộng token (cache write, cache read, output) của mỗi khoảng theo mốc thời gian các lần đọc, thử với độ trễ 0, 30 và 60 giây.
2. Hồi quy ra b, c, d. So tỷ lệ với giá API để kiểm tra giả thuyết "usage tính theo chi phí".
3. Kiểm chứng bằng tải D.
4. Báo: trọng số, hạn mức 5 giờ quy theo từng loại token, 1% ≈ bao nhiêu token với kiểu tải D, sai số, và % tuần (chênh lệch đầu–cuối, cùng kết quả bắt ngưỡng nếu có).

Hai việc **để sau, khi người dùng yêu cầu**: viết log toàn bộ quá trình, và quy đổi ra giá API để so với giá plan.

---

## 5. Người dùng cần làm
1. Chọn lúc **vừa reset** hạn mức 5 giờ, mở session mới và đưa file này vào.
2. Cho biết ngân sách (đề xuất **18%**).
3. Trong lúc đo, **không dùng Claude ở nơi khác** (claude.ai, máy khác), vì mọi usage đều dồn vào cùng hạn mức.
