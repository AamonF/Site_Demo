import { Quote } from "lucide-react";

import { testimonials } from "./home-content";

export function CdTestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 border-b border-white/10 bg-[#050810] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Client voices</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Relief, trust, and clarity under pressure</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-[#070c16] p-6">
              <Quote className="size-8 text-law-gold/60" aria-hidden />
              <blockquote className="mt-4 text-sm leading-relaxed text-zinc-400">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-white">
                {t.name}
                <span className="mt-1 block text-xs font-normal text-zinc-600">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-zinc-600">
          Testimonials are illustrative demo content and may not reflect real clients or cases.
        </p>
      </div>
    </section>
  );
}
