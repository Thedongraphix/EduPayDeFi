'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wallet, ArrowRight, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your crypto wallet securely to your EduPay account",
  },
  {
    icon: CreditCard,
    title: "Choose Payment",
    description: "Select the school and payment amount in your preferred crypto",
  },
  {
    icon: CheckCircle,
    title: "Instant Confirmation",
    description: "Receive immediate confirmation of your payment",
  },
];

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize your school payment experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <step.icon className="w-16 h-16 text-primary" />
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}