import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import { Star, Check, Truck, Shield } from 'lucide-react';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return {
      title: 'Sản Phẩm Không Tìm Thấy',
    };
  }

  return {
    title: product.name,
    description: product.shortDescription || product.description,
    openGraph: {
      title: product.name,
      description: product.shortDescription || product.description,
      images: product.images && product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted mb-4">
            {product.images && product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
            {discount > 0 && (
              <Badge variant="destructive" className="absolute top-4 right-4 text-lg px-3 py-1">
                -{discount}%
              </Badge>
            )}
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12.5vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            {product.brand && (
              <Badge variant="outline" className="mb-2">
                {product.brand}
              </Badge>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>
            {product.rating && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                {product.reviewCount && (
                  <span className="text-muted-foreground">
                    ({product.reviewCount} đánh giá)
                  </span>
                )}
              </div>
            )}
          </div>

          <Separator className="my-6" />

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold text-primary">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Thông số kỹ thuật</h2>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stock & Actions */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-muted-foreground">Tình trạng:</span>
              {product.stock > 0 ? (
                <Badge variant="default" className="bg-green-500">
                  <Check className="h-3 w-3 mr-1" />
                  Còn hàng ({product.stock} sản phẩm)
                </Badge>
              ) : (
                <Badge variant="destructive">Hết hàng</Badge>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton product={product} size="lg" className="flex-1" />
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Mua ngay
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Giao hàng nhanh</p>
                <p className="text-xs text-muted-foreground">1-2 ngày</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Bảo hành chính hãng</p>
                <p className="text-xs text-muted-foreground">12-36 tháng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


