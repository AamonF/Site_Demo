import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { BASE, serviceAreas } from "@/lib/accarolinas/data";

export default function ACCServiceAreas() {
  const primary = serviceAreas.filter((a) => a.primary);
  const secondary = serviceAreas.filter((a) => !a.primary);

  return (
    <section className="bg-zinc-900 py-24 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Where We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Serving Indian Trail & the Charlotte Metro
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl">
              Based in Indian Trail, NC — we serve homeowners and businesses throughout Union County, Mecklenburg County, and surrounding communities.
            </p>
          </div>
          <Link
            href={`${BASE}/service-areas`}
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors group flex-shrink-0"
          >
            Full Coverage Map
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Primary areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {primary.map((area) => (
            <div
              key={area.name}
              className="bg-zinc-950 border border-amber-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-amber-500/40 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500/30" />
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold">{area.name}, {area.state}</h3>
                    <span className="text-[10px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full font-semibold border border-amber-500/20">Primary</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary areas */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Also Serving</p>
          <div className="flex flex-wrap gap-2">
            {secondary.map((area) => (
              <span
                key={area.name}
                className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
              >
                <MapPin className="w-3 h-3 text-zinc-500" />
                {area.name}, {area.state}
              </span>
            ))}
          </div>
          <p className="text-zinc-600 text-xs mt-4">
            Not sure if we serve your area?{" "}
            <Link href={`${BASE}/contact`} className="text-amber-500 hover:text-amber-400 transition-colors">
              Contact us and we&apos;ll let you know.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
