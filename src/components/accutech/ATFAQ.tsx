"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATFAQProps {
  demo: BusinessDemo;
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        open
          ? "border-teal-200 bg-teal-50/60"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-900 leading-snug">{question}</span>
        <div
          className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
            open ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ATFAQ({ demo }: ATFAQProps) {
  const mid = Math.ceil(demo.faq.length / 2);
  const col1 = demo.faq.slice(0, mid);
  const col2 = demo.faq.slice(mid);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-600 tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight text-balance">
            Common Questions About Accu-Tech HVAC
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Quick answers about our services, agreements, and service area.
          </p>
        </motion.div>

        {/* Two-column FAQ layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="space-y-3">
            {col1.map((item, i) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} index={i} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="space-y-3">
            {col2.map((item, i) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={i + mid}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">Still have a question? We&apos;re easy to reach.</p>
          <a
            href={demo.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            Call {demo.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
