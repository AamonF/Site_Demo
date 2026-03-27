"use client";

import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATFooterProps {
  demo: BusinessDemo;
}

export default function ATFooter({ demo }: ATFooterProps) {
  const scroll = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + contact */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
                <Snowflake className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-extrabold text-white tracking-tight">
                  Accu-Tech HVAC
                </span>
                <span className="block text-[10px] font-bold text-teal-400 tracking-[0.15em] uppercase">
                  Services LLC
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-slate-400 mb-6">
              {demo.footerDescription}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={demo.phoneHref}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-teal-500 group-hover:text-teal-400 flex-shrink-0" />
                {demo.phone}
              </a>
              <a
                href={`mailto:${demo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-teal-500 group-hover:text-teal-400 flex-shrink-0" />
                {demo.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
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
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal-900/50 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal-900/50 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {demo.navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {demo.services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scroll("#services")}
                    className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO blurb */}
        <div className="border-t border-white/5 py-5">
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            {demo.footerSeoBlurb}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {demo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Demo by{" "}
            <a
              href="/"
              className="text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              Launch Site Demo
            </a>
          </p>
        </div>
      </div>

      {/* Mobile sticky call button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-900 border-t border-slate-700 shadow-xl px-4 py-3">
        <a
          href={demo.phoneHref}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call {demo.phone}
        </a>
      </div>
    </footer>
  );
}
