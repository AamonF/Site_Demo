import Image from "next/image";
import { Phone } from "lucide-react";

import { cdImages } from "./images";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";

export function CdAttorneySection() {
  return (
    <section id="attorney" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 lg:max-w-none">
          <Image
            src={cdImages.attorney.src}
            alt={cdImages.attorney.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Lead counsel</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">{CD_BRAND.attorneySectionHeading}</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-zinc-500">{CD_BRAND.attorneyTitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            This practice is built for people at their worst moment—when the state has resources and you feel alone. The approach is straightforward:
            protect your rights like they matter, because they do. Counsel you meet here brings courtroom experience from both sides of the aisle and
            knows how prosecutors build cases—and where weak points appear.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-500">
            <li>• Trial experience in state and federal courts (demo positioning)</li>
            <li>• {CD_BRAND.barAdmissions}</li>
            <li>• Responsive team intake—urgent matters escalated immediately</li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${CD_BRAND.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-law-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              <Phone className="size-4" aria-hidden />
              Call {CD_BRAND.phone}
            </a>
            <a
              href={`${CD_DEMO_BASE}#consult`}
              data-cd-open-consult
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10"
            >
              Speak with a defense attorney
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
