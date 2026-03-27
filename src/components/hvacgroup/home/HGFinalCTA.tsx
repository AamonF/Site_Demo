import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

export default function HGFinalCTA() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 bg-white/[0.03] text-center px-8 py-16 lg:py-20">

          {/* Emerald glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 65%)" }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Ready to Help</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Upgrade Your HVAC System with{" "}
              <span className="text-emerald-400">a Team You Can Trust</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Same-day repairs, full system replacements, or commercial maintenance programs — HVAC Group Inc delivers professional service across the Charlotte, NC region. Licensed, insured, bilingual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+19802630912"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call (EN): (980) 263-0912
              </a>
              <a href="tel:+17042819121"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 border border-white/20 hover:border-white/40 hover:-translate-y-0.5">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Llamar (ES): (704) 281-9121
              </a>
              <Link href={`${BASE}/contact`}
                className="inline-flex items-center justify-center gap-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:-translate-y-0.5">
                Request Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-slate-600 text-xs">
              Charlotte, NC · Licensed &amp; Insured · Bilingual · Residential &amp; Commercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
