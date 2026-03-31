import Image from "next/image";

import { COMPANY, CITY, IMAGES } from "./constants";

export default function LDAbout() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-28 bg-[#f0f2f6] border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white shadow-xl shadow-slate-400/25">
                <Image
                  src={IMAGES.aboutLead}
                  alt="Lead attorney professional portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-2 max-w-[220px] rounded-xl bg-[#0a1628] text-white p-4 shadow-lg border border-[#c9a227]/25">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#c9a227] font-semibold">
                  Our commitment
                </p>
                <p className="mt-2 text-sm leading-snug text-slate-200 ">
                  Integrity first. Clear strategy. Relentless preparation.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-[#8b6914] text-xs font-semibold uppercase tracking-[0.22em]">
              About the Firm
            </p>
            <h2 id="about-heading" className="mt-3 text-3xl sm:text-4xl text-[#0a1628]">
              A firm focused on clarity, credibility, and client respect
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 text-lg leading-relaxed ">
              <p>
                {COMPANY} serves individuals and businesses across {CITY} with counsel that is
                deliberate and direct. Our work is grounded in thorough analysis, disciplined
                preparation, and a steady commitment to the people we represent.
              </p>
              <p>
                We understand that legal issues rarely arrive on a convenient timeline. From the
                first conversation, we prioritize transparent communication—so you know what matters,
                what options exist, and what we recommend based on experience—not speculation.
              </p>
            </div>

            <div className="mt-10 relative rounded-2xl overflow-hidden border border-slate-200/90 aspect-[21/9] max-h-[280px]">
              <Image
                src={IMAGES.teamOffice}
                alt="Attorneys collaborating in a modern law office"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-[#0a1628]/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8">
                <p className="text-white/95 text-sm sm:text-base max-w-xl ">
                  A collaborative team environment where strategy is tested, refined, and executed
                  with professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
