import type { Metadata } from "next";
import Link from "next/link";
import { Wind, Snowflake, Flame, Wrench, Leaf, Shield, ArrowRight, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Services in NC | Air Central of the Carolinas",
  description:
    "Full-service HVAC services for North Carolina homeowners — AC repair, installation, heating, maintenance & indoor air quality. Call Air Central today!",
  keywords: [
    "HVAC services NC",
    "AC repair North Carolina",
    "heating and cooling Charlotte",
    "HVAC maintenance NC",
    "indoor air quality North Carolina",
  ],
  alternates: { canonical: "/air-central-carolinas/services" },
};

const BASE = "/air-central-carolinas";

const services = [
  {
    icon: Snowflake,
    title: "AC Repair",
    desc: "Fast, accurate air conditioner repairs for NC homes. Same-day service available. All brands serviced.",
    href: `${BASE}/ac-repair`,
    color: "bg-sky-50 text-sky-600",
    border: "border-sky-100 hover:border-sky-300",
  },
  {
    icon: Wind,
    title: "AC Installation",
    desc: "New and replacement AC system installation. Proper sizing, top brands, professional setup.",
    href: `${BASE}/ac-installation`,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100 hover:border-blue-300",
  },
  {
    icon: Flame,
    title: "Heating Repair",
    desc: "Furnace, heat pump, and heating system repairs. Prompt response, honest pricing.",
    href: `${BASE}/heating-repair`,
    color: "bg-orange-50 text-orange-500",
    border: "border-orange-100 hover:border-orange-300",
  },
  {
    icon: Wrench,
    title: "Heating Installation",
    desc: "New furnace and heat pump installations. Expert guidance and warranty-compliant work.",
    href: `${BASE}/heating-installation`,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100 hover:border-amber-300",
  },
  {
    icon: Shield,
    title: "HVAC Maintenance",
    desc: "Annual maintenance plans and one-time tune-ups. Prevent breakdowns, save energy.",
    href: `${BASE}/hvac-maintenance`,
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-300",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    desc: "Air purifiers, UV lights, humidity control, and filtration solutions for healthier homes.",
    href: `${BASE}/indoor-air-quality`,
    color: "bg-teal-50 text-teal-600",
    border: "border-teal-100 hover:border-teal-300",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            HVAC Services · North Carolina
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Complete HVAC Services for NC Homeowners
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            From emergency AC repair to full system installation, Air Central of the
            Carolinas has the expertise to handle every heating and cooling need
            your North Carolina home has.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-900/20 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-4 h-4" /> Schedule Service
            </Link>
            <a
              href="tel:+17045550190"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-slate-900 border border-blue-200 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 text-blue-600" /> Call (704) 555-0190
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10 lg:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href, color, border }) => (
              <Link
                key={title}
                href={href}
                className={`group block bg-white border ${border} rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-13 h-13 w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h2 className="text-slate-900 font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-800/50 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Just give us a call and describe what&apos;s going on. We&apos;ll help you figure out
            the right next step — no pressure, no sales pitch.
          </p>
          <a
            href="tel:+17045550190"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" /> Call (704) 555-0190
          </a>
        </div>
      </section>
    </>
  );
}
