"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, Home, Building2, Clock, Tag } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATServiceAgreementsProps {
  demo: BusinessDemo;
}

const agreementBenefits = [
  {
    icon: Tag,
    title: "Discounted Service Rates",
    description:
      "Agreement customers receive discounted pricing on all service calls and repair work — reducing the cost of keeping your system in top shape.",
  },
  {
    icon: Clock,
    title: "Non-Emergency Within 24 Hours",
    description:
      "We guarantee non-emergency scheduling within 24 hours for active agreement customers, so you're never left waiting.",
  },
  {
    icon: Home,
    title: "Residential Plans",
    description:
      "Tailored maintenance agreements for homeowners — covering scheduled visits, priority scheduling, and discounted service rates.",
  },
  {
    icon: Building2,
    title: "Commercial Plans",
    description:
      "Custom service agreements for commercial property managers and business owners with multiple HVAC systems.",
  },
];

export default function ATServiceAgreements({ demo }: ATServiceAgreementsProps) {
  if (!demo.realEstate) return null;

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const re = demo.realEstate;

  return (
    <section
      id="real-estate"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-teal-900 via-teal-900 to-slate-900 overflow-hidden"
    >
      {/* Decorative */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-800/30 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-800/40 blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-300 tracking-widest uppercase">
            Service Agreements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight text-balance">
            {re.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-teal-100/70 leading-relaxed text-balance">
            {re.subtitle}
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {agreementBenefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-teal-600/30 border border-teal-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-300" />
                </div>
                <h3 className="text-sm font-extrabold text-white mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-teal-100/60 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Full description + bullets */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">
                What&apos;s Included in a Service Agreement
              </h3>
              <p className="text-sm text-teal-100/70 leading-relaxed mb-6">
                {re.description}
              </p>
              <p className="text-xs text-teal-200/50 leading-relaxed italic">
                {re.paymentNote}
              </p>
            </div>
            <div>
              <ul className="space-y-3 mb-8" aria-label="Agreement benefits">
                {re.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-teal-100/80">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scroll("#contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
                >
                  {re.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={demo.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {re.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
