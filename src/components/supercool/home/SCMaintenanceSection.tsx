import Link from "next/link";
import { CheckCircle, BadgeCheck, TrendingDown } from "lucide-react";

const MAINTENANCE_ITEMS = [
  "Full system inspection and condition report",
  "Evaporator and condenser coil cleaning",
  "Refrigerant level check and top-off if needed",
  "Filter inspection and replacement",
  "Electrical component and connection inspection",
  "Thermostat calibration and test",
  "Blower motor cleaning and lubrication",
  "Drain pan and condensate line clearing",
];

export default function SCMaintenanceSection() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — cards */}
          <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {[
              { icon: CheckCircle, label: "Extends Equipment Life", value: "by 5–8 Years", color: "sky" },
              { icon: TrendingDown, label: "Reduces Energy Bills", value: "Up to 15% Lower", color: "teal" },
              { icon: BadgeCheck, label: "Warranty Compliance", value: "All Major Brands", color: "sky" },
              { icon: CheckCircle, label: "Prevents Breakdowns", value: "Catch Issues Early", color: "teal" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className={`bg-slate-950/60 border border-slate-800/60 rounded-2xl p-5 hover:border-${color}-400/20 transition-colors`}>
                <Icon className={`w-6 h-6 text-${color}-400 mb-3`} />
                <p className={`text-${color}-400 font-bold text-lg mb-0.5`}>{value}</p>
                <p className="text-slate-400 text-xs">{label}</p>
              </div>
            ))}
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Preventive Maintenance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Smartest Investment in Your HVAC
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Regular maintenance isn&apos;t just a checkbox — it&apos;s the difference between a system that lasts 10 years and one that lasts 20. It keeps your warranty valid, catches small issues before they become expensive failures, and ensures peak efficiency year-round.
            </p>
            <ul className="space-y-2 mb-6">
              {MAINTENANCE_ITEMS.slice(0, 6).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/supercoolhvac/maintenance"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors"
            >
              Schedule a Tune-Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
