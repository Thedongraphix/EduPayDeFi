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
          <div className="flex h-screen overflow-hidden bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-shrink-0">
              <Sidebar />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto bg-muted/10">
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur p-4 border-b">
                  <Web3ModalButton />
                </div>
                <div className="container mx-auto px-4 py-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}