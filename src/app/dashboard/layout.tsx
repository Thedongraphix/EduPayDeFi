import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from '@/components/sidebar';
import Header from '@/components/headers';

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
          <div className="flex min-h-screen bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col">
              <div className="flex flex-col flex-grow border-r">
                <Sidebar />
              </div>
            </div>

            {/* Mobile Sidebar */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden fixed left-4 top-3 z-50 hover:bg-background/50 backdrop-blur-sm"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <Sidebar />
              </SheetContent>
            </Sheet>

            {/* Main Content */}
            <div className="flex flex-1 flex-col min-h-screen w-full">
              <Header />
              <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-8">
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