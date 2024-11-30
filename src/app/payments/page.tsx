"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PaymentMethods } from "@/components/payments/payment-methods";
import { PaymentForm } from "@/components/payments/payment-form";
import { OrderSummary } from "@/components/payments/order-summary";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("crypto");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4 py-8 md:py-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Complete Your Payment
          </motion.h1>
          <motion.p 
            className="text-muted-foreground text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Secure payment processing for your crypto education journey
          </motion.p>

          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-4 md:p-6 shadow-lg">
              <div className="space-y-6">
                <PaymentMethods 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod} 
                />
                <PaymentForm paymentMethod={paymentMethod} />
                <OrderSummary />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full" size="lg">
                    Initiate Payment
                  </Button>
                </motion.div>

                <motion.p 
                  className="text-xs text-center text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  By completing this payment, you agree to our terms of service and privacy policy.
                </motion.p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}