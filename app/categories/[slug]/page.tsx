import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { categories as categoriesData } from '@/data/categories';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData.find(c => c.slug === slug);
  
  if (!category) {
    return {
      title: 'Danh Mục Không Tìm Thấy',
    };
  }

  return {
    title: category.name,
    description: category.description || `Xem tất cả sản phẩm ${category.name}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categoriesData.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        {category.description && (
          <p className="text-lg text-muted-foreground">{category.description}</p>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          Tìm thấy {categoryProducts.length} sản phẩm
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Chưa có sản phẩm nào trong danh mục này.</p>
        </div>
      )}
    </div>
  );
}

