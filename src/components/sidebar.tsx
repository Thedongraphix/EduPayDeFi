"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  GraduationCap,
  CreditCard,
  Users,
  Settings,
  Wallet,
  BookOpen,
} from "lucide-react";
import { Web3ModalButton } from '@/context/web3modal';

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Courses",
    icon: BookOpen,
    href: "/courses",
  },
  {
    label: "Students",
    icon: Users,
    href: "/students",
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
  {
    label: "Faculty",
    icon: GraduationCap,
    href: "/faculty",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full border-r bg-background">
      <div className="p-6">
        <Link href="/dashboard">
          <h1 className="text-xl font-bold">Edupay</h1>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === route.href 
                ? "bg-accent text-accent-foreground" 
                : "text-muted-foreground"
            )}
          >
            <route.icon className="h-4 w-4" />
            <span>{route.label}</span>
          </Link>
        ))}
      </nav>

      {/* Show Web3Modal button in mobile sidebar */}
      <div className="p-4 md:hidden">
        <Web3ModalButton />
      </div>
    </div>
  );
}