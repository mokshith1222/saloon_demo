"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <Link
            href="/book"
            className="flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-black px-6 py-4 rounded-full shadow-2xl shadow-gold-500/20 transition-all hover:scale-105 active:scale-95 group"
          >
            <CalendarDays className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-medium tracking-wide uppercase text-sm">
              Book Now
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
