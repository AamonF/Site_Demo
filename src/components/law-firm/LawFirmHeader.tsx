"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Scale, Menu, X, ChevronDown } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { NAV_SECONDARY } from "@/lib/law-firm/content";
import { getPracticeNavGroups } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

const practiceGroups = getPracticeNavGroups();

const PRIMARY_NO_PRACTICE = [
  { label: "Home", href: LAW_FIRM_BASE },
  { label: "Results", href: `${LAW_FIRM_BASE}/results` },
  { label: "About", href: `${LAW_FIRM_BASE}/about` },
  { label: "Team", href: `${LAW_FIRM_BASE}/team` },
  { label: "Contact", href: `${LAW_FIRM_BASE}/contact` },
] as const;

export function LawFirmHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const practiceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (practiceRef.current && !practiceRef.current.contains(e.target as Node)) {
        setPracticeOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-law-navy-950/95 backdrop-blur-md shadow-lg shadow-black/25 border-b border-white/10"
          : "bg-law-navy-950/90 backdrop-blur-sm border-b border-white/[0.06]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4rem] md:h-[4.5rem]">
          <Link href={LAW_FIRM_BASE} className="flex items-center gap-3 group shrink-0 z-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-law-navy-700 to-law-navy-950 border border-law-gold/35 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-law-gold/55 transition-colors">
              <Scale className="w-5 h-5 text-law-gold-light" aria-hidden />
            </div>
            <div className="leading-tight text-left">
              <span className="text-white font-semibold text-[0.95rem] sm:text-base tracking-tight block">
                {FIRM.headerName}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                {FIRM.headerSubtitle}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0 xl:gap-1" aria-label="Primary">
            <Link
              href={PRIMARY_NO_PRACTICE[0].href}
              className="px-3 py-2 text-slate-300 hover:text-white text-sm font-medium tracking-wide rounded-md hover:bg-white/[0.06] transition-colors"
            >
              {PRIMARY_NO_PRACTICE[0].label}
            </Link>

            <div className="relative" ref={practiceRef}>
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                  practiceOpen ? "text-white bg-white/[0.08]" : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                }`}
                aria-expanded={practiceOpen}
                aria-haspopup="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setPracticeOpen((v) => !v);
                }}
              >
                Practice Areas
                <ChevronDown className={`w-4 h-4 transition-transform ${practiceOpen ? "rotate-180" : ""}`} />
              </button>
              {practiceOpen && (
                <div className="absolute left-0 top-full pt-2 z-[80] w-[min(100vw-2rem,56rem)]">
                  <div className="rounded-xl border border-white/10 bg-law-navy-900/98 backdrop-blur-xl shadow-2xl shadow-black/50 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {practiceGroups.map((g) => (
                      <div key={g.title} className="min-w-0">
                        <Link
                          href={g.href}
                          className="text-white font-semibold text-sm hover:text-law-gold-light transition-colors block truncate"
                          onClick={() => setPracticeOpen(false)}
                        >
                          {g.title}
                        </Link>
                        <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
                          {g.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="text-[13px] text-slate-400 hover:text-white leading-snug block"
                                onClick={() => setPracticeOpen(false)}
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="sm:col-span-2 lg:col-span-4 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs text-slate-500 max-w-md">
                        Full-service advocacy across injury, criminal defense, family, and immigration—each matter routed
                        to focused counsel.
                      </p>
                      <Link
                        href={`${LAW_FIRM_BASE}/practice-areas`}
                        className="text-sm font-semibold text-law-gold-light hover:text-white"
                        onClick={() => setPracticeOpen(false)}
                      >
                        View practice overview →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {PRIMARY_NO_PRACTICE.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-slate-300 hover:text-white text-sm font-medium tracking-wide rounded-md hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-slate-300 hover:text-white text-sm font-medium rounded-md hover:bg-white/[0.06] transition-colors"
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((v) => !v)}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-1 w-52 rounded-lg border border-white/10 bg-law-navy-900 shadow-xl py-1 z-50">
                  {NAV_SECONDARY.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10 hover:text-white"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${FIRM.phoneTel.replace(/\+/g, "")}`}
              className="hidden md:inline-flex items-center gap-2 text-white/95 text-sm font-semibold hover:text-law-gold-light transition-colors"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <Phone className="w-3.5 h-3.5" aria-hidden />
              </span>
              {FIRM.phoneDisplay}
            </a>
            <Link
              href={`${LAW_FIRM_BASE}/free-consultation`}
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-law-gold px-4 py-2.5 text-sm font-semibold text-law-navy-950 shadow-md shadow-black/25 hover:bg-[#d4b23a] transition-colors duration-200"
            >
              Free consultation
            </Link>
            <button
              type="button"
              className="lg:hidden text-slate-200 hover:text-white p-2 rounded-lg border border-white/10"
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
        <div className="lg:hidden border-t border-white/10 bg-law-navy-950 px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-0.5" aria-label="Mobile">
            <Link
              href={LAW_FIRM_BASE}
              className="text-slate-200 py-3 px-2 rounded-lg hover:bg-white/5 text-base font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <button
              type="button"
              className="flex items-center justify-between text-slate-200 py-3 px-2 rounded-lg hover:bg-white/5 text-base font-medium text-left w-full"
              onClick={() => setMobilePracticeOpen((v) => !v)}
              aria-expanded={mobilePracticeOpen}
            >
              Practice Areas
              <ChevronDown className={`w-5 h-5 shrink-0 ${mobilePracticeOpen ? "rotate-180" : ""}`} />
            </button>
            {mobilePracticeOpen && (
              <div className="pl-3 pb-2 space-y-4 border-l border-white/10 ml-2">
                <Link
                  href={`${LAW_FIRM_BASE}/practice-areas`}
                  className="block text-law-gold-light text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  All practice areas
                </Link>
                {practiceGroups.map((g) => (
                  <div key={g.title}>
                    <Link
                      href={g.href}
                      className="text-white text-sm font-medium block py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {g.title}
                    </Link>
                    <ul className="mt-1 space-y-1">
                      {g.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="text-slate-400 text-sm block py-1 pl-2"
                            onClick={() => setMobileOpen(false)}
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {PRIMARY_NO_PRACTICE.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-200 py-3 px-2 rounded-lg hover:bg-white/5 text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {NAV_SECONDARY.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 py-2.5 px-2 rounded-lg hover:bg-white/5 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${FIRM.phoneTel.replace(/\+/g, "")}`}
              className="flex items-center gap-2 text-law-gold-light py-3 px-2 font-semibold"
            >
              <Phone className="w-4 h-4" />
              {FIRM.phoneDisplay}
            </a>
            <Link
              href={`${LAW_FIRM_BASE}/contact`}
              className="mt-2 text-center rounded-lg bg-law-gold py-3 font-semibold text-law-navy-950"
              onClick={() => setMobileOpen(false)}
            >
              Book consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
