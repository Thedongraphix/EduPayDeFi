'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {  GraduationCap, Users, School } from "lucide-react";


const stats = [
  { icon: GraduationCap, value: "98%", label: "Graduation Rate" },
  { icon: Users, value: "50K+", label: "Happy Students" },
  { icon: School, value: "200+", label: "Partner Schools" },
];

export function TrustIndicators() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background" />
      
      <div className="container px-4 mx-auto relative">
     
      
        {/* Student Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <div className="mb-8">
          </div>
          <h1  className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent">
            Our Impact in Numbers
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of students and institutions who trust EduPay for their educational journey
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-colors"
                  />
                  <div className="relative bg-gradient-to-tr from-blue-600 to-indigo-600 p-4 rounded-full">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}