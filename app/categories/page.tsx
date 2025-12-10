import { Metadata } from 'next';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Danh Mục Sản Phẩm',
  description: 'Khám phá tất cả danh mục sản phẩm: Camera an ninh, Máy vi tính, Linh kiện, Thiết bị mạng',
};

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Danh Mục Sản Phẩm</h1>
        <p className="text-sm sm:text-lg text-muted-foreground">
          Chọn danh mục để xem các sản phẩm liên quan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}


