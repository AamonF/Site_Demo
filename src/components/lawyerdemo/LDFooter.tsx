import { Phone, Mail, MapPin, Scale } from "lucide-react";

import {
  CITY,
  COMPANY,
  CONSULTATION_MAIL_HREF,
  PHONE,
  PHONE_HREF,
} from "./constants";

const practiceLinks = [
  { label: "Personal Injury", href: "#practice-areas" },
  { label: "Criminal Defense", href: "#practice-areas" },
  { label: "Family Law", href: "#practice-areas" },
  { label: "Business Law", href: "#practice-areas" },
  { label: "Estate Planning", href: "#practice-areas" },
  { label: "Civil Litigation", href: "#practice-areas" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function LDFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060d18] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] border border-[#c9a227]/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
              </div>
              <div>
                <span className="text-white font-semibold block leading-tight">{COMPANY}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Attorneys at Law
                </span>
              </div>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Strategic legal counsel for clients who value clarity, preparation, and professional
              representation.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {practiceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-[#e8d5a3] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-[#e8d5a3] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#c9a227]/80 shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm">
                  Serving {CITY} and surrounding communities
                </span>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#e8d5a3] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c9a227]/80" aria-hidden />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={CONSULTATION_MAIL_HREF}
                  className="inline-flex items-start gap-2 text-sm text-slate-400 hover:text-[#e8d5a3] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#c9a227]/80 shrink-0 mt-0.5" aria-hidden />
                  info@companyname.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>
            © {year} {COMPANY}. Demo website. This page is a design preview and does not constitute
            legal advice.
          </p>
          <p className="sm:text-right">
            <a href="#home" className="hover:text-slate-400 transition-colors">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
