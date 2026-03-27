import type { Metadata } from "next";
import { ClipboardCheck, Home, Building2, CheckCircle, FileText } from "lucide-react";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "HVAC Inspections Charlotte NC | Super Cool HVAC",
  description: "Pre-purchase HVAC inspections and system audits for Charlotte homebuyers, sellers, and property owners. Detailed written reports from certified technicians. Call (704) 899-2665.",
  openGraph: {
    title: "HVAC Inspections Charlotte NC | Super Cool HVAC",
    description: "Certified HVAC inspections for Charlotte real estate — pre-purchase audits, system condition reports, and honest assessments for buyers and sellers.",
    url: "https://launchsitedemo.com/supercoolhvac/inspections",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/inspections" },
};

const INSPECTION_TYPES = [
  { icon: Home, title: "Pre-Purchase Inspection", desc: "Buying a Charlotte home? Know the true condition of the HVAC system before closing. We provide a detailed written report you can use in negotiations or planning." },
  { icon: Building2, title: "Pre-Listing Inspection", desc: "Selling your home? A clean HVAC inspection report builds buyer confidence and prevents last-minute surprises that can derail a deal." },
  { icon: ClipboardCheck, title: "Annual System Audit", desc: "Comprehensive system audit beyond a standard tune-up. Includes full component condition assessment, remaining life estimate, and efficiency analysis." },
  { icon: FileText, title: "Commercial Property Inspection", desc: "For commercial real estate transactions, tenant changes, or building commissioning — thorough inspection with full documentation." },
];

const INSPECTION_COVERS = [
  "System age and remaining useful life estimate",
  "Heating and cooling capacity and efficiency",
  "Refrigerant levels and leak check",
  "Electrical components and connections",
  "Ductwork condition and airflow assessment",
  "Thermostat function and calibration",
  "Coil and filter condition",
  "Drain system and condensate handling",
  "Safety controls and shutoffs",
  "Outdoor unit condition and clearances",
  "Indoor air handler condition",
  "Written report with photos",
];

const FAQ_ITEMS = [
  { question: "Do home inspectors check HVAC systems?", answer: "General home inspectors do a basic visual check, but they're not HVAC-certified and often can't identify specific issues, refrigerant problems, or accurately assess remaining equipment life. An HVAC-specific inspection from a certified technician gives you a much more complete picture." },
  { question: "How long does an HVAC inspection take?", answer: "A thorough residential HVAC inspection typically takes 60–90 minutes. Commercial inspections may take longer depending on the size and complexity of the system." },
  { question: "Will you provide a written report?", answer: "Yes. Every inspection includes a detailed written report with our findings, condition ratings, photos where applicable, and any recommendations." },
  { question: "Can I use your inspection report in real estate negotiations?", answer: "Absolutely. Our reports are detailed enough to support real estate negotiations, requests for repairs, or cost estimates for budgeting post-purchase improvements." },
  { question: "How quickly can you schedule an inspection before closing?", answer: "We understand real estate timelines are tight. Call (704) 899-2665 and we'll work to accommodate your closing schedule." },
];

export default function InspectionsPage() {
  const schemas = [makeBreadcrumb("HVAC Inspections", "inspections"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="HVAC Inspections · Charlotte, NC"
        headline="Know What You're Getting Before You Buy"
        subheadline="Certified HVAC inspections with detailed written reports for homebuyers, sellers, and property owners in the Charlotte area."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "HVAC Inspections" }]}
        ctaLabel="Schedule an Inspection"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {INSPECTION_TYPES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-400/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">What Our Inspections Cover</h2>
              <p className="text-slate-400 mb-6">Every inspection is thorough and documented. You&apos;ll receive a complete written report — not just a verbal summary.</p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {INSPECTION_COVERS.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-400/5 border border-sky-400/20 rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-4">Schedule Your Inspection</h3>
              <p className="text-slate-400 text-sm mb-5">We work around real estate timelines. Call us and we&apos;ll get you scheduled quickly — often within 1–2 business days.</p>
              <div className="space-y-3 text-slate-300 text-sm mb-6">
                {["Detailed written report included", "Photos of any identified issues", "Remaining life estimate", "Used in real estate negotiations"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />{pt}</div>
                ))}
              </div>
              <a href="/supercoolhvac/contact" className="flex justify-center w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors mb-3">
                Book an Inspection
              </a>
              <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-400/30 text-sky-400 font-semibold text-sm hover:border-sky-400/50 transition-colors">
                Call {SC_BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="HVAC Inspection Questions" subtitle="What to expect before scheduling a Charlotte HVAC inspection." />
      <SCCTABanner headline="Don't Buy Blindly" subheadline="A certified HVAC inspection before closing could save you thousands. Schedule yours today." ctaLabel="Schedule an Inspection" ctaHref="/supercoolhvac/contact" variant="sky" />
    </>
  );
}
