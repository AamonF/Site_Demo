"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Zap, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  phone: string;
  company: string;
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Service Area", href: "#service-area" },
];

export default function PEHeader({ phone, company, onOpenModal }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const rawPhone = phone.replace(/\D/g, "");
  const close = () => setMenuOpen(false);

  return (
    <header className={`sticky top-0 z-40 transition-shadow duration-300 ${scrolled ? "shadow-2xl shadow-black/80" : ""}`}>
      {/* Yellow accent stripe */}
      <div className="h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500" />

      {/* Main bar */}
      <div className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-yellow-400 group-hover:bg-yellow-300 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>
              <div>
                <span className="font-black text-white text-[15px] leading-none block tracking-tight">{company}</span>
                <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest leading-none">Electrical Services</span>
              </div>
            </a>

            {/* Right side: phone + hamburger */}
            <div className="relative flex items-center gap-3" ref={menuRef}>
              {/* Phone CTA */}
              <a
                href={`tel:${rawPhone}`}
                className="hidden sm:flex items-center gap-2 text-white text-sm font-semibold hover:text-yellow-400 transition-colors"
              >
                <div className="w-7 h-7 bg-yellow-400/10 border border-yellow-400/25 rounded-full flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-yellow-400" />
                </div>
                {phone}
              </a>

              {/* Mobile phone pill */}
              <a
                href={`tel:${rawPhone}`}
                className="sm:hidden flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs px-3 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>

              {/* Hamburger button */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`relative w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 ${
                  menuOpen
                    ? "bg-yellow-400 border-yellow-400 text-black"
                    : "bg-zinc-800 border-zinc-700 hover:border-zinc-500 text-white"
                }`}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
                  >
                    {/* Nav links */}
                    <nav className="py-2" aria-label="Site navigation">
                      {NAV_LINKS.map((link, i) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={close}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.15 }}
                          className="flex items-center justify-between px-4 py-3 text-zinc-200 hover:text-yellow-400 hover:bg-white/5 font-semibold text-sm transition-colors group"
                        >
                          {link.label}
                          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                        </motion.a>
                      ))}
                      <motion.button
                        onClick={() => { close(); onOpenModal(); }}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.15 }}
                        className="w-full flex items-center justify-between px-4 py-3 text-zinc-200 hover:text-yellow-400 hover:bg-white/5 font-semibold text-sm transition-colors group"
                      >
                        Contact
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                      </motion.button>
                    </nav>

                    {/* Divider */}
                    <div className="h-px bg-zinc-800 mx-4" />

                    {/* CTA block */}
                    <div className="p-3 flex flex-col gap-2">
                      <a
                        href={`tel:${rawPhone}`}
                        className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                      >
                        <Phone className="w-4 h-4 text-yellow-400" />
                        {phone}
                      </a>
                      <button
                        onClick={() => { close(); onOpenModal(); }}
                        className="bg-yellow-400 hover:bg-yellow-300 text-black font-black py-2.5 rounded-xl text-sm transition-colors"
                      >
                        Request a Free Estimate
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
