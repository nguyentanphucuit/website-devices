import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard',
};

export default function AdminDashboard() {
  // Mock data - in production, this would come from API
  const stats = [
    {
      title: 'Tổng Sản Phẩm',
      value: '284',
      change: '+12%',
      trend: 'up',
      icon: Package,
    },
    {
      title: 'Đơn Hàng',
      value: '1,234',
      change: '+8%',
      trend: 'up',
      icon: ShoppingCart,
    },
    {
      title: 'Người Dùng',
      value: '5,678',
      change: '+15%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Doanh Thu',
      value: '2.5 tỷ',
      change: '-3%',
      trend: 'down',
      icon: DollarSign,
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Tổng quan về cửa hàng của bạn</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`flex items-center text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  <TrendIcon className="mr-1 h-3 w-3" />
                  {stat.change} so với tháng trước
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Đơn Hàng Gần Đây</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="text-sm font-medium">Đơn hàng #{1000 + i}</p>
                    <p className="text-xs text-muted-foreground">Khách hàng: Nguyễn Văn {i}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">2.500.000đ</p>
                    <p className="text-xs text-muted-foreground">Đã giao</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sản Phẩm Bán Chạy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="text-sm font-medium">Sản phẩm {i}</p>
                    <p className="text-xs text-muted-foreground">Đã bán: {50 + i * 10} sản phẩm</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{5 + i * 2}.000.000đ</p>
                    <p className="text-xs text-muted-foreground">Doanh thu</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

