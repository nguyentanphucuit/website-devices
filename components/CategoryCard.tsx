import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="group p-0 overflow-hidden hover:shadow-lg transition-all hover:scale-105">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {category.image ? (
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              {category.name}
            </div>
          )}
        </div>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1 line-clamp-2 h-[3.5rem]">{category.name}</h3>
              {category.description && (
                <p className="text-sm text-muted-foreground line-clamp-1 h-[1.5rem]">
                  {category.description}
                </p>
              )}
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}


