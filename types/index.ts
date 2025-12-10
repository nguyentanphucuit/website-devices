export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  categoryId: string;
  category?: Category;
  brand?: string;
  sku?: string;
  stock: number;
  rating?: number;
  reviewCount?: number;
  specifications?: Record<string, string>;
  tags?: string[];
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  author: string;
  publishedAt: Date;
  category: 'news' | 'knowledge' | 'review' | 'guide';
  tags?: string[];
  views?: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
};


