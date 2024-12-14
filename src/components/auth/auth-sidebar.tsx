/* eslint-disable */
"use client";

import { motion } from "framer-motion";

export function AuthSidebar() {
  return (
    <div className="relative hidden h-full flex-col bg-primary p-10 text-white lg:flex dark:border-r">
      <div className="absolute inset-0 bg-primary/90" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center text-lg font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        Edupay
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-20 mt-auto"
      >
        <blockquote className="space-y-2">
          <p className="text-lg">
            "Edupay has revolutionized how we handle educational payments. The platform's security and ease of use make it the perfect solution for our institution."
          </p>
          <footer className="text-sm">Sofia Davis - University Financial Director</footer>
        </blockquote>
      </motion.div>
    </div>
  );
}