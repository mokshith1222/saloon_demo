"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[800px] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 bg-gradient-to-t from-background via-black/40 to-black/80" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold-500 uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            Welcome to Aura
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Luxury Beauty. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Exceptional Confidence.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Experience premium salon services designed to help you look and feel your absolute best. Elevate your beauty routine with our world-class stylists and luxurious atmosphere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/book" className={buttonVariants({ className: "bg-gold-500 hover:bg-gold-600 text-black font-medium tracking-wide uppercase text-sm rounded-none px-8 py-6 h-auto transition-transform hover:scale-105 w-full sm:w-auto" })}>
              Book Appointment
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "outline", className: "border-white/30 text-white hover:bg-white/10 font-medium tracking-wide uppercase text-sm rounded-none px-8 py-6 h-auto transition-all group w-full sm:w-auto" })}>
              Explore Services
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
