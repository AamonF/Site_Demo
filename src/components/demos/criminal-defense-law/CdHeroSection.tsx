import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Scale } from "lucide-react";

import { cdImages } from "./images";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";

export function CdHeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={cdImages.hero.src}
          alt={cdImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 saturate-[0.75]"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/88 via-[#03060c]/85 to-[#03060c]" aria-hidden />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-transparent to-black/55" aria-hidden />

      <div className="relative z-[2] mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl space-y-6 cd-animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-law-gold/35 bg-law-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-law-gold">
            <Scale className="size-4" aria-hidden />
            {CD_BRAND.publicLabel}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Charged With a Crime?{" "}
            <span className="text-law-gold">Your Defense Starts Now.</span>
          </h1>
          <p className="text-lg text-zinc-400 sm:text-xl">
            The clock starts the moment charges move. Speak with a defense team that responds fast, protects confidentiality, and builds strategy before the prosecution sets the narrative.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${CD_BRAND.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-law-gold px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-law-navy-950 shadow-xl shadow-law-gold/20 transition hover:bg-law-gold-light"
            >
              <Phone className="size-4" aria-hidden />
              Call Now
            </a>
            <Link
              href={`${CD_DEMO_BASE}#consult`}
              data-cd-open-consult
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Free Consultation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Available 24/7</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Confidential Case Review</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Former Prosecutor Perspective</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 cd-animate-fade-up cd-animate-delay-1">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-md">
            <p className="font-display text-xl text-white">Speak with defense counsel tonight</p>
            <p className="mt-2 text-sm text-zinc-500">
              If you are scared, you are not overreacting—this is serious. We help you understand options, deadlines, and what not to say while your case is active.
            </p>
            <a
              href={`tel:${CD_BRAND.phoneTel}`}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              <Phone className="size-4" aria-hidden />
              {CD_BRAND.phone}
            </a>
            <Link
              href={`${CD_DEMO_BASE}#consult`}
              data-cd-open-consult
              className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Start confidential intake
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
