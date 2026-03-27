"use client";

import { Flame, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMFooterProps {
  demo: BusinessDemo;
}

export default function AMFooter({ demo }: AMFooterProps) {
  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-sm font-black text-white tracking-tight">
                  Andrew Matthews
                </span>
                <span className="block text-xs font-bold text-emerald-500 tracking-widest uppercase">
                  HVAC
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-stone-400 mb-5">
              {demo.footerDescription}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={demo.phoneHref}
                className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-600 group-hover:text-emerald-500 flex-shrink-0" />
                {demo.phone}
              </a>
              <a
                href={`mailto:${demo.email}`}
                className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-emerald-600 group-hover:text-emerald-500 flex-shrink-0" />
                {demo.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-stone-400">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{demo.schema.streetAddress}</p>
                  <p>
                    {demo.schema.city}, {demo.schema.state} {demo.schema.postalCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-900/50 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-stone-400" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-900/50 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {demo.navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-sm text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {demo.services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleScroll("#services")}
                    className="text-sm text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO blurb */}
        <div className="border-t border-white/5 py-6">
          <p className="text-xs text-stone-700 leading-relaxed max-w-3xl">
            {demo.footerSeoBlurb}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-700">
            &copy; {new Date().getFullYear()} {demo.name}. All rights reserved.
          </p>
          <p className="text-xs text-stone-700">
            Demo by{" "}
            <a
              href="/"
              className="text-stone-500 hover:text-stone-300 transition-colors underline underline-offset-2"
            >
              Launch Site Demo
            </a>
          </p>
        </div>
      </div>

      {/* Mobile sticky call */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-stone-200 shadow-xl px-4 py-3">
        <a
          href={demo.phoneHref}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-900 font-black text-sm shadow-md transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call {demo.phone}
        </a>
      </div>
    </footer>
  );
}
