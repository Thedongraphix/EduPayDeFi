'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const plans = [
  {
    name: 'Basic',
    price: '0',
    description: 'Perfect for small institutions or individual educators',
    features: [
      { name: 'Up to 5 transactions per month', included: true },
      { name: 'Basic support', included: true },
      { name: 'Standard processing time', included: true },
      { name: 'Single cryptocurrency support', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Advanced reporting', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false },
    ]
  },
  {
    name: 'Pro',
    price: '19.99',
    description: 'Ideal for growing educational institutions',
    features: [
      { name: 'Unlimited transactions', included: true },
      { name: 'Priority support', included: true },
      { name: 'Faster processing time', included: true },
      { name: 'Multi-cryptocurrency support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Advanced reporting', included: true },
      { name: 'API access', included: true },
      { name: 'Custom integrations', included: false },
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large institutions',
    features: [
      { name: 'Unlimited transactions', included: true },
      { name: 'Dedicated support team', included: true },
      { name: 'Instant processing', included: true },
      { name: 'Multi-cryptocurrency support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom reporting', included: true },
      { name: 'API access', included: true },
      { name: 'Custom integrations', included: true },
    ]
  }
]

export default function Pricing() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
        animate={{
          background: [
            'linear-gradient(to bottom right, #1e3a8a, #312e81, #5b21b6)',
            'linear-gradient(to bottom right, #5b21b6, #1e3a8a, #312e81)',
            'linear-gradient(to bottom right, #312e81, #5b21b6, #1e3a8a)',
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
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20">
                <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 p-6">
                  <CardTitle className="text-3xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-white/80 text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <p className="text-5xl font-bold mb-6 text-center">
                    ${plan.price}
                    {plan.price !== 'Custom' && <span className="text-2xl font-normal">/month</span>}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      >
                        {feature.included ? (
                          <Check className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-lg ${feature.included ? 'text-white' : 'text-white/60'}`}>{feature.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg py-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}