'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdminRoute && <Header />}
      <main className="flex-1">{children}</main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

