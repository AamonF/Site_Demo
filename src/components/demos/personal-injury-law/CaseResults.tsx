import Link from "next/link";

import { caseResults } from "./home-content";
import { PI_DEMO_BASE } from "./site-config";

export function CaseResults() {
  return (
    <section id="results" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Case results</h2>
            <p className="mt-3 max-w-xl text-zinc-400">
              Past results do not guarantee future outcomes—but they show what disciplined preparation can accomplish.
            </p>
          </div>
          <Link
            href={`${PI_DEMO_BASE}#consult`}
            data-pi-open-consult
            className="inline-flex w-fit items-center justify-center rounded-full bg-law-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
          >
            Review my case
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseResults.map((c) => (
            <article
              key={c.amount + c.type}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6"
            >
              <p className="font-display text-3xl font-semibold text-law-gold">{c.amount}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white">{c.type}</p>
              <p className="mt-2 text-sm text-zinc-400">{c.detail}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-law-gold/10 blur-2xl" />
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-500">
          <strong className="text-zinc-300">Important:</strong> Case summaries are illustrative demo content for
          presentation purposes only. Every case is unique. No result should be understood as a prediction or guarantee
          for any future matter. Verdicts and settlements depend on facts, jurisdiction, damages, insurance coverage,
          and other variables.
        </p>
      </div>
    </section>
  );
}
