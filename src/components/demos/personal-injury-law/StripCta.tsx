import Link from "next/link";

import { PI_BRAND, PI_DEMO_BASE } from "./site-config";

export function StripCta({
  title = "Ready for a straight answer about your case?",
  subtitle = "Free consultation • No fee unless we win",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-r from-law-gold/20 via-law-gold/10 to-transparent py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6">
        <div>
          <p className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</p>
          <p className="mt-1 text-sm text-zinc-300">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${PI_BRAND.phoneTel}`}
            className="inline-flex rounded-full bg-law-navy-950 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white ring-1 ring-white/10"
          >
            {PI_BRAND.phone}
          </a>
          <Link
            href={`${PI_DEMO_BASE}#consult`}
            data-pi-open-consult
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
          >
            Start online
          </Link>
        </div>
      </div>
    </section>
  );
}
