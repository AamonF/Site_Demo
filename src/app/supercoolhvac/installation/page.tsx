import type { Metadata } from "next";
import { CheckCircle, Settings2, Leaf, BadgeCheck, CreditCard, Phone } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "HVAC Installation Charlotte NC | Super Cool HVAC",
  description: "Professional HVAC installation for Charlotte homes and businesses. Right-sized systems, energy-efficient equipment, and warranties registered for you. Call (704) 899-2665.",
  openGraph: {
    title: "HVAC Installation Charlotte NC | Super Cool HVAC",
    description: "Expert HVAC installation for Charlotte — right-sized systems, energy-efficient options, financing available, and warranties handled for you.",
    url: "https://launchsitedemo.com/supercoolhvac/installation",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/installation" },
};

const INSTALLATION_STEPS = [
  { step: "01", title: "Load Calculation", desc: "We perform Manual J load calculations to right-size your system — not guess. Oversized and undersized systems both cause problems." },
  { step: "02", title: "Honest Equipment Options", desc: "We present 2–3 equipment options at different price points with clear pros and cons. No upsell pressure toward the most expensive choice." },
  { step: "03", title: "Professional Installation", desc: "Our certified technicians install to manufacturer specs and local building codes. Permits pulled when required." },
  { step: "04", title: "System Testing & Commissioning", desc: "Every installation is fully tested and balanced before we leave. We walk you through the system and thermostat operation." },
  { step: "05", title: "Warranty Registration", desc: "Our team handles all equipment warranty registration — so your coverage is active without you having to track down paperwork." },
  { step: "06", title: "Financing & Rebates", desc: "We identify available utility rebates and manufacturer incentives to reduce your net cost, and offer financing options if needed." },
];

const SYSTEM_TYPES = ["Central AC + Gas Furnace", "Heat Pump Systems (Single & Dual Fuel)", "Ductless Mini-Split Systems", "Variable-Speed & High-Efficiency Systems", "Commercial Rooftop Units", "Packaged HVAC Systems", "Air Handlers + Coil Replacements"];

const FAQ_ITEMS = [
  { question: "How do you determine what size system I need?", answer: "We perform a Manual J load calculation, which accounts for your home's square footage, insulation, windows, orientation, and local climate. This ensures your new system is properly sized — not just matched to what was there before." },
  { question: "What brands do you install?", answer: "We install Carrier, Trane, Lennox, Rheem, Daikin, Mitsubishi, and other major brands depending on your application and budget. We'll recommend what's best for your specific situation, not what earns us the highest margin." },
  { question: "How long does a new HVAC installation take?", answer: "Most standard residential replacements are completed in one day. Larger homes, new construction, or complex commercial jobs may take 2–3 days." },
  { question: "Do you handle permits?", answer: "Yes. Where permits are required by local code, we pull them and schedule any required inspections as part of the installation process." },
  { question: "Are there rebates or incentives available?", answer: "Often yes. Utility companies and manufacturers frequently offer rebates for high-efficiency equipment. We'll identify available incentives for your specific installation and help you take advantage of them." },
  { question: "What happens if there's a problem after installation?", answer: "We stand behind our work. Labor and equipment warranties cover issues after installation, and our team is available to address any concerns quickly." },
];

export default function InstallationPage() {
  const schemas = [makeBreadcrumb("HVAC Installation", "installation"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="HVAC Installation · Charlotte, NC"
        headline="New HVAC Installation Done Right"
        subheadline="Right-sized systems, energy-efficient equipment, professional installation, and warranties registered for you — with financing options available."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "HVAC Installation" }]}
        ctaLabel="Get an Installation Quote"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Installation Process</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">From assessment to final walkthrough — a transparent process with no surprises.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTALLATION_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-400/20 transition-colors">
                <p className="text-sky-400 font-bold text-2xl mb-3">{step}</p>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Systems We Install</h2>
              <div className="space-y-2.5 mb-8">
                {SYSTEM_TYPES.map((type) => (
                  <div key={type} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Settings2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    {type}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Leaf, label: "Energy-Efficient Options" },
                  { icon: BadgeCheck, label: "Warranty Registered" },
                  { icon: CreditCard, label: "Financing Available" },
                  { icon: CheckCircle, label: "Permits Handled" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Icon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-400/5 border border-sky-400/20 rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-4">Get a Free Installation Quote</h3>
              <p className="text-slate-400 text-sm mb-5">We&apos;ll assess your needs, present honest options, and provide a clear quote with no hidden costs. Financing available for qualified customers.</p>
              <Link href="/supercoolhvac/contact" className="flex justify-center w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors mb-3">
                Request a Quote
              </Link>
              <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-400/30 text-sky-400 font-semibold text-sm hover:border-sky-400/50 transition-colors">
                <Phone className="w-4 h-4" /> {SC_BUSINESS.phone}
              </a>
              <p className="text-slate-500 text-xs text-center mt-3">Financing options available — <Link href="/supercoolhvac/financing" className="text-sky-400 hover:underline">learn more</Link></p>
            </div>
          </div>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="Installation Questions" subtitle="Everything you need to know before getting a new HVAC system." />
      <SCCTABanner headline="Ready for a New HVAC System?" subheadline="Get a free, honest assessment and equipment recommendation. No pressure, no upsell." ctaLabel="Get a Free Quote" ctaHref="/supercoolhvac/contact" variant="sky" />
    </>
  );
}
