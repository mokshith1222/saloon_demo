"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "4.9", label: "Average Rating", icon: <Star className="w-5 h-5 fill-gold-500 text-gold-500" /> },
  { value: "2.5k+", label: "Happy Clients", suffix: "" },
  { value: "15+", label: "Years Experience", suffix: "" },
  { value: "12", label: "Expert Stylists", suffix: "" },
];

export function Trust() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card border-y border-white/5 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              {stat.icon && <div className="mb-2">{stat.icon}</div>}
              <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
