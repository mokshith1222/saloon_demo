"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Aura Signature",
    price: "$150",
    period: "/month",
    features: [
      "2 Blowouts per month",
      "1 Conditioning Treatment",
      "10% off all retail products",
      "Priority booking",
    ],
  },
  {
    name: "Aura Luxe",
    price: "$280",
    period: "/month",
    features: [
      "Unlimited Blowouts",
      "2 Conditioning Treatments",
      "15% off all retail products",
      "Complimentary touch-ups",
      "VIP access to new treatments",
    ],
    popular: true,
  },
];

export function VipMemberships() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
          >
            Exclusive Access
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl text-white mb-6"
          >
            VIP Memberships
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Elevate your beauty routine with our exclusive membership tiers, designed for those who demand perfection regularly.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex-1 relative p-6 md:p-12 border ${plan.popular ? 'border-gold-500 bg-black/40' : 'border-white/10 bg-black/20'} backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black text-xs font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-playfair text-2xl text-white mb-2 text-center">{plan.name}</h3>
              <div className="flex justify-center items-end gap-1 mb-8">
                <span className="text-4xl md:text-5xl font-light text-white">{plan.price}</span>
                <span className="text-muted-foreground mb-1">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className={buttonVariants({ className: `w-full ${plan.popular ? 'bg-gold-500 hover:bg-gold-600 text-black' : 'bg-white hover:bg-white/90 text-black'} font-medium tracking-wide uppercase text-sm rounded-none py-6 h-auto transition-transform hover:scale-105` })}>
                Join the Club
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
