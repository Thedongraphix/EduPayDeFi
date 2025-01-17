'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Zap, Globe, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Bank-grade security with blockchain technology ensuring safe payments",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "No more waiting for bank clearance. Payments processed in minutes",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Pay school fees from anywhere in the world without currency barriers",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Make payments anytime, any day, without banking hours restrictions",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-background dark:to-background" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent">
            Why Choose EduPay?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of educational payments with our innovative crypto solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="border-none shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mt-8 text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}