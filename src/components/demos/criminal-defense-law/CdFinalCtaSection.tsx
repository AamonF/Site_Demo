import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { CdConsultationForm } from "./CdConsultationForm";
import { cdImages } from "./images";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";

export function CdFinalCtaSection() {
  return (
    <section id="consult" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-law-gold/25 bg-[#050810]">
          <div className="absolute inset-0 opacity-40">
            <Image
              src={cdImages.documents.src}
              alt={cdImages.documents.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#03060c] via-[#03060c]/95 to-[#03060c]/88" aria-hidden />

          <div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Get a defense plan—not a panic spiral.</h2>
              <p className="mt-4 text-zinc-400">
                You can’t control what already happened. You can control what happens next. Call now for a confidential consultation, or send secure intake
                details and we’ll respond quickly.
              </p>
              <div className="mt-8 space-y-4 text-sm text-zinc-500">
                <p className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-law-gold" aria-hidden />
                  <span>24/7 phone line for emergencies (demo)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-law-gold" aria-hidden />
                  <span>Discreet intake—no judgment, no wasted time</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-law-gold" aria-hidden />
                  <span>Clear next steps, even if the situation is complicated</span>
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${CD_BRAND.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-law-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-law-navy-950"
                >
                  <Phone className="size-4" aria-hidden />
                  Call {CD_BRAND.phone}
                </a>
                <Link
                  href={`${CD_DEMO_BASE}#practice-areas`}
                  className="text-center text-sm font-semibold text-law-gold underline-offset-4 hover:underline"
                >
                  Browse practice areas
                </Link>
              </div>
            </div>
            <CdConsultationForm
              idPrefix="cd-final"
              heading="Free consultation (confidential)"
              subheading="Tell us the charge, the court date if you have one, and the best number to reach you."
              className="border border-white/10 bg-[#070c16]/95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
