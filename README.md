# Nihongo 1000

Học 1.000 từ tiếng Nhật từ PDF được cung cấp, chia thành 50 bài theo thứ tự gốc.

- Flashcard hiện cách đọc, nghĩa tiếng Việt, Hán Việt và câu ví dụ khi lật thẻ.
- Trắc nghiệm chọn nghĩa tiếng Việt và hiện điểm cuối bài.
- Mục **Đến hạn ôn** tập hợp các từ theo lịch. Từ chưa nhớ quay lại sau 10 phút. Các lần nhớ liên tiếp giãn lịch từ 1 đến 30 ngày.
- Tra từ theo tiếng Nhật, kana hoặc nghĩa tiếng Việt có dấu hay không dấu.
- Tiến độ lưu bằng localStorage trên từng trình duyệt. Phát âm phụ thuộc vào giọng tiếng Nhật có trên thiết bị.

## Học trên máy

Mở `index.html` bằng trình duyệt. Để có địa chỉ ổn định cho tiến độ, chạy `python -m http.server 8000` trong thư mục repo và mở `http://localhost:8000`.

## Đưa lên GitHub Pages

1. Tạo repo GitHub và đưa các file lên nhánh `main`, với `index.html` ở thư mục gốc.
2. Mở **Settings → Pages → Build and deployment**.
3. Chọn **Deploy from a branch → main → /(root)** rồi bấm **Save**.
4. Sau khi build thành công, mở đường dẫn trong **Settings → Pages**.

## Cập nhật dữ liệu

Ứng dụng dùng HTML, CSS và JavaScript thuần. Không cần cài gói để học. Dữ liệu nằm trong `words.js`. Mỗi mục giữ số thứ tự và trang PDF để đối chiếu. Cách đọc được ghép từ chữ in trên thẻ và furigana. Nghĩa, Hán Việt và câu ví dụ theo tài liệu gốc, chưa được duyệt ngôn ngữ độc lập.

Nếu cần trích lại từ chính PDF này, cài `PyMuPDF` rồi chạy:

```sh
python -m pip install pymupdf
python scripts/import_pdf.py /duong-dan/1000_tu_tieng_nhat_the_tu.pdf
```
