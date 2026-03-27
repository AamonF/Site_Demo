"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";
import { useState, type LucideIcon } from "react";
import { AnimatePresence } from "framer-motion";

export interface ACServicePageData {
  badge: string;
  headline: string;
  subheadline: string;
  heroIcon: LucideIcon;
  heroColor: string;
  problem: string;
  solution: string;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-blue-50/50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ACServicePage({ data }: { data: ACServicePageData }) {
  const { badge, headline, subheadline, heroIcon: HeroIcon, heroColor, problem, solution, benefits, process, faqs, relatedLinks } = data;

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4"
            >
              <HeroIcon className={`w-4 h-4 ${heroColor}`} />
              {badge}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3"
            >
              {headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl"
            >
              {subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/air-central-carolinas/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-md shadow-blue-900/20"
              >
                <Calendar className="w-5 h-5" />
                Schedule Service
              </Link>
              <a
                href="tel:+17045550190"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-900 border border-blue-200 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                Call (704) 555-0190
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 rounded-2xl p-7 border border-red-100"
            >
              <p className="text-red-600 font-semibold text-xs uppercase tracking-widest mb-3">The Problem</p>
              <p className="text-slate-700 leading-relaxed">{problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-2xl p-7 border border-blue-100"
            >
              <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Our Solution</p>
              <p className="text-slate-700 leading-relaxed">{solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 lg:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-7"
          >
            <h2 className="text-3xl font-extrabold text-slate-900">What You Can Expect</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-500 mb-3" />
                <h3 className="text-slate-900 font-bold text-base mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-7"
          >
            <h2 className="text-3xl font-extrabold text-slate-900">How It Works</h2>
            <p className="text-slate-500 mt-3">Simple. Straightforward. No surprises.</p>
          </motion.div>
          <div className="space-y-5">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {step}
                </div>
                <div className="bg-slate-50 rounded-2xl p-5 flex-1 border border-slate-100">
                  <h3 className="text-slate-900 font-bold mb-1.5">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 lg:py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-extrabold text-slate-900">Common Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-800/50 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-200 text-lg mb-8">
              Contact Air Central of the Carolinas today. Fast response, honest pricing, and service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/air-central-carolinas/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4" /> Schedule Service
              </Link>
              <a
                href="tel:+17045550190"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white border border-blue-600/50 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" /> Call (704) 555-0190
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-sm font-medium mb-4 text-center">Explore More Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-xl transition-all hover:bg-blue-50"
              >
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
