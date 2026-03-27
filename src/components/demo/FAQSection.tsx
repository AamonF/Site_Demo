"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface FAQSectionProps {
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <div className="h-px bg-slate-100 mb-4" />
              <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection({ demo }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block mb-3 text-blue-600 text-sm font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
            Common Questions About HVAC Service in Charlotte
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Answers to the questions we hear most often from Charlotte area
            homeowners.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {demo.faq.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-500 mb-3">
            Still have a question?
          </p>
          <a
            href={demo.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-colors"
          >
            Call {demo.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
