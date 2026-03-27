import { MapPin, ShieldCheck, Award, Leaf, FileText, BadgeCheck } from "lucide-react";
import { SC_WHY_POINTS } from "@/lib/supercool/data";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  MapPin, ShieldCheck, Award, Leaf, FileText, BadgeCheck,
};

export default function SCWhyUs() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Why Super Cool
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            HVAC Service That Actually Respects You
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            We built Super Cool around the principles that were missing in the industry: honesty, transparency, and genuine care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SC_WHY_POINTS.map((point) => {
            const Icon = ICON_MAP[point.icon];
            return (
              <div
                key={point.id}
                className="group relative bg-slate-950/60 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-400/20 hover:bg-slate-950/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4 group-hover:bg-sky-400/15 transition-colors">
                  {Icon && <Icon className="w-5 h-5 text-sky-400" />}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
