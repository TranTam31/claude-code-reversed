# Mổ xẻ skill `/design` (Claude Design trong Claude Code)

> Tài liệu này tổng hợp lại toàn bộ những gì đã thảo luận trong một phiên làm việc:
> từ việc dựng một "simple todo app", rồi lần ngược ra **cách skill `/design` thật sự hoạt động** —
> file nào là gì, đóng gói ra sao, cái gì được đẩy lên artifact, vì sao mở local lại bị read-only.
> Viết theo mạch đọc từ trên xuống.

---

## 0. Bối cảnh

- Lệnh `/design [simple todo app]` → kích hoạt **skill `design`**, một bản **preview của Claude Design chạy bên trong Claude Code**.
- Kết quả cuối cùng là một **Artifact** (trang web host trên claude.ai) chứa sẵn một **trình chỉnh sửa canvas** (click chọn, panel thuộc tính, sửa chữ, undo/redo, Save).
- Ứng dụng demo đã dựng: một **todo app phong cách "bold playful"**, sau đó thêm màn **Dashboard**, rồi thử nghiệm 2 kiểu bố cục (gộp 1 màn có nav / tách 2 frame kiểu Figma).

---

## 1. Ba loại file và vai trò

Khi dựng một canvas, có 3 loại file xuất hiện trong thư mục làm việc:

| File                                                  | Vai trò                                                                                                                                  | Ẩn dụ                             |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| **`*.dc.html`** (`Main.dc.html`, `Dashboard.dc.html`) | **Nội dung thiết kế thật** — giao diện + logic (thêm/tick/xoá/lọc, đổi tab, biểu đồ…). Mỗi file = **một artboard** (một khung màn hình). | Bản vẽ gốc                        |
| **`canvas.json`**                                     | **Bố cục canvas** — vị trí (x/y), kích thước khung (w/h), mở lên hiển thị gì (`launch`), ghi chú nổi (`annotations`).                    | Tờ hướng dẫn "treo tranh chỗ nào" |
| **`todo-app.html`**                                   | **Thành phẩm đã đóng gói** đem đi publish — gộp editor + các file nguồn thành một trang tự chứa.                                         | Bức tranh đã đóng khung           |

**Nguyên tắc vàng:** luôn sửa ở **file nguồn** (`.dc.html` + `canvas.json`), rồi **đóng gói lại** ra `todo-app.html` mới. **Không bao giờ sửa tay** file thành phẩm.

```
Main.dc.html      (source)  ──┐
Dashboard.dc.html (source)  ──┤──►  [đóng gói]  ──►  todo-app.html  ──►  Artifact
canvas.json       (source)  ──┘      + editor          (build)            (link)
```

> Theo ngôn ngữ lập trình: `*.dc.html` + `canvas.json` = **source code**; `todo-app.html` = **build artifact**.

---

## 2. "Đóng gói" là gì — và ai làm việc đó

- File thành phẩm được tạo bởi **một script đóng gói** chạy bằng `node seed-canvas.mjs` (KHÔNG phải do skill nào "generate" ra).
- Script lấy một **template editor** có sẵn (~2MB code) + **chèn nội dung các file nguồn vào trong** → xuất ra `todo-app.html`.
- Sau đó có bước `--check` để xác nhận file không lỗi trước khi publish.

Trình tự thật sự mỗi lần cập nhật:

```
① Viết/sửa Main.dc.html, Dashboard.dc.html, canvas.json     (nguồn)
② node seed-canvas.mjs ...  → sinh todo-app.html            (build, luôn tạo MỚI từ template)
③ (lần đầu) chạy skill artifact-capabilities                (chỉ tra cứu quyền, không tạo file)
④ Công cụ Artifact publish todo-app.html                    (ra/ cập nhật link)
```

> Điểm quan trọng: bước ② **luôn tạo lại `todo-app.html` hoàn toàn mới** từ template, chứ không "chèn thêm" vào file cũ. Vì thế phải **giữ các file nguồn** để lần sau đóng gói lại cho đủ.

---

## 3. Nội dung nguồn nằm ở đâu trong `todo-app.html`?

Câu hỏi hay: "copy mỗi `todo-app.html` là chạy đủ, vậy 2 file kia để làm gì / chúng nằm đâu trong đó?"

