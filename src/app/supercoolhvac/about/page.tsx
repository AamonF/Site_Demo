import type { Metadata } from "next";
import { MapPin, Heart, ShieldCheck, Leaf, Users, Award } from "lucide-react";
import Link from "next/link";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCTestimonials from "@/components/supercool/SCTestimonials";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { SC_BUSINESS, makeBreadcrumb } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "About Super Cool HVAC | Charlotte's Locally Owned HVAC Company",
  description: "Super Cool HVAC is a locally owned Charlotte HVAC company built on honest service, quality workmanship, and genuine care for the community. Learn our story.",
  openGraph: {
    title: "About Super Cool HVAC | Charlotte's Locally Owned HVAC Company",
    description: "Honest HVAC from a Charlotte company that actually cares. Locally owned, no-pressure, and committed to energy-efficient solutions.",
    url: "https://launchsitedemo.com/supercoolhvac/about",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/about" },
};

const VALUES = [
  { icon: Heart, title: "Honesty First", desc: "We tell you what your system actually needs — not what generates the biggest ticket. If a repair is all you need, that's what you'll get." },
  { icon: ShieldCheck, title: "Quality Workmanship", desc: "Every installation and repair is done to manufacturer specifications and local codes. We stand behind our work." },
  { icon: MapPin, title: "Community-Rooted", desc: "We live in Charlotte. We care about this city and the neighborhoods we serve. That's not marketing — it's just who we are." },
  { icon: Leaf, title: "Environmentally Conscious", desc: "We prioritize energy-efficient solutions, responsible refrigerant handling, and helping customers reduce their environmental footprint." },
  { icon: Users, title: "Relationship-Driven", desc: "Most of our business comes from repeat customers and referrals. We earn that trust by treating every customer the way we'd want to be treated." },
  { icon: Award, title: "Continuous Improvement", desc: "We stay current on new HVAC technology, refrigerant regulations, and energy efficiency standards so our customers benefit from the latest knowledge." },
];

export default function AboutPage() {
  const schema = makeBreadcrumb("About", "about");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <SCPageHero
        eyebrow="About Super Cool HVAC"
        headline="A Charlotte HVAC Company Built Differently"
        subheadline="Locally owned, honest, and genuinely invested in helping Charlotte residents and businesses get the most from their HVAC systems."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "About" }]}
        ctaLabel="Contact Our Team"
        ctaHref="/supercoolhvac/contact"
      />

      <SCTrustBar />

      {/* Story section */}
      <section className="bg-slate-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Why We Started Super Cool</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Super Cool HVAC was founded in Charlotte by people who were tired of the way HVAC service worked — high-pressure upsells, inflated quotes, and technicians who treated customers like a transaction rather than a neighbor.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                We started this company on a simple idea: treat people honestly, do the work right, and build a business through reputation — not manipulation. Located in NoDa, we&apos;ve grown by focusing on exactly that.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Today we serve homeowners and businesses throughout Charlotte — and we still operate the same way. No corporate quotas. No pressure tactics. Just honest HVAC from people who actually live here.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[{ val: "Charlotte", label: "Based In" }, { val: "Locally", label: "Owned & Operated" }, { val: "5★", label: "Customer Satisfaction" }].map(({ val, label }) => (
                  <div key={label} className="text-center bg-slate-900/60 border border-slate-800/60 rounded-xl p-4">
                    <p className="text-sky-400 font-bold text-lg">{val}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-7 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-5">Get in Touch</h3>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Phone", value: SC_BUSINESS.phone, href: SC_BUSINESS.phoneHref },
                  { label: "Email", value: SC_BUSINESS.email, href: SC_BUSINESS.emailHref },
                  { label: "Address", value: SC_BUSINESS.address },
                  { label: "Weekdays", value: SC_BUSINESS.hours.weekday },
                  { label: "Weekends", value: SC_BUSINESS.hours.weekend },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-sky-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                ))}
              </div>
              <Link href="/supercoolhvac/contact" className="flex justify-center w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Stand For</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">These aren&apos;t just words on a website. They&apos;re how we run every job.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-950/60 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-400/20 transition-colors">
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

      <SCTestimonials />
      <SCCTABanner headline="Experience the Difference" subheadline="Schedule service with a team that actually puts your interests first." ctaLabel="Request Service" ctaHref="/supercoolhvac/contact" />
    </>
  );
}
