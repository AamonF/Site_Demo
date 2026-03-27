import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Calendar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Area — Charlotte, NC | Air Central of the Carolinas",
  description:
    "Air Central of the Carolinas serves Charlotte and surrounding NC communities with fast HVAC repair, installation & maintenance. See if we cover your area!",
  keywords: [
    "HVAC service area Charlotte NC",
    "AC repair near me North Carolina",
    "HVAC contractor Concord NC",
    "heating and cooling Gastonia NC",
    "HVAC Mooresville NC",
  ],
  alternates: { canonical: "/air-central-carolinas/service-area" },
};

const primaryAreas = [
  {
    city: "Charlotte",
    desc: "Our home base. We serve all Charlotte neighborhoods with fast response times and same-day service availability.",
  },
  {
    city: "Concord",
    desc: "Prompt HVAC service for Concord homeowners. AC repair, heating, and maintenance just a call away.",
  },
  {
    city: "Gastonia",
    desc: "Reliable heating and cooling services throughout Gastonia and surrounding Gaston County communities.",
  },
  {
    city: "Mooresville",
    desc: "Full HVAC service for Lake Norman area homes. Quick dispatch from our Charlotte base.",
  },
  {
    city: "Kannapolis",
    desc: "AC repair, heating service, and maintenance for Kannapolis homeowners at competitive local prices.",
  },
  {
    city: "Huntersville",
    desc: "Serving Huntersville's growing residential communities with dependable HVAC expertise.",
  },
];

const additionalAreas = [
  "Matthews",
  "Mint Hill",
  "Indian Trail",
  "Monroe",
  "Stallings",
  "Harrisburg",
  "Salisbury",
  "Albemarle",
  "Belmont",
  "Mount Holly",
  "Rock Hill, SC",
  "Fort Mill, SC",
  "Cornelius",
  "Davidson",
  "Waxhaw",
  "Weddington",
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Air Central of the Carolinas",
            url: "https://launchsitedemo.com/air-central-carolinas",
            telephone: "+17045550190",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Charlotte",
              addressRegion: "NC",
              addressCountry: "US",
            },
            areaServed: [
              "Charlotte, NC",
              "Concord, NC",
              "Gastonia, NC",
              "Mooresville, NC",
              "Kannapolis, NC",
              "Huntersville, NC",
              "Matthews, NC",
              "Monroe, NC",
              "Rock Hill, SC",
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" /> Charlotte, NC &amp; Surrounding Areas
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              HVAC Services Across Greater Charlotte, NC
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Air Central of the Carolinas provides fast, reliable HVAC services to homeowners
              throughout the Charlotte metro area and surrounding North Carolina communities.
              We&apos;re local, we&apos;re close, and we show up when you need us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/air-central-carolinas/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-4 rounded-xl text-base font-semibold transition-all shadow-md shadow-blue-900/20 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5" /> Schedule Service
              </Link>
              <a
                href="tel:+17045550190"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-900 border border-blue-200 px-7 py-4 rounded-xl text-base font-semibold transition-all w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 text-blue-600" /> Call (704) 555-0190
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Primary areas */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Primary Service Cities</p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Where We Work Every Day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryAreas.map(({ city, desc }) => (
              <div
                key={city}
                className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <h3 className="text-slate-900 font-bold text-lg">{city}, NC</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional areas */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">We Also Serve</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Additional Communities</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Our service area continues to grow. If you don&apos;t see your city below, give us a call — we may still be able to help.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white border border-blue-100 rounded-xl px-4 py-2.5 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local trust */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
            Local Means Faster. Local Means Better.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Because we&apos;re based right here in the Charlotte area, we can respond faster than
            out-of-town companies, and we know the local climate, building types, and communities
            we serve. When you call us, you&apos;re talking to neighbors — not a call center.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-center">
            {[
              { label: "Same-Day Service", desc: "Available for most calls in the Charlotte area" },
              { label: "No Travel Surcharges", desc: "We don't penalize you for where you live" },
              { label: "We Know Your Neighborhood", desc: "Local expertise means better results" },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-blue-600 font-bold text-base mb-2">{label}</p>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/50 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            In Our Service Area? Let&apos;s Get Started.
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Same-day HVAC service available across Charlotte and surrounding North Carolina communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/air-central-carolinas/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
            >
              <Calendar className="w-4 h-4" /> Schedule Service
            </Link>
            <a
              href="tel:+17045550190"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white border border-blue-600/50 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" /> Call (704) 555-0190
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
