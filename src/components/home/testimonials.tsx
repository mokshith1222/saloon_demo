"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Victoria S.",
    text: "The most luxurious salon experience I've ever had. My stylist listened carefully and gave me the exact color I've been dreaming of.",
    role: "Regular Client",
  },
  {
    name: "Amanda L.",
    text: "Aura Salon did my bridal hair and makeup. The team was incredibly professional, and I felt absolutely gorgeous on my wedding day.",
    role: "Bridal Client",
  },
  {
    name: "Jessica M.",
    text: "From the ambiance to the service, everything is top-tier. I always leave feeling refreshed, confident, and beautiful.",
    role: "VIP Member",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
            Words of Praise
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-white">
            Client Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-6 md:p-10 border border-white/5 relative group hover:border-gold-500/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-8 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h4 className="font-playfair text-xl text-white">{testimonial.name}</h4>
                <p className="text-gold-500 text-sm uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
              
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 text-6xl font-playfair text-white/5 select-none pointer-events-none group-hover:text-gold-500/10 transition-colors">
                &quot;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
