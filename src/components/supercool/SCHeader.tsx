"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Wind } from "lucide-react";
import { SC_BUSINESS, SC_NAV_SERVICES, SC_NAV_MAIN } from "@/lib/supercool/data";

export default function SCHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = SC_NAV_SERVICES.some((s) => pathname === s.href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/60"
            : "bg-slate-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/supercoolhvac" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-sky-400 flex items-center justify-center group-hover:bg-sky-300 transition-colors">
                <Wind className="w-4.5 h-4.5 text-slate-950" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base tracking-tight">Super Cool</span>
                <span className="block text-sky-400 text-[10px] font-semibold uppercase tracking-widest -mt-0.5">HVAC · Charlotte</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/supercoolhvac"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/supercoolhvac") ? "text-sky-400 bg-sky-400/10" : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isServicesActive ? "text-sky-400 bg-sky-400/10" : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-slate-900 border border-slate-700/60 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
                    {SC_NAV_SERVICES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(item.href)
                            ? "text-sky-400 bg-sky-400/10"
                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {SC_NAV_MAIN.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-sky-400 bg-sky-400/10" : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SC_BUSINESS.phoneHref}
                className="flex items-center gap-1.5 text-sm text-sky-400 font-semibold hover:text-sky-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {SC_BUSINESS.phone}
              </a>
              <Link
                href="/supercoolhvac/contact"
                className="px-4 py-2 rounded-lg bg-sky-400 text-slate-950 text-sm font-bold hover:bg-sky-300 transition-colors"
              >
                Request Service
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-slate-950 border-t border-slate-800/60 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <Link href="/supercoolhvac" className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive("/supercoolhvac") ? "text-sky-400 bg-sky-400/10" : "text-slate-300"}`}>
                Home
              </Link>
              <div className="pt-1 pb-1">
                <p className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Services</p>
                {SC_NAV_SERVICES.map((item) => (
                  <Link key={item.href} href={item.href} className={`block px-3 py-2.5 rounded-lg text-sm ${isActive(item.href) ? "text-sky-400 bg-sky-400/10" : "text-slate-300"}`}>
                    {item.label}
                  </Link>
                ))}
              </div>
              {SC_NAV_MAIN.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive(item.href) ? "text-sky-400 bg-sky-400/10" : "text-slate-300"}`}>
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-800/60 space-y-2">
                <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-sky-400/40 text-sky-400 font-semibold text-sm">
                  <Phone className="w-4 h-4" /> {SC_BUSINESS.phone}
                </a>
                <Link href="/supercoolhvac/contact" className="flex items-center justify-center w-full py-2.5 rounded-lg bg-sky-400 text-slate-950 font-bold text-sm">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky mobile CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/60 flex">
        <a href={SC_BUSINESS.phoneHref} className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sky-400 font-bold text-sm border-r border-slate-800/60">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link href="/supercoolhvac/contact" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-sky-400 text-slate-950 font-bold text-sm">
          Request Service
        </Link>
      </div>
    </>
  );
}
