"use client";

import { useState, useEffect } from "react";
import { Menu, X, Flame, Phone, CalendarCheck } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMHeaderProps {
  demo: BusinessDemo;
}

export default function AMHeader({ demo }: AMHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-md border-b border-stone-200"
          : "bg-white border-b border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[5.5rem]">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label={`${demo.name} — go to top`}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center shadow-sm group-hover:bg-emerald-800 transition-colors">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-black text-stone-900 tracking-tight">
                Andrew Matthews
              </span>
              <span className="block text-xs font-semibold text-emerald-700 tracking-widest uppercase">
                HVAC
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Page navigation"
          >
            {demo.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={demo.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-800 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {demo.phone}
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              {demo.bookingCTA}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {demo.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-stone-700 hover:text-stone-900 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={demo.phoneHref}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-emerald-800 border border-emerald-200 bg-emerald-50"
              >
                <Phone className="w-4 h-4" />
                Call {demo.phone}
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white transition-colors cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                {demo.bookingCTA}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
