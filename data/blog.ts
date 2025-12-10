import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Hướng dẫn chọn camera an ninh phù hợp cho gia đình',
    slug: 'huong-dan-chon-camera-an-ninh-phu-hop-cho-gia-dinh',
    excerpt: 'Bài viết hướng dẫn chi tiết cách chọn camera an ninh phù hợp với nhu cầu và ngân sách của gia đình bạn.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=675&fit=crop',
    content: `
# Hướng dẫn chọn camera an ninh phù hợp cho gia đình

Camera an ninh đã trở thành thiết bị không thể thiếu trong mỗi gia đình hiện đại. Tuy nhiên, với nhiều loại camera khác nhau trên thị trường, việc chọn lựa có thể gây bối rối.

## 1. Xác định nhu cầu sử dụng

Trước khi mua camera, bạn cần xác định rõ mục đích sử dụng:
- Giám sát trong nhà hay ngoài trời?
- Quan sát ban ngày hay ban đêm?
- Cần phát hiện chuyển động thông minh?
- Cần tích hợp với hệ thống nhà thông minh?

## 2. Độ phân giải

Độ phân giải quyết định chất lượng hình ảnh:
- **2MP (1080p)**: Phù hợp cho không gian nhỏ, ngân sách hạn chế
- **4MP (1440p)**: Cân bằng giữa chất lượng và giá cả, phổ biến nhất
- **8MP (4K)**: Chất lượng cao, phù hợp khu vực quan trọng

## 3. Tầm quan sát ban đêm

Camera với hồng ngoại (IR) hoặc ColorVu cho phép quan sát ban đêm:
- **IR**: Hình ảnh đen trắng, tầm quan sát 20-30m
- **ColorVu**: Hình ảnh màu sắc, cần ánh sáng môi trường

## 4. Kết nối và lưu trữ

- **Camera IP**: Kết nối qua mạng, lưu trữ cloud hoặc NVR
- **Camera WiFi**: Dễ lắp đặt, phù hợp gia đình
- **Camera có dây**: Ổn định hơn, phù hợp hệ thống lớn

## 5. Tính năng AI

Camera hiện đại thường có AI:
- Phát hiện người, xe
- Nhận diện khuôn mặt
- Phát hiện xâm nhập
- Báo động thông minh

## Kết luận

Chọn camera phù hợp với nhu cầu và ngân sách của bạn. Nếu cần tư vấn, hãy liên hệ với chúng tôi!
    `,
    author: 'Admin',
    publishedAt: new Date('2024-01-15'),
    category: 'guide',
    tags: ['camera', 'an ninh', 'hướng dẫn'],
    views: 1250,
  },
  {
    id: '2',
    title: 'So sánh CPU Intel thế hệ 14 vs AMD Ryzen 7000',
    slug: 'so-sanh-cpu-intel-gen-14-vs-amd-ryzen-7000',
    excerpt: 'So sánh chi tiết giữa CPU Intel thế hệ 14 và AMD Ryzen 7000 để giúp bạn chọn lựa phù hợp.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop',
    content: `
# So sánh CPU Intel thế hệ 14 vs AMD Ryzen 7000

Cuộc chiến giữa Intel và AMD tiếp tục với thế hệ CPU mới nhất. Hãy cùng so sánh để tìm ra lựa chọn tốt nhất.

## Hiệu năng

### Intel Core 14th Gen
- Hiệu năng single-core mạnh mẽ
- Tối ưu cho gaming
- Hỗ trợ DDR5 và PCIe 5.0

### AMD Ryzen 7000
- Hiệu năng multi-core vượt trội
- Tối ưu cho render và đa nhiệm
- Kiến trúc Zen 4 mới

## Giá cả

Intel thường có giá cao hơn một chút, nhưng AMD cung cấp hiệu năng tốt hơn trên mỗi đồng.

## Kết luận

Chọn Intel nếu bạn chủ yếu gaming, chọn AMD nếu bạn cần hiệu năng đa nhiệm.
    `,
    author: 'Tech Review',
    publishedAt: new Date('2024-01-20'),
    category: 'review',
    tags: ['cpu', 'intel', 'amd', 'so sánh'],
    views: 2100,
  },
  {
    id: '3',
    title: 'WiFi 6 vs WiFi 6E: Sự khác biệt là gì?',
    slug: 'wifi-6-vs-wifi-6e-su-khac-biet',
    excerpt: 'Tìm hiểu sự khác biệt giữa WiFi 6 và WiFi 6E, và khi nào nên nâng cấp.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop',
    content: `
# WiFi 6 vs WiFi 6E: Sự khác biệt là gì?

WiFi 6E là phiên bản mở rộng của WiFi 6 với băng tần 6GHz mới.

## WiFi 6
- Băng tần: 2.4GHz và 5GHz
- Tốc độ: Lên đến 9.6Gbps
- Phổ biến rộng rãi

## WiFi 6E
- Băng tần: 2.4GHz, 5GHz và **6GHz** (mới)
- Tốc độ: Tương tự WiFi 6
- Ít tắc nghẽn hơn nhờ băng tần mới

## Khi nào nên nâng cấp?

Nâng cấp lên WiFi 6E nếu:
- Bạn sống trong khu vực đông đúc
- Cần băng thông cao
- Thiết bị hỗ trợ WiFi 6E

## Kết luận

WiFi 6E mang lại trải nghiệm tốt hơn trong môi trường đông đúc.
    `,
    author: 'Network Expert',
    publishedAt: new Date('2024-01-25'),
    category: 'knowledge',
    tags: ['wifi', 'mạng', 'công nghệ'],
    views: 980,
  },
  {
    id: '4',
    title: 'Tin tức: NVIDIA ra mắt RTX 50 series',
    slug: 'tin-tuc-nvidia-ra-mat-rtx-50-series',
    excerpt: 'NVIDIA chính thức ra mắt dòng card đồ họa RTX 50 series với hiệu năng vượt trội.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop',
    content: `
# NVIDIA ra mắt RTX 50 series

NVIDIA vừa chính thức công bố dòng card đồ họa RTX 50 series với nhiều cải tiến đáng kể.

## Thông số kỹ thuật

- Kiến trúc Blackwell mới
- Hiệu năng tăng 2x so với RTX 40 series
- Hỗ trợ DLSS 4.0
- Tiết kiệm điện năng hơn

## Giá bán dự kiến

RTX 5090: $1,999
RTX 5080: $1,299
RTX 5070: $799

## Kết luận

RTX 50 series hứa hẹn mang lại trải nghiệm gaming và render tuyệt vời.
    `,
    author: 'News Team',
    publishedAt: new Date('2024-02-01'),
    category: 'news',
    tags: ['nvidia', 'rtx', 'tin tức'],
    views: 3500,
  },
];


