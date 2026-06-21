"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    title: "Haircut & Styling",
    description: "Expert cuts and premium styling tailored to your unique features and lifestyle.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    link: "/services#haircut",
  },
  {
    title: "Hair Coloring",
    description: "From subtle balayage to complete transformations using the finest luxury color products.",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop",
    link: "/services#color",
  },
  {
    title: "Bridal Makeup",
    description: "Flawless, long-lasting makeup artistry for your most important day.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    link: "/services#bridal",
  },
  {
    title: "Skin Treatments",
    description: "Rejuvenating facials and advanced skincare therapies for a radiant complexion.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    link: "/services#skin",
  },
];

export function ServicesShowcase() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-tight"
            >
              Curated Services for the Modern Individual
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className={buttonVariants({ variant: "ghost", className: "text-white hover:text-gold-500 hover:bg-transparent tracking-wide uppercase text-sm p-0 group" })}>
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] sm:h-[400px] mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>
              <h3 className="font-playfair text-2xl text-white mb-3 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light mb-4 line-clamp-2">
                {service.description}
              </p>
              <Link href={service.link} className="inline-flex items-center text-sm uppercase tracking-wider text-gold-500 font-medium opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                Explore <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
