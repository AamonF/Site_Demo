import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

import { PI_BRAND, PI_DEMO_BASE } from "./site-config";
import { piImages } from "./images";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Faded photo backdrop — sits behind overlay + content */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={piImages.hero.src}
          alt={piImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 saturate-[0.85]"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-law-navy-950/90 via-law-navy-900/78 to-[#060d18]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-law-navy-950/65 via-transparent to-law-navy-950/45"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl space-y-6 pi-animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-law-gold/30 bg-law-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">
            <ShieldCheck className="size-4" aria-hidden />
            {PI_BRAND.name}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Injured in an Accident?{" "}
            <span className="text-law-gold">Get the Compensation You Deserve.</span>
          </h1>
          <p className="text-lg text-zinc-300 sm:text-xl">
            If you were hurt by someone else’s negligence, timing matters. Get a free case review now—no fees unless
            we win your case.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`${PI_DEMO_BASE}#consult`}
              data-pi-open-consult
              className="pi-gold-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-law-gold px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-law-navy-950 shadow-xl shadow-law-gold/25 transition hover:bg-law-gold-light"
            >
              Free Consultation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={`tel:${PI_BRAND.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              <Phone className="size-4 text-law-gold" aria-hidden />
              Call Now
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-zinc-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">No Win, No Fee</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Available 24/7</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Millions Recovered</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:mx-0 pi-animate-fade-up pi-animate-delay-1">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <p className="font-display text-lg text-white">Need answers tonight?</p>
            <p className="mt-2 text-sm text-zinc-400">
              Speak with our intake team. If you have a case, we’ll outline strategy, timelines, and what to expect—
              clearly.
            </p>
            <a
              href={`tel:${PI_BRAND.phoneTel}`}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              <Phone className="size-4" aria-hidden />
              {PI_BRAND.phone}
            </a>
            <Link
              href={`${PI_DEMO_BASE}#consult`}
              data-pi-open-consult
              className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 py-3 text-sm font-semibold text-white"
            >
              Start online instead
            </Link>
          </div>
          <button
            type="button"
            data-pi-open-chat
            className="mt-4 w-full rounded-full border border-law-gold/40 bg-law-gold/10 py-3 text-sm font-semibold text-law-gold transition hover:bg-law-gold/15"
          >
            Accident Case Assistant
          </button>
        </div>
      </div>
    </section>
  );
}
