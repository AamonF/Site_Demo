import Link from "next/link";
import { Wind, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const BASE = "/air-central-carolinas";

const serviceLinks = [
  { label: "AC Repair", href: `${BASE}/ac-repair` },
  { label: "AC Installation", href: `${BASE}/ac-installation` },
  { label: "Heating Repair", href: `${BASE}/heating-repair` },
  { label: "Heating Installation", href: `${BASE}/heating-installation` },
  { label: "HVAC Maintenance", href: `${BASE}/hvac-maintenance` },
  { label: "Indoor Air Quality", href: `${BASE}/indoor-air-quality` },
];

const companyLinks = [
  { label: "About Us", href: `${BASE}/about` },
  { label: "Service Area", href: `${BASE}/service-area` },
  { label: "Contact", href: `${BASE}/contact` },
  { label: "All Services", href: `${BASE}/services` },
];

export default function ACFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href={BASE} className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="leading-none">
                <span className="text-white font-bold text-sm block">Air Central</span>
                <span className="text-blue-400 text-[9px] font-semibold tracking-[0.15em] uppercase block mt-0.5">of the Carolinas</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Trusted residential HVAC services across North Carolina. Friendly,
              fast, and dependable — every time.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Air Central of the Carolinas on Facebook"
                className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Air Central of the Carolinas on Instagram"
                className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17045550190"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  (704) 555-0190
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aircentralcarolinas.com"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  info@aircentralcarolinas.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
                  Charlotte, NC &amp; Surrounding Areas
                </span>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <p className="text-xs text-blue-400 font-semibold mb-0.5">Emergency Service</p>
              <p className="text-slate-300 text-sm font-medium">Available 7 days a week</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Air Central of the Carolinas. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Serving Charlotte, NC &amp; surrounding communities
          </p>
        </div>
      </div>
    </footer>
  );
}
