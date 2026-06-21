"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Master Stylists",
    description: "Our team consists of internationally trained professionals with years of high-end experience.",
  },
  {
    title: "Premium Products",
    description: "We use only the finest luxury beauty brands to ensure optimal results and hair health.",
  },
  {
    title: "Personalized Consultations",
    description: "Every service begins with a thorough consultation to understand your unique needs.",
  },
  {
    title: "Luxury Environment",
    description: "Relax in our meticulously designed space with complimentary premium beverages.",
  },
  {
    title: "Impeccable Hygiene",
    description: "We maintain hospital-grade sanitation standards for your safety and peace of mind.",
  },
  {
    title: "Satisfaction Guarantee",
    description: "We are committed to exceeding your expectations. Your satisfaction is our priority.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=1000&auto=format&fit=crop')" }}
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-500/10 backdrop-blur-3xl rounded-full mix-blend-screen" />
          </div>

          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
            >
              The Aura Difference
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-3xl md:text-5xl text-white mb-10 md:mb-12"
            >
              Why Discerning Clients Choose Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg text-white font-medium mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
