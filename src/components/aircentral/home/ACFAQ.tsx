"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you come out?",
    a: "We offer same-day service for most repair calls. For non-emergency requests, we typically schedule within 24–48 hours. We always give you a clear arrival window so you're not waiting all day.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Yes! Our Comfort Plan includes two tune-ups per year (spring and fall), priority scheduling, discounts on parts and repairs, and a full system inspection each visit. It's the best way to prevent breakdowns and keep your system running efficiently.",
  },
  {
    q: "Should I repair or replace my HVAC system?",
    a: "The honest answer depends on the age and condition of your system. If your unit is over 12–15 years old and facing a major repair, replacement is often the smarter investment. We'll give you a straightforward recommendation — not one that's driven by upselling.",
  },
  {
    q: "Do you service all HVAC brands?",
    a: "Yes. Our technicians are trained and experienced across all major brands including Carrier, Trane, Lennox, Bryant, Goodman, Rheem, American Standard, and more. We service whatever's in your home.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Charlotte, NC and the surrounding communities — including Concord, Gastonia, Mooresville, Kannapolis, Huntersville, Matthews, Monroe, and more. Call us to confirm we cover your area.",
  },
  {
    q: "Do you offer financing for new installations?",
    a: "Yes, we work with financing partners to make new system installations affordable. Ask about our options when you call — we'll help you find a payment plan that fits your budget.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Absolutely. All of our technicians are fully licensed and insured in the state of North Carolina. You can trust that the person in your home is qualified, background-checked, and backed by our company.",
  },
];

export default function ACFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 lg:py-16 bg-slate-50" aria-label="Frequently asked questions">
      {/* FAQ schema */}
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Common Questions Answered
          </h2>
          <p className="text-slate-500 text-lg">
            Have more questions? Don&apos;t hesitate to{" "}
            <a href="tel:+17045550190" className="text-blue-600 hover:underline font-medium">
              give us a call
            </a>
            .
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-blue-50/50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
