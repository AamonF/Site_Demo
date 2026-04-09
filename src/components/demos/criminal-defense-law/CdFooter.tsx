import Link from "next/link";

import { PRACTICE_LINKS, practicePath } from "./practice-data";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";

const footerNav = [
  { href: `${CD_DEMO_BASE}#trust`, label: "Trust" },
  { href: `${CD_DEMO_BASE}#practice-areas`, label: "Practice areas" },
  { href: `${CD_DEMO_BASE}#why-us`, label: "Approach" },
  { href: `${CD_DEMO_BASE}#results`, label: "Outcomes" },
  { href: `${CD_DEMO_BASE}#faq`, label: "FAQ" },
  { href: `${CD_DEMO_BASE}#consult`, label: "Contact" },
] as const;

export function CdFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-white">{CD_BRAND.publicLabel}</p>
            <p className="mt-2 text-sm text-zinc-500">{CD_BRAND.tagline}</p>
            <p className="mt-4 text-sm text-zinc-500">
              {CD_BRAND.addressLine1}
              <br />
              {CD_BRAND.cityStateZip}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Contact</p>
            <a className="mt-3 block text-sm font-semibold text-law-gold" href={`tel:${CD_BRAND.phoneTel}`}>
              {CD_BRAND.phone}
            </a>
            <a className="mt-2 block text-sm text-zinc-500" href={`mailto:${CD_BRAND.email}`}>
              {CD_BRAND.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-500">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    {...(l.href.endsWith("#consult") ? { "data-cd-open-consult": "" as const } : {})}
                    className="hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Practice areas</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-500">
              {PRACTICE_LINKS.map((p) => (
                <li key={p.slug}>
                  <Link href={practicePath(p.slug)} className="hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-zinc-600">
          <p>
            <strong className="text-zinc-500">Disclaimer:</strong> This website is a demonstration and may include illustrative testimonials, statistics,
            and case summaries that are not real. Nothing here is legal advice. No attorney-client relationship is formed by using this demo. If you need
            legal advice, consult a qualified attorney licensed in your jurisdiction.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} {CD_BRAND.publicLabel}. Demo website.</p>
        </div>
      </div>
    </footer>
  );
}
