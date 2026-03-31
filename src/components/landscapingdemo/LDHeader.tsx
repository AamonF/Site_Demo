"use client";

import { useState, useEffect } from "react";
import { Phone, Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE, PHONE_HREF } from "./constants";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openLandscapingModal"));
  }
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function LDHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone-50/95 backdrop-blur-md shadow-lg shadow-emerald-950/10 border-b border-stone-200/80"
            : "bg-gradient-to-b from-stone-900/55 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-colors ${
                  scrolled
                    ? "bg-emerald-800 shadow-emerald-900/20"
                    : "bg-emerald-700/90 border border-white/10"
                }`}
              >
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span
                  className={`font-bold text-lg tracking-tight block ${
                    scrolled ? "text-stone-900" : "text-white drop-shadow-sm"
                  }`}
                >
                  [Company Name]
                </span>
                <span
                  className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${
                    scrolled ? "text-emerald-800" : "text-emerald-200/90"
                  }`}
                >
                  Landscape Studio
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                    scrolled
                      ? "text-stone-600 hover:text-emerald-900"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={PHONE_HREF}
                className={`hidden sm:inline-flex items-center gap-2 font-bold text-sm transition-colors ${
                  scrolled ? "text-stone-800 hover:text-emerald-900" : "text-white hover:text-emerald-100"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    scrolled
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-white/10 border-white/20"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                {PHONE}
              </a>
              <button
                type="button"
                onClick={openModal}
                className="bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2.5 md:px-5 rounded-lg shadow-lg shadow-emerald-900/25 transition-all duration-200 whitespace-nowrap"
              >
                Get Quote
              </button>
              <button
                type="button"
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? "text-stone-800 hover:bg-stone-100" : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-stone-900/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(100%,20rem)] bg-stone-50 border-l border-stone-200 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-white">
                <span className="text-stone-900 font-bold text-base">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="text-stone-500 hover:text-stone-800 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="p-4 border-t border-stone-200 bg-white flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  {PHONE}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    openModal();
                    setMobileOpen(false);
                  }}
                  className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
