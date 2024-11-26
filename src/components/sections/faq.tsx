/* eslint-disable */
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
    threshold: 0.25,
  });

  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div {...animationSettings} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" id="faq-heading">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about EduPay's crypto payment system
          </p>
        </motion.div>

        <motion.div {...animationSettings} transition={{ ...animationSettings.transition, delay: 0.2 }} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p className="text-center text-muted-foreground">No FAQs available at the moment.</p>
            )}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}


