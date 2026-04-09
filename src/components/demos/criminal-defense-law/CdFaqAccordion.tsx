"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };

export function CdFaqAccordion({ items, idPrefix = "cd-faq" }: { items: readonly Item[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div key={`${item.q}-${i}`} className="px-4 py-1">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-3 py-4 text-left text-base font-semibold text-white transition hover:text-law-gold"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-law-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? "pb-4 text-sm leading-relaxed text-zinc-400" : "hidden"}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
