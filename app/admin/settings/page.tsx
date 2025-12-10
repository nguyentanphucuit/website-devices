import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Cài Đặt',
  description: 'Admin - Cài đặt hệ thống',
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Cài Đặt</h1>
        <p className="text-muted-foreground">Quản lý cài đặt hệ thống</p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Cài Đặt Chung</CardTitle>
          <CardDescription>Thông tin cơ bản về cửa hàng</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="store-name">Tên Cửa Hàng</Label>
            <Input id="store-name" defaultValue="DeviceStore" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-email">Email</Label>
            <Input id="store-email" type="email" defaultValue="contact@devicestore.vn" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-phone">Số Điện Thoại</Label>
            <Input id="store-phone" defaultValue="0123456789" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-address">Địa Chỉ</Label>
            <Input id="store-address" defaultValue="123 Đường ABC, Quận XYZ, TP.HCM" />
          </div>
          <Button>Lưu Thay Đổi</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* Shipping Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Cài Đặt Vận Chuyển</CardTitle>
          <CardDescription>Quản lý phí vận chuyển</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="shipping-fee">Phí Vận Chuyển Mặc Định</Label>
            <Input id="shipping-fee" type="number" defaultValue="50000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="free-shipping">Miễn Phí Vận Chuyển Từ</Label>
            <Input id="free-shipping" type="number" defaultValue="5000000" />
          </div>
          <Button>Lưu Thay Đổi</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* System Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Cài Đặt Hệ Thống</CardTitle>
          <CardDescription>Quản lý cài đặt hệ thống</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Bảo Trì Hệ Thống</Label>
              <p className="text-sm text-muted-foreground">Tắt website để bảo trì</p>
            </div>
            <Button variant="outline">Bật/Tắt</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Xóa Cache</Label>
              <p className="text-sm text-muted-foreground">Xóa cache hệ thống</p>
            </div>
            <Button variant="outline">Xóa Cache</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

