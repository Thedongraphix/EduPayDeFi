'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What cryptocurrencies does Edupay support?',
    answer: 'Edupay currently supports Bitcoin, Ethereum, and several other major cryptocurrencies. We\'re constantly expanding our list of supported currencies.'
  },
  {
    question: 'How secure are transactions on Edupay?',
    answer: 'Edupay uses state-of-the-art encryption and security measures to ensure all transactions are safe and secure. We also employ multi-factor authentication for added protection.'
  },
  {
    question: 'Can I get a refund for a payment made through Edupay?',
    answer: 'Refund policies are set by the educational institutions. Please contact your school\'s administration for information about their refund policy.'
  },
  {
    question: 'How long does it take for a payment to be processed?',
    answer: 'Most payments are processed instantly. However, depending on network congestion, it may take up to an hour for the transaction to be fully confirmed.'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white bg-opacity-10 rounded-lg shadow backdrop-blur-sm"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white bg-opacity-5 px-4 pb-4 rounded-b-lg"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}