Trả lời: **quan hệ không phải "import lúc chạy", mà là "đã nướng sẵn vào"**. Bên trong `todo-app.html` có một ô dữ liệu:

```html
<script type="application/json" id="appifact-doc">
  {
    "title": "Todo App",
    "content": { "files": { "Main.dc.html": "<!do...", "canvas.json": "..." } }
  }
</script>
```

→ Toàn bộ `Main.dc.html`, `Dashboard.dc.html`, `canvas.json` được lưu ở đây dưới dạng **JSON**, key = tên file. Editor đọc ô này để vẽ ra màn hình — **không với tay ra ngoài lấy file gốc**. Đó là lý do file tự chạy độc lập.

### Vì sao search text thường không thấy

Nội dung bị **biến đổi 3 lớp** nên không còn giống HTML gốc:

| Gốc                 | Trong `todo-app.html` | Hậu quả                                              |
| ------------------- | --------------------- | ---------------------------------------------------- |
| `<div`, `<!doctype` | `<div`, `<!do`        | Search `<div` → **không ra** (dấu `<` đổi thành `<`) |
| xuống dòng          | `\n` (chữ n)          | Không còn dòng thật                                  |
| `"`                 | `\"`                  | Bị thêm `\`                                          |

Ví dụ dòng thật trích ra: `...;\">My Day</div>\n  <div style=\...`

> Việc đổi `<` → `<` là **cố ý**: nếu để nguyên `</script>` trong dữ liệu, trình duyệt sẽ tưởng thẻ script kết thúc sớm và vỡ file.

**Muốn search RA:** tìm chuỗi **không chứa `<`** — ví dụ `My Day`, `width: 390px`, `Main.dc.html`, hoặc tìm đúng dạng mã hoá `<div`.

---

## 4. Editor nằm ở đâu — nền tảng có "generate" gì không?

Đã verify bằng cách soi file (2,37MB):

- Ô dữ liệu JSON (chứa source) **rất nhỏ** (~11KB).
- Ngay sau đó là `<script id="appifact-app">` — **toàn bộ code editor viết thẳng (inline) vào file**, gồm cả React, chiếm gần hết dung lượng.
- **Không có thẻ `<script src=...>` nào tải editor từ server/CDN.**
- Mấy dòng như `src="./vendor/react.js"`, `src="\.\/support\.js"` chỉ là **chuỗi văn bản bên trong code editor** (dùng để tự dựng khung preview sandbox nội bộ), **không phải thẻ đang tải mạng**.

### Khi mở artifact, thực sự điều gì xảy ra

> Nền tảng **KHÔNG generate ra editor**. Nó chỉ **phục vụ đúng file HTML tĩnh này**, trình duyệt chạy những gì đã có sẵn bên trong.

Nền tảng chỉ **bọc thêm 2 thứ** (không phải editor):

1. **Chỗ host + lớp sandbox bảo mật (CSP)** — nhốt trang, chặn gọi mạng ra ngoài (trừ Google Fonts).
2. **Cầu nối quyền `window.claude`** — để nút **Save** và **Export PNG/PDF** đã nằm sẵn trong file thực sự hoạt động.

### Hệ quả

Vì editor bị **nướng cứng nguyên khối vào từng file**:

- ✅ File tự chạy độc lập (copy mình nó là đủ).
- ⚠️ Canvas này **không bao giờ nhận bản vá/nâng cấp** sau này của Claude Design — muốn editor mới phải đóng gói ra file mới.

---

## 5. Vì sao mở file local lại bị **Read-only**?

Đây là điểm gây bối rối nhất. Nguyên nhân nằm ở **cầu nối quyền `window.claude`**:

|                                | Mở file `.html` ở local (`file://`)                                      | Mở qua link artifact (claude.ai)                          |
| ------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| Ai đứng sau trang?             | Không có host nào                                                        | Host claude.ai                                            |
| `window.claude`                | **Không tồn tại** → `null`                                               | Có, host tiêm vào                                         |
| Kiểm tra "có quyền ghi không?" | Không ai xác nhận → **khóa**                                             | Xác nhận là chủ/có quyền                                  |
| Kết quả                        | **Read-only**: xem, pan/zoom, xuất PNG/PDF — **không panel, không Save** | **Toàn quyền**: chọn, panel, sửa chữ, undo/redo, **Save** |

