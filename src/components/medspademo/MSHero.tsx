"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

export default function MSHero() {
  return (
    <section
      id="home"
      aria-labelledby="ms-hero-heading"
      className="relative min-h-[min(100svh,900px)] flex flex-col justify-end pt-24 pb-14 md:pb-20 overflow-hidden bg-[#2a2623]"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2623]/92 via-[#2a2623]/55 to-[#2a2623]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(244,232,230,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_minmax(0,0.9fr)] gap-10 lg:gap-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex items-center gap-2 text-[#e8d5cf] text-xs sm:text-sm font-medium uppercase tracking-[0.22em] mb-5">
              <Sparkles className="w-4 h-4 opacity-90" aria-hidden />
              Aesthetic medicine · {CITY_SHORT}, North Carolina
            </p>
            <h1
              id="ms-hero-heading"
              className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-[#faf8f6] font-medium text-balance"
            >
              Luxury Med Spa Treatments in {CITY_SHORT}
            </h1>
            <p className="mt-5 text-xl sm:text-2xl md:text-[1.65rem] font-light text-[#f0e6e2] leading-snug text-balance max-w-xl">
              Enhance Your Natural Beauty with Confidence
            </p>
            <p className="mt-5 text-base sm:text-lg text-[#e8dfd8]/95 leading-relaxed max-w-xl text-pretty">
              Expert aesthetic care and personalized treatment plans—designed for natural-looking
              refinement in a calm, private setting.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#faf8f6] px-7 py-3.5 text-base font-semibold text-[#2c2825] shadow-lg shadow-black/20 hover:bg-white transition-colors duration-200"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-colors duration-200"
              >
                View Treatments
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative h-[min(420px,50vh)] rounded-3xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
          >
            <Image
              src={IMAGES.heroAccent}
              alt="Serene med spa treatment environment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 0px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a2623]/50 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm text-white/95 font-medium tracking-wide">
              Private suites · Thoughtful care
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
