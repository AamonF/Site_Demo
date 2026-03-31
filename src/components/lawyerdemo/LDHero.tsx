"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Scale, Award } from "lucide-react";

import { CITY_SHORT, PHONE_HREF, IMAGES } from "./constants";

export default function LDHero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center pt-[5.5rem] pb-16 md:pb-24 overflow-hidden bg-[#0a1628]"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0a1628]/92 to-[#0f2138]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(201,162,39,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#c9a227] text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] mb-4">
              Serving {CITY_SHORT}, North Carolina
            </p>
            <h1 className="text-white text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] font-semibold text-balance">
              Trusted Legal Representation in {CITY_SHORT}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300/95 leading-relaxed max-w-2xl text-balance">
              Experienced legal representation you can trust. We protect your rights and deliver
              clear, confident guidance—so you can make informed decisions with clarity and
              confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c9a227] px-6 py-3.5 text-base font-semibold text-[#0a1628] shadow-lg shadow-black/25 hover:bg-[#d4b23a] transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call Now
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div className="flex gap-3">
                <div className="mt-0.5 h-10 w-10 rounded-md border border-[#c9a227]/30 bg-white/5 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
                </div>
                <div>
                  <dt className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                    Track record
                  </dt>
                  <dd className="text-white font-medium mt-1">Years of Experience</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-0.5 h-10 w-10 rounded-md border border-[#c9a227]/30 bg-white/5 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
                </div>
                <div>
                  <dt className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                    Approach
                  </dt>
                  <dd className="text-white font-medium mt-1">Client-Focused Representation</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-0.5 h-10 w-10 rounded-md border border-[#c9a227]/30 bg-white/5 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
                </div>
                <div>
                  <dt className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                    Outcomes
                  </dt>
                  <dd className="text-white font-medium mt-1">Proven Results</dd>
                </div>
              </div>
            </dl>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#c9a227]/25 via-transparent to-[#1e3a5f]/40 blur-2xl opacity-80" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={IMAGES.heroPortrait}
                  alt="Professional attorney portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-white/90 text-sm font-medium">
                    Strategic counsel built on preparation, integrity, and respect for what is at
                    stake in your matter.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
    </section>
  );
}
