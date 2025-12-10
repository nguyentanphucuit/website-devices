# Hướng Dẫn Setup

## Yêu Cầu

- Node.js 18+ 
- npm hoặc yarn

## Cài Đặt

```bash
# Cài đặt dependencies
npm install
```

## Chạy Development

```bash
# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Build Production

```bash
# Build cho production
npm run build

# Chạy production server
npm start
```

## Cấu Trúc Dữ Liệu

### Thêm Sản Phẩm Mới

Chỉnh sửa file `data/products.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Tên sản phẩm',
  slug: 'ten-san-pham',
  description: 'Mô tả chi tiết',
  price: 1000000,
  // ... các trường khác
}
```

### Thêm Danh Mục

Chỉnh sửa file `data/categories.ts`

### Thêm Bài Viết Blog

Chỉnh sửa file `data/blog.ts`

## Hình Ảnh

Đặt hình ảnh sản phẩm vào thư mục `public/images/products/`
Đặt hình ảnh danh mục vào thư mục `public/images/categories/`

Hoặc sử dụng URL từ CDN/image hosting service.

## SEO

- Metadata đã được cấu hình cho tất cả các trang
- Sitemap tự động tại `/sitemap.xml`
- Robots.txt tại `/robots.txt`

Cập nhật `baseUrl` trong `app/sitemap.ts` và `app/robots.ts` khi deploy.

## Mở Rộng

### Kết Nối Database

Thay thế dữ liệu mẫu trong thư mục `data/` bằng API calls hoặc database queries.

### State Management

Thêm state management (Zustand, Redux, Context API) cho:
- Giỏ hàng
- User authentication
- Product filters

### Payment Gateway

Tích hợp payment gateway (Stripe, PayPal, vnpay, etc.) vào trang giỏ hàng.

## Troubleshooting

### Lỗi Image

Nếu gặp lỗi với Next.js Image component:
- Kiểm tra `next.config.ts` đã cấu hình `remotePatterns`
- Đảm bảo hình ảnh có URL hợp lệ hoặc nằm trong thư mục `public/`

### Lỗi Build

```bash
# Xóa cache và rebuild
rm -rf .next
npm run build
```


