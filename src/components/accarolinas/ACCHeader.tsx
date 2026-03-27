"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Wind, ChevronDown, ArrowRight, Gauge } from "lucide-react";
import { BASE, COMPANY, navLinks } from "@/lib/accarolinas/data";

const serviceLinks = navLinks.find((l) => l.label === "Services")?.children ?? [];

export default function ACCHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/98 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href={BASE} onClick={closeAll} className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 rounded-sm bg-amber-500 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 transition-colors">
              <Wind className="w-5 h-5 text-zinc-950" strokeWidth={2.5} />
              <Gauge className="w-2.5 h-2.5 text-zinc-950/60 absolute -bottom-0.5 -right-0.5" />
            </div>
            <div className="leading-none">
              <span className="text-white font-bold text-sm tracking-tight block">Air Central</span>
              <span className="text-amber-500 text-[9px] font-semibold tracking-[0.2em] uppercase block mt-0.5">Of The Carolinas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors rounded-md hover:bg-zinc-800/50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Mega dropdown */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/50 p-5 w-72">
                      <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">Our Services</p>
                      <div className="space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeAll}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 text-sm transition-colors group/item"
                          >
                            {child.label}
                            <ArrowRight className="w-3 h-3 text-zinc-600 group-hover/item:text-amber-500 transition-colors" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-zinc-800">
                        <Link
                          href={`${BASE}/services`}
                          onClick={closeAll}
                          className="flex items-center justify-between w-full text-amber-500 hover:text-amber-400 text-xs font-semibold transition-colors"
                        >
                          View All Services
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="px-3 py-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors rounded-md hover:bg-zinc-800/50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`${BASE}/contact`}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors px-3 py-2"
            >
              Free Estimate
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-200 shadow-lg shadow-amber-900/30"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
              {COMPANY.phone}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 shadow-2xl">
          <div className="px-4 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest px-3 pb-2">Navigation</p>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 text-sm font-medium transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-zinc-700 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeAll}
                          className="block py-2 text-zinc-400 hover:text-white text-sm transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="block px-3 py-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-4 border-t border-zinc-800 mt-3 grid grid-cols-2 gap-2">
              <a
                href={COMPANY.phoneHref}
                onClick={closeAll}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 py-3.5 rounded-lg text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href={`${BASE}/contact`}
                onClick={closeAll}
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
