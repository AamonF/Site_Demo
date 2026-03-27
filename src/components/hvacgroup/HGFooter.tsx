import Link from "next/link";
import { Phone, Mail, Instagram, Facebook, Wind, MapPin } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

const serviceLinks = [
  { label: "AC Repair", href: `${BASE}/ac-repair` },
  { label: "AC Installation", href: `${BASE}/ac-installation` },
  { label: "Heating Repair", href: `${BASE}/heating-repair` },
  { label: "Heating Installation", href: `${BASE}/heating-installation` },
  { label: "Indoor Air Quality", href: `${BASE}/indoor-air-quality` },
  { label: "Commercial HVAC", href: `${BASE}/commercial-hvac` },
];

const companyLinks = [
  { label: "About Us", href: `${BASE}/about` },
  { label: "All Services", href: `${BASE}/services` },
  { label: "Service Area", href: `${BASE}/service-area` },
  { label: "Contact", href: `${BASE}/contact` },
];

export default function HGFooter() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={BASE} className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <Wind className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span className="text-white font-bold text-sm block">HVAC Group</span>
                <span className="text-emerald-500 text-[9px] font-semibold tracking-[0.18em] uppercase block mt-0.5">Inc. · Charlotte, NC</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Precision HVAC for residential and commercial properties across North Carolina. Family-driven. Bilingual.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              Charlotte, NC &amp; Surrounding Areas
            </div>
            <div className="flex gap-2.5">
              <a href="https://www.instagram.com/hvacgroupinc_nc" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-1.5">English</p>
                <a href="tel:+19802630912" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> (980) 263-0912
                </a>
              </li>
              <li>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-1.5">Español</p>
                <a href="tel:+17042819121" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> (704) 281-9121
                </a>
              </li>
              <li>
                <a href="mailto:hvacgroupinc@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 text-sm transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> hvacgroupinc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© 2025 HVAC Group Inc. All rights reserved. Charlotte, NC.</p>
          <p className="text-slate-700 text-xs">Licensed &amp; Insured · Residential &amp; Commercial · Bilingual</p>
        </div>
      </div>
    </footer>
  );
}
