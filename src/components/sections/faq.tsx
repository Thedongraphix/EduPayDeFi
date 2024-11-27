
'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What cryptocurrencies do you accept?",
    answer: "We currently accept major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and USDC. More options are being added regularly.",
  },
  {
    question: "How fast are payments processed?",
    answer: "Payments are typically processed within minutes, depending on the blockchain network conditions. You'll receive instant confirmation once the transaction is verified.",
  },
  {
    question: "Is EduPay secure?",
    answer: "Yes, EduPay employs bank-grade security measures, including multi-signature wallets, cold storage, and regular security audits to ensure your funds are safe.",
  },
  {
    question: "How do schools receive their payments?",
    answer: "Schools can choose to receive payments in their preferred cryptocurrency or have them automatically converted to their local currency.",
  },
  {
    question: "Are there any transaction fees?",
    answer: "We charge a minimal processing fee, significantly lower than traditional payment methods. Network fees vary depending on the chosen cryptocurrency.",
  },
];

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background" />
      
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about EduPay's crypto payment system
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_50px_-12px] shadow-blue-500/30 dark:shadow-blue-500/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-blue-600 dark:hover:text-blue-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}