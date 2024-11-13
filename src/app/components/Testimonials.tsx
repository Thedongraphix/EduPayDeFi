'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Edupay has made paying for my child\'s tuition so much easier and faster. I love the convenience!'
  },
  {
    name: 'Michael Chen',
    role: 'Student',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'As an international student, Edupay has solved my payment problems. No more currency exchange headaches!'
  },
  {
    name: 'Emily Rodriguez',
    role: 'School Administrator',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Edupay has streamlined our payment process, reducing administrative work and improving cash flow.'
  }
]

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 p-6 rounded-[2rem] shadow-lg backdrop-blur-sm border border-white/20 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 font-light leading-relaxed">{testimonial.quote}</p>
              <div className="mt-6 flex justify-end">
                <svg className="w-8 h-8 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}