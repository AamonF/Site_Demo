"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wind, Phone, CalendarCheck } from "lucide-react";
import Image from "next/image";
import type { BusinessDemo } from "@/lib/demos/types";

interface DemoHeaderProps {
  demo: BusinessDemo;
}

export default function DemoHeader({ demo }: DemoHeaderProps) {
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
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[5.5rem]">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label={`${demo.name} - go to top`}
          >
            {demo.logoUrl ? (
              <Image
                src={demo.logoUrl}
                alt={`${demo.name} logo`}
                width={180}
                height={72}
                className="h-16 w-auto object-contain"
                priority
              />
            ) : (
              <>
                <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center shadow-sm group-hover:bg-blue-800 transition-colors">
                  <Wind className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold text-slate-900 leading-tight">
                  {demo.name}
                </span>
              </>
            )}
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
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={demo.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-sm transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              {demo.bookingCTA}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={demo.phoneHref}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {demo.phone}
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors cursor-pointer"
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
