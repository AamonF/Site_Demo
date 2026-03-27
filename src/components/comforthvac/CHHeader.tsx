"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Wind } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function CHHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-md border-b border-blue-100"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:from-blue-500 group-hover:to-blue-600 transition-all">
              <Wind className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="text-slate-900 font-bold text-base tracking-tight block">[Company Name]</span>
              <span className="text-blue-600 text-[10px] font-semibold tracking-widest uppercase block mt-0.5">HVAC Experts · [City], NC</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-600/25"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="px-4 py-2.5 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-bold transition-all duration-200"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 pb-2">Navigation</p>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="block px-3 py-3 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-blue-50 text-sm font-medium transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-slate-100 mt-2">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); setOpen(false); handleNav("#contact"); }}
                className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 py-3.5 rounded-xl text-sm font-bold transition-colors hover:bg-blue-50"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
