"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { CITY_SHORT } from "./constants";

const faqs = [
  {
    q: "How do I know what my home is worth?",
    a: `We deliver a pricing strategy based on recent comparable sales, current competition, and your home's condition and upgrades—not automated estimates alone. For ${CITY_SHORT} sellers, that means a clear range and a plan to maximize net proceeds.`,
  },
  {
    q: "How much do I need for a down payment?",
    a: "Down payment requirements vary by loan type and price point. Many buyers use conventional financing with as little as 3–5% down, while others choose larger down payments to reduce monthly costs. We connect you with trusted lenders to match goals to the right structure.",
  },
  {
    q: "When should I list my home?",
    a: "The best time balances market demand, your move timeline, and presentation readiness. We help you choose a launch date that aligns with buyer activity in your micro-market—then execute marketing so the first week counts.",
  },
  {
    q: "Do you work with relocation and investors?",
    a: "Yes—whether you are transferring for work, building a portfolio, or selling an investment property, we coordinate timelines, inspections, and introductions to vetted partners.",
  },
];

export default function REFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#faf9f7]" aria-labelledby="re-faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            FAQ
          </p>
          <h2 id="re-faq-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={false}
                className="rounded-xl bg-white ring-1 ring-neutral-200/90 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 font-semibold text-neutral-900 hover:bg-neutral-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#9a7b2d] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
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
