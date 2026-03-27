"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Wind } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

const navLinks = [
  { label: "Services", href: `${BASE}/services` },
  { label: "Commercial", href: `${BASE}/commercial-hvac` },
  { label: "About", href: `${BASE}/about` },
  { label: "Service Area", href: `${BASE}/service-area` },
  { label: "Contact", href: `${BASE}/contact` },
];

const serviceLinks = [
  { label: "AC Repair", href: `${BASE}/ac-repair` },
  { label: "AC Installation", href: `${BASE}/ac-installation` },
  { label: "Heating Repair", href: `${BASE}/heating-repair` },
  { label: "Heating Installation", href: `${BASE}/heating-installation` },
  { label: "Indoor Air Quality", href: `${BASE}/indoor-air-quality` },
  { label: "Commercial HVAC", href: `${BASE}/commercial-hvac` },
];

export default function HGHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href={BASE} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
              <Wind className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="text-slate-900 font-bold text-sm tracking-tight block">HVAC Group</span>
              <span className="text-emerald-600 text-[9px] font-semibold tracking-[0.18em] uppercase block mt-0.5">Inc. · Charlotte, NC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+17042819121"
              className="text-slate-400 hover:text-emerald-600 text-xs font-medium transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> ES
            </a>
            <a href="tel:+19802630912"
              className="flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200">
              <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
              (980) 263-0912
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-5 space-y-1">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 pb-2">Menu</p>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-2">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 pb-2">Services</p>
              {serviceLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 grid grid-cols-2 gap-2 border-t border-slate-100 mt-2">
              <a href="tel:+19802630912" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl text-sm font-bold transition-colors">
                <Phone className="w-4 h-4" /> Call (EN)
              </a>
              <a href="tel:+17042819121" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3.5 rounded-xl text-sm font-bold transition-colors">
                <Phone className="w-4 h-4" /> Llamar (ES)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
