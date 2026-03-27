"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Wind } from "lucide-react";

const BASE = "/air-central-carolinas";

const navLinks = [
  { label: "Services", href: `${BASE}/services` },
  { label: "About", href: `${BASE}/about` },
  { label: "Service Area", href: `${BASE}/service-area` },
  { label: "Contact", href: `${BASE}/contact` },
];

const serviceLinks = [
  { label: "AC Repair", href: `${BASE}/ac-repair` },
  { label: "AC Installation", href: `${BASE}/ac-installation` },
  { label: "Heating Repair", href: `${BASE}/heating-repair` },
  { label: "Heating Installation", href: `${BASE}/heating-installation` },
  { label: "HVAC Maintenance", href: `${BASE}/hvac-maintenance` },
  { label: "Indoor Air Quality", href: `${BASE}/indoor-air-quality` },
];

export default function ACHeader() {
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
          ? "bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm"
          : "bg-white border-b border-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href={BASE} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm shadow-blue-900/20">
              <Wind className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="leading-none">
              <span className="text-slate-900 font-bold text-sm tracking-tight block">Air Central</span>
              <span className="text-blue-500 text-[9px] font-semibold tracking-[0.15em] uppercase block mt-0.5">of the Carolinas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17045550190"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm shadow-blue-900/20"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
              (704) 555-0190
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-blue-50 shadow-lg">
          <div className="px-4 py-5 space-y-1">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 pb-2">
              Menu
            </p>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-2">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 pb-2">
                Services
              </p>
              {serviceLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href="tel:+17045550190"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3.5 rounded-xl text-sm font-bold transition-colors w-full"
              >
                <Phone className="w-4 h-4" />
                Call (704) 555-0190
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
