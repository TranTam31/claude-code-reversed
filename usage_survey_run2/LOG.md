# Log khảo sát usage lần 2 (01/10/2026, 04:41–04:58 UTC)

Mọi giờ trong file là **UTC**. Kế hoạch gốc: [../USAGE_TOKEN_SURVEY.md](../USAGE_TOKEN_SURVEY.md).

## 0. Tệp đi kèm (trong thư mục này)

| Tệp | Nội dung |
|---|---|
| `messages.csv` | Từng API message sau khi bỏ trùng (`message.id`), từ 04:41:00 trở đi: thời điểm, nguồn, token theo loại, `stop_reason` |
| `readings.csv` | 19 lần gọi `get_usage`: thời điểm, % 5 giờ, % tuần, `resetsAt`, cờ `fresh` |
| `tally.py` | Cộng token và trích các lần đọc usage từ `.jsonl` (quy tắc ở mục 2) |
| `analyze.py` | Bảng token theo từng đoạn giữa hai lần đọc, và hồi quy tích luỹ (mục 7.1) |
| `phases.py` | Giải 3 phương trình theo 3 pha A/B/C (mục 7.2) |
| `feasible.py`, `feasible_tol.py` | Tìm vùng trọng số thoả mọi ràng buộc khoảng (mục 7.4) |
| `conflicts.py` | Cặp lần đọc nào mâu thuẫn với điểm khớp tốt nhất (mục 7.4) |

Chạy lại: `python feasible.py` (cần `numpy`). Script đọc trực tiếp các file `.jsonl` trong `~/.claude/projects`.

---

## 1. Kế hoạch so với thực tế

| Hạng mục | Kế hoạch | Thực tế |
|---|---|---|
| Bắt đầu | Ngay sau reset (0%) | Bắt đầu giữa chừng ở **42%**, theo đồng ý của người dùng. Hạn mức 5 giờ reset lúc 09:10, còn hơn 4 giờ |
| Ngân sách | 18% (42 → 60) | **Tiêu 20% (42 → 62), vượt 2%** |
| Bước 1, hiệu chỉnh | 0→1% với tải A | 42→43% với tải A |
| Bước 2, tải A | 3% | Chạy 43→50 (bao gồm phần chồng lấn lúc dừng A) |
| Bước 3, tải B | 3% | Chạy 50→56. Tốn nhanh hơn nhiều so với dự kiến (khoảng 3%/phút) |
| Bước 4, tải C | 3% | 3 lượt subagent, 56→62. Cú nhảy +6% chạm chốt chặn (b) và (c) nên **dừng toàn bộ** |
| Bước 5, tải D | 3% | **Không chạy** (hết ngân sách) |
| Nội dung trung tính | Các chương do A viết | A viết quá chậm (8 chương / 11 phút), nên B và C dùng **mã nguồn thư viện chuẩn Python** (`typing.py`, `argparse.py`…) cắt thành 13 file |
| Chu kỳ đọc | 30–60 giây | 40–75 giây ở pha A. Ở pha B/C đọc dày hơn, nhưng **`get_usage` trả kết quả cache** (xem mục 6) |

---

## 2. Cách thu dữ liệu

- **Token:** `tally.py` quét mọi `*.jsonl` trong `~/.claude/projects/**` có mtime sau 04:41:00. Lấy các entry assistant có `usage`, bỏ `<synthetic>`, gom theo `message.id`. Trong mỗi nhóm lấy `usage` có `output_tokens` lớn nhất, timestamp là entry cuối. `stop_reason` lấy giá trị khác null nếu có.
  - Nguồn `monitor` là session theo dõi `1269345f-…jsonl`. Nguồn `sub:<id>` là các file trong `subagents/`. Nguồn `other` là session khác (kết quả: **0 message**).
  - `cw_5m` lấy từ `cache_creation.ephemeral_5m_input_tokens`, `cw_1h` từ `ephemeral_1h_input_tokens`. Trong phân tích, **CW = cw_5m + 1,6 × cw_1h** (theo giá API, ghi 1 giờ là 2,0 so với ghi 5 phút là 1,25). Chỉ session theo dõi ghi cache 1 giờ, tổng cộng khoảng 73K, nên ảnh hưởng nhỏ.
- **Lần đọc usage:** không ghi tay. `tally.py readings` trích từ các entry `tool_result` của `get_usage` trong `.jsonl` của session theo dõi, lấy timestamp của entry đó.
- **Phát hiện lần đọc bị cache:** mỗi phản hồi `get_usage` có `resetsAt` kèm mili giây. Lần lấy mới thì mili giây khác, còn **phản hồi cache trả y nguyên chuỗi `resetsAt`**. Lần đọc có `resetsAt` trùng lần trước được đánh dấu `fresh=False` và bị loại ở phân tích chặt (mục 7.4).

