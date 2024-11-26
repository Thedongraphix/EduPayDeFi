"use client";

import { motion } from "framer-motion";

export function OrderSummary() {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div 
        className="flex justify-between text-sm"
        whileHover={{ scale: 1.02 }}
      >
        <span className="text-muted-foreground">Subtotal</span>
        <span>$199.00</span>
      </motion.div>
      <motion.div 
        className="flex justify-between text-sm"
        whileHover={{ scale: 1.02 }}
      >
        <span className="text-muted-foreground">Processing Fee</span>
        <span>$1.00</span>
      </motion.div>
      <motion.div 
        className="border-t pt-4 flex justify-between font-medium"
        whileHover={{ scale: 1.02 }}
      >
        <span>Total</span>
        <span>$200.00</span>
      </motion.div>
    </motion.div>
  );
}