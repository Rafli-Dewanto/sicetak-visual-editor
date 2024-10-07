'use client';

import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'SI Cetak',
//   description: ''
// };

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
