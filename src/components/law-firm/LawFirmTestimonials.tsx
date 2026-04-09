"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

import { TESTIMONIALS } from "@/lib/law-firm/content";

export function LawFirmTestimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-law-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08),transparent_65%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-law-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Client voices
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Trusted when outcomes mattered most
          </h2>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 md:p-14 shadow-2xl shadow-black/40">
          <Quote className="absolute top-8 left-8 w-10 h-10 text-law-gold/25" aria-hidden />
          <blockquote className="relative z-[1] text-xl sm:text-2xl leading-relaxed text-slate-100 font-light text-center max-w-3xl mx-auto">
            {t.quote}
          </blockquote>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div>
              <p className="font-semibold text-white text-lg">{t.name}</p>
              <p className="text-sm text-slate-400">
                {t.location} · {t.caseType}
              </p>
            </div>
            <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="w-5 h-5 fill-law-gold text-law-gold" aria-hidden />
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="p-2.5 rounded-full border border-white/15 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-law-gold" : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
              className="p-2.5 rounded-full border border-white/15 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Testimonials reflect individual experiences and are not guarantees. Outcomes vary by case.
        </p>
      </div>
    </section>
  );
}
