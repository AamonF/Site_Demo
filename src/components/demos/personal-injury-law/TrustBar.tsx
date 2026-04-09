import { Star } from "lucide-react";

import { trustStats } from "./home-content";

export function TrustBar() {
  return (
    <section className="border-b border-white/10 bg-[#0a1628] py-10" aria-label="Firm highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-5">
        {trustStats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center sm:text-left"
          >
            <p className="font-display text-3xl font-semibold text-white">{s.value}</p>
            <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
          </div>
        ))}
        <div className="col-span-2 flex flex-col items-center justify-center gap-2 rounded-2xl border border-law-gold/30 bg-law-gold/5 px-5 py-4 text-center md:col-span-1">
          <div className="flex items-center gap-1 text-law-gold" aria-label="Five star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-law-gold text-law-gold" />
            ))}
          </div>
          <p className="text-sm font-semibold text-white">Client-rated excellence</p>
          <p className="text-xs text-zinc-400">Demo testimonials for presentation purposes</p>
        </div>
      </div>
    </section>
  );
}
