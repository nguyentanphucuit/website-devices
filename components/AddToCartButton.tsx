'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types';
import { showToast } from '@/components/ui/toast';

interface AddToCartButtonProps {
  product: Product;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function AddToCartButton({ product, size = 'default', className }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    showToast('Đã thêm sản phẩm vào giỏ hàng', 'success');
  };

  return (
    <Button
      size={size}
      className={className}
      onClick={handleAddToCart}
      disabled={product.stock === 0}
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      {product.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
    </Button>
  );
}

