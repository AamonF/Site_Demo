import type { Metadata } from "next";
import { CheckCircle, Home, Thermometer, Wind, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCTestimonials from "@/components/supercool/SCTestimonials";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "Residential HVAC Charlotte NC | Super Cool HVAC",
  description: "Expert residential HVAC repairs, installations, and maintenance for Charlotte homeowners. Honest service, quality workmanship, and energy-efficient solutions. Call (704) 899-2665.",
  openGraph: {
    title: "Residential HVAC Charlotte NC | Super Cool HVAC",
    description: "Expert residential HVAC for Charlotte homeowners — repairs, installs, maintenance. No-pressure service from a locally owned company.",
    url: "https://launchsitedemo.com/supercoolhvac/residential",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/residential" },
};

const SERVICES = [
  { icon: Home, title: "AC Repair & Diagnosis", desc: "Fast, accurate diagnosis for all makes and models. We fix the actual problem without recommending unnecessary work." },
  { icon: Thermometer, title: "Heating System Service", desc: "Gas furnaces, electric air handlers, and heat pumps — we service and repair all residential heating systems." },
  { icon: Wind, title: "Heat Pump Installation", desc: "Modern heat pumps deliver efficient heating and cooling in one system. We size, install, and register warranties for you." },
  { icon: ShieldCheck, title: "Ductless Mini-Splits", desc: "Perfect for additions, basements, or homes without ductwork. We design and install multi-zone mini-split systems." },
  { icon: CheckCircle, title: "Full System Replacement", desc: "When replacement is the right call, we present honest options at multiple price points — no pressure toward the most expensive choice." },
  { icon: Wind, title: "Indoor Air Quality", desc: "Filtration upgrades, whole-home dehumidifiers, UV purifiers, and ERV/HRV ventilation systems for cleaner indoor air." },
];

const FAQ_ITEMS = [
  { question: "How do I know if I need a repair or a full replacement?", answer: "We provide honest assessments without steering you toward the more expensive option. Generally, if your system is under 10 years old and the repair cost is less than half the replacement cost, repair is usually the better value." },
  { question: "What brands do you install and service?", answer: "We service all major residential HVAC brands and install Carrier, Trane, Lennox, Rheem, Daikin, and others depending on your needs and budget." },
  { question: "How long does a residential AC installation take?", answer: "Most standard residential system replacements are completed in one day. Larger or more complex projects may take two days." },
  { question: "Do you offer financing for residential HVAC?", answer: "Yes. We offer flexible financing options and help identify manufacturer rebates and utility incentives to reduce your out-of-pocket cost." },
  { question: "How often should I service my home HVAC system?", answer: "We recommend annual maintenance — ideally a cooling tune-up in spring and a heating inspection in fall. Regular service keeps your warranty valid and prevents costly breakdowns." },
];

export default function ResidentialPage() {
  const schemas = [
    makeBreadcrumb("Residential HVAC", "residential"),
    makeFaqSchema(FAQ_ITEMS),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="Residential HVAC · Charlotte, NC"
        headline="Home HVAC Service Done Honestly"
        subheadline="Expert repairs, right-sized installations, and preventive maintenance for Charlotte homeowners — with zero pressure and full transparency."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "Residential HVAC" }]}
        ctaLabel="Request Residential Service"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      {/* Services grid */}
      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Residential HVAC Services</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">All the HVAC services your Charlotte home needs, done right the first time.</p>
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

      {/* Value section */}
      <section className="bg-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Why Charlotte Homeowners Choose Super Cool</h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                We know how stressful it is when your AC goes out in the middle of a Charlotte summer — or when you get a quote that feels inflated. Our approach is different: we diagnose accurately, explain clearly, and only recommend what your system actually needs.
              </p>
              <p className="text-slate-400 leading-relaxed mb-7">
                Every installation comes with equipment warranty registration handled by our team. No forms to fill out, no deadline to worry about. Just comfort and peace of mind.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Licensed & Insured", "All Makes & Models", "Warranty Registered", "No Hidden Fees", "Same-Day Service", "Energy-Efficient Options"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-400/5 border border-sky-400/20 rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-5">Get a Free Assessment</h3>
              <p className="text-slate-400 text-sm mb-5">Not sure what your system needs? Our technicians will give you an honest evaluation with clear options — no pressure, no hidden agendas.</p>
              <Link href="/supercoolhvac/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors mb-3">
                Schedule a Visit
              </Link>
              <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-400/30 text-sky-400 font-semibold text-sm hover:border-sky-400/50 transition-colors">
                <Phone className="w-4 h-4" /> {SC_BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SCTestimonials />
      <SCFAQ items={FAQ_ITEMS} title="Residential HVAC Questions" subtitle="Straight answers from our Charlotte HVAC technicians." />
      <SCCTABanner headline="Ready to Schedule Residential Service?" subheadline="Call us or request service online. We'll be in touch same day." ctaLabel="Request Service" ctaHref="/supercoolhvac/contact" />
    </>
  );
}
