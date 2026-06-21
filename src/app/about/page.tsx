"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 bg-background min-h-screen relative z-10">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Our Story
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              A Legacy of Luxury Beauty
            </h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded on the belief that beauty is an art form, Aura Luxury Salon has been the premier destination for discerning clients who expect nothing but excellence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our meticulously designed space provides an oasis of tranquility in the heart of the city, where our master stylists transform your vision into reality using only the world&apos;s finest products.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=1000&auto=format&fit=crop" 
              alt="Salon Interior" 
              fill 
              className="object-cover rounded-sm"
            />
            <div className="absolute -bottom-8 -left-8 bg-card p-8 border border-white/10 hidden md:block backdrop-blur-md max-w-sm">
              <Star className="w-8 h-8 fill-gold-500 text-gold-500 mb-4" />
              <p className="font-playfair text-xl text-white italic">
                &quot;Setting the gold standard for luxury beauty services.&quot;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="bg-card border-y border-white/5 py-16 md:py-24 mb-16 md:mb-24 lg:mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550536033-d8cf21b1dae3?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-screen" />
          <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-8 leading-tight">
              We believe that true luxury is found in the details—from the personalized consultation to the final reveal.
            </h2>
            <div className="h-[1px] w-24 bg-gold-500 mx-auto" />
          </div>
        </div>

        {/* The Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative h-[400px] md:h-[500px]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop" 
              alt="Salon Environment" 
              fill 
              className="object-cover rounded-sm"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              The Environment
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
              A Sanctuary of Style
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Every element of Aura has been curated to provide a multi-sensory luxury experience. From the ambient lighting that perfectly illuminates hair color, to the premium imported Italian leather styling chairs.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Private VIP suites available
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Complimentary premium beverage menu
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Ergonomic wash stations
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Custom curated ambient soundtrack
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
