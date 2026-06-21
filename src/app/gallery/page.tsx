"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 bg-background min-h-screen relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block flex items-center justify-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" /> @AuraLuxurySalon
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            The Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Browse our gallery of luxury transformations, elegant styles, and the sophisticated ambiance of our salon.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative group overflow-hidden bg-card ${image.span}`}
            >
              <Image
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <InstagramIcon className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-gold-500 hover:text-white uppercase tracking-widest text-sm font-medium transition-colors"
          >
            Follow us on Instagram <InstagramIcon className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
