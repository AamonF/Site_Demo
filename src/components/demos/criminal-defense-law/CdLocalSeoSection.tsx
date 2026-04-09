import Link from "next/link";
import { MapPin } from "lucide-react";

import { PRACTICE_LINKS, practicePath } from "./practice-data";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";

export function CdLocalSeoSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#070c16] to-[#03060c] p-8 sm:p-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">
            <MapPin className="size-4" aria-hidden />
            Local defense in [City]
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Criminal defense attorneys serving [City], [County], and surrounding communities
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            When you search for a lawyer near you, you are not looking for a brochure—you are looking for someone who can move quickly in local courts,
            understand how cases are actually prosecuted in [City], and communicate without jargon. This demo page uses bracketed location placeholders so
            it can be duplicated for city-specific versions without rewriting the entire site.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-zinc-500">
            Office: {CD_BRAND.addressLine1}, {CD_BRAND.cityStateZip}. {CD_BRAND.stateLicense}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {PRACTICE_LINKS.map((p) => (
              <Link
                key={p.slug}
                href={practicePath(p.slug)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition hover:border-law-gold/35 hover:text-white"
              >
                {p.label} in [City]
              </Link>
            ))}
            <Link
              href={`${CD_DEMO_BASE}#consult`}
              data-cd-open-consult
              className="rounded-full border border-law-gold/35 bg-law-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-law-gold"
            >
              Federal matters — consult
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
