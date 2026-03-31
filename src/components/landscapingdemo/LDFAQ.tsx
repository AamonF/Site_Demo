"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you handle design and installation?",
    a: "Yes. We can start with a collaborative design phase — plant palettes, hardscape layouts, and drainage notes — then our crews execute the full install with the same team accountable end to end.",
  },
  {
    q: "Do you offer recurring maintenance?",
    a: "Absolutely. Many clients choose seasonal programs for mowing, bed upkeep, pruning, mulch refresh, and irrigation checks. We tailor frequency to your property and budget.",
  },
  {
    q: "Can I get a custom quote?",
    a: "Yes. After a quick call, we typically schedule an on-site visit in [City] and nearby areas to measure, photograph, and deliver a detailed quote — no cookie-cutter pricing.",
  },
];

export default function LDFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-24 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-emerald-800 font-semibold text-sm uppercase tracking-[0.12em] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Common questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-stone-200 bg-stone-50/80 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-stone-900 hover:bg-stone-100/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-800 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-stone-600 leading-relaxed text-[15px] border-t border-stone-200/80 pt-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
