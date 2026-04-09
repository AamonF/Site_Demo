"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { FIRM } from "@/lib/law-firm/firm";
import { TRUST_BADGES, IMAGES } from "@/lib/law-firm/content";
import { LawFirmAnimatedStat } from "./LawFirmAnimatedStat";

export function LawFirmTrustCredibility() {
  return (
    <section className="relative py-20 md:py-28 bg-[#f8f9fb] border-y border-slate-200/90 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230a1628\' fill-opacity=\'0.035\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
            Charlotte, North Carolina
          </p>
          <h2 className="text-law-navy-950 text-[1.75rem] sm:text-3xl md:text-[2.125rem] font-semibold tracking-tight leading-tight text-balance">
            A Mecklenburg County practice with regional reach
          </h2>
          <p className="mt-5 text-slate-600 leading-[1.75] text-lg font-light">
            {FIRM.name} is structured for serious matters: lean teams, partner-level judgment, and
            communication that respects what you are carrying—not generic updates from a call center.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <LawFirmAnimatedStat value="35+" label="Years combined" sub="Litigation & appeals" />
              <LawFirmAnimatedStat value="4,200+" label="Matters advised" sub={`Since ${FIRM.founded}`} />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-law-gold/50 pl-5">
              Memberships and ratings are shown for general credibility. They are not guarantees of
              future results. Verifications vary by organization and year.
            </p>
          </div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[1.25rem] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
                Professional affiliations
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {TRUST_BADGES.map((b) => (
                  <div
                    key={b.abbr}
                    className="group rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50/80 to-white px-4 py-4 hover:border-law-gold/25 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[11px] font-bold text-law-navy-900 w-11 h-11 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center shadow-sm group-hover:border-law-gold/30 transition-colors">
                        {b.abbr}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-law-navy-950 leading-snug">{b.label}</p>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">{b.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-8 items-center pt-8 border-t border-slate-100">
                <div className="relative h-48 rounded-xl overflow-hidden border border-slate-200/90 shadow-inner">
                  <Image
                    src={IMAGES.office}
                    alt="Law firm office interior near Uptown Charlotte"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-law-gold font-bold shrink-0">·</span>
                    <span>
                      Licensed in {FIRM.licensedIn}. {FIRM.emergencyLine}.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-law-gold font-bold shrink-0">·</span>
                    <span>
                      {FIRM.reviewScore}/5 client satisfaction ({FIRM.reviewCount} reviews) — individual
                      experiences vary.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-law-gold font-bold shrink-0">·</span>
                    <span>
                      Regular practice in {FIRM.county} courts and select surrounding jurisdictions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