**Kết luận:** editor thì đã có sẵn trong file, nhưng phần "cho phép sửa & lưu" phụ thuộc host cấp lúc mở. File local không có host → tự động về **chỉ-xem** cho an toàn (cố ý, không phải lỗi).

→ **Muốn full tính năng → luôn mở bằng link artifact, đừng mở file `.html` trực tiếp.**

### Có tạo được file local mở full tính năng không?

**Không.** Vì:

- Chế độ sửa đầy đủ bị khóa sau `window.claude` mà **chỉ host claude.ai cấp**.
- **Save = publish một phiên bản mới lên nền tảng** — về bản chất không thể xảy ra ở local (không có nơi để lưu lên).
- Có thể nhét code giả `window.claude` để "lừa" mở panel, nhưng bấm Save vẫn mất trắng khi reload → tạo ra thứ trông mở-khóa nhưng thực chất hỏng, nên **không làm**.

---

## 6. Đẩy lên artifact: up cái gì?

**Chỉ đúng MỘT file: `todo-app.html`.**

- KHÔNG up các file `.dc.html` hay `canvas.json` riêng lẻ — nội dung của chúng **đã nướng sẵn bên trong** `todo-app.html`.
- 3 file nguồn **chỉ sống ở local**, làm "mã nguồn" để sửa & đóng gói lại. Chúng không rời khỏi máy.
- Mỗi lần publish lại **giữ nguyên link cũ** (cùng URL), chỉ tạo một phiên bản mới.

---

## 7. Khả năng (capabilities) & skill `artifact-capabilities`

- **`artifact-capabilities`** là một **bảng tra cứu quyền của tài khoản** — cho biết một trang publish được phép làm gì. Nó **không tạo file nào**.
- Với luồng thiết kế, chỉ cần 2 khả năng:
  - **`self`** (tên cũ của `artifact`) = cho phép bấm **Save** để lưu bản mới → tài khoản này **có**.
  - **`downloads`** = xuất **PNG/PDF** → tài khoản này **có**.
- Vì cả hai đều bật, lúc publish mới khai báo `capabilities: {self, downloads}` → canvas **lưu & xuất file được**. Nếu tài khoản không có `self`, canvas sẽ thành **chỉ-xem** và điều đó được báo trước.

> Một câu: **`design` = sách hướng dẫn cả quy trình; `artifact-capabilities` = tờ kiểm tra "tài khoản này có được lưu/xuất không" ngay trước lúc publish.**

---

## 8. Nhiều màn hình & bố cục (artboards)

- **Mỗi màn hình = một file `.dc.html` = một artboard.** Thêm màn → tạo file mới → cập nhật `canvas.json` → **đóng gói lại từ đầu** → publish lại.
- `canvas.json` quyết định vị trí, kích thước khung, màn mở đầu (`launch`: `focused` một khung / `canvas` toàn cảnh), và ghi chú nổi (`annotations`).

### Điểm mấu chốt: các artboard **cách ly hoàn toàn**

- Mỗi artboard chạy trong **iframe sandbox riêng**, **không chia sẻ state/logic** với artboard khác.
- ⇒ Một nút ở màn này **không thể điều khiển màn kia**.

### Hệ quả cho "luồng bấm qua lại"

Có 2 cách, không có cách thứ ba:

| Cách                                           | Mô tả                                                                                        | Điều được / mất                                                     |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **(1) Gộp 1 artboard + thanh nav dưới**        | Cả 2 màn nằm trong 1 file, state điều khiển hiển thị màn nào, có bottom-nav Tasks ⇄ Progress | ✅ Bấm nút đổi màn **thật sự**. ⚠️ Chỉ thấy 1 khung.                |
| **(2) Tách 2 artboard cạnh nhau (kiểu Figma)** | Mỗi màn một frame riêng, đặt song song                                                       | ✅ Nhìn 2 màn cùng lúc như Figma. ⚠️ **Không** bấm-nhảy giữa frame. |

### Khác biệt với Figma (quan trọng)

