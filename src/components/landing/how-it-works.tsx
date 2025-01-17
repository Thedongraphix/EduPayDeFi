'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wallet, ArrowRightLeft, GraduationCap, Shield } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your crypto wallet securely to start making educational payments",
  },
  {
    icon: ArrowRightLeft,
    title: "Make Payment",
    description: "Transfer funds in your preferred cryptocurrency quickly and easily",
  },
  {
    icon: GraduationCap,
    title: "School Verifies",
    description: "Institution instantly receives the payment in their preferred currency",
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All transactions are verified and secured on the blockchain",
  },
];

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden section-gradient" ref={ref}>
      {/* Updated Background with floating elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 dark:from-background dark:to-blue-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent dark:from-blue-900/20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 dark:from-indigo-400/20 dark:to-purple-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Simple steps to revolutionize your educational payments
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2,
                }
              } : {}}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative z-10 card-gradient border-glow rounded-2xl p-6">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-3 rounded-xl mb-4 relative"
                  >
                    {/* Add subtle glow effect */}
                    <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-xl opacity-50" />
                    <div className="relative">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <span className="bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}