'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent">
            Ready to Transform School Payments?
          </h2>
          <p className="text-lg text-muted-foreground dark:text-white/70 mb-8 max-w-2xl mx-auto">
            Join the growing network of schools embracing crypto payments. Get started today and experience the future of educational transactions.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 gap-2"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}