import { Metadata } from 'next';
import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tin Tức & Kiến Thức',
  description: 'Cập nhật tin tức công nghệ, hướng dẫn sử dụng, đánh giá sản phẩm và kiến thức hữu ích về camera an ninh, máy tính, thiết bị mạng',
};

const categoryLabels: Record<string, string> = {
  news: 'Tin Tức',
  knowledge: 'Kiến Thức',
  review: 'Đánh Giá',
  guide: 'Hướng Dẫn',
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category: activeCategory } = await searchParams;
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));
  
  const filteredPosts = activeCategory
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Tin Tức & Kiến Thức</h1>
        <p className="text-sm sm:text-lg text-muted-foreground">
          Cập nhật tin tức công nghệ và hướng dẫn hữu ích
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        <Button 
          variant={!activeCategory ? "default" : "outline"} 
          size="sm" 
          asChild
          className={!activeCategory ? "bg-primary text-primary-foreground" : ""}
        >
          <Link href="/news">Tất cả</Link>
        </Button>
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={activeCategory === category ? "default" : "outline"} 
            size="sm" 
            asChild
            className={activeCategory === category ? "bg-primary text-primary-foreground" : ""}
          >
            <Link href={`/news?category=${category}`}>
              {categoryLabels[category] || category}
            </Link>
          </Button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}


