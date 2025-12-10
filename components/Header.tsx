'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Search, Menu, User, LogOut, LogIn, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/categories';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { showToast } from '@/components/ui/toast';

export function Header() {
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const router = useRouter();
  const cartCount = getTotalItems();

  const handleLogout = () => {
    logout();
    showToast('Đã đăng xuất thành công', 'success');
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl font-bold text-primary">DeviceStore</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sản Phẩm</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/categories/${category.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {category.name}
                          </div>
                          {category.description && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/news" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Tin Tức
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Giới Thiệu
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/services" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Dịch Vụ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-[250px] pl-8"
                />
              </div>
            </div>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="cursor-pointer">
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/cart" className="cursor-pointer">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Giỏ hàng
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Đăng nhập
                </Link>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Trang Chủ
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.slug}`}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link
                    href="/news"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Tin Tức
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Giới Thiệu
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Dịch Vụ
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}


