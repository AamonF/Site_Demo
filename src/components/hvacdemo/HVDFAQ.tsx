"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { CITY_SHORT } from "./constants";

const faqs = [
  {
    q: "Do you offer same-day service?",
    a: `Yes—when capacity allows, we prioritize same-day visits for heating and cooling emergencies in ${CITY_SHORT} and nearby areas. Call early for the best availability.`,
  },
  {
    q: "Do you handle both heating and cooling?",
    a: "Absolutely. Our technicians service furnaces, heat pumps, boilers, central AC, ductless mini-splits, and more—year-round.",
  },
  {
    q: "Do you offer financing?",
    a: "We offer flexible financing options on qualifying equipment and installations so you can invest in comfort on a payment plan that fits your budget.",
  },
];

export default function HVDFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="hvd-faq-heading" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sky-600 font-semibold text-sm uppercase tracking-[0.18em] text-center">
          FAQ
        </p>
        <h2
          id="hvd-faq-heading"
          className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center"
        >
          Common questions
        </h2>
        <p className="mt-4 text-center text-slate-600">
          Straight answers about how we work and what you can expect.
        </p>

        <ul className="mt-12 space-y-3 list-none p-0 m-0">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4 hover:bg-sky-50/80 transition-colors"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-semibold text-slate-900 pr-2">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-600 shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 pt-1 text-slate-600 leading-relaxed border-x border-b border-slate-200 rounded-b-xl bg-white -mt-1">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
