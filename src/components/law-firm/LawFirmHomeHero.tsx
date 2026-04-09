"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Scale, Star, MapPin } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { HERO_BADGES, IMAGES } from "@/lib/law-firm/content";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function LawFirmHomeHero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center pt-[5.25rem] pb-24 md:pb-32 overflow-hidden bg-law-navy-950"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.28]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-law-navy-950 via-law-navy-950/94 to-law-navy-800/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_15%,rgba(201,162,39,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(6,13,24,0.94)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap gap-2 mb-8">
          {HERO_BADGES.map((b, idx) => (
            <motion.span
              key={b}
              custom={idx}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-law-gold/20 bg-white/[0.035] px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-law-gold-light/95 tracking-wide backdrop-blur-sm"
            >
              {b}
            </motion.span>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <motion.div className="lg:col-span-7" initial="hidden" animate="show">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-law-gold-light/95 text-xs sm:text-sm font-medium tracking-wide mb-5">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-law-gold/35 text-law-gold shrink-0" aria-hidden />
                  {FIRM.reviewScore} average · {FIRM.reviewCount}+ reviews
                </span>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-law-gold/80 shrink-0" aria-hidden />
                  {FIRM.metroDescriptor}
                </span>
              </div>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              id="hero-heading"
              className="text-white text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[3.45rem] leading-[1.08] font-semibold tracking-tight text-balance"
            >
              Charlotte litigators who build files for trial—so settlement talks carry real weight
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 text-lg sm:text-xl text-slate-300/95 leading-[1.65] max-w-2xl text-pretty font-light"
            >
              From our Trade Street office, we serve clients across the metro when injury, criminal
              investigation, DUI stops, or family crises demand clarity fast. Confidential intake.
              Straight answers. Strategy you can follow.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href={`${LAW_FIRM_BASE}/free-consultation`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-law-gold px-8 py-4 text-base font-semibold text-law-navy-950 shadow-xl shadow-black/35 hover:bg-[#d4b23a] transition-colors duration-300"
              >
                Book free consultation
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <a
                href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" aria-hidden />
                {FIRM.phoneDisplay}
              </a>
            </motion.div>
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 text-sm text-slate-500"
            >
              Prefer email first?{" "}
              <Link href={`${LAW_FIRM_BASE}/contact`} className="text-law-gold-light hover:underline font-medium">
                Contact page
              </Link>{" "}
              · Licensed in {FIRM.licensedIn}
            </motion.p>

            <motion.dl
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/[0.08] pt-12"
            >
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl border border-law-gold/25 bg-white/[0.04] flex items-center justify-center shrink-0 shadow-inner shadow-black/20">
                  <Shield className="w-5 h-5 text-law-gold-light" aria-hidden />
                </div>
                <div>
                  <dt className="text-slate-500 text-[11px] uppercase tracking-[0.14em] font-semibold">
                    Established
                  </dt>
                  <dd className="text-white font-medium mt-1.5">Practicing since {FIRM.founded}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl border border-law-gold/25 bg-white/[0.04] flex items-center justify-center shrink-0 shadow-inner shadow-black/20">
                  <Scale className="w-5 h-5 text-law-gold-light" aria-hidden />
                </div>
                <div>
                  <dt className="text-slate-500 text-[11px] uppercase tracking-[0.14em] font-semibold">
                    Clients advised
                  </dt>
                  <dd className="text-white font-medium mt-1.5">{FIRM.clientsHelped}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl border border-law-gold/25 bg-white/[0.04] flex items-center justify-center shrink-0 shadow-inner shadow-black/20">
                  <Star className="w-5 h-5 text-law-gold-light" aria-hidden />
                </div>
                <div>
                  <dt className="text-slate-500 text-[11px] uppercase tracking-[0.14em] font-semibold">
                    Combined experience
                  </dt>
                  <dd className="text-white font-medium mt-1.5">{FIRM.yearsExperience}</dd>
                </div>
              </div>
            </motion.dl>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-5 rounded-[1.75rem] bg-gradient-to-br from-law-gold/18 via-transparent to-law-navy-700/45 blur-3xl opacity-95" />
              <div className="relative rounded-[1.35rem] overflow-hidden border border-white/[0.12] shadow-2xl shadow-black/70 ring-1 ring-white/[0.06] aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={IMAGES.heroPortrait}
                  alt="Lead trial attorney in professional attire, Charlotte North Carolina law office"
                  fill
                  className="object-cover object-top scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-law-navy-950 via-law-navy-950/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <p className="text-white/95 font-normal text-[15px] leading-relaxed border-l-[3px] border-law-gold pl-5">
                    We do not outsource accountability. You will always know which attorney owns your
                    strategy—and what we are doing about it this week.
                  </p>
                  <p className="mt-4 text-law-gold-light/85 text-[11px] uppercase tracking-[0.2em]">
                    — Managing partner · {FIRM.city}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-law-gold/40 to-transparent" />
    </section>
  );
}
