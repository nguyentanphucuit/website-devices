import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Trang không tìm thấy</h2>
      <p className="text-muted-foreground mb-8">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Về trang chủ
        </Link>
      </Button>
    </div>
  );
}


