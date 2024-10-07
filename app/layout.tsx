import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import NextThemeProvider from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SICETAK',
  description: 'si cetak'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`} suppressHydrationWarning>
        <NextThemeProvider>
          <NextTopLoader showSpinner={false} />
          <Toaster />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
