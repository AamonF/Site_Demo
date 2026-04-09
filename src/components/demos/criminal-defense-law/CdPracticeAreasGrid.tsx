import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PRACTICE_LINKS, practicePath } from "./practice-data";
import { CD_DEMO_BASE } from "./site-config";

const federalCard = {
  label: "Federal Charges",
  description: "Complex investigations, grand jury, and federal court procedure—handled with discretion.",
  href: `${CD_DEMO_BASE}#consult`,
} as const;

export function CdPracticeAreasGrid() {
  return (
    <section id="practice-areas" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Practice areas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Defense for the charges that can change everything
          </h2>
          <p className="mt-4 text-zinc-400">
            Select a practice area to learn how we approach the charge, what prosecutors prioritize, and what you should do next.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_LINKS.map((p) => (
            <Link
              key={p.slug}
              href={practicePath(p.slug)}
              className="group rounded-2xl border border-white/10 bg-[#070c16] p-6 transition hover:border-law-gold/35 hover:bg-[#0a1020]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-law-gold">{p.label}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{p.description}</p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-law-gold/80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-wide text-law-gold">View defense guide</span>
            </Link>
          ))}

          <Link
            href={federalCard.href}
            data-cd-open-consult
            className="group rounded-2xl border border-law-gold/25 bg-law-gold/[0.06] p-6 transition hover:border-law-gold/45"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{federalCard.label}</h3>
                <p className="mt-2 text-sm text-zinc-400">{federalCard.description}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-law-gold" />
            </div>
            <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-wide text-law-gold">
              Request federal case review
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