---

## 3. Dòng thời gian thao tác

| Giờ | Thao tác |
|---|---|
| 04:41:27 | Đọc lần đầu: 42% / tuần 11%, `resetsAt` 09:09:59 |
| 04:42–04:43 | Viết và chạy thử `tally.py` |
| 04:43:07 | **Khởi động tải A** (subagent `adf11402`) |
| 04:43–04:50 | Đọc usage, xen kẽ `sleep` 40–75 giây chạy nền |
| 04:44:51 | A hoàn tất message đầu tiên (chương 1) |
| 04:50:05 | Đọc: 47%. Quyết định chuyển pha |
| 04:50:26 | Vòng chờ ranh giới message, phiên bản 1: **lỗi**. Vòng chờ "dòng cuối là `tool_result`" không bao giờ đúng, vì sau `tool_result` luôn có thêm một dòng `attachment`. Hết giờ chờ mà không dừng được A |
| 04:53:02 | Tạo 13 file nội dung trung tính `neutral/partNN.py`, mỗi file 1.800 dòng, khoảng 75–83 KB |
| 04:53:25 | Vòng chờ phiên bản 2: chờ số dòng chứa `"stop_reason":"tool_use"` tăng lên. Bắt được lúc 04:54:09.24 |
| 04:54:11 | **TaskStop A.** A có 8 message, 8 chương, message cuối có `stop_reason`, không mất usage |
| 04:54:18 | **Khởi động tải B** (subagent `a1c30b4b`) |
| 04:54:26–31 | B nạp 7 file: ghi khoảng 190K cache (CW) |
| 04:54:41–04:55:59 | B gọi `echo` liên tục, mỗi lệnh khoảng 2 giây, mỗi lần khoảng 225–228K cache read |
| 04:55:21 | Đọc: 54% (`fresh`). Ba lần đọc sau (04:55:31, 04:55:33, 04:55:49) đều bị cache |
| 04:55:55 | Chờ ranh giới, bắt được lúc 04:55:57.6 |
| 04:56:00 | **TaskStop B.** Message cuối được ghi lúc 04:55:59, có `stop_reason`. Có thể còn một request `echo` đang bay khi bị dừng (khoảng 228K cache read, không có trong log) |
| 04:56:56 | Đọc: 56% (`fresh`) |
| 04:57:15 | **C lượt 1** (`a3ed0909`): message 04:57:21–27, cache write khoảng 114K |
| 04:57:32 | **C lượt 2** (`aaf8d8c7`): message 04:57:38–44, cache write khoảng 114K |
| 04:57:50 | **C lượt 3** (`a3e20346`): message 04:57:56–04:58:04, cache write khoảng 115K. Message đầu không có `stop_reason` (`output_tokens`=16), nhưng phần cache write vẫn ghi đủ |
| 04:58:07 | Đọc: **62%** / tuần 14% → **dừng mọi tải** |
| 04:58–05:11 | Phân tích, không chạy thêm tải. Các message sau 04:58:07 không nằm trong khoảng đo nào |

### Prompt của các tải (nguyên văn phần quan trọng)
- **A:** viết tiểu thuyết "The Cartographer of Low Tide", 40 chương, mỗi chương khoảng 3.000 từ vào `chapters/chNN.md`. *Mỗi response đúng một lệnh Write, không có gì khác. Không đọc file, không chạy lệnh.*
- **B:** response đầu gọi Read song song 7 file `neutral/part00..06.py`. Sau đó `echo N` với N từ 1 đến 150, *mỗi response đúng một lệnh Bash, không có text*.
- **C (×3):** prompt mở đầu bằng `RUN-ID cX-<hex>` riêng cho từng lượt. Response đầu gọi Read song song 4 file (lượt 1: part07–10, lượt 2: part09–12, lượt 3: part00/02/04/06), sau đó trả lời "ok".

---

## 4. Các lần đọc usage

