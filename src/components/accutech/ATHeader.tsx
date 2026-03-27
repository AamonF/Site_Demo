"use client";

import { useState, useEffect } from "react";
import { Menu, X, Snowflake, Phone, ArrowRight } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATHeaderProps {
  demo: BusinessDemo;
}

export default function ATHeader({ demo }: ATHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem] lg:h-20">
          {/* Logo */}
          <button
            onClick={() => nav("#home")}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label={`${demo.name} — scroll to top`}
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-sm group-hover:bg-teal-700 transition-colors flex-shrink-0">
              <Snowflake className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-extrabold text-slate-900 tracking-tight">
                Accu-Tech HVAC
              </span>
              <span className="block text-[10px] font-semibold text-teal-600 tracking-[0.15em] uppercase">
                Services LLC
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Page navigation">
            {demo.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => nav(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={demo.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-teal-700 border border-teal-200 bg-teal-50 hover:bg-teal-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {demo.phone}
            </a>
            <button
              onClick={() => nav("#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              {demo.bookingCTA}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {demo.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => nav(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={demo.phoneHref}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-teal-700 border border-teal-200 bg-teal-50"
              >
                <Phone className="w-4 h-4" />
                Call {demo.phone}
              </a>
              <button
                onClick={() => nav("#contact")}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-bold bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer"
              >
                {demo.bookingCTA}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
