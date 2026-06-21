"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

const serviceCategories = [
  {
    title: "Hair Styling & Cutting",
    id: "haircut",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "Women's Signature Cut", price: 120, description: "Includes consultation, wash, cut, and signature blowout." },
      { name: "Men's Precision Cut", price: 65, description: "Includes consultation, wash, cut, and styling." },
      { name: "Aura Signature Blowout", price: 65, description: "Wash, blowout, and style of your choice." },
      { name: "Event Updo / Styling", price: 150, description: "Intricate styling for special occasions." },
    ]
  },
  {
    title: "Color & Chemical Services",
    id: "color",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "Single Process Color", price: 150, description: "All-over root touch-up or solid color." },
      { name: "Partial Balayage", price: 250, description: "Hand-painted highlights focusing on the crown and face-framing." },
      { name: "Full Balayage / Highlights", price: 350, description: "Complete transformative hand-painted color." },
      { name: "Color Correction", price: 400, description: "Specialized service to fix previous color issues. (Consultation required)" },
    ]
  },
  {
    title: "Skin & Spa",
    id: "skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "Aura Custom Facial", price: 180, description: "Tailored to your skin's specific needs using premium products." },
      { name: "HydraFacial MD", price: 250, description: "Deep cleansing, exfoliation, extraction, and hydration." },
      { name: "Luxury Manicure", price: 60, description: "Includes scrub, massage, and premium polish." },
      { name: "Luxury Pedicure", price: 85, description: "Includes soak, scrub, mask, massage, and premium polish." },
    ]
  }
];

export default function ServicesPage() {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const toggleService = (price: number) => {
    setSelectedServices(prev => 
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    );
  };

  const totalEstimate = selectedServices.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 bg-background min-h-screen relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Explore our comprehensive menu of luxury beauty treatments. Select services below to estimate your total.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-2 space-y-24">
            {serviceCategories.map((category, index) => (
              <motion.div 
                key={category.id} 
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[300px] mb-8 overflow-hidden rounded-sm">
                  <Image src={category.image} alt={category.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <h2 className="absolute bottom-6 left-6 font-playfair text-3xl md:text-4xl text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {category.services.map((service, sIndex) => (
                    <div key={sIndex} className="flex items-start justify-between p-6 bg-card border border-white/5 hover:border-gold-500/30 transition-colors">
                      <div className="flex gap-4">
                        <Checkbox 
                          id={`service-${category.id}-${sIndex}`} 
                          onCheckedChange={() => toggleService(service.price)}
                          className="mt-1 data-[state=checked]:bg-gold-500 data-[state=checked]:border-gold-500"
                        />
                        <div>
                          <label htmlFor={`service-${category.id}-${sIndex}`} className="font-playfair text-xl text-white cursor-pointer hover:text-gold-500 transition-colors">
                            {service.name}
                          </label>
                          <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                        </div>
                      </div>
                      <span className="font-light text-xl text-white">${service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <motion.div 
              className="lg:sticky lg:top-32 p-6 md:p-8 bg-card border border-gold-500/30 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-playfair text-2xl text-white mb-6 border-b border-white/10 pb-4">
                Your Estimate
              </h3>
              
              <div className="space-y-4 mb-8 text-white/80">
                <p className="text-sm">Select services from the menu to build your custom package and view your estimated total.</p>
                <div className="flex justify-between items-center py-4 border-t border-white/10">
                  <span className="text-lg">Total Estimate:</span>
                  <span className="text-3xl font-playfair text-gold-500">${totalEstimate}</span>
                </div>
                <p className="text-xs text-muted-foreground italic">* Prices are starting estimates and may vary based on hair length, density, and stylist level.</p>
              </div>

              <Link href="/book" className={buttonVariants({ className: "w-full bg-gold-500 hover:bg-gold-600 text-black font-medium tracking-wide uppercase text-sm rounded-none py-6 transition-transform hover:scale-[1.02]" })}>
                Book These Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
