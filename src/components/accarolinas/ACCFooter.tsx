import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Wind, Gauge, Facebook, Instagram, Star } from "lucide-react";
import { BASE, COMPANY, services, serviceAreas } from "@/lib/accarolinas/data";

const primaryAreas = serviceAreas.filter((a) => a.primary).map((a) => a.name);
const secondaryAreas = serviceAreas.filter((a) => !a.primary).map((a) => a.name);

const quickLinks = [
  { label: "Home", href: BASE },
  { label: "About Us", href: `${BASE}/about` },
  { label: "All Services", href: `${BASE}/services` },
  { label: "Financing", href: `${BASE}/financing` },
  { label: "Specials & Deals", href: `${BASE}/specials` },
  { label: "Service Areas", href: `${BASE}/service-areas` },
  { label: "Contact Us", href: `${BASE}/contact` },
];

export default function ACCFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* CTA bar */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-zinc-950 font-bold text-base">Need HVAC service in the Charlotte area?</p>
            <p className="text-zinc-950/70 text-sm mt-0.5">We serve Indian Trail, Charlotte, and all surrounding communities.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href={`${BASE}/contact`}
              className="flex items-center gap-2 bg-zinc-950/20 hover:bg-zinc-950/30 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors border border-zinc-950/20"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href={BASE} className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-sm bg-amber-500 flex items-center justify-center flex-shrink-0">
                <Wind className="w-5 h-5 text-zinc-950" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span className="text-white font-bold text-sm tracking-tight block">Air Central</span>
                <span className="text-amber-500 text-[9px] font-semibold tracking-[0.2em] uppercase block mt-0.5">Of The Carolinas</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Family-owned HVAC company serving Indian Trail and the greater Charlotte area. Residential, commercial, and everything in between.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 text-zinc-400 hover:text-amber-500 transition-colors text-sm group">
                <Phone className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 flex-shrink-0 transition-colors" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-zinc-400 hover:text-amber-500 transition-colors text-sm group">
                <Mail className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 flex-shrink-0 transition-colors" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href={COMPANY.social.facebook} className="w-8 h-8 rounded-md bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-zinc-400" />
              </a>
              <a href={COMPANY.social.instagram} className="w-8 h-8 rounded-md bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-zinc-400" />
              </a>
              <a href={COMPANY.social.google} className="w-8 h-8 rounded-md bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors" aria-label="Google Reviews">
                <Star className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-zinc-800">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div className="mt-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-3 border-b border-zinc-800">Hours</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-zinc-400 text-sm">
                  <Clock className="w-3.5 h-3.5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY.hours.weekdays}</span>
                </div>
                <div className="flex items-start gap-2 text-zinc-400 text-sm">
                  <Clock className="w-3.5 h-3.5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY.hours.saturday}</span>
                </div>
                <div className="flex items-start gap-2 text-zinc-400 text-sm">
                  <Clock className="w-3.5 h-3.5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-zinc-800">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`${BASE}/services/${s.slug}`} className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-zinc-800">Service Areas</h3>
            <div className="space-y-2.5">
              <p className="text-zinc-500 text-xs uppercase tracking-wider">Primary Areas</p>
              {primaryAreas.map((area) => (
                <div key={area} className="text-zinc-400 text-sm">{area}, NC</div>
              ))}
              <p className="text-zinc-500 text-xs uppercase tracking-wider pt-2">Also Serving</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {secondaryAreas.map((area) => (
                  <span key={area} className="text-zinc-500 text-xs">{area}</span>
                ))}
              </div>
              <Link href={`${BASE}/service-areas`} className="inline-block mt-3 text-amber-500 hover:text-amber-400 text-xs font-semibold transition-colors">
                View full coverage area →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Air Central Of The Carolinas. All rights reserved. Licensed HVAC Contractor — NC.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Terms of Service</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
