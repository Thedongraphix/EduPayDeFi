"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

interface PaymentFormProps {
  paymentMethod: string;
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: {
      duration: 0.2
    }
  }
};

export function PaymentForm({ paymentMethod }: PaymentFormProps) {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="space-y-2" variants={slideIn}>
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <Input
            id="amount"
            placeholder="0.00"
            className="pl-8"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            $
          </span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {paymentMethod === "crypto" && (
          <motion.div
            key="crypto"
            className="space-y-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
          >
            <Label htmlFor="wallet-address">Wallet Address</Label>
            <Input
              id="wallet-address"
              placeholder="Enter your wallet address"
            />
          </motion.div>
        )}

        {paymentMethod === "card" && (
          <motion.div
            key="card"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    type="password"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="space-y-2"
        variants={slideIn}
      >
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
        />
      </motion.div>
    </motion.div>
  );
}