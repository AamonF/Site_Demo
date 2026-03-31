"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I know which treatment is right for me?",
    a: "Your journey begins with a private consultation. We review your goals, medical history, and anatomy—then map options that align with your timeline, budget, and comfort level. You will never feel pressured to proceed.",
  },
  {
    q: "How long is recovery?",
    a: "Recovery varies by treatment. Many injectable visits involve minimal social downtime; laser and resurfacing may include a few days of redness or flaking. We provide clear aftercare and what to expect at each step.",
  },
  {
    q: "Are consultations required?",
    a: "Yes—for most aesthetic services we begin with a consultation to ensure candidacy, set expectations, and build a personalized plan. It is the foundation of safe, beautiful outcomes.",
  },
] as const;

export default function MSFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="ms-faq-heading"
      className="relative py-20 md:py-28 bg-[#faf8f6]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8897c] mb-3">
            FAQ
          </p>
          <h2
            id="ms-faq-heading"
            className="font-serif text-3xl sm:text-4xl text-[#2c2825] leading-tight"
          >
            Questions, answered gently
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={false}
                className="rounded-2xl bg-white ring-1 ring-[#e8dfd8]/90 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#2c2825] pr-2">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#a8897c] transition-transform duration-300 ${
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
                      <p className="px-5 pb-5 md:px-6 md:pb-6 text-[#5c534c] leading-relaxed border-t border-[#f4e8e6] pt-4">
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
