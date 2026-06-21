import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="w-6 h-6 text-gold-500" />
              <span className="font-playfair text-2xl font-semibold tracking-wide text-white">
                Aura
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Experience premium salon services designed to help you look and feel your absolute best in a luxury environment.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Gallery", "About", "Contact", "Book Appointment"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">Our Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Hair Styling & Color</li>
              <li>Bridal Makeup</li>
              <li>Skin & Facials</li>
              <li>Nail Care</li>
              <li>Spa Treatments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Suite 400<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>hello@aurasalondemo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aura Luxury Salon. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-xl text-center md:text-right">
            Disclaimer: Independent demo website concept created by M. Sai Mokshith Naik for presentation purposes only. This website is not affiliated with any actual salon business and address/contact details are fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}
