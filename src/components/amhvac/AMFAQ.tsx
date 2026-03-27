"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMFAQProps {
  demo: BusinessDemo;
}

function FAQRow({
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
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
        open ? "border-emerald-300 bg-emerald-50" : "border-stone-200 bg-white"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 text-xs font-black text-stone-300 tabular-nums w-5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
            {question}
          </span>
        </div>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 transition-all duration-300 ${
            open ? "rotate-180 text-emerald-700" : "text-stone-400"
          }`}
        />
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
            <div className="px-6 pb-5 pl-[4.25rem]">
              <p className="text-sm text-stone-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AMFAQ({ demo }: AMFAQProps) {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-3 text-xs font-bold text-emerald-700 tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight text-balance">
            Common Questions About Our HVAC Service
          </h2>
          <p className="mt-4 text-lg text-stone-500">
            Answers to what Charlotte-area homeowners ask us most often.
          </p>
        </motion.div>

        <div className="space-y-3">
          {demo.faq.map((item, i) => (
            <FAQRow
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
          <p className="text-sm text-stone-500 mb-3">Still have a question?</p>
          <a
            href={demo.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors shadow-sm"
          >
            Call {demo.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
