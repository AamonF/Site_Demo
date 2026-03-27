import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY, BASE } from "@/lib/accarolinas/data";

interface ACCCTABlockProps {
  headline?: string;
  subtext?: string;
  dark?: boolean;
  variant?: "standard" | "compact" | "urgent";
}

export default function ACCCTABlock({
  headline = "Ready to Get Started?",
  subtext = "Contact Air Central Of The Carolinas for fast, professional HVAC service in Indian Trail and the Charlotte area.",
  dark = true,
  variant = "standard",
}: ACCCTABlockProps) {
  if (variant === "compact") {
    return (
      <div className={`rounded-xl p-6 border ${dark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-800 border-zinc-700"}`}>
        <p className="text-white font-semibold mb-1">{headline}</p>
        {subtext && <p className="text-zinc-400 text-sm mb-4">{subtext}</p>}
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
          <Link
            href={`${BASE}/contact`}
            className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "urgent") {
    return (
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Available Now</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{headline}</h2>
              <p className="text-zinc-400">{subtext}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-7 py-3.5 rounded-md text-sm font-bold transition-colors shadow-lg shadow-amber-900/30"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY.phone}
              </a>
              <Link
                href={`${BASE}/contact`}
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600 px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
              >
                Request Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
            style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{headline}</h2>
              <p className="text-zinc-400 leading-relaxed">{subtext}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-7 py-3.5 rounded-md text-sm font-bold transition-colors shadow-lg shadow-amber-900/30"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY.phone}
              </a>
              <Link
                href={`${BASE}/contact`}
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600 px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
