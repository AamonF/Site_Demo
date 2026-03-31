import { TrendingUp, Gavel, Users } from "lucide-react";

import { CITY_SHORT } from "./constants";

const stats = [
  {
    icon: TrendingUp,
    label: "Favorable outcomes",
    detail:
      "A history of strong settlements and resolutions across matters where preparation and timing mattered.",
  },
  {
    icon: Gavel,
    label: "Trial-ready representation",
    detail:
      "When litigation is necessary, we approach hearings and trial with disciplined advocacy and credibility.",
  },
  {
    icon: Users,
    label: "Trusted locally",
    detail: `Clients across ${CITY_SHORT} and the surrounding region rely on our firm for steady counsel.`,
  },
] as const;

export default function LDResults() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="relative py-20 md:py-24 bg-[#0a1628] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(201,162,39,0.14),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[#e8d5a3] text-xs font-semibold uppercase tracking-[0.22em]">
            Case Results &amp; Outcomes
          </p>
          <h2 id="results-heading" className="mt-3 text-3xl sm:text-4xl">
            Professional outcomes rooted in preparation
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed ">
            Past results do not guarantee future outcomes. Every case depends on its facts, the law,
            and the forum. What we offer is consistent standards: rigorous preparation, disciplined
            communication, and advocacy aligned with your objectives.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, label, detail }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-9 backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#c9a227]/35 bg-[#c9a227]/10">
                <Icon className="w-6 h-6 text-[#e8d5a3]" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl text-white">{label}</h3>
              <p className="mt-3 text-slate-400 leading-relaxed text-sm sm:text-base ">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
