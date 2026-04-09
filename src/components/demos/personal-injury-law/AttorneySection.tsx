import Image from "next/image";
import { Award, BadgeCheck } from "lucide-react";

import { PI_BRAND } from "./site-config";
import { piImages } from "./images";

export function AttorneySection() {
  return (
    <section id="attorney" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-2xl border border-white/10 sm:max-w-[220px] lg:mx-0">
          <Image
            src={piImages.attorney.src}
            alt={piImages.attorney.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 220px, 220px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-transparent to-transparent" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-law-gold">Leadership</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {PI_BRAND.attorneyName}
          </h2>
          <p className="mt-2 text-sm font-semibold text-zinc-300">{PI_BRAND.attorneyTitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Our firm is built around a simple standard: clients deserve attorneys who can try cases—not just settle them.
            For over a decade we’ve confronted insurers, corporate defendants, and defense counsel who underestimate injury
            victims.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Our approach blends trial preparation with modern investigation: rapid evidence preservation, credible medical
            narratives, and financial modeling that makes damages hard to ignore.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-zinc-300">
            <li className="flex gap-3">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-law-gold" aria-hidden />
              <span>{PI_BRAND.barAdmissions}</span>
            </li>
            <li className="flex gap-3">
              <Award className="mt-0.5 size-5 shrink-0 text-law-gold" aria-hidden />
              <span>Recognized trial advocate — demo credentials for presentation purposes</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
