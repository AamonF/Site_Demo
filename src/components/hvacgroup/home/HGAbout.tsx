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

          {/* Timeline card */}
          <div className="relative">
            <div className="bg-slate-950 rounded-2xl p-8 lg:p-10 space-y-8">
              {[
                { year: "2005", title: "Trade Experience Begins", desc: "Hands-on HVAC training and field work begins — building the diagnostic instincts and technical depth that define every job today.", highlight: false },
                { year: "2017", title: "HVAC Group Inc Founded", desc: "Launched in Charlotte, NC with a clear focus: deliver premium HVAC service backed by a decade of real-world experience.", highlight: false },
                { year: "Now", title: "Serving the Charlotte Region", desc: "Trusted residential and commercial HVAC across Charlotte and surrounding communities. Bilingual. Growing.", highlight: true },
              ].map(({ year, title, desc, highlight }) => (
                <div key={year} className="flex items-start gap-5">
                  <div className={`w-12 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    highlight ? "bg-emerald-600 text-white" : "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400"
                  }`}>{year}</div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-emerald-50 rounded-2xl border border-emerald-100 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
