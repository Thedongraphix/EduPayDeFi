'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Globe, Coins, Users, BarChart } from 'lucide-react'
import { FeatureCard } from './FeatureCard'


const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'End-to-end encryption ensures your payments are always protected.',
    ctaText: 'Learn More',
    iconColor: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'Instant Payments',
    description: 'Experience lightning-fast transactions processed within minutes.',
    ctaText: 'Try It Now',
    iconColor: 'text-yellow-400'
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Pay tuition from anywhere without currency exchange hassles.',
    ctaText: 'Explore',
    iconColor: 'text-blue-400'
  },
  {
    icon: Coins,
    title: 'Cost-Effective',
    description: 'Reduce transaction fees compared to traditional payment methods.',
    ctaText: 'Calculate Savings',
    iconColor: 'text-amber-400'
  },
  {
    icon: Users,
    title: 'User-Friendly Interface',
    description: 'Our intuitive platform is designed for all levels of tech-savviness.',
    ctaText: 'See Demo',
    iconColor: 'text-pink-400'
  },
  {
    icon: BarChart,
    title: 'Detailed Analytics',
    description: 'Gain insights into your payment history with comprehensive analytics.',
    ctaText: 'View Sample',
    iconColor: 'text-purple-400'
  }
]

export default function Features() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        animate={{
          background: [
            'linear-gradient(to bottom right, #1e3a8a, #5b21b6, #312e81)',
            'linear-gradient(to bottom right, #312e81, #1e3a8a, #5b21b6)',
            'linear-gradient(to bottom right, #5b21b6, #312e81, #1e3a8a)',
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
          Edupay Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                ctaText={feature.ctaText}
                iconColor={feature.iconColor}
                onCtaClick={() => console.log(`Clicked on ${feature.title}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}