| Giờ | 5 giờ | Tuần | `resetsAt` (phần ms) | Mới (fresh)? |
|---|---|---|---|---|
| 04:41:27 | 42 | 11 | .688 | ✔ |
| 04:43:11 | 43 | 11 | .865 | ✔ |
| 04:44:16 | 44 | 11 | .911 | ✔ |
| 04:45:09 | 44 | 11 | .911 | ✘ cache |
| 04:45:59 | 45 | 11 | .652 | ✔ |
| 04:46:44 | 45 | 11 | .652 | ✘ cache |
| 04:47:57 | 46 | 11 | .999 | ✔ |
| 04:49:01 | 46 | 11 | 00.226 | ✔ |
| 04:50:05 | 47 | **12** | .592 | ✔ |
| 04:53:01 | 49 | 12 | 00.415 | ✔ |
| 04:54:19 | 50 | 12 | .810 | ✔ |
| 04:55:21 | 54 | **13** | .668 | ✔ |
| 04:55:31 | 54 | 13 | .668 | ✘ cache |
| 04:55:33 | 54 | 13 | .668 | ✘ cache |
| 04:55:49 | 54 | 13 | .668 | ✘ cache |
| 04:56:56 | 56 | 13 | 00.169 | ✔ |
| 04:57:30 | 56 | 13 | 00.169 | ✘ cache |
| 04:57:45 | 56 | 13 | 00.169 | ✘ cache |
| 04:58:07 | 62 | **14** | 00.092 | ✔ |

Cache của `get_usage` kéo dài ít nhất khoảng 50 giây (04:56:56 → 04:57:45).

---

## 5. Tổng token theo nguồn (từ 04:41:00)

| Nguồn | Từ – đến | Số message | Cache write | Cache read | Output |
|---|---|---|---|---|---|
| Theo dõi (đến 05:11, gồm cả phần phân tích) | 04:41–05:11 | 62 | 73K (1 giờ) | 6,61M | 40,7K |
| A | 04:44:51–04:54:09 | 8 | 97K | 0,50M | 50,7K |
| B | 04:54:26–04:55:59 | 41 | 193K | 8,92M | 2,9K |
| C1 / C2 / C3 | 04:57:21–04:58:04 | 2/2/2 | 114K mỗi lượt | 0,08M mỗi lượt | 0,2–0,7K |

Input không cache: tổng 258 token, bỏ qua. Bằng chứng đã kiểm tra: 106/107 message có `stop_reason` (ngoại lệ là C3, xem mục 3).

---

## 6. Token theo từng đoạn giữa hai lần đọc (`analyze.py`)
Quy đổi theo giá API (`api-eq`) = 1,25·cw5 + 2·cw1h + 0,1·cr + 5·out, đơn vị nghìn token.
```
04:41:27->04:43:11  42->43  cw5=     0 cw1h=   13 cr=    553 out=  7.9  api-eq=   120
04:43:11->04:44:16  43->44  cw5=     0 cw1h=    1 cr=    259 out=  0.4  api-eq=    31
04:44:16->04:45:09  44->44  cw5=    49 cw1h=    1 cr=     87 out=  7.2  api-eq=   109
04:45:09->04:45:59  44->45  cw5=     0 cw1h=    1 cr=    178 out=  0.3  api-eq=    22
04:45:59->04:46:44  45->45  cw5=    10 cw1h=    2 cr=    230 out=  8.0  api-eq=    78
04:46:44->04:47:57  45->46  cw5=     7 cw1h=    1 cr=    245 out=  6.5  api-eq=    68
04:47:57->04:49:01  46->46  cw5=     7 cw1h=    1 cr=    254 out=  6.0  api-eq=    66
04:49:01->04:50:05  46->47  cw5=     0 cw1h=    2 cr=    192 out=  0.6  api-eq=    25
04:50:05->04:53:01  47->49  cw5=    19 cw1h=    1 cr=    430 out= 21.0  api-eq=   174
04:53:01->04:54:19  49->50  cw5=     6 cw1h=    6 cr=    602 out=  8.1  api-eq=   120
04:54:19->04:55:21  50->54  cw5=   192 cw1h=    3 cr=   5040 out=  2.9  api-eq=   763
04:55:21->04:55:31  54->54  cw5=     0 cw1h=    1 cr=   1351 out=  1.0  api-eq=   144
04:55:31->04:55:33  54->54  cw5=     0 cw1h=    1 cr=    109 out=  0.0  api-eq=    13
04:55:33->04:55:49  54->54  cw5=     1 cw1h=    1 cr=   2041 out=  1.3  api-eq=   213
04:55:49->04:56:56  54->56  cw5=     0 cw1h=    3 cr=   1590 out=  1.0  api-eq=   170
04:56:56->04:57:30  56->56  cw5=   114 cw1h=    4 cr=    428 out=  2.5  api-eq=   205
04:57:30->04:57:45  56->56  cw5=   114 cw1h=    2 cr=    440 out=  1.0  api-eq=   197
04:57:45->04:58:07  56->62  cw5=   115 cw1h=    3 cr=    571 out=  1.1  api-eq=   212
```

