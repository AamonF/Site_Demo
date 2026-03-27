import Link from "next/link";
import { ArrowRight, Wind, Thermometer, Zap, Building2, Droplets, Settings } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

const services = [
  { icon: Wind, title: "AC Repair", description: "Fast, accurate AC repair for homes and businesses. We find the root cause and fix it — no guesswork, no unnecessary parts.", href: `${BASE}/ac-repair`, tag: "Most Requested" },
  { icon: Settings, title: "AC Installation", description: "New system installations and full replacements, professionally sized and configured for lasting efficiency.", href: `${BASE}/ac-installation`, tag: null },
  { icon: Thermometer, title: "Heating Repair", description: "Reliable furnace and heat pump repair across Charlotte, NC. Fast response. Safe operation verified on every job.", href: `${BASE}/heating-repair`, tag: null },
  { icon: Zap, title: "Heating Installation", description: "Expert installation of furnaces and heat pumps, with proper load calculations and full system commissioning.", href: `${BASE}/heating-installation`, tag: null },
  { icon: Droplets, title: "Indoor Air Quality", description: "Filtration, UV purification, humidity control, and ventilation upgrades for cleaner indoor air.", href: `${BASE}/indoor-air-quality`, tag: null },
  { icon: Building2, title: "Commercial HVAC", description: "Full-service commercial HVAC for property managers, offices, retail, and multi-unit buildings.", href: `${BASE}/commercial-hvac`, tag: "Commercial" },
];

export default function HGServices() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Complete HVAC Services in{" "}
            <span className="text-emerald-600">North Carolina</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every residential and commercial HVAC need — handled by one trusted team across the Charlotte region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, description, href, tag }) => (
            <Link key={href} href={href}
              className="group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col">
              {tag && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 uppercase tracking-widest">
                  {tag}
                </span>
              )}
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                <Icon className="w-4.5 h-4.5 text-emerald-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-2.5 group-hover:text-emerald-600 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>
              <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={`${BASE}/services`}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 text-sm font-medium transition-colors group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
