/*eslint-disable*/

'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-background dark:to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(45deg,#4f46e5_0%,#06b6d4_100%)] opacity-10"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-6"
            >
              Revolutionizing Education Payments
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Transform School Payments
              </span>{" "}
              with Crypto
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Secure, instant, and borderless payments for educational institutions. Join the future of school fee transactions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/happysmiling.jpg"
                alt="Students learning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Instant Payments</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium">Secure Transactions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}