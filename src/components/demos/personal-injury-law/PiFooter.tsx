import Link from "next/link";

import { PI_BRAND, PI_DEMO_BASE } from "./site-config";
import { PRACTICE_LINKS, practicePath } from "./practice-data";

const footerNav = [
  { href: `${PI_DEMO_BASE}#practice-areas`, label: "Practice areas" },
  { href: `${PI_DEMO_BASE}#faq`, label: "FAQ" },
  { href: `${PI_DEMO_BASE}#consult`, label: "Consultation" },
] as const;

export function PiFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#040912] py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">{PI_BRAND.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            Demo website for presentation purposes. Not an offer of representation. No attorney-client relationship is
            formed by viewing this page.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>
              <a className="hover:text-law-gold" href={`tel:${PI_BRAND.phoneTel}`}>
                {PI_BRAND.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-law-gold" href={`mailto:${PI_BRAND.email}`}>
                {PI_BRAND.email}
              </a>
            </li>
            <li>
              {PI_BRAND.addressLine1}
              <br />
              {PI_BRAND.cityStateZip}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-zinc-300 hover:text-law-gold"
                  href={l.href}
                  {...(l.href.endsWith("#consult") ? { "data-pi-open-consult": "" as const } : {})}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-zinc-500">Practice pages</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {PRACTICE_LINKS.map((p) => (
              <li key={p.slug}>
                <Link className="text-zinc-400 hover:text-law-gold" href={practicePath(p.slug)}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-8 text-xs leading-relaxed text-zinc-600 sm:px-6">
        <p>
          <strong className="text-zinc-400">Advertising disclaimer:</strong> This site contains attorney advertising.
          Prior results do not guarantee a similar outcome. This communication may constitute attorney advertising under
          applicable rules. Responsible attorney: {PI_BRAND.attorneyName}.
        </p>
        <p className="mt-4">© {new Date().getFullYear()} {PI_BRAND.name}. Demo build.</p>
      </div>
    </footer>
  );
}
