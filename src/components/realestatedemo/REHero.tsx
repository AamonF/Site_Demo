"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, LineChart, Sparkles } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

export default function REHero() {
  return (
    <section
      id="home"
      aria-labelledby="re-hero-heading"
      className="relative min-h-[min(100svh,920px)] flex flex-col justify-end pt-24 pb-12 md:pb-16 lg:pb-20 overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/55 to-neutral-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_0%,rgba(201,169,98,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#e8d5a3] text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] mb-4">
              Luxury real estate · {CITY_SHORT}, North Carolina
            </p>
            <p className="font-serif text-2xl sm:text-3xl md:text-[2rem] text-white/95 font-medium leading-snug text-balance">
              Find Your Dream Home in {CITY_SHORT}
            </p>
            <h1
              id="re-hero-heading"
              className="font-serif mt-4 text-[2.125rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-white font-medium text-balance"
            >
              Homes for Sale in {CITY_SHORT}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-200/95 leading-relaxed max-w-2xl text-balance">
              Buying, selling, and investing with confidence—backed by local expertise and modern
              marketing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#listings"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#c9a962] px-6 py-3.5 text-base font-semibold text-neutral-950 shadow-lg shadow-black/20 hover:bg-[#d4b876] transition-colors duration-200"
              >
                Browse Listings
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition-colors duration-200"
              >
                Get Home Value
              </a>
            </div>
          </motion.div>
        </div>

        <motion.dl
          className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 pt-8 md:pt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {[
            { icon: Award, title: "Local Market Expertise", desc: "Neighborhood-level insight" },
            { icon: Sparkles, title: "Trusted Guidance", desc: "White-glove client care" },
            { icon: LineChart, title: "Modern Marketing", desc: "Photography & digital reach" },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className="mt-0.5 h-11 w-11 rounded-lg border border-[#c9a962]/35 bg-white/5 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
              </div>
              <div>
                <dt className="text-white font-semibold text-sm sm:text-base">{item.title}</dt>
                <dd className="text-neutral-400 text-sm mt-0.5">{item.desc}</dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
