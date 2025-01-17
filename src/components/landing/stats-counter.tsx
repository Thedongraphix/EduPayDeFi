'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, CreditCard, School, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
    description: "Students and parents using EduPay",
  },
  {
    icon: CreditCard,
    value: "$2M+",
    label: "Processed",
    description: "In secure crypto transactions",
  },
  {
    icon: School,
    value: "200+",
    label: "Schools",
    description: "Partner institutions worldwide",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance",
  },
];

export function StatsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 dark:from-background dark:to-blue-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent dark:from-blue-900/20" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="absolute inset-[1px] rounded-[14px] bg-white dark:bg-gray-800" />
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-3 rounded-xl"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                      className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent"
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}