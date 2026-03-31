"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, MapPin, Mail, Clock } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATHeroProps {
  demo: BusinessDemo;
}

export default function ATHero({ demo }: ATHeroProps) {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed hero photo — behind all copy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1724488751821-1415f5cf4960?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-teal-950/75 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-teal-950/90 via-teal-950/55 to-teal-950/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-teal-950/90 via-transparent to-teal-950/45 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-teal-950/60 pointer-events-none" />

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-700/10 blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-900/25 blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — headline + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/25 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-7"
            >
              <MapPin className="w-3 h-3 flex-shrink-0" />
              Charlotte, NC — Residential &amp; Commercial HVAC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Reliable Heating &amp;<br />
              <span className="text-teal-400">Cooling Service</span>
              <br />
              in Charlotte, NC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg"
            >
              {demo.heroSubheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={demo.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg shadow-rose-900/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                onClick={() => scroll("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                {demo.bookingCTA}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("#real-estate")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                View Service Agreements
              </button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4"
              aria-label="Trust credentials"
            >
              {demo.heroTrustBadges.map((badge) => (
                <li key={badge.label} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {badge.label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right column — photo + contact info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 lg:p-8 shadow-2xl">
              <div className="mb-6 pb-6 border-b border-white/10">
                <h2 className="text-base font-extrabold text-white tracking-tight">
                  Accu-Tech HVAC Services LLC
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  3208 Miranda Road · Charlotte, NC 28216
                </p>
              </div>

              <div className="space-y-4 mb-7">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/8 hover:bg-white/8 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                      Call Us
                    </p>
                    <a
                      href={demo.phoneHref}
                      className="text-base font-bold text-white hover:text-rose-300 transition-colors"
                    >
                      {demo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/8 hover:bg-white/8 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-teal-600/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${demo.email}`}
                      className="text-sm font-semibold text-white hover:text-teal-300 transition-colors break-all"
                    >
                      {demo.email}
                    </a>
                  </div>
                </div>

                {/* 24hr commitment */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/8 hover:bg-white/8 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-teal-600/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                      Service Commitment
                    </p>
                    <p className="text-sm font-bold text-white">
                      Non-emergency within 24 hrs
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Guaranteed for agreement customers
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scroll("#contact")}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                {demo.bookingCTA}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>{/* /contact card */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
