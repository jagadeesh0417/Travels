'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const checked = useRef(false);

  useEffect(() => {
    if (checked.current) return;
    checked.current = true;
    const auth = localStorage.getItem('admin_auth');
    if (!auth) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <AdminSidebar />
      <main className="lg:ml-64 pt-6 pb-24 lg:pb-8 px-4 md:px-8">
        {children}
      </main>
    </div>
  );
}