---

## 7. Tính toán (theo đúng thứ tự đã làm, kể cả bước sai)

### 7.1 Hồi quy tích luỹ (`analyze.py`), không đáng tin
Mô hình: `reading_i + 0,5 ≈ P0 + b·CW(t_i − lag) + c·CR(…) + d·OUT(…)`, dùng cả các lần đọc bị cache.
```
lag 0s:  CW=13.40 CR=0.165 OUT=80.69 %/Mtok  rmse=0.83 | API-weight fit: 1% = 164K eq, rmse=1.15
lag 30s: CW=21.42 CR=0.236 OUT=47.44         rmse=0.78 | 1% = 144K eq, rmse=1.26
lag 60s: CW=3.98  CR=0.357 OUT=129.28        rmse=1.38 | 1% = 141K eq, rmse=2.07
```
Kết quả nhảy mạnh theo độ trễ, nên không dùng được.

### 7.2 Giải theo 3 pha (`phases.py`)
Ranh giới pha = điểm giữa của khoảng đọc chứa lần nhảy: 43 ∈ [04:41:27, 04:43:11], 50 ∈ [04:53:01, 04:54:19], 56 ∈ [04:55:49, 04:56:56], 62 ∈ [04:57:45, 04:58:07].
```
lag 0:  A+mon 43->50  cw=136K cr=2762K out=59.5K  api-eq=744K -> 106K/1%
        B 50->56      cw=214K cr=10326K out=12.4K api-eq=1362K -> 227K/1%
        C 56->62      cw=240K cr=987K out=4.1K    api-eq=419K ->  70K/1%
        solve: CW=23.90 CR=0.010 OUT=62.5 %/Mtok
lag 20: solve CW=51.09 CR=-0.513 OUT=24.8   (CR âm → vô nghĩa)
lag 40: solve CW=-77.76 CR=2.447 OUT=194.3  (CW âm → vô nghĩa)
```
Mô hình rút gọn với CR = 0 khớp 3 pha (7,0 / 5,9 / 6,0) và dự đoán đúng dữ liệu lần 1 (2,3 / 2,6 / 6,3 so với thực tế 2 / 2 / 6,5). Từ đó **tôi đã báo người dùng rằng "cache read ≈ 0". Kết luận này SAI, xem 7.3.** Lỗi nằm ở chỗ: mỗi pha chỉ cho một phương trình, Δ% của mỗi pha có sai số ±1, và 3 phương trình vừa đủ cho 3 ẩn nên khớp hoàn hảo không chứng minh được gì.

### 7.3 Kiểm tra chi tiết: phản ví dụ cho "cache read ≈ 0"
Xem từng message quanh pha B:
- 04:54:26–31: B nạp file, CW +190K.
- 04:54:41–04:55:59: chỉ có `echo`, gần như thuần cache read.
- Đọc 54% lúc 04:55:21 (fresh), đọc 56% lúc 04:56:56 (fresh). Giữa hai lần đọc: CW khoảng 12K, **CR khoảng 5,0M**, OUT khoảng 3,9K. Nếu CR = 0 thì mô hình dự đoán tăng khoảng 0,5%, nhưng % thực tế tăng **ít nhất 1%** (54,99 → 56,0). Với độ trễ 30 giây thì chênh lệch còn lớn hơn.
→ **Cache read có bị tính**, nhỏ nhưng khác 0.

### 7.4 Phân tích ràng buộc khoảng (`feasible.py`, `conflicts.py`, `feasible_tol.py`): đây là kết quả dùng được
Chỉ dùng **12 lần đọc fresh**. Với mỗi cặp (i < j), tức 66 cặp, % hiển thị là số nguyên nên mức tăng thật nằm trong khoảng `(Δp − 1, Δp + 1)`. Quét lưới (b, c, d) để tìm các điểm thoả **mọi** cặp.

- Với sai số ±1 chặt: **không có nghiệm** ở mọi độ trễ 0/15/30/45/60 giây.
- Điểm khớp tốt nhất ở độ trễ 0 (`conflicts.py`): 1% ≈ 77K CW / 2,9M CR / 14,2K OUT. Chỉ lệch **2/66 cặp**, cả hai trong pha A, mỗi cặp lệch ≤ 0,4%:
  ```
  04:44:16->04:49:01 obs +2 pred +3.39
  04:45:59->04:49:01 obs +1 pred +2.08
  ```
  Độ trễ 30 giây lệch 11/66 cặp (tối đa 3,2%), độ trễ 60 giây lệch 21/66 cặp. Như vậy **độ trễ thật nhỏ (khoảng 0–20 giây) khi chỉ dùng lần đọc fresh.** Mức trễ 30–60 giây quan sát ở lần 1 chủ yếu là do cache của `get_usage`.