> **Figma có "prototype mode"** — vẽ mũi tên nối frame A → B, bấm hotspot là nhảy frame.
> **Canvas này KHÔNG có** tính năng nối-nhảy giữa các artboard (vì iframe cách ly).

Giải pháp đã chốt trong phiên: **tách 2 frame cạnh nhau**, mỗi frame là **một app sống đầy đủ, mở sẵn ở màn khác nhau** (Tasks / Dashboard). Trong mỗi frame bấm tab dưới vẫn đổi màn _ngay trong frame đó_; muốn xem frame kia thì click sang nó trên canvas.

---

## 9. Cơ chế template: `{{binding}}` vs giá trị preview

Trong các file `.dc.html` có nhiều lỗ kiểu `{{d.value}}`, `{{item.text}}`… Ở **edit mode** editor hiện tên binding, còn **preview** lại ra giá trị thật. Cơ chế:

### Mỗi `.dc.html` có 2 phần tách biệt

```
TEMPLATE (markup, có "lỗ")            LOGIC (<script data-dc-script>)
  <div>{{d.value}}</div>               class Component extends DCLogic {
  <div>{{d.label}}</div>                 renderVals() {
                                           return { days: [{label:'M', value:3}, ...] }
                                         }
                                       }
```

- `{{...}}` = **lỗ (hole)** chừa chỗ điền dữ liệu.
- **`renderVals()`** = hàm **sinh ra toàn bộ giá trị** để lấp vào lỗ.

### Preview = chạy logic rồi điền vào lỗ

1. Runtime **gọi `renderVals()`** → nhận object dữ liệu (ví dụ `days: [{label:'M', value:3}, ...]`).
2. **Thay từng lỗ bằng giá trị.** Với `<sc-for list="{{days}}" as="d">`, nó lặp mảng, mỗi vòng thay `{{d.value}}`→`3`, `{{d.label}}`→`M`.

→ Vì thế preview luôn ra giá trị, không ra chữ `{{d.value}}`.

### Edit mode = cố ý hiện tên binding

Với chữ **được nối dữ liệu**, editor hiển thị chính binding (`{{item.label}}`) thay vì giá trị — để báo: "chữ này đến từ **dữ liệu/logic**, sửa ở đó chứ đừng gõ đè". Đây là hành vi cố ý, không phải lỗi.

### "Bộ seed giá trị" đến từ 4 nguồn

| Nguồn                            | Là gì                                              | Ví dụ trong app                                                   |
| -------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| **`constructor` → `this.state`** | Dữ liệu khởi tạo (seed thật sự)                    | Danh sách todo `items: [{text:'Buy oat milk…', done:false}, ...]` |
| **`renderVals()`**               | Tính/biến đổi từ state + props ra giá trị cuối     | `days`, `categories`, `progressWidth`, `visible`                  |
| **`data-props` default + tweak** | Giá trị chỉnh qua panel                            | `accent` = `#FF5B39`                                              |
| **`hint-placeholder-*`**         | Khung xương tạm hiện **trước khi** dữ liệu thật về | `hint-placeholder-count="7"` → tạm 7 cột                          |

Luồng đầy đủ:

```
constructor (seed state) ─┐
data-props  (seed props) ─┼─► renderVals() ─► object giá trị ─► điền vào {{lỗ}} ─► UI
                                  ▲
                          (mỗi setState → chạy lại → UI cập nhật)
```

Ví dụ bấm **This week / Last week**: handler `setState({period:'last'})` → runtime **chạy lại `renderVals()`** → `days` đổi số → các lỗ `{{d.value}}` điền lại → biểu đồ nhảy tuần.

### Phân biệt 2 loại chữ (quan trọng khi sửa)

|              | Chữ **tĩnh** (literal)                     | Chữ **động** (binding `{{}}`)               |
| ------------ | ------------------------------------------ | ------------------------------------------- |
| Viết ở đâu   | Ghi thẳng trong markup                     | Qua `{{...}}` + `renderVals()`              |
| Ví dụ        | `My Day`, `tasks completed`, `By category` | `{{item.text}}`, `{{d.value}}`, `{{rate}}%` |
| Trong editor | **Gõ đè trực tiếp** (inline edit)          | Hiện tên binding, sửa qua **dữ liệu/logic** |
| Dùng khi nào | Nhãn/tiêu đề cố định                       | Dữ liệu lặp lại, đổi theo tương tác         |

