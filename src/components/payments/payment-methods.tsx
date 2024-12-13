"use client";

import { Bitcoin, Wallet } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface PaymentMethodsProps {
  value: string;
  onValueChange: (value: string) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function PaymentMethods({ value, onValueChange }: PaymentMethodsProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      className="grid grid-cols-1 sm:grid-cols-3 gap-3"
      asChild
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <RadioGroupItem
            value="crypto"
            id="crypto"
            className="peer sr-only"
          />
          <Label
            htmlFor="crypto"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all hover:scale-105"
          >
            <Bitcoin className="mb-2 h-6 w-6" />
            Crypto
          </Label>
        </motion.div>

        <motion.div variants={item}>
          <RadioGroupItem
            value="card"
            id="card"
            className="peer sr-only"
          />
          
        </motion.div>

        <motion.div variants={item}>
          <RadioGroupItem
            value="wallet"
            id="wallet"
            className="peer sr-only"
          />
          <Label
            htmlFor="wallet"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all hover:scale-105"
          >
            <Wallet className="mb-2 h-6 w-6" />
            Wallet
          </Label>
        </motion.div>
      </motion.div>
    </RadioGroup>
  );
}