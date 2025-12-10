import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { Calendar, Eye } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

const categoryLabels: Record<string, string> = {
  news: 'Tin Tức',
  knowledge: 'Kiến Thức',
  review: 'Đánh Giá',
  guide: 'Hướng Dẫn',
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/news/${post.slug}`}>
      <Card className="group p-0 overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
          <Badge className="absolute top-2 right-2">
            {categoryLabels[post.category] || post.category}
          </Badge>
        </div>
        <CardContent className="p-4 pt-0">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 h-[1.5rem] group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-1 h-[1.5rem]">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              {post.views && (
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{post.views}</span>
                </div>
              )}
            </div>
            <span className="text-primary font-medium">Đọc thêm →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}