→ Khi dựng app: **nhãn cố định = chữ tĩnh** (sửa tại chỗ dễ), **dữ liệu danh sách/biểu đồ = binding** (vì lặp và đổi theo trạng thái).

> Một câu: **`.dc.html` = khuôn có lỗ + hàm `renderVals()` sinh giá trị; preview chạy hàm rồi điền vào lỗ, còn edit mode cố ý hiện tên lỗ để bạn biết chỗ nào là dữ liệu động.**

---

## 10. `support.js` là runtime — và vì sao Claude Design khỏi build

Một phát hiện quan trọng: khi **import `.dc.html` vào Claude Design thật**, không có `canvas.json`, không build ra `.html` — chỉ có các `.dc.html` + một file **`support.js`**. Và thử ở local: **đặt `support.js` cạnh `Main.dc.html` thì nó render ra giá trị thật, không còn để binding `{{...}}`.**

### `support.js` là gì

Trong mỗi `.dc.html` có dòng ở `<head>`: `<script src="./support.js"></script>`. Đây **không phải file phụ trợ vặt** — nó là **runtime engine** của Design Components, làm việc "biến khuôn thành UI thật":

- Đăng ký các thẻ `<x-dc>`, `<sc-for>`, `<sc-if>`, `<dc-import>`.
- Đọc `<script data-dc-script>`, khởi tạo `class Component extends DCLogic`.
- **Gọi `renderVals()`** rồi **thay các lỗ `{{d.value}}` bằng giá trị thật**.
- Theo dõi `setState` để render lại, nối sự kiện (`onClick`…).

→ Vì thế: **có `support.js` → hiện giá trị; không có → chỉ thấy binding.** Binding chỉ là chữ literal trong HTML; không ai chạy thì nó nằm yên, có runtime chạy mới điền giá trị.

```
Main.dc.html (khuôn + logic, chưa chạy)  →  thấy {{d.value}}  (chữ chết)
       +  support.js (runtime chạy)       →  thấy 3, 5, 2…     (giá trị thật)
```

### Vì sao Claude Design không cần build ra `.html`

Hai **con đường giao hàng khác nhau**, cùng một định dạng Design Components:

|                           | **Claude Design thật** (claude.ai/design)       | **Preview trong Claude Code** (skill này) |
| ------------------------- | ----------------------------------------------- | ----------------------------------------- |
| Editor sống ở đâu?        | Là **web app chạy sẵn** trên server Claude      | **Không có** server editor riêng          |
| File `.dc.html` nằm đâu?  | Trong **project storage**, app đọc trực tiếp    | Ở local, mình quản lý                     |
| `support.js` (runtime)    | App **tự nạp sẵn** cạnh file → render trực tiếp | Phải **nhúng inline** vào bản build       |
| Bố cục nhiều màn          | App quản lý (không lộ file `canvas.json`)       | Là `canvas.json` viết tay                 |
| Cần build 1 file `.html`? | **KHÔNG** — sửa thẳng file nguồn                | **CÓ** — gói tất cả vào 1 file            |

**Mấu chốt:** Claude Design **bản thân đã là chỗ chạy editor + runtime**, nên chỉ cần file nguồn là edit ngay. Còn Claude Code **không có backend đó**, nên phải đóng gói portable:

```
editor app  +  support.js (inline)  +  các .dc.html  +  canvas.json  →  todo-app.html
```

để Artifact **chạy độc lập ở bất cứ đâu** không cần server Claude Design. "Build" chỉ là **cái giá của việc xuất ra Artifact standalone**, không phải bản chất của Design Components.

### Nối với những gì đã thấy

- Trong `todo-app.html`, các chuỗi `<script src="./support.js">`, `./vendor/react.js` nằm **bên trong code editor** — chính là chỗ editor **tự dựng khung preview và tiêm runtime vào** mỗi artboard.
- Skill ghi rõ: _"giữ nguyên dòng `<script src="./support.js">`; editor thay nó bằng runtime inline lúc render"_ → khớp với quan sát.
- Trong Artifact standalone, `support.js` **không tải được từ `./support.js`** (sandbox chặn mạng) → phải **nhúng thẳng**. Ở local/Claude Design, file nằm cạnh nên trình duyệt nạp bình thường → render.

