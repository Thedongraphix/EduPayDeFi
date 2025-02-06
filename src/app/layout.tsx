import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import PrivyProviderWrapper from '@/components/providers/PrivyProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("antialiased", plusJakartaSans.variable)}>
      <body className={cn("min-h-screen bg-background font-sans")}>
        <PrivyProviderWrapper>
          {children}
        </PrivyProviderWrapper>
      </body>
    </html>
  );
}