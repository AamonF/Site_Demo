import Link from "next/link";
import { ArrowRight, CalendarCheck, TrendingDown, Shield, Timer, Wrench, Star, Zap } from "lucide-react";
import { BASE } from "@/lib/accarolinas/data";

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower Breakdown Risk",
    description: "Most failures are preventable. We catch worn parts, dirty coils, and low refrigerant before they cause a breakdown.",
  },
  {
    icon: Zap,
    title: "Better Efficiency",
    description: "Clean systems use less energy. A well-maintained unit can run 15–20% more efficiently than a neglected one.",
  },
  {
    icon: Timer,
    title: "Longer System Life",
    description: "Regular service extends the operational life of your equipment — often by several years.",
  },
  {
    icon: CalendarCheck,
    title: "Seasonal Readiness",
    description: "Spring AC tune-up. Fall heating tune-up. Your system is ready before the season demands it.",
  },
  {
    icon: Star,
    title: "Priority Service",
    description: "Maintenance plan members get priority scheduling and preferred pricing on repairs.",
  },
  {
    icon: Shield,
    title: "Warranty Protection",
    description: "Manufacturer warranties often require documented maintenance. We keep your coverage intact.",
  },
];

export default function ACCMaintenance() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: content */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Maintenance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              The Smart Way to Protect Your HVAC Investment
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The most reliable HVAC systems in Indian Trail aren&apos;t the newest — they&apos;re the ones that get maintained. A $150 tune-up can prevent a $1,500 repair. Our maintenance visits are thorough, documented, and designed to give you a clear picture of your system&apos;s health.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We offer individual tune-up visits and annual maintenance plans that include two visits, priority service, and repair discounts.
            </p>

            {/* Plan highlight box */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-amber-500 rounded-l-xl" />
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Annual Plan Includes</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2"><Wrench className="w-3.5 h-3.5 text-amber-500" /> 2 scheduled tune-up visits per year</li>
                <li className="flex items-center gap-2"><Star className="w-3.5 h-3.5 text-amber-500" /> Priority service scheduling</li>
                <li className="flex items-center gap-2"><TrendingDown className="w-3.5 h-3.5 text-amber-500" /> 10% discount on all repairs</li>
                <li className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-amber-500" /> No diagnostic fees</li>
              </ul>
            </div>

            <Link
              href={`${BASE}/services/preventive-maintenance`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-md text-sm font-bold transition-colors"
            >
              Learn About Maintenance Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: benefit cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-3 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">{title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
