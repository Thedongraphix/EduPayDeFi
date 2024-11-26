'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Zap, Globe, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Bank-grade security with blockchain technology ensuring safe payments",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "No more waiting for bank clearance. Payments processed in minutes",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Pay school fees from anywhere in the world without currency barriers",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Make payments anytime, any day, without banking hours restrictions",
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose EduPay?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of educational payments with our innovative crypto solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}