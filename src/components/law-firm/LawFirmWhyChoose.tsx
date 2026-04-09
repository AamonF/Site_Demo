"use client";

import { motion } from "framer-motion";
import {
  Gavel,
  User,
  MessageSquare,
  Zap,
  MapPinned,
  Globe,
} from "lucide-react";

import { WHY_CHOOSE } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";

const iconMap = {
  gavel: Gavel,
  user: User,
  message: MessageSquare,
  zap: Zap,
  map: MapPinned,
  globe: Globe,
} as const;

export function LawFirmWhyChoose() {
  return (
    <section className="py-24 md:py-32 bg-law-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_0%,rgba(201,162,39,0.11),transparent_58%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,24,0.4)_0%,transparent_35%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-law-gold-light font-semibold text-xs uppercase tracking-[0.28em] mb-4">
            {FIRM.city} · {FIRM.state}
          </p>
          <h2 className="text-[1.85rem] sm:text-3xl md:text-[2.35rem] font-semibold tracking-tight text-balance leading-tight">
            Built for clients who cannot afford guesswork
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-[1.7] font-light max-w-2xl">
            Trial discipline without the attitude. We combine preparation with communication you can
            actually use to make decisions—especially when the courthouse is in your own backyard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {WHY_CHOOSE.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.15rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-transparent p-8 md:p-9 hover:border-law-gold/30 hover:from-white/[0.07] transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-law-gold/12 border border-law-gold/22 flex items-center justify-center mb-6 shadow-inner shadow-black/20 group-hover:border-law-gold/40 transition-colors">
                  <Icon className="w-6 h-6 text-law-gold-light" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-slate-400 leading-[1.75] text-[15px] font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
