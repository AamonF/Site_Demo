import type { Metadata } from "next";
import { Leaf, Zap, Thermometer, Recycle, Wind, TrendingDown } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "Environmental Responsibility | Super Cool HVAC Charlotte",
  description: "Super Cool HVAC's commitment to energy efficiency, responsible refrigerant handling, heat pump electrification, and reducing environmental impact in Charlotte, NC.",
  openGraph: {
    title: "Environmental Responsibility | Super Cool HVAC Charlotte",
    description: "How Super Cool HVAC approaches energy efficiency, refrigerant stewardship, and eco-conscious HVAC solutions in Charlotte.",
    url: "https://launchsitedemo.com/supercoolhvac/environmental",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/environmental" },
};

const ECO_PRACTICES = [
  { icon: TrendingDown, title: "Energy Efficiency Advocacy", desc: "We actively recommend high-efficiency systems and heat pumps when they make sense for the customer — not because of margins, but because they genuinely save money and reduce environmental impact." },
  { icon: Zap, title: "Heat Pump Electrification", desc: "Modern heat pumps are among the most efficient heating and cooling technologies available. We're knowledgeable about cold-climate heat pumps and dual-fuel systems that work well in the Carolinas." },
  { icon: Thermometer, title: "Responsible Refrigerant Handling", desc: "Our technicians are EPA Section 608 certified. We recover, recycle, and handle all refrigerants per EPA regulations — no venting, no shortcuts. We also advise customers on R-22 phase-out and R-410A transition timelines." },
  { icon: Recycle, title: "Equipment Recycling", desc: "Old HVAC equipment contains valuable metals, refrigerant, and components. We dispose of replaced equipment responsibly through certified recyclers, keeping as much as possible out of landfills." },
  { icon: Wind, title: "Indoor Air Quality & Ventilation", desc: "Better ventilation means less energy wasted conditioning stale air repeatedly. Our ERV/HRV recommendations help homes bring in fresh air efficiently." },
  { icon: Leaf, title: "Utility Rebate Navigation", desc: "We help customers take advantage of rebates for energy-efficient equipment — meaning more upgrades happen, more efficiency is achieved, and customers save money in the process." },
];

const FAQ_ITEMS = [
  { question: "Why do you recommend heat pumps?", answer: "Modern heat pumps are 2–3x more efficient than gas furnaces for heating, and they provide both heating and cooling from a single system. In Charlotte's mild-to-moderate winter climate, they're an excellent choice that reduces both energy costs and carbon footprint." },
  { question: "What's happening with HVAC refrigerants?", answer: "R-22 (Freon) was phased out in 2020. R-410A is being phased down under the AIM Act. The next generation refrigerants (R-454B, R-32) have a much lower global warming potential. We stay current on these transitions and advise customers accordingly." },
  { question: "Can I get a tax credit for an energy-efficient HVAC system?", answer: "Yes. The Inflation Reduction Act provides federal tax credits for qualifying heat pumps and high-efficiency systems. Some installations qualify for up to $2,000 in federal credits. Consult your tax professional to confirm eligibility." },
  { question: "Is it worth upgrading my older system for environmental reasons?", answer: "Often yes — especially if your system is over 10 years old or using R-22 refrigerant. Modern systems can be 40–60% more efficient, meaning significant energy and emissions reductions. We'll help you calculate the real numbers for your situation." },
  { question: "How do you handle refrigerant leaks?", answer: "All refrigerant recovery is performed using certified equipment. We never vent refrigerant to the atmosphere. When leaks are found, we fully evacuate, repair, and recharge per EPA and manufacturer protocols." },
];

export default function EnvironmentalPage() {
  const schemas = [makeBreadcrumb("Environmental Responsibility", "environmental"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="Environmental Responsibility"
        headline="HVAC That's Better for You and Better for Charlotte"
        subheadline="Our commitment to energy efficiency, responsible refrigerant handling, and eco-conscious practices — because the way we do HVAC matters."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "Environmental" }]}
        ctaLabel="Talk to Our Team"
        ctaHref="/supercoolhvac/contact"
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Environmental Commitments</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">These aren&apos;t aspirational statements — they&apos;re operational practices that shape every job we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECO_PRACTICES.map(({ icon: Icon, title, desc }) => (
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

      <section className="bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-12 h-12 text-teal-400 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-4">Why This Matters to Us</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            HVAC accounts for roughly 40–50% of a typical home&apos;s energy consumption. That means the choices made in this industry — about equipment efficiency, refrigerant handling, and design practices — have a real, measurable impact on energy use and emissions at scale.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            We&apos;re a small company serving one city. But across hundreds of homes and businesses, our choices add up. We think that&apos;s worth taking seriously.
          </p>
          <Link href="/supercoolhvac/installation" className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm hover:text-teal-300 transition-colors">
            See our energy-efficient installation options →
          </Link>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="Environmental & Efficiency Questions" subtitle="Honest answers about HVAC's environmental impact and your options." />
      <SCCTABanner headline="Ready to Go More Efficient?" subheadline="We'll help you find the right energy-efficient option for your budget and situation — no pressure." ctaLabel="Schedule a Consultation" ctaHref="/supercoolhvac/contact" variant="teal" />
    </>
  );
}
