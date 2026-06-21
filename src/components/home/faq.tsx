"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking at least 2 weeks in advance for color services and 4-6 weeks for specialized treatments or bridal services to ensure your preferred time and stylist.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We kindly request 48 hours notice for any cancellations or rescheduling. Cancellations within 48 hours may be subject to a 50% cancellation fee.",
  },
  {
    question: "Do you offer consultations before color services?",
    answer: "Yes, all new color clients are required to have a complimentary 15-minute consultation prior to booking their first color appointment to discuss goals, hair history, and perform a strand test if necessary.",
  },
  {
    question: "What products do you use in the salon?",
    answer: "We exclusively use premium, professional-grade products from Oribe, Kérastase, and Wella Professionals to ensure the highest quality results and maintain the health of your hair.",
  },
  {
    question: "Do you travel for bridal services?",
    answer: "Yes, our bridal team is available for on-location services. Please contact our bridal coordinator for a custom quote based on your location and party size.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
          >
            Inquiries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl text-white"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10 px-4">
                <AccordionTrigger className="text-left text-white hover:text-gold-500 font-playfair text-lg md:text-xl py-6 data-[state=open]:text-gold-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
