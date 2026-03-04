"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <TrustBar />

      <div id="services">
        <Services />
      </div>

      <div id="coverage">
        <Coverage />
      </div>

      <div id="contact" className="py-12 bg-dark">
        <CTABanner />
      </div>

      <Footer />
    </main>
  );
}
