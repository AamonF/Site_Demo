import Link from "next/link";
import { Home, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { BASE, COMPANY } from "@/lib/accarolinas/data";

const residentialPoints = [
  "Central AC & heat pump installation and service",
  "Furnace repair and replacement",
  "Seasonal tune-ups and maintenance plans",
  "Indoor air quality upgrades",
  "Home energy audits",
  "Emergency repair service",
];

const commercialPoints = [
  "Rooftop unit (RTU) service and replacement",
  "Multi-zone system design and installation",
  "Scheduled maintenance agreements",
  "Emergency priority response",
  "Light industrial and retail HVAC",
  "New construction and build-out HVAC",
];

export default function ACCResComSplit() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Who We Serve</span>
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Residential & Commercial HVAC
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            Whether you&apos;re a homeowner looking for reliable service or a business owner who needs HVAC you can count on, we have the capability and experience to handle the job.
          </p>
        </div>

        {/* Split panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Residential */}
          <div className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent group-hover:via-sky-500/60 transition-colors" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Home className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Homeowners</h3>
                <p className="text-zinc-500 text-sm">Residential HVAC service</p>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Your home&apos;s comfort is one of our biggest priorities. We work with homeowners across the Indian Trail and Charlotte area to keep their systems running efficiently — from routine maintenance to full system replacements. No upsells, no pressure, just honest service.
            </p>

            <ul className="space-y-2.5 mb-8">
              {residentialPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href={`${BASE}/services`}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
              >
                Explore Residential Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Commercial */}
          <div className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-500/60 transition-colors" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Businesses</h3>
                <p className="text-zinc-500 text-sm">Commercial HVAC service</p>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6">
              HVAC problems in a commercial space cost you money — in lost productivity, uncomfortable customers, and equipment damage. We respond quickly, work efficiently, and offer maintenance agreements that keep commercial systems performing reliably.
            </p>

            <ul className="space-y-2.5 mb-8">
              {commercialPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href={`${BASE}/services/commercial-hvac`}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
              >
                Commercial HVAC Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
              >
                Call to Discuss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
