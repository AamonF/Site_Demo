"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Home,
  FileText,
  Clock,
  CreditCard,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface RealEstateSectionProps {
  demo: BusinessDemo;
}

const featureIcons = [Home, FileText, Clock, CreditCard];

export default function RealEstateSection({ demo }: RealEstateSectionProps) {
  if (!demo.realEstate) return null;
  const re = demo.realEstate;

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="real-estate"
      className="relative py-20 lg:py-28 bg-blue-950 text-white overflow-hidden"
    >
      {/* Decorative bg */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-800/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-700/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 text-orange-400 text-sm font-semibold tracking-wider uppercase">
              Real Estate Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
              {re.title}
            </h2>
            <p className="mt-2 text-blue-300 text-base font-medium">
              {re.subtitle}
            </p>
            <p className="mt-5 text-blue-200 text-base leading-relaxed">
              {re.description}
            </p>

            {/* Payment note */}
            <div className="mt-6 flex items-start gap-3 bg-white/8 border border-white/15 rounded-xl p-4">
              <CreditCard className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-200 leading-relaxed">
                <strong className="text-white font-semibold">
                  Flexible payment for pre-closing replacements:
                </strong>{" "}
                {re.paymentNote}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                {re.ctaPrimary}
              </button>
              <a
                href={demo.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {re.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* Right — price card + bullets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Price card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 mb-6 shadow-2xl">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                    Inspection Price
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {re.price}
                    </span>
                    <span className="text-sm text-slate-400 font-medium mb-1">
                      {re.priceLabel}
                    </span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-blue-700" />
                </div>
              </div>

              <ul className="space-y-3">
                {re.bullets.map((bullet, i) => {
                  const Icon = featureIcons[i] ?? CheckCircle2;
                  return (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <Icon className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={() => handleScroll("#contact")}
                className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-sm transition-colors cursor-pointer"
              >
                Schedule Real Estate Inspection
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Who it serves */}
            <div className="grid grid-cols-3 gap-3">
              {["Buyers", "Sellers", "Agents"].map((label) => (
                <div
                  key={label}
                  className="bg-white/8 border border-white/15 rounded-xl py-3 px-2 text-center"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-400 mx-auto mb-1.5" />
                  <span className="text-xs font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
