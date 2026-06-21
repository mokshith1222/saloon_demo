"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 bg-background min-h-screen relative z-10 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-3xl md:text-5xl text-white mb-4"
          >
            Reserve Your Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Book your appointment with our master stylists.
          </motion.p>
        </div>

        <div className="bg-card p-6 sm:p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Progress Bar */}
          {!isSuccess && (
            <div className="flex gap-2 mb-12">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1 flex-1 transition-colors duration-500 ${step >= i ? 'bg-gold-500' : 'bg-white/10'}`} />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle2 className="w-10 h-10 text-black" />
                </motion.div>
                <h2 className="font-playfair text-3xl text-white mb-4">Request Received</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for choosing Aura. Our concierge will contact you shortly to confirm your appointment time.
                </p>
                <Button onClick={() => window.location.href = '/'} className="bg-gold-500 hover:bg-gold-600 text-black rounded-none uppercase tracking-widest px-8">
                  Return Home
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}
                className="space-y-8"
              >
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-playfair text-2xl text-white mb-6">Service Selection</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Category</label>
                        <Select required>
                          <SelectTrigger className="w-full bg-transparent border-white/20 text-white rounded-none h-12">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="haircut">Hair Styling & Cutting</SelectItem>
                            <SelectItem value="color">Color & Chemical Services</SelectItem>
                            <SelectItem value="skin">Skin & Spa</SelectItem>
                            <SelectItem value="bridal">Bridal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Specific Service</label>
                        <Select required>
                          <SelectTrigger className="w-full bg-transparent border-white/20 text-white rounded-none h-12">
                            <SelectValue placeholder="Select Service" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="w-cut">Women's Signature Cut</SelectItem>
                            <SelectItem value="m-cut">Men's Precision Cut</SelectItem>
                            <SelectItem value="blowout">Signature Blowout</SelectItem>
                            <SelectItem value="balayage">Full Balayage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred Stylist (Optional)</label>
                        <Select>
                          <SelectTrigger className="w-full bg-transparent border-white/20 text-white rounded-none h-12">
                            <SelectValue placeholder="No Preference" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="elena">Elena Rossi (Creative Director)</SelectItem>
                            <SelectItem value="marcus">Marcus Chen (Master Stylist)</SelectItem>
                            <SelectItem value="sarah">Sarah Jenkins (Bridal Specialist)</SelectItem>
                            <SelectItem value="any">No Preference</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-playfair text-2xl text-white mb-6">Date & Time</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred Date</label>
                        <Input type="date" required className="bg-transparent border-white/20 text-white rounded-none h-12 [color-scheme:dark]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred Time</label>
                        <Select required>
                          <SelectTrigger className="w-full bg-transparent border-white/20 text-white rounded-none h-12">
                            <SelectValue placeholder="Select Time" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="font-playfair text-2xl text-white mb-6">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                        <Input required placeholder="Jane" className="bg-transparent border-white/20 text-white rounded-none h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                        <Input required placeholder="Doe" className="bg-transparent border-white/20 text-white rounded-none h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                      <Input required type="email" placeholder="jane@example.com" className="bg-transparent border-white/20 text-white rounded-none h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number</label>
                      <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-transparent border-white/20 text-white rounded-none h-12" />
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-8 border-t border-white/10">
                  {step > 1 ? (
                    <Button type="button" onClick={prevStep} variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none uppercase tracking-widest">
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  <Button type="submit" disabled={isSubmitting} className="bg-gold-500 hover:bg-gold-600 text-black rounded-none uppercase tracking-widest px-8">
                    {isSubmitting ? "Processing..." : step === 3 ? "Confirm Request" : "Continue"}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
