'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { showToast } from '@/components/ui/toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showToast('Đã thêm sản phẩm vào giỏ hàng', 'success');
  };
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group p-0 overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          {product.images && product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-primary">Nổi bật</Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              -{discount}%
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4 pt-0">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold mb-2 line-clamp-2 h-[3.5rem] hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.shortDescription && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-1 h-[1.5rem]">
            {product.shortDescription}
          </p>
        )}
        {product.rating && (
          <div className="flex items-center space-x-1 mb-3">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            {product.reviewCount && (
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-primary">
              {formatCurrency(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatCurrency(product.originalPrice)}
              </p>
            )}
          </div>
        </div>
        <Button 
          className="w-full mt-4" 
          size="sm"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
        </Button>
      </CardContent>
   
    </Card>
  );
}


