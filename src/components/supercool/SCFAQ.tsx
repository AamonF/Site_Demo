"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SCFAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function SCFAQ({ items, title = "Frequently Asked Questions", subtitle }: SCFAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-slate-400 mt-3">{subtitle}</p>}
        </div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="border border-slate-800/60 rounded-xl overflow-hidden hover:border-slate-700 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left bg-slate-950/60 hover:bg-slate-950/80 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm leading-relaxed">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 bg-slate-950/40">
                  <p className="text-slate-400 text-sm leading-relaxed pt-2">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
