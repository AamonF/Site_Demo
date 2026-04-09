"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";

import { TEAM } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export function LawFirmAttorneySpotlight() {
  const lead = TEAM[0];

  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="spotlight-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            className="relative order-2 lg:order-1 lg:sticky lg:top-28"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-law-gold/20 via-transparent to-law-navy-800/15 rounded-[1.4rem] blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[1.25rem] overflow-hidden border border-slate-200/90 shadow-[0_32px_64px_-28px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.04]">
              <Image
                src={lead.image}
                alt={lead.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-law-navy-950/88 via-law-navy-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <div className="flex items-center gap-2 text-law-gold-light text-[11px] font-semibold uppercase tracking-[0.22em]">
                  <Award className="w-4 h-4" aria-hidden />
                  Civil litigation · {FIRM.city}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 pt-2">
            <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
              Leadership
            </p>
            <h2
              id="spotlight-heading"
              className="text-law-navy-950 text-[2rem] sm:text-4xl md:text-[2.35rem] font-semibold tracking-tight leading-[1.15]"
            >
              {lead.name}
            </h2>
            <p className="mt-3 text-slate-600 font-medium text-lg">{lead.role}</p>

            {lead.credentials && lead.credentials.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2">
                {lead.credentials.map((c) => (
                  <li
                    key={c.slice(0, 40)}
                    className="text-[11px] sm:text-xs leading-snug text-slate-600 bg-slate-50 border border-slate-200/90 rounded-full px-3.5 py-1.5 max-w-full"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-10 text-slate-600 leading-[1.75] text-[17px] font-light">{lead.bio}</p>

            <div className="mt-10 pl-6 border-l-[3px] border-law-gold">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                Approach
              </p>
              <p className="text-law-navy-900 text-[17px] leading-relaxed font-light">{lead.approach}</p>
            </div>

            <div className="mt-8 space-y-2 text-sm text-slate-500">
              <p>{lead.bar}</p>
              <p>{lead.education}</p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href={`${LAW_FIRM_BASE}/team`}
                className="inline-flex items-center gap-2 rounded-xl bg-law-navy-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-law-navy-800 transition-colors shadow-lg shadow-law-navy-950/20"
              >
                Full attorney roster
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`${LAW_FIRM_BASE}/free-consultation`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-law-navy-900/15 bg-white text-law-navy-900 px-7 py-3.5 text-sm font-semibold hover:border-law-gold/50 transition-colors"
              >
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
