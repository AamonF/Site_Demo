import Link from "next/link";
import { Scale, MapPin, Phone, Clock, Mail } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { NAV_PRIMARY, NAV_SECONDARY } from "@/lib/law-firm/content";
import { getParentPracticePages, practiceDetailUrl } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

const practiceParents = getParentPracticePages();

const legal = [
  { label: "Privacy Policy", href: `${LAW_FIRM_BASE}/privacy` },
  { label: "Disclaimer", href: `${LAW_FIRM_BASE}/disclaimer` },
  { label: "Terms of Use", href: `${LAW_FIRM_BASE}/terms` },
];

export function LawFirmFooter() {
  return (
    <footer className="bg-law-navy-950 text-slate-300 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-law-navy-700 to-law-navy-950 border border-law-gold/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-law-gold-light" aria-hidden />
              </div>
              <div>
                <span className="text-white font-semibold text-lg tracking-tight block">
                  {FIRM.name}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Attorneys at Law
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Strategic advocacy for people and businesses in high-stakes legal matters. Licensed in{" "}
              {FIRM.licensedIn}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-law-gold-light hover:border-law-gold/40 transition-colors text-xs font-semibold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-law-gold-light hover:border-law-gold/40 transition-colors text-xs font-semibold"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Practice hubs
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`${LAW_FIRM_BASE}/practice-areas`} className="hover:text-law-gold-light transition-colors">
                  All practice areas
                </Link>
              </li>
              {practiceParents.map((p) => (
                <li key={p.path}>
                  <Link href={practiceDetailUrl(p.path)} className="hover:text-law-gold-light transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Navigate
            </h2>
            <ul className="space-y-2.5 text-sm">
              {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-law-gold-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Contact
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-law-gold shrink-0 mt-0.5" aria-hidden />
                <span>
                  {FIRM.addressLine1}
                  <br />
                  {FIRM.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-law-gold shrink-0 mt-0.5" aria-hidden />
                <a
                  href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
                  className="text-white hover:text-law-gold-light font-medium"
                >
                  {FIRM.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-law-gold shrink-0 mt-0.5" aria-hidden />
                <a href={`mailto:${FIRM.email}`} className="hover:text-law-gold-light break-all">
                  {FIRM.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-law-gold shrink-0 mt-0.5" aria-hidden />
                <span>{FIRM.hours}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Legal
            </h2>
            <ul className="space-y-2.5 text-sm">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-law-gold-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-white/[0.07]">
          <p className="text-[11px] sm:text-xs text-slate-500 leading-[1.75] max-w-4xl space-y-3">
            <span className="block">
              <strong className="text-slate-400">Attorney advertising.</strong> This website may
              constitute attorney advertising under Rule 7.1 et seq. of the North Carolina Rules of
              Professional Conduct. The information provided is general in nature, may not reflect
              current legal developments in {FIRM.city} or {FIRM.county}, and is not legal advice
              for your specific situation.
            </span>
            <span className="block">
              <strong className="text-slate-400">No guarantee of results.</strong> Case summaries,
              testimonials, and ratings are illustrative; prior results do not guarantee a similar
              outcome. Every matter depends on facts, evidence, witnesses, judges, and opposing
              parties.
            </span>
            <span className="block">
              <strong className="text-slate-400">No attorney-client relationship.</strong> Contact
              through this site, chat tools, or email does not create a relationship until confirmed
              in a written engagement agreement accepted by {FIRM.name}. Do not send confidential
              information until conflicts are cleared.
            </span>
          </p>
          <p className="mt-4 text-xs text-slate-600">
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
