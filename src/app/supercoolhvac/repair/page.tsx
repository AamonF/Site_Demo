import type { Metadata } from "next";
import { Zap, CheckCircle, AlertCircle, Phone } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb, makeFaqSchema } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "HVAC Repair Charlotte NC | Super Cool HVAC",
  description: "Fast, accurate HVAC repair for Charlotte homes and businesses. All makes and models, honest diagnosis, no unnecessary upsells. Call (704) 899-2665.",
  openGraph: {
    title: "HVAC Repair Charlotte NC | Super Cool HVAC",
    description: "Accurate HVAC repairs in Charlotte — no unnecessary upsells, honest diagnosis, all makes and models.",
    url: "https://launchsitedemo.com/supercoolhvac/repair",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/repair" },
};

const COMMON_REPAIRS = [
  "AC not cooling / blowing warm air",
  "Heating system won't turn on",
  "Refrigerant leaks and recharge",
  "Frozen evaporator coils",
  "Faulty capacitors and contactors",
  "Blower motor and fan failure",
  "Thermostat malfunctions",
  "Drainage and condensate issues",
  "Electrical failures and tripped breakers",
  "Unusual noises (banging, screeching, rattling)",
  "Heat pump reversing valve failures",
  "Ductwork leaks affecting airflow",
];

const WARNING_SIGNS = [
  { sign: "No cold or warm air", urgency: "Urgent" },
  { sign: "System won't turn on", urgency: "Urgent" },
  { sign: "Ice forming on equipment", urgency: "Urgent" },
  { sign: "Unusual noises", urgency: "Schedule soon" },
  { sign: "Higher energy bills", urgency: "Schedule soon" },
  { sign: "Frequent short cycling", urgency: "Schedule soon" },
  { sign: "Uneven room temperatures", urgency: "Schedule" },
  { sign: "Poor airflow throughout home", urgency: "Schedule" },
];

const FAQ_ITEMS = [
  { question: "How quickly can you come out for a repair?", answer: "We prioritize service calls and often have same-day availability, especially during peak season. Call (704) 899-2665 for fastest response." },
  { question: "Do you repair all HVAC brands?", answer: "Yes. We service and repair all major brands including Carrier, Trane, Lennox, Rheem, Goodman, Daikin, Mitsubishi, and all others." },
  { question: "How do you approach diagnosis?", answer: "We diagnose accurately before recommending any repair. We'll tell you exactly what's wrong, what it'll cost to fix, and our honest assessment of whether repair or replacement makes more financial sense." },
  { question: "Will you try to upsell me on a replacement when I just need a repair?", answer: "No. If a repair is the right call, that's what we'll recommend. We do provide replacement context when a system is very old or the repair cost approaches replacement cost — but it's always your decision." },
  { question: "What if my system breaks down after hours?", answer: "Call us at (704) 899-2665. We do our best to accommodate urgent situations and will help you understand your options quickly." },
  { question: "Is the repair covered by any warranty?", answer: "Our repair labor is warranted. If a part fails within the warranty period, we'll come back and make it right." },
];

export default function RepairPage() {
  const schemas = [makeBreadcrumb("HVAC Repair", "repair"), makeFaqSchema(FAQ_ITEMS)];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SCPageHero
        eyebrow="HVAC Repair · Charlotte, NC"
        headline="Accurate HVAC Repairs. No Runaround."
        subheadline="Fast diagnosis, honest recommendations, and quality repairs for all makes and models — without the upsell pressure."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "HVAC Repair" }]}
        ctaLabel="Call for Service"
        ctaHref={SC_BUSINESS.phoneHref}
        ctaSecondaryLabel="Request Online"
        ctaSecondaryHref="/supercoolhvac/contact"
      />

      <SCTrustBar />

      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Common HVAC Repairs We Handle</h2>
              <div className="space-y-2">
                {COMMON_REPAIRS.map((repair) => (
                  <div key={repair} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    {repair}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Warning Signs to Watch For</h2>
              <div className="space-y-2.5">
                {WARNING_SIGNS.map(({ sign, urgency }) => (
                  <div key={sign} className="flex items-center justify-between bg-slate-900/60 border border-slate-800/60 rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      {sign}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${urgency === "Urgent" ? "bg-red-500/20 text-red-400" : urgency === "Schedule soon" ? "bg-amber-500/20 text-amber-400" : "bg-slate-700 text-slate-400"}`}>
                      {urgency}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-sky-400/5 border border-sky-400/20 rounded-2xl p-5">
                <p className="text-white font-bold mb-2">See any of these signs?</p>
                <p className="text-slate-400 text-sm mb-4">Don&apos;t wait until the system fails completely. Early repairs are almost always less expensive.</p>
                <div className="flex flex-col gap-2">
                  <a href={SC_BUSINESS.phoneHref} className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors">
                    <Phone className="w-4 h-4" /> Call {SC_BUSINESS.phone}
                  </a>
                  <Link href="/supercoolhvac/contact" className="flex items-center justify-center py-2.5 rounded-xl border border-sky-400/30 text-sky-400 font-semibold text-sm hover:border-sky-400/50 transition-colors">
                    Request Service Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Repair Philosophy</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We diagnose before we recommend. Too many HVAC companies recommend replacements when a repair would have worked just fine — and vice versa. We tell you what&apos;s actually wrong, what it will cost to fix, and give you our honest assessment of whether repair or replacement is the smarter long-term choice. Then we let you decide.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {["Accurate diagnosis first", "Clear, upfront pricing", "All makes and models"].map((pt) => (
              <div key={pt} className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                {pt}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SCFAQ items={FAQ_ITEMS} title="HVAC Repair Questions" subtitle="Straight answers before you schedule." />
      <SCCTABanner headline="System Acting Up?" subheadline="Call us for same-day availability. We'll diagnose accurately and give you honest options." ctaLabel="Call Now" ctaHref={SC_BUSINESS.phoneHref} variant="sky" />
    </>
  );
}
