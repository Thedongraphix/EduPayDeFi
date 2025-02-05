"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CreditCard,
  Wallet,
  LogOut,
  X,
} from "lucide-react";
import { Web3ModalButton } from '@/context/web3modal';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
 
  {
    label: "Payments",
    icon: CreditCard,
    href: "/payments",
  },
  {
    label: "Wallets",
    icon: Wallet,
    href: "/wallets",
  },
 
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="h-full w-full bg-background">
      <div className="flex flex-col h-full border-r bg-background w-full md:w-64 fixed md:relative z-50">
        <div className="p-6 flex justify-between items-center">
          <Link href="/dashboard">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Edupay
            </h1>
          </Link>
          <button
            onClick={onClose}
            className="md:hidden p-2 rounded-lg hover:bg-accent/50 text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent/50",
                pathname === route.href 
                  ? "bg-accent text-primary" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <route.icon className="h-4 w-4" />
              <span>{route.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <Separator className="my-4" />
          
          {/* Web3Modal button for mobile */}
          <div className="mb-4 md:hidden">
            <Web3ModalButton />
          </div>

          {/* User Profile Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/images/avatar.jpg" alt="User" />
                <AvatarFallback>CO</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">

                <span className="text-sm font-medium">Chris Oketch</span>
                <span className="text-xs text-muted-foreground">user@example.com</span>
              </div>
            </div>
            
            <button 
              onClick={() => {/* Add sign out logic */}} 
              className="p-2 rounded-lg hover:bg-accent/50 text-muted-foreground hover:text-primary transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}