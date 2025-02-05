"use client";

import { Toaster } from '@/components/ui/sonner';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from '@/components/sidebar';
import Header from '@/components/headers';
import { useState } from 'react';


// Note: metadata export won't work in a client component
// Move this to a separate layout file if needed
// export const metadata: Metadata = {
//   title: 'Edupay - Crypto School Payment System',
//   description: 'Modern crypto payment solution for educational institutions',
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden fixed left-4 top-4 z-50">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 z-50">
          <Sidebar onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main content */} 
      <div className="flex-1 flex flex-col md:pl-64">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    
      <Toaster />
    </div>
  );
}