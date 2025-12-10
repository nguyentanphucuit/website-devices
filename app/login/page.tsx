'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { showToast } from '@/components/ui/toast';
import { Loader2, Shield, User } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const router = useRouter();

  const handleQuickLogin = async (type: 'admin' | 'user') => {
    setIsLoading(true);
    try {
      if (type === 'admin') {
        const success = await login('admin@devicestore.vn', 'admin123');
        if (success) {
          showToast('Đăng nhập admin thành công!', 'success');
          router.push('/admin');
          router.refresh();
        }
      } else {
        const success = await login('user@example.com', 'user123');
        if (success) {
          showToast('Đăng nhập thành công!', 'success');
          router.push('/');
          router.refresh();
        }
      }
    } catch (error) {
      showToast('Có lỗi xảy ra, vui lòng thử lại', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const success = await login(email, password);
        if (success) {
          showToast('Đăng nhập thành công!', 'success');
          router.push('/');
          router.refresh();
        } else {
          showToast('Email hoặc mật khẩu không đúng', 'error');
        }
      } else {
        if (!name.trim()) {
          showToast('Vui lòng nhập tên của bạn', 'error');
          setIsLoading(false);
          return;
        }
        const success = await register(email, password, name, phone || undefined);
        if (success) {
          showToast('Đăng ký thành công!', 'success');
          router.push('/');
          router.refresh();
        } else {
          showToast('Email đã được sử dụng', 'error');
        }
      }
    } catch (error) {
      showToast('Có lỗi xảy ra, vui lòng thử lại', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl sm:text-2xl font-bold text-center">
              {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
            </CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              {isLogin
                ? 'Nhập thông tin để đăng nhập vào tài khoản của bạn'
                : 'Tạo tài khoản mới để bắt đầu mua sắm'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và Tên</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại (tùy chọn)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  isLogin ? 'Đăng Nhập' : 'Đăng Ký'
                )}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              {isLogin ? (
                <>
                  Chưa có tài khoản?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-primary hover:underline"
                  >
                    Đăng ký ngay
                  </button>
                </>
              ) : (
                <>
                  Đã có tài khoản?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-primary hover:underline"
                  >
                    Đăng nhập
                  </button>
                </>
              )}
            </div>
            {isLogin && (
              <div className="mt-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleQuickLogin('admin')}
                    disabled={isLoading}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    <span className="text-xs sm:text-sm">Đăng nhập Admin</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleQuickLogin('user')}
                    disabled={isLoading}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span className="text-xs sm:text-sm">Đăng nhập Khách</span>
                  </Button>
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-xs font-semibold mb-2">Tài khoản demo:</p>
                  <p className="text-xs break-all">Admin: admin@devicestore.vn / admin123</p>
                  <p className="text-xs break-all">Khách: user@example.com / user123</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

