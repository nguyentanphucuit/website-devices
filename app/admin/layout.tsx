'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Loader2 } from 'lucide-react';

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/login');
      } else if (!isAdmin) {
        router.push('/');
      }
    }
  }, [isAuthenticated, isAdmin, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return <AdminLayout>{children}</AdminLayout>;
}

