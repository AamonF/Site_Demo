import type { Metadata } from "next";
import { Wind, Droplets, Sun, Filter, CheckCircle } from "lucide-react";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "Indoor Air Quality Charlotte NC | Super Cool HVAC",
  description: "Indoor air quality solutions for Charlotte homes and businesses — filtration upgrades, whole-home dehumidifiers, UV purifiers, and ventilation improvements. Call (704) 899-2665.",
  openGraph: {
    title: "Indoor Air Quality Charlotte NC | Super Cool HVAC",
    description: "Cleaner air for Charlotte homes — filtration, dehumidification, UV purification, and fresh air ventilation from Super Cool HVAC.",
    url: "https://launchsitedemo.com/supercoolhvac/indoor-air-quality",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/indoor-air-quality" },
};

const IAQ_SOLUTIONS = [
  { icon: Filter, title: "High-Efficiency Filtration", desc: "Upgrade from standard filters to MERV 11–16 or HEPA-level filtration that captures fine particles, allergens, and airborne contaminants." },
  { icon: Droplets, title: "Whole-Home Dehumidification", desc: "Charlotte summers bring high humidity that makes your home feel warmer and promotes mold growth. Whole-home dehumidifiers maintain ideal humidity year-round." },
  { icon: Sun, title: "UV Air Purification", desc: "UV-C light systems installed in your air handler neutralize bacteria, viruses, mold spores, and other biological contaminants before they circulate through your home." },
  { icon: Wind, title: "Fresh Air Ventilation (ERV/HRV)", desc: "Energy Recovery Ventilators bring fresh outdoor air in while retaining the energy you&apos;ve paid to heat or cool — improving air quality without spiking energy costs." },
  { icon: CheckCircle, title: "Duct Cleaning & Sealing", desc: "Dirty or leaky ductwork reduces air quality and efficiency. We inspect, clean, and seal ducts to ensure clean, conditioned air reaches every room." },
  { icon: Filter, title: "Air Quality Testing", desc: "Unsure what&apos;s in your air? We offer diagnostic testing to identify specific pollutants, VOCs, or humidity issues and recommend targeted solutions." },
];

const FAQ_ITEMS = [
  { question: "How do I know if I have an indoor air quality problem?", answer: "Common signs include excessive dust, musty or stale odors, allergy symptoms that worsen indoors, visible mold or moisture, or humidity that consistently feels too high or low. We can perform an assessment to identify specific issues." },
  { question: "What's the most important IAQ upgrade for a Charlotte home?", answer: "Humidity control is typically the highest priority in Charlotte's climate. High summer humidity makes your home uncomfortable, stresses your HVAC, and promotes mold. A whole-home dehumidifier combined with better filtration covers most common IAQ concerns." },
  { question: "Do UV air purifiers actually work?", answer: "Yes — UV-C germicidal lamps installed in the air handler effectively neutralize bacteria, viruses, and mold spores that pass through. They're especially useful for families with respiratory sensitivities." },
  { question: "Will improving air quality affect my energy bills?", answer: "Not significantly in most cases. Some upgrades like better filtration may slightly increase static pressure, but modern IAQ equipment is designed to minimize energy impact. ERV/HRV systems are specifically designed to bring in fresh air without energy loss." },
  { question: "Can you add IAQ equipment to my existing HVAC system?", answer: "Yes. Most indoor air quality improvements — filtration upgrades, dehumidifiers, UV systems, and ventilation — can be added to existing HVAC systems without replacement." },
];

export default function IAQPage() {
  const schemas = [makeBreadcrumb("Indoor Air Quality", "indoor-air-quality"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="Indoor Air Quality · Charlotte, NC"
        headline="Breathe Cleaner Air in Your Charlotte Home"
        subheadline="Filtration upgrades, whole-home dehumidification, UV purification, and fresh air ventilation tailored for Charlotte's climate."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "Indoor Air Quality" }]}
        ctaLabel="Request an IAQ Assessment"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Indoor Air Quality Solutions</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Charlotte&apos;s climate — hot, humid summers and pollen-heavy springs — creates real indoor air quality challenges. We have solutions for every issue.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IAQ_SOLUTIONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-teal-400/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Charlotte&apos;s Climate & Your Air Quality</h2>
          <p className="text-slate-400 leading-relaxed">
            Charlotte&apos;s humid subtropical climate means high humidity from May through September, heavy pollen seasons, and temperature swings that drive homes to recirculate stale indoor air for months at a time. The result: elevated allergens, humidity-related mold risk, and VOC buildup from everyday products. We help Charlotte homeowners address these challenges with targeted, cost-effective IAQ improvements.
          </p>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="Indoor Air Quality Questions" subtitle="Understanding your options for cleaner air at home." />
      <SCCTABanner headline="Ready for Cleaner Air?" subheadline="We'll assess your home's air quality and recommend the right solutions for your situation and budget." ctaLabel="Request an Assessment" ctaHref="/supercoolhvac/contact" variant="teal" />
    </>
  );
}
