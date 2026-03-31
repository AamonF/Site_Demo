"use client";

import { Droplets, Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

const services = [
  "Drain Cleaning",
  "Leak Repair",
  "Water Heater Services",
  "Sewer Line Repair",
  "Fixture Installation",
  "Pipe Replacement",
  "Emergency Plumbing",
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function FPFooter() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-extrabold text-sm leading-tight">[Company Name]</p>
                <p className="text-sky-400 text-[10px] font-bold tracking-widest uppercase">Plumbing · [City], NC</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Licensed, insured, and trusted by 500+ homeowners across [City] and the surrounding area. Available 24/7 for emergencies.
            </p>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-slate-400 hover:text-white" strokeWidth={2} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-slate-400 hover:text-white" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleNav("#services"); }}
                    className="text-slate-500 hover:text-sky-400 text-sm transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500 flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    className="text-slate-500 hover:text-sky-400 text-sm transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500 flex-shrink-0" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact Us</p>
            <div className="space-y-4">
              <a href={PHONE_HREF} className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <Phone className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm group-hover:text-sky-300 transition-colors">{PHONE}</p>
                  <p className="text-slate-500 text-xs">24/7 Emergency Line</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-slate-400" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white text-sm">info@companyname.com</p>
                  <p className="text-slate-500 text-xs">Email Us</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-slate-400" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white text-sm">[City], NC</p>
                  <p className="text-slate-500 text-xs">Serving Greater Charlotte Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} [Company Name]. All rights reserved. Licensed Plumbing Contractor · [City], NC.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
