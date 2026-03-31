"use client";

import { useState, useEffect } from "react";
import { Phone, Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:7045550123";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function ERHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/96 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-zinc-800/60"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30 group-hover:bg-red-500 transition-colors">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span className="text-white font-black text-lg tracking-tight block">
                  [Company Name]
                </span>
                <span className="text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Roofing Experts
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>

            {/* Right side CTAs */}
            <div className="flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="hidden sm:flex items-center gap-2 text-white font-bold text-sm hover:text-red-400 transition-colors"
              >
                <div className="w-7 h-7 bg-red-600/20 border border-red-500/30 rounded-full flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                </div>
                {PHONE}
              </a>
              <button
                onClick={openModal}
                className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-extrabold px-5 py-2.5 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-200 hover:shadow-red-500/40 whitespace-nowrap"
              >
                Free Inspection
              </button>
              <button
                className="lg:hidden text-zinc-300 hover:text-white p-1 transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-zinc-950 border-l border-zinc-800 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-zinc-800">
                <span className="text-white font-black text-base">[Company Name] Roofing</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-zinc-300 hover:text-white hover:bg-zinc-800 px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="p-4 border-t border-zinc-800 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  {PHONE}
                </a>
                <button
                  onClick={() => {
                    openModal();
                    setMobileOpen(false);
                  }}
                  className="bg-red-600 hover:bg-red-500 text-white font-extrabold py-3 rounded-lg transition-colors"
                >
                  Get Free Inspection
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
