"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stylists = [
  {
    name: "Elena Rossi",
    role: "Creative Director",
    specialty: "Advanced Color & Balayage",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marcus Chen",
    role: "Master Stylist",
    specialty: "Precision Cuts & Styling",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Bridal Specialist",
    specialty: "Bridal Hair & Makeup",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
  },
];

export function Stylists() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
        >
          Our Experts
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl text-white mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          Meet the Artisans Behind the Chair
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[400px] sm:h-[500px] mb-6 overflow-hidden bg-card">
                <Image
                  src={stylist.image}
                  alt={stylist.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-playfair text-2xl text-white mb-2">{stylist.name}</h3>
              <p className="text-gold-500 uppercase tracking-widest text-xs font-medium mb-2">
                {stylist.role}
              </p>
              <p className="text-muted-foreground font-light text-sm">
                Specialty: {stylist.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