> Một câu: **`.dc.html` là khuôn + logic ở dạng chữ; `support.js` là động cơ chạy khuôn đó (gọi `renderVals()`, điền binding). Claude Design đã có sẵn động cơ + editor trên server nên khỏi build; Claude Code không có nên phải nhúng động cơ và gói mọi thứ vào một `.html` để chạy standalone.**

---

## 11. `.dc.html` là chuẩn của ai? So sánh với Figma

### Sản phẩm chính bạn dùng là `.dc.html`

Trong cả hệ thống, **`.dc.html` là "chất" thật sự** (thiết kế + logic). `support.js` là động cơ dùng chung, `canvas.json` là bố cục phụ trợ, file `.html` build ra chỉ là **bao bì đóng gói**. Thứ bạn sửa / tái sử dụng / bàn giao cho dev = **`.dc.html`** (source of truth). Link Artifact chỉ để _chia sẻ & xem_.

### `.dc.html` là chuẩn riêng của Claude, trên nền web tiêu chuẩn

Đây là định dạng **do Claude (Anthropic) tự định nghĩa** — gọi là **"Design Components"** (đuôi `.dc.html`). Không có chuẩn web nào tên `.dc.html` trước đó. Các "từ vựng" `<x-dc>`, `<helmet>`, `<sc-for>`, `<sc-if>`, `<dc-import>`, `data-dc-script`, `DCLogic`, `renderVals()` đều **do Claude đặt ra**.

Nhưng **không phát minh từ hư không** — mà lắp ghép từ công nghệ web có sẵn, khoác thêm lớp quy ước mỏng:

| Ý tưởng trong `.dc.html`                    | Vay mượn từ                                         |
| ------------------------------------------- | --------------------------------------------------- |
| File vẫn là HTML hợp lệ                     | Chuẩn HTML                                          |
| Thẻ tự định nghĩa `<x-dc>`                  | Web Components / Custom Elements (W3C)              |
| Lỗ `{{ path }}`                             | Kiểu Handlebars/Mustache                            |
| `<sc-for>`, `<sc-if>`                       | Control-flow kiểu Vue/Angular/Svelte                |
| `DCLogic` có props/state/setState/lifecycle | Chạy trên **React** (có `react.js` trong bản build) |
| tên `<helmet>`                              | Gợi nhớ react-helmet                                |

→ **`.dc.html` = chuẩn riêng của Claude, đặt trên nền web tiêu chuẩn** (HTML + Web Components + templating kiểu Handlebars + React dưới nền). "Riêng" ở quy ước đặt tên & cách tổ chức, không phải công nghệ hoàn toàn mới.

### Khác biệt cốt lõi với Figma

- **Figma tạo ra một _bản mô tả thiết kế_, KHÔNG phải code** — một **scene graph vector** (frame, hình khối, fill, stroke, text, constraints) trong **định dạng độc quyền `.fig`** trên cloud. Máy hiểu để **vẽ lại hình ảnh**, không chạy được như app.
- "Prototype" trong Figma chỉ là **mô phỏng**: nối mũi tên giữa frame, bấm thì _chuyển cảnh_. Figma **không thực thi logic, không có state thật**.
- Muốn ra code từ Figma → phải **export ảnh/SVG** hoặc dùng **plugin/Dev Mode codegen** để _đoán_ code gần đúng → luôn có "khoảng hở", dev phải dựng lại.
- **`.dc.html` của Claude _bản thân đã là code chạy thật_** — `renderVals()` thực thi, nút là handler thật, state đổi thật. Thiết kế **chính là** front-end sống.

