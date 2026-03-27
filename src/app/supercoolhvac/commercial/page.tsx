import type { Metadata } from "next";
import { CheckCircle, Building2, Wrench, Settings2, Clock, Phone } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "Commercial HVAC Charlotte NC | Super Cool HVAC",
  description: "Commercial HVAC service, maintenance contracts, and installation for Charlotte businesses. Reliable climate control for offices, retail, restaurants, and more. Call (704) 899-2665.",
  openGraph: {
    title: "Commercial HVAC Charlotte NC | Super Cool HVAC",
    description: "Expert commercial HVAC for Charlotte businesses — rooftop units, ventilation, maintenance contracts, and emergency service.",
    url: "https://launchsitedemo.com/supercoolhvac/commercial",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/commercial" },
};

const SERVICES = [
  { icon: Building2, title: "Rooftop Unit (RTU) Service", desc: "Inspection, repair, and replacement of commercial rooftop HVAC units for offices, retail, and industrial spaces." },
  { icon: Wrench, title: "Preventive Maintenance Contracts", desc: "Custom maintenance schedules that reduce downtime, extend equipment life, and keep your facility code-compliant." },
  { icon: Settings2, title: "Commercial Installation", desc: "New construction, tenant build-outs, and full system replacements. We design and install systems right-sized for your space." },
  { icon: Clock, title: "Priority Service Response", desc: "Commercial clients receive priority scheduling. We understand downtime costs money and work to minimize disruption." },
  { icon: CheckCircle, title: "Restaurant & Kitchen Ventilation", desc: "Makeup air units, exhaust hoods, and ventilation systems designed for commercial kitchen environments." },
  { icon: Building2, title: "Building Commissioning", desc: "HVAC system inspection, testing, and commissioning for new construction, renovations, and commercial real estate transactions." },
];

const FAQ_ITEMS = [
  { question: "Do you offer commercial maintenance contracts?", answer: "Yes. We offer customized preventive maintenance agreements for commercial clients, including multi-unit facilities. These include priority scheduling, detailed service reports, and discounted repair rates." },
  { question: "What types of commercial HVAC do you service?", answer: "We service rooftop units (RTUs), split systems, VRF/VRV systems, commercial heat pumps, exhaust systems, makeup air units, and commercial air handlers from all major brands." },
  { question: "Can you handle HVAC for a restaurant?", answer: "Yes. Restaurant HVAC involves complex makeup air requirements, kitchen exhaust, and health code compliance. Our team is experienced in commercial kitchen ventilation and can ensure your system meets all local codes." },
  { question: "Do you provide emergency commercial HVAC service?", answer: "We prioritize urgent commercial service calls and offer priority response for maintenance contract clients. Call (704) 899-2665 to discuss your needs." },
  { question: "Can you work after business hours to minimize disruption?", answer: "Yes. We can schedule service during off-hours or weekends for commercial clients when continuous operations are critical." },
];

export default function CommercialPage() {
  const schemas = [makeBreadcrumb("Commercial HVAC", "commercial"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="Commercial HVAC · Charlotte, NC"
        headline="Reliable Commercial HVAC for Charlotte Businesses"
        subheadline="Maintenance contracts, emergency service, rooftop unit repairs, and full system installations for offices, retail, restaurants, and commercial properties."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "Commercial HVAC" }]}
        ctaLabel="Request Commercial Service"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Commercial HVAC Services</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">Comprehensive HVAC solutions for Charlotte commercial properties of all types and sizes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-400/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">The Right Commercial HVAC Partner for Charlotte</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Commercial HVAC isn&apos;t just a bigger version of residential. It requires specialized knowledge of rooftop units, ventilation codes, commercial refrigerant systems, and the unique demands of different business environments. We have that expertise.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our maintenance contract clients get priority scheduling, detailed service records, and a dedicated point of contact. We treat your facility like it matters — because to you, it does.
              </p>
              <div className="space-y-2">
                {["All commercial makes and models", "Priority response for contract clients", "Detailed service reports every visit", "Health code compliance support", "Multi-facility management available"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-400/5 border border-sky-400/20 rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-4">Get a Commercial Assessment</h3>
              <p className="text-slate-400 text-sm mb-5">Tell us about your property and we&apos;ll provide an honest assessment and maintenance plan recommendation — no obligation.</p>
              <Link href="/supercoolhvac/contact" className="flex justify-center w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors mb-3">
                Contact Our Team
              </Link>
              <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-400/30 text-sky-400 font-semibold text-sm hover:border-sky-400/50 transition-colors">
                <Phone className="w-4 h-4" /> {SC_BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="Commercial HVAC Questions" subtitle="Answers for Charlotte facility managers and business owners." />
      <SCCTABanner headline="Let's Talk About Your Commercial HVAC Needs" subheadline="We'll assess your property and provide honest recommendations — no pressure, no upsell." ctaLabel="Request Service" ctaHref="/supercoolhvac/contact" />
    </>
  );
}
