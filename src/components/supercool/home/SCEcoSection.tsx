import Link from "next/link";
import { Leaf, Zap, Thermometer, Recycle, ArrowRight } from "lucide-react";

const ECO_POINTS = [
  { icon: Leaf, title: "Energy-Efficient Equipment", description: "We recommend high-SEER systems and heat pumps that cut energy use and lower your monthly bills." },
  { icon: Zap, title: "Electrification-Ready", description: "Our team guides customers toward electric HVAC options aligned with modern grid standards and IRA incentives." },
  { icon: Thermometer, title: "Responsible Refrigerant Handling", description: "Certified technicians handle refrigerants per EPA guidelines, preventing atmospheric release and staying current on phase-out schedules." },
  { icon: Recycle, title: "Equipment Disposal & Recycling", description: "Old HVAC equipment is disposed of responsibly, with components recycled where possible rather than added to landfill." },
];

export default function SCEcoSection() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Environmental Responsibility
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Good for Your Home. <span className="text-teal-400">Good for Charlotte.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              We believe HVAC companies have a real responsibility to the communities they serve. At Super Cool, that means prioritizing energy efficiency, clean refrigerant handling, and systems that reduce your carbon footprint — without sacrificing comfort or reliability.
            </p>
            <p className="text-slate-400 leading-relaxed mb-7">
              From heat pump installations to ductwork efficiency improvements, we help Charlotte residents and businesses make smart, sustainable choices.
            </p>
            <Link
              href="/supercoolhvac/environmental"
              className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm hover:text-teal-300 transition-colors"
            >
              Our Environmental Commitment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {ECO_POINTS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-5 hover:border-teal-400/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-400/10 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
