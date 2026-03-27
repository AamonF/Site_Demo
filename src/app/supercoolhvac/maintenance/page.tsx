import type { Metadata } from "next";
import { CheckCircle, Wrench, TrendingDown, BadgeCheck, Clock } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "HVAC Maintenance Charlotte NC | Super Cool HVAC",
  description: "Professional HVAC maintenance and seasonal tune-ups for Charlotte homeowners and businesses. Extend equipment life, reduce energy bills, and keep warranties valid. Call (704) 899-2665.",
  openGraph: {
    title: "HVAC Maintenance Charlotte NC | Super Cool HVAC",
    description: "Seasonal HVAC tune-ups and maintenance for Charlotte homes and businesses. Extends equipment life, reduces bills, and prevents breakdowns.",
    url: "https://launchsitedemo.com/supercoolhvac/maintenance",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/maintenance" },
};

const CHECKLIST = [
  "Full system inspection and written condition report",
  "Evaporator and condenser coil cleaning",
  "Refrigerant level check and adjustment",
  "Filter inspection and replacement",
  "Electrical connections and components inspection",
  "Thermostat calibration and accuracy test",
  "Blower motor cleaning and belt inspection",
  "Drain pan and condensate line flushing",
  "Capacitor and contactor inspection",
  "Ductwork visual inspection for leaks",
];

const BENEFITS = [
  { icon: TrendingDown, title: "Lower Energy Bills", desc: "Well-maintained systems run at peak efficiency — up to 15% lower operating costs annually.", color: "sky" },
  { icon: Clock, title: "Extends Equipment Life", desc: "Regular service adds 5–8 years to average system lifespan, delaying expensive replacements.", color: "teal" },
  { icon: BadgeCheck, title: "Keeps Warranty Valid", desc: "Most manufacturers require documented annual maintenance to honor their equipment warranties.", color: "sky" },
  { icon: Wrench, title: "Prevents Breakdowns", desc: "Technicians catch small issues before they become expensive failures — especially before peak season.", color: "teal" },
];

const FAQ_ITEMS = [
  { question: "How often should I service my HVAC system?", answer: "We recommend at least once per year. Ideally, schedule a cooling tune-up in spring before summer heat and a heating inspection in fall before winter. Twice-yearly service is the gold standard and keeps both sides of your system running optimally." },
  { question: "What does an HVAC tune-up include?", answer: "Our maintenance visits cover a full system inspection, coil cleaning, refrigerant check, filter replacement, electrical inspection, thermostat calibration, blower cleaning, drain line clearing, and a written condition report." },
  { question: "Will maintenance void my warranty?", answer: "No — the opposite is true. Most major HVAC manufacturers require documented annual maintenance to keep warranties valid. Skipping service can actually void your coverage." },
  { question: "Do you offer maintenance agreements or service plans?", answer: "Yes. We offer maintenance plans for both residential and commercial clients, which include priority scheduling, discounted service rates, and automatic reminders." },
  { question: "What's the best time of year to schedule maintenance?", answer: "Spring (March–May) for cooling system prep and fall (September–November) for heating prep. Scheduling early in these windows ensures you beat the rush and have the system ready before you need it most." },
];

export default function MaintenancePage() {
  const schemas = [makeBreadcrumb("HVAC Maintenance", "maintenance"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="HVAC Maintenance · Charlotte, NC"
        headline="Keep Your System Running Like New"
        subheadline="Annual tune-ups and preventive maintenance that extend equipment life, reduce energy costs, and prevent breakdowns — for Charlotte homes and businesses."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "HVAC Maintenance" }]}
        ctaLabel="Schedule a Tune-Up"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What's Included in a Super Cool Tune-Up</h2>
              <p className="text-slate-400 mb-7">Every maintenance visit includes a comprehensive checklist — not a quick look and a bill. We leave you with a written condition report so you know exactly where your system stands.</p>
              <div className="space-y-2.5">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className={`bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-${color}-400/20 transition-colors`}>
                  <div className={`w-10 h-10 rounded-xl bg-${color}-400/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 text-${color}-400`} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
              <div className="sm:col-span-2 bg-sky-400/5 border border-sky-400/20 rounded-2xl p-6 text-center">
                <p className="text-white font-bold text-lg mb-2">Ready to schedule?</p>
                <p className="text-slate-400 text-sm mb-4">Spring and fall appointments fill up fast. Book early to secure your preferred time.</p>
                <Link href="/supercoolhvac/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors">
                  Schedule Maintenance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="Maintenance Questions" subtitle="Everything you need to know about keeping your HVAC in top shape." />
      <SCCTABanner headline="Don't Wait Until Something Breaks" subheadline="Preventive maintenance is the most cost-effective HVAC investment you can make. Schedule yours today." ctaLabel="Schedule a Tune-Up" ctaHref="/supercoolhvac/contact" variant="sky" />
    </>
  );
}
