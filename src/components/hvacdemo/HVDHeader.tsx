"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, Snowflake, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { COMPANY, PHONE, PHONE_HREF } from "./constants";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function HVDHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/90 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
          : "border-transparent bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-[4.25rem] items-center justify-between gap-3 md:gap-4">
          <Link
            href="#home"
            className="flex items-center gap-2.5 shrink-0 group min-w-0"
            onClick={() => setOpen(false)}
          >
            <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-500/25 ring-1 ring-sky-400/30 transition-transform duration-300 group-hover:scale-[1.03] shrink-0">
              <Snowflake className="w-[18px] h-[18px]" aria-hidden />
            </span>
            <span className="font-semibold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 truncate">
              {COMPANY}
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 flex-1 min-w-0 px-2"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                className="px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-sky-50 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" aria-hidden />
              {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 hover:bg-sky-700 transition-colors duration-200 ring-1 ring-sky-500/20"
            >
              Get Free Estimate
            </a>
          </div>

          <div className="flex md:hidden items-center gap-1 shrink-0">
            <a
              href={PHONE_HREF}
              className="p-2 rounded-full text-slate-700 hover:bg-sky-50"
              aria-label={`Call ${PHONE}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              className="p-2 rounded-full text-slate-900 hover:bg-sky-50 md:hidden"
              aria-expanded={open}
              aria-controls="hvd-mobile-nav"
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
            id="hvd-mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-slate-200/90 bg-white overflow-hidden shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12)]"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  className="py-3 px-2 text-base font-medium text-slate-900 rounded-xl hover:bg-sky-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex justify-center rounded-full bg-sky-600 px-4 py-3.5 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get Free Estimate
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
