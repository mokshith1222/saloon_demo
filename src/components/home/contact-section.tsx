"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl text-white mb-8">
              Visit Our Sanctuary
            </h2>
            <p className="text-muted-foreground font-light mb-12 max-w-md leading-relaxed">
              Experience the pinnacle of luxury beauty. Reach out to schedule a consultation or inquire about our services.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">123 Luxury Avenue, Suite 400<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-white/10 shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-white/10 shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md p-8 md:p-12 border border-white/10 relative"
          >
            <h3 className="font-playfair text-3xl text-white mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                  <Input placeholder="Jane" className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                <Input type="email" placeholder="jane@example.com" className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="How can we assist you?" className="bg-transparent border-white/20 text-white rounded-none min-h-[120px] focus-visible:ring-gold-500" />
              </div>
              <Button type="button" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-medium tracking-wide uppercase text-sm rounded-none py-6 transition-transform hover:scale-[1.02]">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
