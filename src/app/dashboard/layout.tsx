import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Sidebar from '@/components/sidebar';
import Header from '@/components/headers';
import { Web3ModalButton } from '@/context/web3modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edupay - Crypto School Payment System',
  description: 'Modern crypto payment solution for educational institutions',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto bg-muted/10">
                {/* Place the Web3Modal button */}
                <div className="p-4">
                  <Web3ModalButton />
                </div>
                {children}
              </main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
