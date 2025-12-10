import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Quản Lý Đơn Hàng',
  description: 'Admin - Quản lý đơn hàng',
};

export default function AdminOrdersPage() {
  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customer: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      total: 2500000,
      status: 'pending',
      date: '2024-01-15',
    },
    {
      id: 'ORD-002',
      customer: 'Trần Thị B',
      email: 'tranthib@example.com',
      total: 4500000,
      status: 'processing',
      date: '2024-01-14',
    },
    {
      id: 'ORD-003',
      customer: 'Lê Văn C',
      email: 'levanc@example.com',
      total: 12000000,
      status: 'completed',
      date: '2024-01-13',
    },
    {
      id: 'ORD-004',
      customer: 'Phạm Thị D',
      email: 'phamthid@example.com',
      total: 8500000,
      status: 'shipped',
      date: '2024-01-12',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; className: string }> = {
      pending: { 
        label: 'Chờ xử lý', 
        className: 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-100' 
      },
      processing: { 
        label: 'Đang xử lý', 
        className: 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-100' 
      },
      shipped: { 
        label: 'Đã giao hàng', 
        className: 'bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-100' 
      },
      completed: { 
        label: 'Hoàn thành', 
        className: 'bg-green-100 text-green-800 border-green-300 hover:bg-green-100' 
      },
    };
    const statusInfo = statusMap[status] || { label: status, className: 'bg-gray-100 text-gray-700 border-gray-300' };
    return (
      <Badge variant="outline" className={statusInfo.className}>
        {statusInfo.label}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Quản Lý Đơn Hàng</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Theo dõi và quản lý tất cả đơn hàng</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Tìm kiếm đơn hàng..." className="pl-8" />
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto">Lọc</Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Đơn Hàng ({orders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-muted-foreground">Mã đơn:</span>
                      <span className="font-medium">{order.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Khách hàng:</span>
                      <span className="font-medium">{order.customer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="text-xs break-all">{order.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tổng tiền:</span>
                      <span className="font-medium">{formatCurrency(order.total)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Trạng thái:</span>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ngày đặt:</span>
                      <span className="text-xs">{order.date}</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="ghost" size="sm" className="w-full">
                        Xem chi tiết
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
                  <th className="text-left p-2">Mã Đơn</th>
                  <th className="text-left p-2">Khách Hàng</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Tổng Tiền</th>
                  <th className="text-left p-2">Trạng Thái</th>
                  <th className="text-left p-2">Ngày Đặt</th>
                  <th className="text-right p-2">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">{order.id}</td>
                    <td className="p-2">{order.customer}</td>
                    <td className="p-2 text-sm text-muted-foreground">{order.email}</td>
                    <td className="p-2 font-medium">{formatCurrency(order.total)}</td>
                    <td className="p-2">{getStatusBadge(order.status)}</td>
                    <td className="p-2 text-sm text-muted-foreground">{order.date}</td>
                    <td className="p-2">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          Xem chi tiết
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