- Nới sai số lên ±1,4 (cho phép lệch thời điểm và phần token không được ghi):
  ```
  lag  0s: 1% = CW  53- 95K | CR 2.1-6.2M  | OUT 13.3-19.2K | OUT/CW 2.9-7.1 | CR/CW 1/22-1/119
  lag 10s: 1% = CW  40- 62K | CR 3.0-50M   | OUT 13.2-21.3K | OUT/CW 1.9-4.8 | CR/CW 1/48-1/1225
  lag 20s: 1% = CW  43- 57K | CR 3.6-25M   | OUT 13.2-18.5K | OUT/CW 2.4-4.3 | CR/CW 1/62-1/588
  (±1,6, lag 0: CW 51-105K | CR 1.9-9.1M | OUT 11.8-21.7K)
  API-ratio weights feasible? False   (ở mọi trường hợp)
  ```
  Kiểm tra giả thuyết tỷ lệ giá API: c/b = 0,08 ± 0,02 và d/b = 4 ± 0,5.

### 7.5 Hạn mức tuần
Bắt được 3 lần nhảy: 11→12 ∈ [04:49:01, 04:50:05] (5 giờ: 46–47%), 12→13 ∈ [04:54:19, 04:55:21] (5 giờ: 50–54%), 13→14 ∈ [04:57:45, 04:58:07] (5 giờ: 56–62%).
Từ 11→12 đến 13→14 là 2% tuần, ứng với khoảng 46,5% → 56–62% của hạn mức 5 giờ, tức 9,5–15,5%. Vậy **1% tuần ≈ 4,8–7,8% của 5 giờ**, nên hạn mức tuần ≈ **5–8 lần** hạn mức 5 giờ.

---

## 8. Kết luận và độ tin cậy

| Kết luận | Mức tin cậy | Căn cứ |
|---|---|---|
| Usage **không** tính theo tỷ lệ giá API | **Cao** | Bị loại ở mọi độ trễ và mọi mức sai số |
| 1% hạn mức 5 giờ ≈ **13–21K token output** (Opus 5.5), tức cả hạn mức 5 giờ ≈ **1,3–2,1M output** | **Khá** | Ổn định qua mọi biến thể phân tích |
| Cache read rẻ hơn tỷ lệ API so với cache write (API là 1/12,5; đo được từ 1/20 trở xuống). 1% ≈ **2–50M cache read** | Thấp–trung bình | Chắc chắn là khác 0 (7.3), nhưng khoảng ước lượng rất rộng |
| 1% ≈ **40–105K cache write** | Thấp–trung bình | Khoảng rộng, phụ thuộc độ trễ |
| Output so với cache write (API là 4) | Thấp | 1,9–8,5 |
| Hạn mức tuần ≈ 5–8 lần hạn mức 5 giờ | Thấp | Chỉ 2 lần nhảy, bắt bằng khoảng rộng |
| ~~Cache read ≈ 0~~ | **Đã rút lại** | Phản ví dụ ở 7.3 |

## 9. Sự cố và sai lệch cần biết khi kiểm tra
1. **Vượt ngân sách 2%** (62 so với 60). Nguyên nhân: 3 lượt C được khởi động liên tiếp trong khi `get_usage` đang trả số cache (56%), nên không thấy % đang tăng.
2. Vòng chờ ranh giới phiên bản 1 bị lỗi (dòng `attachment`), làm A chạy thêm khoảng 4 phút (đẩy pha A từ 47 lên 50).
3. Có thể có 1 request của B bị mất khi dừng (khoảng 228K cache read).
4. C3 có 1 message không có `stop_reason`, có thể thiếu một ít output (≤ vài trăm token).
5. Chi phí theo dõi khá lớn: session theo dõi chiếm phần lớn cache read ở pha A (khoảng 85–110K cache read cho mỗi lượt gọi API).
6. Các pha không thuần: B gồm cả khoảng 190K CW lúc nạp file, A có nhiều CR của session theo dõi.
7. Chỉ có một model (Opus 5.5). Kết quả không áp dụng trực tiếp cho model khác.
