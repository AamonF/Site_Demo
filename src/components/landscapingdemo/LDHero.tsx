"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { PHONE, PHONE_HREF, CITY } from "./constants";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85&auto=format&fit=crop";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openLandscapingModal"));
  }
}

export default function LDHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[min(100svh,920px)] flex items-stretch overflow-hidden bg-emerald-950"
    >
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform scale-110">
        <Image
          src={HERO_IMG}
          alt="Luxury landscaped backyard with patio and lawn at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-emerald-950/92 via-emerald-950/78 to-emerald-950/35" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-emerald-950/88 via-transparent to-emerald-950/50" />
      <div className="absolute top-0 left-0 right-0 z-[1] h-px bg-white/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pb-24 flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-emerald-100 text-xs font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300/90" />
            {CITY} · Design &amp; build
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.12] tracking-tight"
          >
            Beautiful Outdoor Spaces Built to Last
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-emerald-100/95 mb-5"
          >
            Landscaping Services in [City]
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-base sm:text-lg text-stone-200/95 mb-8 max-w-xl leading-relaxed"
          >
            From lush lawns to custom hardscapes, we design and maintain outdoor spaces that
            elevate curb appeal — and hold up to Carolina seasons with craftsmanship you can see
            from the street.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 bg-white text-emerald-950 font-bold text-base px-7 py-3.5 rounded-xl shadow-xl shadow-black/20 hover:bg-emerald-50 transition-all duration-200 hover:scale-[1.02] active:scale-100"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/5 hover:bg-white/10 text-white font-semibold text-base px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-stone-200/90"
          >
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-emerald-100 transition-colors"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800/80 border border-emerald-600/50">
                <Phone className="w-4 h-4" />
              </span>
              {PHONE}
            </a>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="text-stone-300">Licensed &amp; insured · Free on-site consults</span>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-stone-100 to-transparent z-[2]" />
    </section>
  );
}
