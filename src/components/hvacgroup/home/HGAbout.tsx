import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

const values = [
  "Honest assessments — we tell you what you actually need",
  "Transparent pricing with no surprises",
  "Clean, professional work on every job",
  "Long-term solutions, not short-term patches",
  "Clear communication in English and Spanish",
  "Residential expertise and commercial capability",
];

export default function HGAbout() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3.5 py-1.5 mb-6">
              <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Built on Experience.{" "}
              <span className="text-emerald-600">Driven by Family.</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                HVAC Group Inc was founded in Charlotte, NC in 2017 — but our experience in the trade goes back to 2005. That&apos;s nearly two decades of diagnosing systems, installing equipment that lasts, and building a reputation through consistently honest work.
              </p>
              <p>
                We&apos;re a family-driven company. Every technician operates with the same values: no upselling unnecessary work, no disappearing after the job. Just clean, professional service from a team that takes genuine pride in what they do.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{v}</span>
                </li>
              ))}
            </ul>
            <Link href={`${BASE}/about`}
              className="inline-flex items-center gap-2 text-slate-900 hover:text-emerald-600 text-sm font-semibold transition-colors group">
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Team photo + timeline combo */}
          <div className="relative flex flex-col gap-4">
            {/* Main team photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1724488751821-1415f5cf4960?w=900&q=85&auto=format&fit=crop"
                alt="HVAC Group Inc technician servicing a system"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              {/* Year badge */}
              <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Est. 2017
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-base">HVAC Group Inc — Charlotte, NC</p>
                <p className="text-slate-300 text-sm">Family-owned · Bilingual · 20 years experience</p>
              </div>
            </div>

            {/* Compact milestone cards */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { year: "2005", label: "Trade Begins" },
                { year: "2017", label: "Company Founded" },
                { year: "Now", label: "Charlotte's Best" },
              ].map(({ year, label }) => (
                <div key={year} className="bg-slate-100 border border-slate-200 rounded-xl p-3 text-center">
                  <p className="text-emerald-600 font-black text-base">{year}</p>
                  <p className="text-slate-500 text-xs font-medium mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
