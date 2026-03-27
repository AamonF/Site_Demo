import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY, BASE } from "@/lib/accarolinas/data";

export default function ACCFinalCTA() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />

          {/* Glow */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: "radial-gradient(circle, #d97706, transparent 70%)" }}
          />

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 px-8 py-14 md:px-16 text-center">
            <div className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                Indian Trail, NC · Charlotte Metro
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto">
              Need Reliable HVAC Service in the Charlotte Area?
            </h2>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Air Central Of The Carolinas is ready to help. Call for fast service, or submit a request and we&apos;ll be in touch shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 px-9 py-4 rounded-md text-base font-bold transition-all duration-200 shadow-xl shadow-amber-900/40 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call {COMPANY.phone}
              </a>
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center justify-center gap-2.5 border border-zinc-700 hover:border-zinc-500 bg-zinc-800/50 hover:bg-zinc-800 text-white px-9 py-4 rounded-md text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-zinc-600 text-sm mt-6">
              Mon–Fri 7am–6pm · Sat 8am–4pm · Emergency service available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
