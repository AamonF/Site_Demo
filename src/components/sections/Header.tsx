"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Layers } from "lucide-react";
import { useDemoRequest } from "@/components/launch/DemoRequestProvider";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Process", href: "#how-it-works" },
  { label: "Demos", href: "#demo-examples" },
  { label: "Why it works", href: "#why-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openDemoRequest } = useDemoRequest();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(24,24,27,0.06)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.25rem]">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Launch Site Demo home"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center shadow-sm group-hover:bg-zinc-800 transition-colors ring-1 ring-zinc-950/10">
              <Layers className="w-[18px] h-[18px] text-white" strokeWidth={2} />
            </div>
            <span className="text-[15px] font-bold text-zinc-900 tracking-tight">
              Launch Site Demo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100/80 transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href="#demo-examples"
              onClick={() => handleNavClick("#demo-examples")}
            >
              View demos
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-zinc-700 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-zinc-100 flex flex-col gap-2">
              <Button
                type="button"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMenuOpen(false);
                  openDemoRequest();
                }}
              >
                Request demo
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="#demo-examples"
                className="w-full justify-center"
                onClick={() => handleNavClick("#demo-examples")}
              >
                View demos
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
