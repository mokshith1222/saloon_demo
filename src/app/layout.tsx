import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { LoadingScreen } from "@/components/loading-screen";
import { FloatingCTA } from "@/components/floating-cta";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Luxury Salon | Premium Beauty Studio",
  description: "Experience luxury salon services, expert stylists, and premium beauty treatments at Aura Luxury Salon.",
  keywords: ["Luxury Salon", "Beauty Studio", "Hair Styling", "Bridal Makeup", "Aura Salon"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
