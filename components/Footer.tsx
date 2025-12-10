import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Về Chúng Tôi</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Chuyên cung cấp camera an ninh, máy vi tính, linh kiện và thiết bị mạng chất lượng cao với dịch vụ chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  Tin Tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Danh Mục</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/categories/camera-an-ninh" className="text-muted-foreground hover:text-primary">
                  Camera An Ninh
                </Link>
              </li>
              <li>
                <Link href="/categories/may-vi-tinh" className="text-muted-foreground hover:text-primary">
                  Máy Vi Tính
                </Link>
              </li>
              <li>
                <Link href="/categories/linh-kien-may-tinh" className="text-muted-foreground hover:text-primary">
                  Linh Kiện Máy Tính
                </Link>
              </li>
              <li>
                <Link href="/categories/thiet-bi-mang" className="text-muted-foreground hover:text-primary">
                  Thiết Bị Mạng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Đường ABC, Quận XYZ, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Link href="tel:0123456789" className="text-muted-foreground hover:text-primary">
                  0123 456 789
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Link href="mailto:info@devicestore.vn" className="text-muted-foreground hover:text-primary">
                  info@devicestore.vn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DeviceStore. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}


