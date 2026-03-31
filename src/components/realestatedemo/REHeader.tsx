"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { COMPANY, PHONE, PHONE_HREF } from "./constants";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "Buying", href: "#buying-selling" },
  { label: "Selling", href: "#buying-selling" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function REHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b border-neutral-200/90 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-[4.25rem] items-center justify-between gap-3 md:gap-4">
          <Link
            href="#home"
            className="flex items-center gap-2 shrink-0 group min-w-0"
            onClick={() => setOpen(false)}
          >
            <span className="h-9 w-9 rounded-sm bg-neutral-900 flex items-center justify-center text-[10px] font-semibold tracking-tight text-[#c9a962] border border-neutral-800 transition-transform duration-300 group-hover:scale-[1.02] shrink-0">
              RE
            </span>
            <span className="font-serif text-base sm:text-lg md:text-xl tracking-tight text-neutral-900 truncate">
              {COMPANY}
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 xl:gap-2 flex-1 min-w-0 px-2"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                className="px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100/90 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9a7b2d]" aria-hidden />
              {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors duration-200 ring-1 ring-neutral-900/10"
            >
              Get Home Value
            </a>
          </div>

          <div className="flex md:hidden items-center gap-1 shrink-0">
            <a
              href={PHONE_HREF}
              className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
              aria-label={`Call ${PHONE}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-neutral-900 hover:bg-neutral-100 md:hidden"
              aria-expanded={open}
              aria-controls="re-mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="re-mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-neutral-200/80 bg-white overflow-hidden shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  className="py-3 px-2 text-base font-medium text-neutral-800 rounded-md hover:bg-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex justify-center rounded-sm bg-neutral-900 px-4 py-3 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get Home Value
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
