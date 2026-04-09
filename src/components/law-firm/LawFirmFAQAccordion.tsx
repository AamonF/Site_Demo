"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { question: string; answer: string };

type Props = {
  items: Item[];
  /** Optional FAQPage JSON-LD id for linking */
  id?: string;
};

export function LawFirmFAQAccordion({ items, id = "faq-accordion" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div id={id} className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.question}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-slate-50/80 transition-colors"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-law-navy-950 pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-law-gold shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
