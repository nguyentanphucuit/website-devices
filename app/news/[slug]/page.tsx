import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import { Calendar, Eye, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Bài Viết Không Tìm Thấy',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

const categoryLabels: Record<string, string> = {
  news: 'Tin Tức',
  knowledge: 'Kiến Thức',
  review: 'Đánh Giá',
  guide: 'Hướng Dẫn',
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/news">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Link>
      </Button>

      <article>
        <div className="mb-6">
          <Badge className="mb-4">
            {categoryLabels[post.category] || post.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <span>•</span>
            <span>Tác giả: {post.author}</span>
            {post.views && (
              <>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} lượt xem</span>
                </div>
              </>
            )}
          </div>
        </div>

        {post.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="whitespace-pre-line">{post.content}</div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}


