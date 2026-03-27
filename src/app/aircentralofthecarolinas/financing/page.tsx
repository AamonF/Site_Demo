import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, CheckCircle2, ArrowRight, Phone, DollarSign, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import ACCPageHero from "@/components/accarolinas/shared/ACCPageHero";
import ACCCTABlock from "@/components/accarolinas/shared/ACCCTABlock";
import { BASE, COMPANY } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "HVAC Financing | Air Central Of The Carolinas | Indian Trail, NC",
  description:
    "Flexible financing options for HVAC systems in Indian Trail and Charlotte area. Make repairs and replacements affordable with manageable payment plans. Call (704) 288-4822.",
  alternates: { canonical: "/aircentralofthecarolinas/financing" },
};

const steps = [
  {
    number: "01",
    title: "Request Your Estimate",
    description: "Call us or submit a request online. We'll evaluate your system and provide a written estimate for the repair or replacement.",
  },
  {
    number: "02",
    title: "Discuss Financing Options",
    description: "Ask our team about available financing. We'll walk you through current options, terms, and what payment scenarios look like.",
  },
  {
    number: "03",
    title: "Apply with Our Partner",
    description: "Applications are typically quick and can often be completed the same day. We'll guide you through the process.",
  },
  {
    number: "04",
    title: "Get Your System Installed",
    description: "Once approved, we schedule and complete your installation. Your comfort is restored without waiting.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Manageable Monthly Payments", description: "Spread the cost of a major system over time instead of paying a large sum upfront." },
  { icon: Zap, title: "Don't Delay Necessary Work", description: "A failing system that's left too long can cause additional damage and higher costs. Financing lets you act when it's needed." },
  { icon: ShieldCheck, title: "Access Better Equipment", description: "Financing may allow you to invest in a more efficient system with lower long-term operating costs." },
  { icon: CreditCard, title: "Seasonal Promotions Available", description: "Ask about special financing promotions, reduced interest periods, and seasonal offers when you contact us." },
];

const faqItems = [
  {
    q: "What types of projects qualify for financing?",
    a: "Financing is typically available for new system installations, full replacements, and larger repair projects. Ask us when you request an estimate.",
  },
  {
    q: "Is financing available for emergency repairs?",
    a: "In many cases, yes. Contact us to discuss your situation and we'll let you know what options are available.",
  },
  {
    q: "How quickly can financing be approved?",
    a: "Approvals are often same-day or next-day. The exact timeline depends on the financing program and application.",
  },
  {
    q: "Does financing affect the cost of the work?",
    a: "The price of the work is the same regardless of payment method. Financing terms (interest rates, fees) vary by program — ask us for current details.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <ACCPageHero
        eyebrow="Financing"
        title="Flexible Payment Options"
        titleAccent="for Your HVAC Project"
        description="A new HVAC system is a significant investment. We offer financing options to help make repairs and replacements more manageable — so comfort isn't out of reach."
        breadcrumbs={[{ label: "Financing" }]}
        ctaLabel="Ask About Financing"
      />

      {/* Intro section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-amber-500 rounded-full" />
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Why Finance</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Don&apos;t Let Cost Stand Between You and a Comfortable Home
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  When your HVAC system fails — especially during peak summer or winter — waiting isn&apos;t always an option. And for many homeowners, a $5,000–$12,000 system replacement isn&apos;t something you can easily absorb out of pocket.
                </p>
                <p>
                  That&apos;s why we work with financing partners to offer payment options that make major HVAC investments more accessible. With approved credit, you can move forward with the system your home needs, at a payment that works for your budget.
                </p>
                <p>
                  We believe honest recommendations and financial accessibility go hand in hand. If we tell you your system needs to be replaced, we also want to make sure that replacement is achievable for you.
                </p>
              </div>

              <div className="mt-8 bg-zinc-900 border border-amber-500/20 rounded-xl p-5">
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">Important Note</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Financing is subject to credit approval. Terms, rates, and available programs vary. Contact us for current details on available financing options. We&apos;ll give you accurate information before you commit to anything.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-3 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-zinc-900 py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">How It Works</span>
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Financing Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.number} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 relative">
                <span className="absolute top-4 right-5 text-zinc-800 font-bold text-3xl">{step.number}</span>
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <span className="text-amber-500 font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Questions</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Financing FAQs</h2>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-white font-semibold text-sm">{item.q}</p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Move Forward?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Call us or request a free estimate. We&apos;ll evaluate your system, give you honest options, and walk you through available financing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-md text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {COMPANY.phone}
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-md text-sm font-semibold transition-colors"
            >
              Request Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
