'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovate School Payments with Crypto</h1>
          <p className="text-xl mb-8">Secure, fast, and convenient payments for educational institutions.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-lg overflow-hidden">
            <Image
              src="/images/student.png"
              alt="Edupay Dashboard"
              width={400}
              height={400}
              className="rounded-lg md:rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-102 object-cover w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}