|                     | **Figma**                                           | **Claude Design (`.dc.html`)**            |
| ------------------- | --------------------------------------------------- | ----------------------------------------- |
| Thứ tạo ra          | Bản **mô tả thiết kế** (vector scene graph, `.fig`) | File **HTML+JS chạy được thật**           |
| Có phải code?       | **Không** — dữ liệu hình học                        | **Có** — code front-end                   |
| Tương tác           | **Mô phỏng** (nối frame, chuyển cảnh)               | **Chạy thật** (state, event, logic)       |
| Muốn dùng thành app | Export ảnh, hoặc plugin đoán code                   | **Chính file đó đã dùng được**            |
| Định dạng           | **Độc quyền Figma**                                 | Riêng Claude, **trên nền web tiêu chuẩn** |
| Điểm giống          | Sửa trực quan (click, panel, kéo thả)               | Sửa trực quan                             |

> **Một câu:** Figma tạo ra **"bức ảnh kỹ thuật của UI"** (mô tả để vẽ lại, dev phải code lại). Claude Design tạo ra **"UI thật đang chạy"** (`.dc.html` là code, mở ra dùng được ngay). Giống ở **trải nghiệm chỉnh sửa trực quan**, khác ở **thứ được tạo ra: bản mô tả vs. code sống**.

---

## 12. Về phần download, export

Với dạng mà ở trong Artifact/local .html thì chỉ có các option là png, pdf, hoặc một file zip gồm file .dc.html và file support.js.

Với dạng mà từ trong claude design thì sẽ có thể export như trên, nhưng có thêm chế độ gộp, build hoàn chỉnh support.js vào, nhưng mà thấy cũng chả để làm gì đcm:))).

À nhưng mà có chế độ đẩy thẳng sang Claude Code.
Vừa thử rồi, thì nó khá ảo, với chế độ mà dùng:

- Claude code local, nó kêu cài MCP, nhưng khi test thật thì nó dùng thẳng API lên, cụ thể là dùng DesignSync, gọi thẳng get-file luôn kk
- Claude code session cloud (vl tự nhiên dùng được haha, chứ bình thường thì đ được, như kiểu nó đẩy qua API luôn ấy) thì nó chạy như bình thường thôi, nhưng mà không cần cài MCP thôi. Nhưng lại khá hạn chế, không chạy được terminal? - https://claude.ai/code/session_013sumf2KU5QFNK7GRV56EBK

---

Một cái nữa điên vl là mình export cái skill kia và đem test với claude.ai, không biết sẽ thế nào haha.
Đây là kết quả haha - https://claude.ai/chat/daf4819d-bb39-4620-b4f1-ec0ab3026456
Nó cũng tạo đầy đủ các file, rồi chạy build như bình thường

Và, làm sao để mình làm được nó? Mình kêu Claude reverse engineer để đọc được Skill, vì Skill này nó là Skill build in, không phải là cài thông thường.

---

## 13. Bên trong file `.html` build ra: engine, render & cơ chế Save

Soi trực tiếp file `todo-app.html` (bằng cách phân tích, không đọc thô toàn bộ) cho ra bức tranh đầy đủ.

### Code engine có tường minh không? → Không, bị nén qua nhiều lớp
Bằng chứng:
- 2,4MB / ~11.010 dòng, nhưng có **36 dòng > 5000 ký tự**, dòng dài nhất **264.346 ký tự** → đã **bundle + minify**.
- Mẫu code thô: `"use strict";(()=>{var wse=Object.create;var CA=Object.defineProperty;...var K=(e,t,` → tên biến **băm ngắn** (`wse`, `CA`, `e`, `t`), bọc **IIFE**, có `__esModule` + helper interop, **không có `webpack`** → output kiểu **esbuild**.
- Chứa React (107 `React`, 127 `createElement`, 389 `useState`) → editor là app React, minify chung.

Chuỗi lớp: `Source (TS/JSX)` → `esbuild bundle` → `minify` → `nhúng inline vào <script id="appifact-app">`.
→ **Không đọc-hiểu trực tiếp được**; muốn hiểu phải reverse-engineer qua các chuỗi/hằng còn sót.

### File build gồm 3 khối (xác nhận qua hằng số `HI/FI/zI`)
| Khối | Là gì |
|---|---|
| `<script id="appifact-doc">` (JSON) | **Dữ liệu** — các `.dc.html` + `canvas.json` |
| `<script id="appifact-app">` | **Engine** — editor React + runtime (minified) |
| `appifact-style` | CSS của editor |

