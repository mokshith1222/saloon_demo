import { Hero } from "@/components/home/hero";
import { Trust } from "@/components/home/trust";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Stylists } from "@/components/home/stylists";
import { BeforeAfter } from "@/components/home/before-after";
import { Testimonials } from "@/components/home/testimonials";
import { VipMemberships } from "@/components/home/vip-memberships";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesShowcase />
      <WhyChooseUs />
      <BeforeAfter />
      <Stylists />
      <VipMemberships />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
