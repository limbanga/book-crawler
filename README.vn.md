# Web Crawler JavaScript

## Mục tiêu dự án

* Hiểu và thực hành kỹ thuật Web Crawling (thu thập dữ liệu web) cơ bản bằng JavaScript/Node.js.
* Thu thập dữ liệu sách (tiêu đề, giá, ảnh bìa) từ trang demo [books.toscrape.com](http://books.toscrape.com).
* Sử dụng các thư viện phổ biến: `axios` để gửi HTTP request, `cheerio` để phân tích HTML, `json2csv` để chuyển đổi dữ liệu.
* Crawl dữ liệu nhiều trang liên tiếp và xử lý phân trang đơn giản.
* Lưu dữ liệu ra định dạng JSON và CSV phục vụ cho việc phân tích hoặc xử lý sau này.
* Nâng cao kỹ năng lập trình bất đồng bộ (async/await) và xử lý lỗi trong quá trình crawl.

---

## Hướng dẫn tổng quan

### 1. Khởi tạo project và cài đặt thư viện

* Tạo project Node.js mới và cài đặt các thư viện cần thiết: `axios`, `cheerio`, `json2csv`.

### 2. Xây dựng chức năng crawl dữ liệu

* Gửi yêu cầu HTTP tới các trang sách.
* Phân tích HTML để lấy dữ liệu sách (tiêu đề, giá, ảnh).
* Xử lý phân trang bằng cách lặp qua nhiều trang với URL có dạng `page-1.html`, `page-2.html`,...

### 3. Lưu dữ liệu

* Gom dữ liệu thu thập được từ các trang lại.
* Lưu dữ liệu ra file JSON để dễ dàng đọc và xử lý trong các ứng dụng.
* Chuyển đổi dữ liệu sang định dạng CSV để dùng với Excel hoặc các phần mềm bảng tính.

### 4. Chạy và kiểm tra

* Chạy file script để bắt đầu crawl.
* Kiểm tra kết quả trong các file JSON và CSV.

---

## Giải thích kỹ thuật

* **HTTP request**: Dùng thư viện `axios` để lấy nội dung HTML từ website.
* **Phân tích HTML**: Sử dụng `cheerio` để thao tác DOM như jQuery, dễ dàng trích xuất dữ liệu cần thiết.
* **Chuyển đổi URL ảnh**: Đảm bảo đường dẫn ảnh là URL tuyệt đối để có thể sử dụng sau này.
* **Xử lý phân trang**: Lặp qua các trang theo số thứ tự, dừng nếu không còn dữ liệu.
* **Lưu file JSON và CSV**:

  * JSON: dễ đọc, lưu trữ cấu trúc dữ liệu gốc.
  * CSV: dùng cho phân tích và báo cáo bằng Excel, Google Sheets.

---

## Lưu ý và gợi ý nâng cao

* Để tránh gửi quá nhiều request cùng lúc gây quá tải server, có thể thêm thời gian chờ (delay) giữa các lần crawl.
* Nếu muốn crawl chi tiết từng cuốn sách, có thể truy cập link chi tiết của sách và lấy thêm thông tin.
* Có thể tối ưu tốc độ crawl bằng cách thực hiện song song (parallel) nhiều request, nhưng cần cẩn thận không gây lỗi hoặc bị chặn.
* Nên xử lý lỗi kỹ càng để chương trình không bị dừng giữa chừng khi gặp trang lỗi hoặc mất mạng.

