import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { BlogCard } from '@/components/BlogCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blog';
import { ArrowRight, TrendingUp, Shield, Headphones } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Thiết Bị Công Nghệ
                <span className="text-primary block">Chất Lượng Cao</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Chuyên cung cấp camera an ninh, máy vi tính, linh kiện và thiết bị mạng 
                với dịch vụ chuyên nghiệp, bảo hành chính hãng.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/categories">
                    Xem Sản Phẩm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">
                    Tìm Hiểu Thêm
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Sản Phẩm Chất Lượng</h3>
                  <p className="text-sm text-muted-foreground">
                    Hàng chính hãng, bảo hành đầy đủ
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Bảo Hành Uy Tín</h3>
                  <p className="text-sm text-muted-foreground">
                    Bảo hành chính hãng, hỗ trợ 24/7
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Headphones className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Tư Vấn Miễn Phí</h3>
                  <p className="text-sm text-muted-foreground">
                    Đội ngũ chuyên gia tư vấn tận tình
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Giao Hàng Nhanh</h3>
                  <p className="text-sm text-muted-foreground">
                    Giao hàng toàn quốc, nhanh chóng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Danh Mục Sản Phẩm</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Khám phá các danh mục sản phẩm đa dạng của chúng tôi
              </p>
            </div>
            <Button variant="ghost" asChild className="w-full sm:w-auto">
              <Link href="/categories">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Sản Phẩm Nổi Bật</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Những sản phẩm được yêu thích nhất
              </p>
            </div>
            <Button variant="ghost" asChild className="w-full sm:w-auto">
              <Link href="/categories">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Tin Tức & Kiến Thức</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Cập nhật tin tức công nghệ và hướng dẫn hữu ích
              </p>
            </div>
            <Button variant="ghost" asChild className="w-full sm:w-auto">
              <Link href="/news">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
