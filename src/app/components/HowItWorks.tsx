'use client'

import { motion } from 'framer-motion'
import { Wallet, School, CreditCard, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

const steps = [
  {
    icon: Wallet,
    title: 'Connect Your Wallet',
    description: 'Link your preferred cryptocurrency wallet to your Edupay account.',
    color: 'from-blue-500 to-blue-700'
  },
  {
    icon: School,
    title: 'Choose Your Institution',
    description: 'Select your school or educational institution from our extensive list.',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: CreditCard,
    title: 'Enter Payment Details',
    description: 'Input the payment amount and any additional required information.',
    color: 'from-green-500 to-green-700'
  },
  {
    icon: CheckCircle,
    title: 'Confirm and Send Payment',
    description: 'Review the transaction details and confirm the payment.',
    color: 'from-yellow-500 to-yellow-700'
  }
]

export default function HowItWorks() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-[0rem]"
        animate={{
          background: [
            'linear-gradient(to bottom right, #312e81, #5b21b6, #1e3a8a)',
            'linear-gradient(to bottom right, #1e3a8a, #312e81, #5b21b6)',
            'linear-gradient(to bottom right, #5b21b6, #1e3a8a, #312e81)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          How Edupay Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-none text-white h-full rounded-[2rem] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 transform transition-all duration-300 hover:rotate-12`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}