### Vòng đời khi chạy trên Artifact web
1. **Ingest:** engine `JSON.parse` khối `appifact-doc` → dựng **document model** trong bộ nhớ (bảng `files`, layout, title).
2. **Parse thành cây:** mỗi `.dc.html` được parse phần `<x-dc>` thành **cây node lồng nhau** (element / `{{hole}}` / `<sc-for>`,`<sc-if>`). **Cây này = "cây lồng nhau như Figma"** — để chọn/tô sáng/kéo-thả từng phần tử.
3. **Render trong iframe cách ly:** engine dựng tài liệu nhỏ (template + runtime `support.js` inline + logic), nhồi vào **`<iframe srcdoc="...">` sandbox**, giao tiếp qua **`postMessage`** (thấy 12 `srcdoc`, 21 `postMessage`, bộ ánh xạ `@srcdoc→iframe`, `@src→script-src`). Bên trong iframe mới chạy `renderVals()` + React → DOM thật. ⇒ preview ra giá trị thật, và nội dung untrusted **không đụng được trang editor**.
4. **Edit (local):** click phần tử trong iframe → `postMessage` id ra → panel gắn vào node; sửa → cập nhật model → re-render. Undo/redo trên model. **Chưa đụng server.**
5. **Save = đóng gói lại & publish:** engine serialize model → `.dc.html` + `canvas.json` mới → **tự sinh lại một file HTML hoàn chỉnh mới** → gọi cầu nối lưu (`claude.use('self')` rồi `.publish(fullHtml)`; trong code có `t.publish(e)` canh bởi `"self capability is not available to this view"` → `not_granted`).
6. **Lưu về đâu:** claude.ai **commit thành một PHIÊN BẢN MỚI bất biến tại cùng URL** (compare-and-set → `conflict` nếu người khác Save trước). Các con số version nhảy (`...-883f` → `...-8b3d`) chính là đây. **KHÔNG** lưu vào `.dc.html` local, **KHÔNG** dạng diff — mỗi Save ghi ra **một bản copy nguyên khối mới** vào **kho phiên bản trên server**. (Vì thế bản local dễ thành cũ.)

### Vòng lặp tự tái tạo
```
File .html = [ Engine editor (React) ] + [ Runtime ] + [ Dữ liệu .dc.html dạng JSON ]
      mở ra ─► đọc JSON ─► parse thành CÂY ─► render trong iframe sandbox ─► sửa
      Save  ─► gói LẠI thành 1 file .html MỚI (engine+runtime+dữ liệu mới) ─► publish
                                                  ◄── server lưu thành version mới, cùng URL
```
> Một engine to đùng nằm gọn trong một file HTML, dùng để render & chỉnh các "file HTML" khác (dữ liệu `.dc.html` ngay bên trong nó), rồi mỗi lần Save lại **tự đẻ ra một file HTML mới hoàn chỉnh** kiểu y hệt. **Tự chứa và tự tái tạo** — đó là lý do một file lẻ chạy được ở bất cứ đâu, và cũng là lý do nó nặng 2,4MB.

---

## 14. Tóm tắt mô hình tư duy

1. **Mình sửa file nguồn** (`.dc.html`, `canvas.json`) → **script đóng gói** nướng chúng + editor thành **1 file `todo-app.html` tự chứa**.
2. **Chỉ `todo-app.html` được đẩy lên artifact**; nội dung nguồn đã nằm trong đó (dạng JSON đã mã hoá, nên search thường không ra).
3. **Editor đã có sẵn trong file**; nền tảng chỉ **phục vụ file tĩnh + bọc sandbox + cấp quyền** (`window.claude`) — không generate editor.
4. **Full tính năng chỉ có khi mở qua link artifact**; file local luôn **Read-only** (xem + xuất PNG/PDF) và **không thể mở khoá được**.
5. **Artboard cách ly nhau** → luồng bấm qua lại chỉ có trong **một** artboard; tách frame kiểu Figma thì **không** bấm-nhảy giữa frame được.

---

_Ghi chú: đây là bản preview sớm của Claude Design chạy trong Claude Code — editor bị "đóng băng" trong mỗi canvas đã publish và chưa ngang bằng phiên bản đầy đủ trên claude.ai/design._
