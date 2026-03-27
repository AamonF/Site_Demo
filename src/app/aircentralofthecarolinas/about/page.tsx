import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Shield, Users, MapPin, Award, Heart, Wrench, ArrowRight, Phone } from "lucide-react";
import ACCPageHero from "@/components/accarolinas/shared/ACCPageHero";
import ACCCTABlock from "@/components/accarolinas/shared/ACCCTABlock";
import { BASE, COMPANY } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "About Air Central Of The Carolinas | HVAC Indian Trail, NC",
  description:
    "Learn about Air Central Of The Carolinas — a family-owned HVAC company serving Indian Trail and the Charlotte area with honest, dependable heating and cooling service.",
  alternates: { canonical: "/aircentralofthecarolinas/about" },
};

const values = [
  {
    icon: Shield,
    title: "Honesty First",
    description: "We tell you what your system actually needs. No manufactured urgency, no unnecessary upsells. Your trust matters more than any single transaction.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    description: "We install systems properly, not just functionally. That means correct sizing, clean workmanship, code compliance, and equipment that performs the way it should.",
  },
  {
    icon: Heart,
    title: "Local Commitment",
    description: "We live and work in this community. We see our customers at the grocery store and at school events. That keeps us accountable in a way that large corporate chains can't replicate.",
  },
  {
    icon: Users,
    title: "Genuine Service",
    description: "Every homeowner and business owner who calls us deserves clear communication, on-time arrivals, and technicians who treat their property with respect.",
  },
];

const qualifications = [
  "Licensed HVAC Contractor — State of North Carolina",
  "Fully insured — general liability and workers' compensation",
  "EPA 608 certified refrigerant technicians",
  "Trained on all major residential and commercial equipment brands",
  "Manufacturer-authorized installation for select brands",
  "Background-checked, uniformed technicians",
];

export default function AboutPage() {
  return (
    <>
      <ACCPageHero
        eyebrow="About Us"
        title="A Local HVAC Company That"
        titleAccent="Does Things Right"
        description="Air Central Of The Carolinas was built on a simple idea: homeowners and business owners in this area deserve better than the average contractor experience. More honest. More thorough. More reliable."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Company story */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-amber-500 rounded-full" />
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                Built in Indian Trail. Trusted Across the Carolinas.
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Air Central Of The Carolinas started as a simple commitment: to provide honest, high-quality HVAC service in a market where that wasn&apos;t always easy to find. Over more than 20 years, we&apos;ve built our business the old-fashioned way — one satisfied customer at a time.
                </p>
                <p>
                  Based in Indian Trail, we serve the full Charlotte metro area including Matthews, Monroe, Mint Hill, Waxhaw, and surrounding communities. We work on homes and businesses, and we take both equally seriously.
                </p>
                <p>
                  We&apos;re not trying to be the biggest HVAC company in the region. We&apos;re trying to be the one you can count on — year after year, system after system, season after season.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { stat: "20+", label: "Years in Business" },
                  { stat: "100%", label: "Satisfaction Goal" },
                  { stat: "Res+Com", label: "Residential & Commercial" },
                  { stat: "Licensed", label: "Fully Licensed & Insured" },
                ].map(({ stat, label }) => (
                  <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                    <p className="text-amber-500 font-bold text-2xl mb-1">{stat}</p>
                    <p className="text-zinc-400 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Family-owned callout */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 mb-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Family-Owned & Operated</p>
                    <p className="text-zinc-500 text-xs">Indian Trail, NC</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We&apos;re a family business, and that shows in how we operate. Decisions are made with long-term relationships in mind, not short-term revenue targets. When we give you a recommendation, it&apos;s what we&apos;d recommend to a family member.
                </p>
              </div>

              {/* Location */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">Where We&apos;re Based</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                      Indian Trail, NC 28079 — serving the full Charlotte metro area including Union County, southern Mecklenburg County, and surrounding communities.
                    </p>
                    <Link
                      href={`${BASE}/service-areas`}
                      className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-sm font-medium transition-colors"
                    >
                      See our full coverage area
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-900 py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Our Values</span>
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What We Stand Behind
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-amber-500 rounded-full" />
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Credentials</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Licensed, Insured, and Properly Trained
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                When we say we&apos;re professionals, we mean it in the technical sense as well as the interpersonal one. Our technicians are properly certified, our business is fully insured, and we stay current on equipment and code changes.
              </p>

              <ul className="space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
              <Award className="w-8 h-8 text-amber-500 mb-5" />
              <h3 className="text-white font-bold text-xl mb-4">
                Our Commitment to Quality
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We take quality seriously at every step — from the equipment we recommend to the way we clean up after a job. We&apos;re not satisfied with &quot;works fine&quot;; we want every installation and repair to be something we&apos;d be proud to show any other technician.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                That standard has earned us repeat customers, referrals, and a reputation in this community that we guard carefully.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
                <Link
                  href={`${BASE}/contact`}
                  className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
                >
                  Get an Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ACCCTABlock
        headline="Ready to Work With a Team You Can Trust?"
        subtext="Whether you need a repair, a new system, or just a second opinion, we&apos;re here to help. No pressure. Just honest, professional service."
        variant="standard"
      />
    </>
  );
}
