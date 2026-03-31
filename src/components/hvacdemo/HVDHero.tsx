"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Phone, Shield, Star, Wallet } from "lucide-react";

import { CITY_SHORT, IMAGES, PHONE, PHONE_HREF } from "./constants";

const badges = [
  { icon: Shield, label: "Licensed & insured" },
  { icon: Star, label: "Highly rated" },
  { icon: BadgeCheck, label: "Warranty-backed" },
  { icon: Wallet, label: "Financing available" },
];

export default function HVDHero() {
  return (
    <section
      id="home"
      aria-labelledby="hvd-hero-heading"
      className="relative min-h-[min(100svh,920px)] flex flex-col justify-end pt-24 pb-12 md:pb-16 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/75 to-sky-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_20%,rgba(56,189,248,0.14),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_minmax(0,0.85fr)] gap-10 lg:gap-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex items-center gap-2 text-sky-200/95 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Heating & cooling · {CITY_SHORT}, North Carolina
            </p>
            <h1
              id="hvd-hero-heading"
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.15rem] leading-[1.1] text-white font-bold text-balance tracking-tight"
            >
              HVAC Services in {CITY_SHORT}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl md:text-[1.55rem] font-medium text-sky-100/95 leading-snug text-balance max-w-2xl">
              Stay comfortable year-round with trusted HVAC experts in {CITY_SHORT}
            </p>
            <p className="mt-5 text-base sm:text-lg text-slate-200/95 leading-relaxed max-w-xl text-pretty">
              Fast service, honest pricing, and reliable comfort solutions—so your home stays
              exactly how you like it, every season.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3" aria-label="Trust highlights">
              {badges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs sm:text-sm font-medium text-white/95 backdrop-blur-md"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-300 shrink-0" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-900/30 hover:bg-sky-400 transition-colors duration-200"
              >
                Get Free Estimate
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call Now
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Call <span className="font-semibold text-white">{PHONE}</span> for priority scheduling
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative h-[min(400px,48vh)] rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/15"
          >
            <Image
              src={IMAGES.heroAccent}
              alt="HVAC technician performing professional service"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 38vw, 0px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm text-white font-medium tracking-wide">
              Same-day service · Upfront quotes · Clean installs
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
