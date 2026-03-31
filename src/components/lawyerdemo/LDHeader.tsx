"use client";

import { useState, useEffect } from "react";
import { Phone, Scale, Menu, X } from "lucide-react";

import { COMPANY, PHONE, PHONE_HREF } from "./constants";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function LDHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-[#0a1628]/88 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.25rem] md:h-[4.75rem]">
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] border border-[#c9a227]/35 flex items-center justify-center shadow-md shadow-black/30 group-hover:border-[#c9a227]/55 transition-colors">
              <Scale className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
            </div>
            <div className="leading-tight">
              <span className="text-white font-semibold text-base tracking-tight block">
                {COMPANY}
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-medium">
                Attorneys at Law
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a227]/90 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={PHONE_HREF}
              className="hidden md:inline-flex items-center gap-2 text-white/95 text-sm font-semibold hover:text-[#e8d5a3] transition-colors"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <Phone className="w-3.5 h-3.5" aria-hidden />
              </span>
              {PHONE}
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#c9a227] px-4 py-2.5 text-sm font-semibold text-[#0a1628] shadow-md shadow-black/20 hover:bg-[#d4b23a] transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <button
              type="button"
              className="xl:hidden text-slate-200 hover:text-white p-2 rounded-md border border-white/10"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#0a1628] px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-200 py-3 px-2 rounded-md hover:bg-white/5 text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-[#e8d5a3] py-3 px-2 font-semibold"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href="#contact"
              className="mt-2 text-center rounded-md bg-[#c9a227] py-3 font-semibold text-[#0a1628]"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
