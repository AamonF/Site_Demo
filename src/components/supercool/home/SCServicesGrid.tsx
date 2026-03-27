import Link from "next/link";
import { Home, Building2, Wrench, Settings2, Zap, Wind, ClipboardCheck, CreditCard, ArrowRight } from "lucide-react";
import { SC_SERVICES_GRID } from "@/lib/supercool/data";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Home, Building2, Wrench, Settings2, Zap, Wind, ClipboardCheck, CreditCard,
};

export default function SCServicesGrid() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Full-Spectrum HVAC for Charlotte
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            From quick repairs to complete system replacements, we handle it all for residential and commercial properties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SC_SERVICES_GRID.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative bg-slate-900/50 border border-slate-800/60 rounded-2xl p-5 hover:border-sky-400/30 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4 group-hover:bg-sky-400/15 transition-colors">
                  {Icon && <Icon className="w-5 h-5 text-sky-400" />}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sky-400 text-xs font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
