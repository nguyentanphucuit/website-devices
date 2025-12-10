'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { showToast } from '@/components/ui/toast';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 5000000 ? 0 : 50000; // Free shipping over 5M
  const total = subtotal + shipping;

  const handleIncreaseQuantity = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
      showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'success');
    }
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'success');
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Giỏ Hàng</h1>

      {items.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">Giỏ hàng trống</h2>
            <p className="text-muted-foreground mb-6">
              Bạn chưa có sản phẩm nào trong giỏ hàng
            </p>
            <Button asChild>
              <Link href="/categories">Tiếp tục mua sắm</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex gap-3">
                    <Link href={`/products/${item.product.slug}`} className="flex-shrink-0">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-md overflow-hidden">
                        {item.product.images && item.product.images[0] ? (
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Link href={`/products/${item.product.slug}`} className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm hover:text-primary transition-colors line-clamp-2 mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {formatCurrency(item.product.price)}
                          </p>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 flex-shrink-0"
                          onClick={() => handleRemove(item.product.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => handleDecreaseQuantity(item.product.id, item.quantity)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => handleIncreaseQuantity(item.product.id, item.quantity)}
                            disabled={item.product.stock !== undefined && item.quantity >= item.product.stock}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        <span className="font-semibold text-primary text-sm">
                          {formatCurrency(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Tóm Tắt Đơn Hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phí vận chuyển</span>
                  <span>{shipping === 0 ? 'Miễn phí' : formatCurrency(shipping)}</span>
                </div>
                {subtotal < 5000000 && (
                  <p className="text-xs text-muted-foreground">
                    Mua thêm {formatCurrency(5000000 - subtotal)} để được miễn phí vận chuyển
                  </p>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Tổng cộng</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <Button className="w-full" size="lg">
                  Thanh Toán
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/categories">Tiếp tục mua sắm</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
