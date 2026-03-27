import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import ACCPageHero from "@/components/accarolinas/shared/ACCPageHero";
import ACCCTABlock from "@/components/accarolinas/shared/ACCCTABlock";
import { BASE, COMPANY, serviceAreas, services } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "Service Areas | Air Central Of The Carolinas | Indian Trail, NC",
  description:
    "Air Central Of The Carolinas serves Indian Trail, Charlotte, Matthews, Monroe, Mint Hill, Waxhaw, and surrounding communities in the Charlotte metro area.",
  alternates: { canonical: "/aircentralofthecarolinas/service-areas" },
};

const topServices = services.slice(0, 5);

export default function ServiceAreasPage() {
  const primary = serviceAreas.filter((a) => a.primary);
  const secondary = serviceAreas.filter((a) => !a.primary);

  return (
    <>
      <ACCPageHero
        eyebrow="Coverage Area"
        title="Serving Indian Trail & the"
        titleAccent="Charlotte Metro"
        description="Based in Indian Trail, NC — we provide residential and commercial HVAC service throughout Union County, Mecklenburg County, and surrounding communities."
        breadcrumbs={[{ label: "Service Areas" }]}
        ctaLabel="Check Your Area"
      />

      {/* Primary areas */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Primary Service Areas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {primary.map((area) => (
              <div
                key={area.name}
                className="bg-zinc-900 border border-amber-500/20 rounded-xl p-7 relative overflow-hidden hover:border-amber-500/40 transition-colors group"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-amber-500 rounded-l-xl" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-lg">{area.name}, {area.state}</h3>
                      <span className="text-[10px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full font-semibold border border-amber-500/20">
                        Primary
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary areas grid */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-zinc-600 rounded-full" />
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Also Serving</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {secondary.map((area) => (
              <div
                key={area.name}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5 group-hover:text-zinc-400 transition-colors" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{area.name}, {area.state}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage note */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-7 py-6">
            <h3 className="text-white font-semibold mb-2">Don&apos;t See Your City Listed?</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Our coverage area continues to expand. If you&apos;re in the broader Charlotte metro region or surrounding Union/Cabarrus/Anson County areas, there&apos;s a good chance we serve you. Give us a call and we&apos;ll confirm quickly.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
              <Link
                href={`${BASE}/contact`}
                className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services in your area */}
      <section className="bg-zinc-900 py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-amber-500 rounded-full" />
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Services Near You</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Full-Scope HVAC Service Wherever You Are
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                No matter which part of the Charlotte metro you&apos;re in, you get the same quality service — same technicians, same standards, same commitment to getting it right.
              </p>
              <ul className="space-y-3">
                {topServices.map((s) => (
                  <li key={s.slug} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <Link
                      href={`${BASE}/services/${s.slug}`}
                      className="text-zinc-300 hover:text-amber-500 text-sm transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center gap-2.5">
                  <ArrowRight className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                  <Link
                    href={`${BASE}/services`}
                    className="text-zinc-500 hover:text-amber-500 text-sm transition-colors"
                  >
                    View all services →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
              <MapPin className="w-8 h-8 text-amber-500 mb-5" />
              <h3 className="text-white font-bold text-xl mb-3">Based in Indian Trail, NC</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Our home base is Indian Trail, which puts us at the center of our primary service area — close enough to Union County neighborhoods and Mecklenburg County communities alike.
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Contact Information</p>
                <a href={COMPANY.phoneHref} className="block text-amber-500 hover:text-amber-400 font-bold text-lg transition-colors mb-1">
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="block text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  {COMPANY.email}
                </a>
                <p className="text-zinc-500 text-xs mt-3">Mon–Fri 7am–6pm · Sat 8am–4pm · Emergency service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ACCCTABlock
        headline="HVAC Service Anywhere in the Charlotte Metro"
        subtext="Call or request an estimate online. We&apos;ll confirm your location is in our service area and get you scheduled quickly."
        variant="standard"
      />
    </>
  );
}
