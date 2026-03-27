import Link from "next/link";
import { ArrowRight, Home, Building2, CheckCircle2 } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

const residentialPoints = ["AC & heating repair and installation", "Seasonal tune-ups", "Indoor air quality solutions", "Same-day availability", "Bilingual communication"];
const commercialPoints = ["Office, retail, and multi-unit buildings", "Preventative maintenance programs", "Rapid response, minimal downtime", "System efficiency optimization", "Property manager coordination"];

export default function HGSplit() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-5">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Who We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            One Team. <span className="text-emerald-400">Two Worlds.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Residential */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-emerald-500/20 transition-colors group">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
              <Home className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Residential HVAC</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              When your home&apos;s system fails in Charlotte&apos;s heat or winter cold, you need fast, accurate service from a team that treats your home with respect. That&apos;s what we deliver every time.
            </p>
            <ul className="space-y-3 mb-8">
              {residentialPoints.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <Link href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors group/l">
              View Residential Services <ArrowRight className="w-4 h-4 group-hover/l:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Commercial */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-emerald-500/20 transition-colors group">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
              <Building2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Commercial HVAC</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Commercial HVAC failure is a business disruption. We work with property managers and facility contacts to keep systems running year-round — with minimal impact to your operations.
            </p>
            <ul className="space-y-3 mb-8">
              {commercialPoints.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <Link href={`${BASE}/commercial-hvac`}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors group/l">
              View Commercial Services <ArrowRight className="w-4 h-4 group-hover/l:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
