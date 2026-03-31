"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home, TrendingUp } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

export default function REBuySellSplit() {
  return (
    <section
      id="buying-selling"
      className="py-16 md:py-24 bg-neutral-950 text-white"
      aria-labelledby="re-split-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#e8d5a3] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            Your journey
          </p>
          <h2 id="re-split-heading" className="font-serif text-3xl sm:text-4xl tracking-tight">
            Buying a home · Selling your home
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Whether you are moving up, rightsizing, or investing in {CITY_SHORT}, we align strategy to
            your timeline and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50"
          >
            <div className="relative aspect-[16/11]">
              <Image
                src={IMAGES.buyJourney}
                alt="Family touring a bright modern home"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            </div>
            <div className="p-8 sm:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                <Home className="w-6 h-6 text-[#e8d5a3]" aria-hidden />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl">Buying a home</h3>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Off-market previews, sharp offer strategy, and inspection navigation—so you secure the
                right home at the right terms in competitive {CITY_SHORT} neighborhoods.
              </p>
              <a
                href="#listings"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#e8d5a3] hover:text-white transition-colors"
              >
                Browse listings
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50"
          >
            <div className="relative aspect-[16/11]">
              <Image
                src={IMAGES.sellJourney}
                alt="Staged luxury interior ready for listing"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            </div>
            <div className="p-8 sm:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                <TrendingUp className="w-6 h-6 text-[#e8d5a3]" aria-hidden />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl">Selling your home</h3>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Pricing intelligence, staging direction, and a marketing plan designed for
                qualified buyers—maximizing exposure and net proceeds across the {CITY_SHORT}{" "}
                market.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#e8d5a3] hover:text-white transition-colors"
              >
                Get home value
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
