'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Award } from "lucide-react";

const trustFactors = [
  {
    icon: Shield,
    title: "Regulated & Compliant",
    description: "Operating under strict financial regulations to ensure your peace of mind",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and security protocols protect every transaction",
  },
  {
    icon: Award,
    title: "Certified Platform",
    description: "Recognized and certified by leading educational institutions worldwide",
  },
];

export function TrustIndicators() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-none shadow-md bg-card/50 backdrop-blur">
                <factor.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}