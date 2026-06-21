"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 bg-background min-h-screen relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Connect With Aura
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We invite you to reach out for consultations, appointments, or any inquiries regarding our luxury services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-card p-8 border border-white/5">
              <h3 className="font-playfair text-2xl text-white mb-6">Salon Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground">123 Luxury Avenue, Suite 400<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@aurasalondemo.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 border border-white/5">
              <h3 className="font-playfair text-xl text-white mb-4">Follow Our Work</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-8 md:p-12 border border-white/5"
          >
            <h3 className="font-playfair text-3xl text-white mb-2">Send a Message</h3>
            <p className="text-muted-foreground text-sm mb-8">Fill out the form below and our concierge team will get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                  <Input className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                  <Input className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                <Input type="email" className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number (Optional)</label>
                <Input type="tel" className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-gold-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea className="bg-transparent border-white/20 text-white rounded-none min-h-[150px] focus-visible:ring-gold-500" />
              </div>
              
              <Button type="button" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-medium tracking-wide uppercase text-sm rounded-none py-6 transition-transform hover:scale-[1.02]">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
