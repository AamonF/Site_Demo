"use client";

import Link from "next/link";
import { MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { CASE_RESULTS } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Props = { sectionId?: string };

export function LawFirmResultsSection({ sectionId = "results" }: Props) {
  return (
    <section id={sectionId} className="py-24 md:py-32 bg-[#f4f5f8] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
              {FIRM.county} dockets
            </p>
            <h2 className="text-law-navy-950 text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold tracking-tight leading-tight text-balance">
              Representative outcomes—not a promise of yours
            </h2>
            <p className="mt-5 text-slate-600 leading-[1.75] text-lg font-light">
              Summaries are anonymized and edited for advertising. Past results do not predict future
              results; judges, juries, and carriers differ in every file.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={`${LAW_FIRM_BASE}/results`}
              className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-7 py-3.5 text-sm font-semibold text-law-navy-900 shadow-sm hover:border-law-gold/40 transition-colors"
            >
              Full case highlights
            </Link>
            <Link
              href={`${LAW_FIRM_BASE}/free-consultation`}
              className="inline-flex items-center justify-center rounded-xl bg-law-navy-900 text-white px-7 py-3.5 text-sm font-semibold hover:bg-law-navy-800 transition-colors shadow-lg shadow-law-navy-950/15"
            >
              Discuss your matter
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {CASE_RESULTS.map((c, idx) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[1.25rem] border border-slate-200/90 bg-white p-8 md:p-9 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-law-gold/80 via-law-gold/40 to-transparent opacity-90" />
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-law-navy-800 bg-law-gold/12 border border-law-gold/25 px-2.5 py-1 rounded-md">
                  {c.type}
                </span>
                <TrendingUp className="w-5 h-5 text-slate-300 group-hover:text-law-gold/70 transition-colors shrink-0" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-law-navy-950 leading-snug tracking-tight">{c.headline}</h3>
              {c.venue && (
                <p className="mt-3 flex items-start gap-2 text-[12px] text-slate-500 leading-snug">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-law-gold/80" aria-hidden />
                  <span>{c.venue}</span>
                </p>
              )}
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{c.summary}</p>
              <p className="mt-6 text-sm font-medium text-law-navy-900 border-t border-slate-100 pt-6 leading-relaxed">
                {c.outcome}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-[1rem] border border-slate-200/90 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-inner">
          <p className="text-[13px] text-slate-600 leading-[1.7]">
            <strong className="text-law-navy-900 font-semibold">Attorney advertising — representative results only.</strong>{" "}
            These summaries are hypothetical composites for demonstration purposes and do not depict
            actual clients or guaranteed outcomes. Verdicts and settlements depend on facts, evidence,
            applicable law, and parties involved. North Carolina Rule of Professional Conduct 7.1
            requires truthful, non-misleading communications; no result should be assumed without
            individualized analysis. <strong>Prior results do not guarantee similar outcomes.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
