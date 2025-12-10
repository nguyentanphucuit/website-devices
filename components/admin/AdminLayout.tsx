'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Menu,
  X,
  LogOut,
  Home,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { showToast } from '@/components/ui/toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Sản Phẩm',
    href: '/admin/products',
    icon: Package,
  },
  {
    title: 'Đơn Hàng',
    href: '/admin/orders',
    icon: ShoppingCart,
  },
  {
    title: 'Người Dùng',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'Cài Đặt',
    href: '/admin/settings',
    icon: Settings,
  },
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    showToast('Đã đăng xuất thành công', 'success');
    router.push('/');
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform duration-300 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User Info */}
          <div className="border-b p-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              // Dashboard chỉ active khi pathname chính xác là /admin
              // Các menu khác active khi pathname bắt đầu bằng href của chúng
              const isActive = item.href === '/admin' 
                ? pathname === '/admin'
                : pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t p-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Về Trang Chủ
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Đăng Xuất
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              {menuItems.find((item) => pathname === item.href || pathname.startsWith(item.href + '/'))?.title || 'Admin'}
            </h2>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}

