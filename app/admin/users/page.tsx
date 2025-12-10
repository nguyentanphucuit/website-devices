import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quản Lý Người Dùng',
  description: 'Admin - Quản lý người dùng',
};

export default function AdminUsersPage() {
  // Mock users data
  const users = [
    {
      id: '1',
      name: 'Admin',
      email: 'admin@devicestore.vn',
      role: 'admin',
      phone: '0123456789',
      createdAt: '2024-01-01',
    },
    {
      id: '2',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      role: 'user',
      phone: '0987654321',
      createdAt: '2024-01-10',
    },
    {
      id: '3',
      name: 'Trần Thị B',
      email: 'tranthib@example.com',
      role: 'user',
      phone: '0912345678',
      createdAt: '2024-01-12',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Quản Lý Người Dùng</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Quản lý tài khoản người dùng</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Tìm kiếm người dùng..." className="pl-8" />
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto">Lọc</Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Người Dùng ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-4">
            {users.map((user) => (
              <Card key={user.id}>
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-muted-foreground">Tên:</span>
                      <span className="font-medium text-right">{user.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="text-xs break-all">{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Số điện thoại:</span>
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Vai trò:</span>
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role === 'admin' ? 'Quản trị viên' : 'Người dùng'}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ngày tạo:</span>
                      <span className="text-xs">{user.createdAt}</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="ghost" size="sm" className="w-full">
                        Chỉnh sửa
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Tên</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Số Điện Thoại</th>
                  <th className="text-left p-2">Vai Trò</th>
                  <th className="text-left p-2">Ngày Tạo</th>
                  <th className="text-right p-2">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2 text-sm text-muted-foreground">{user.phone}</td>
                    <td className="p-2">
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role === 'admin' ? 'Quản trị viên' : 'Người dùng'}
                      </Badge>
                    </td>
                    <td className="p-2 text-sm text-muted-foreground">{user.createdAt}</td>
                    <td className="p-2">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          Chỉnh sửa
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

