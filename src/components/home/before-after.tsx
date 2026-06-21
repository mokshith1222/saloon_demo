"use client";

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

const transformations = [
  {
    beforeImage: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1200&auto=format&fit=crop", // Dark hair, back/side profile
    afterImage: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop", // Blonde balayage, similar angle
    serviceName: "Signature Balayage & Styling",
    stylistName: "Elena Rossi",
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop", // Natural straight hair
    afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop", // Voluminous styled waves
    serviceName: "Precision Cut & Blowout",
    stylistName: "Marcus Chen",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
          >
            The Art of Transformation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl text-white mb-6"
          >
            Before & After
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Witness the incredible transformations created by our master stylists. Drag the slider to reveal the final result.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {transformations.map((transform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BeforeAfterSlider 
                beforeImage={transform.beforeImage}
                afterImage={transform.afterImage}
                serviceName={transform.serviceName}
                stylistName={transform.stylistName}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
