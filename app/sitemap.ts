import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devicestore.vn';

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: product.updatedAt || product.createdAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    ...categoryUrls,
    ...productUrls,
    ...blogUrls,
  ];
}


