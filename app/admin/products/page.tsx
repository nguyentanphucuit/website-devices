import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Quản Lý Sản Phẩm',
  description: 'Admin - Quản lý sản phẩm',
};

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Quản Lý Sản Phẩm</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Quản lý danh sách sản phẩm của cửa hàng</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Thêm Sản Phẩm
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Tìm kiếm sản phẩm..." className="pl-8" />
              </div>
            </div>
            <Button variant="outline">Lọc</Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Sản Phẩm ({products.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-4">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="flex gap-3 mb-3">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      {product.images && product.images[0] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-2">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.brand}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Giá:</span>
                      <span className="font-medium">{formatCurrency(product.price)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tồn kho:</span>
                      <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                        {product.stock}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Trạng thái:</span>
                      {product.featured ? (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          Nổi bật
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Bình thường</span>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Sửa
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Xóa
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Hình Ảnh</th>
                  <th className="text-left p-2">Tên Sản Phẩm</th>
                  <th className="text-left p-2">Giá</th>
                  <th className="text-left p-2">Tồn Kho</th>
                  <th className="text-left p-2">Trạng Thái</th>
                  <th className="text-right p-2">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-muted/50">
                    <td className="p-2">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted">
                        {product.images && product.images[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-2">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.brand}</p>
                      </div>
                    </td>
                    <td className="p-2">
                      <div>
                        <p className="font-medium">{formatCurrency(product.price)}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">
                            {formatCurrency(product.originalPrice)}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-2">
                      <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-2">
                      {product.featured ? (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          Nổi bật
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Bình thường</span>
                      )}
                    </td>
                    <td className="p-2">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

