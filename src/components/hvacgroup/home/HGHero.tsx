"use client";
import { Phone, ArrowRight, CheckCircle2, Building2, Home } from "lucide-react";
import Link from "next/link";

const BASE = "/hvac-group-inc-premium";

const badges = ["Licensed & Insured", "20+ Years Experience", "Bilingual (EN/ES)", "Residential & Commercial"];

export default function HGHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

      {/* Soft emerald glow — upper left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }} />

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #f8fafc)" }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              Charlotte, NC · Founded 2017
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6">
            HVAC Service You Can{" "}
            <span className="text-emerald-400">Actually Rely On</span>
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
            Residential and commercial HVAC installation, repair, and optimization across North Carolina — backed by 20+ years of experience and a bilingual team you can trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+19802630912"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call Now: (980) 263-0912
            </a>
            <Link href={`${BASE}/contact`}
              className="inline-flex items-center justify-center gap-2.5 border border-slate-700 hover:border-slate-500 text-white hover:text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:-translate-y-0.5">
              Request an Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 text-xs font-medium">{b}</span>
              </div>
            ))}
          </div>

          {/* Property type */}
          <div className="grid grid-cols-2 gap-3 max-w-xs">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/40 transition-colors">
              <Home className="w-4 h-4 text-emerald-400 mb-2" />
              <p className="text-white font-semibold text-sm">Residential</p>
              <p className="text-slate-500 text-xs mt-0.5">Homes &amp; families</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/40 transition-colors">
              <Building2 className="w-4 h-4 text-emerald-400 mb-2" />
              <p className="text-white font-semibold text-sm">Commercial</p>
              <p className="text-slate-500 text-xs mt-0.5">Offices &amp; properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
