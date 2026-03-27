import type { Metadata } from "next";
import { CreditCard, Leaf, DollarSign, CheckCircle, BadgeCheck, Phone } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "HVAC Financing Charlotte NC | Super Cool HVAC",
  description: "Flexible HVAC financing options for Charlotte homeowners. Manufacturer rebates, utility incentives, and payment plans to make your HVAC upgrade affordable. Call (704) 899-2665.",
  openGraph: {
    title: "HVAC Financing Charlotte NC | Super Cool HVAC",
    description: "Flexible HVAC financing, manufacturer rebates, and utility incentives for Charlotte homeowners — make your upgrade affordable.",
    url: "https://launchsitedemo.com/supercoolhvac/financing",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/financing" },
};

const SAVINGS_OPTIONS = [
  { icon: CreditCard, title: "Flexible Payment Plans", desc: "Financing options for qualified customers with low monthly payments — so you can invest in a quality system without draining your savings all at once.", color: "sky" },
  { icon: Leaf, title: "Manufacturer Rebates", desc: "Leading manufacturers including Carrier, Lennox, Trane, and Rheem frequently offer rebates on high-efficiency equipment. We identify and apply these automatically.", color: "teal" },
  { icon: DollarSign, title: "Utility Company Incentives", desc: "Duke Energy and other Charlotte-area utilities offer rebates for qualifying high-efficiency HVAC upgrades. We help you navigate the process and capture every available dollar.", color: "sky" },
  { icon: BadgeCheck, title: "Federal Tax Credits", desc: "The Inflation Reduction Act provides federal tax credits for qualifying heat pumps and other high-efficiency HVAC systems. We can help you understand eligibility.", color: "teal" },
];

const FAQ_ITEMS = [
  { question: "What financing options do you offer?", answer: "We offer financing through third-party lenders with various terms depending on your credit profile. Options typically include promotional periods with deferred interest and fixed monthly payment plans. We'll walk you through available options at no obligation." },
  { question: "Are there rebates available for new HVAC equipment?", answer: "Often yes. Manufacturers like Carrier, Lennox, Trane, and Rheem regularly run rebate programs, and utilities like Duke Energy offer incentives for high-efficiency systems. We track these programs and identify applicable rebates for your specific installation." },
  { question: "Is there a federal tax credit for HVAC equipment?", answer: "Yes. Under the Inflation Reduction Act, homeowners may qualify for federal tax credits of up to $2,000 for qualifying heat pump systems and up to $600 for qualifying central air conditioners and air handlers. Eligibility depends on the specific equipment and your tax situation — consult your tax professional." },
  { question: "Does financing affect my ability to get the best equipment?", answer: "No. We present the same honest equipment recommendations regardless of how you're paying. Financing is just a way to make your preferred choice more accessible." },
  { question: "How quickly can I get approved for financing?", answer: "Most financing decisions are made within minutes of application. We can often complete the application process during your estimate appointment." },
  { question: "What credit score do I need for HVAC financing?", answer: "Requirements vary by lender and program. We work with multiple financing partners to maximize options for customers at various credit levels. Talk to us and we'll find the best available option." },
];

export default function FinancingPage() {
  const schemas = [makeBreadcrumb("Financing", "financing"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="HVAC Financing · Charlotte, NC"
        headline="Make Your HVAC Upgrade Affordable"
        subheadline="Flexible financing options, manufacturer rebates, utility incentives, and federal tax credits — we help you maximize savings on every installation."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "Financing" }]}
        ctaLabel="Discuss Financing Options"
        ctaHref="/supercoolhvac/contact"
        ctaSecondaryLabel={SC_BUSINESS.phone}
        ctaSecondaryHref={SC_BUSINESS.phoneHref}
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ways to Save on Your HVAC Investment</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">A quality HVAC system pays for itself in energy savings and avoided repairs. We help you make it as affordable as possible upfront.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {SAVINGS_OPTIONS.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={`bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-${color}-400/20 transition-colors`}>
                <div className={`w-10 h-10 rounded-xl bg-${color}-400/10 flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 text-${color}-400`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-sky-400/5 border border-sky-400/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-bold text-2xl mb-4">The Total Cost Picture</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  A high-efficiency system costs more upfront — but the right investment often pays for itself within 3–5 years in energy savings, and you benefit from those savings for the next 15–20 years. Combined with available rebates and financing, the true cost is often much lower than the sticker price suggests.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We&apos;ll help you compare the 10-year total cost of different equipment options — not just the day-one price tag.
                </p>
              </div>
              <div className="space-y-3">
                {["We identify all available rebates before you decide", "Financing options for qualified customers", "No hidden fees in our quotes", "10-year cost analysis on request", "Federal tax credit guidance"].map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    {pt}
                  </div>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <Link href="/supercoolhvac/contact" className="flex justify-center w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors">
                    Talk to Our Team
                  </Link>
                  <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-400/30 text-sky-400 font-semibold text-sm">
                    <Phone className="w-4 h-4" /> {SC_BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="Financing Questions" subtitle="Straight answers about HVAC financing, rebates, and incentives." />
      <SCCTABanner headline="Ready to Explore Your Options?" subheadline="Let's talk through what's available for your specific project. No pressure, just information." ctaLabel="Contact Us" ctaHref="/supercoolhvac/contact" />
    </>
  );
}
