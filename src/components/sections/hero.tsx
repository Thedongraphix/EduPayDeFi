/*eslint-disable*/

'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Shield } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(45deg,#4f46e5_0%,#06b6d4_100%)]"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Add floating geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Enhanced badge 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-sm border border-blue-100 dark:border-blue-800"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
                Revolutionizing Education Payments
              </span>
            </motion.div>
            */}

            {/* Enhanced heading with animated gradient */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-300% dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400">
                Transform School Payments
              </span>{" "}
              <br className="hidden md:block" />
              with Crypto
            </h1>

            {/* Enhanced description */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Secure, instant, and borderless payments for educational institutions.
              <span className="block mt-2 text-base">Join over 1000+ schools already using our platform.</span>
            </p>

            {/* Enhanced CTA section with real avatar images */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80"
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                      <Image
                        src={src}
                        alt={`User ${i + 1}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </span>
                <span>Trusted by 1000+ institutions</span>
              </div>
            </div>
          </motion.div>
          {/* Adjusted image section with better mobile responsiveness */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-6 max-w-[80%] sm:max-w-[75%] md:max-w-[80%] mx-auto lg:mx-0 mt-12 mb-12 lg:my-0"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/images/happysmiling.jpg"
                alt="Students using mobile payment"
                width={800}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Adjusted floating elements positioning for better mobile visibility */}
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
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-xs sm:text-sm font-medium">Instant Payments</span>
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
              className="absolute -top-4 right-4 sm:-top-6 sm:right-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span className="text-xs sm:text-sm font-medium">Secure & Safe</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}