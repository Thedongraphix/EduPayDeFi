"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Revolutionizing School Payments with Crypto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure, instant, and borderless payments for educational institutions. Join the future of school fee transactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedGradientBorder className="p-6">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000"
                alt="Students using EduPay"
                className="rounded-lg w-full"
                width={1000}
                height={667}
                layout="intrinsic"
              />
            </AnimatedGradientBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
