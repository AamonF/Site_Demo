"use client";

import { Wind, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import type { BusinessDemo } from "@/lib/demos/types";

interface DemoFooterProps {
  demo: BusinessDemo;
}

export default function DemoFooter({ demo }: DemoFooterProps) {
  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              {demo.logoUrl ? (
                <div className="inline-block bg-white rounded-xl px-3 py-1.5 shadow-sm">
                  <Image
                    src={demo.logoUrl}
                    alt={`${demo.name} logo`}
                    width={200}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                    <Wind className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-bold text-white tracking-tight">
                    {demo.name}
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400 mb-5">
              {demo.footerDescription}
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href={demo.phoneHref}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-500 group-hover:text-blue-400 flex-shrink-0" />
                {demo.phone}
              </a>
              <a
                href={`mailto:${demo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-500 group-hover:text-blue-400 flex-shrink-0" />
                {demo.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                {demo.serviceArea}
              </div>
            </div>

            {/* Social placeholders */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {demo.navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
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
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {demo.services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleScroll("#services")}
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
        <div className="border-t border-white/5 py-6">
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            {demo.footerSeoBlurb}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {demo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
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
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200 shadow-xl px-4 py-3 safe-area-bottom">
        <a
          href={demo.phoneHref}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call {demo.phone}
        </a>
      </div>
    </footer>
  );
}
