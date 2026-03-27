import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Wind, Heart, Users, ShieldCheck } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

export const metadata: Metadata = {
  title: "About HVAC Group Inc | Family-Driven HVAC Contractor, Charlotte NC",
  description: "HVAC Group Inc — founded in Charlotte, NC in 2017, experience dating to 2005. Family-driven, bilingual, residential and commercial HVAC.",
  alternates: { canonical: "/hvac-group-inc-premium/about" },
};

const values = [
  { icon: ShieldCheck, title: "Honesty", desc: "We tell you what your system actually needs — not what generates the highest invoice. Clear recommendations, every time." },
  { icon: Heart, title: "Care", desc: "We treat every home and business the way we'd treat our own. Clean work, respectful communication, and time taken to do things right." },
  { icon: Users, title: "Reliability", desc: "We show up when we say we will, communicate throughout, and stand behind the work we do." },
  { icon: Wind, title: "Craftsmanship", desc: "Two decades in the trade taught us the difference between work that looks done and work that is done. We don't cut corners." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Built on Experience. <span className="text-emerald-400">Driven by Family.</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
            HVAC Group Inc is a Charlotte, NC HVAC contractor founded in 2017 — with hands-on experience dating back to 2005. Family-driven. Honest. Bilingual.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>We didn&apos;t start HVAC Group Inc on day one. The experience came first. Our work in the HVAC trade began in 2005 — learning systems from the ground up, developing the diagnostic instincts that only come from years of hands-on work.</p>
                <p>By 2017, we had spent over a decade in the field and were ready to build something of our own. We founded HVAC Group Inc in Charlotte, NC with a simple premise: treat every customer&apos;s home or business like it&apos;s our own, do honest work, and build a company on the reputation that follows.</p>
                <p>We now serve residential homeowners and commercial clients across the Charlotte region — from individual repairs to complete system installations and ongoing commercial maintenance contracts. What hasn&apos;t changed is our approach: honest assessments, quality parts, clean work, clear communication.</p>
                <p>We&apos;re bilingual — English and Spanish — because serving our full community has always been important to us.</p>
              </div>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 lg:p-10 space-y-8">
              {[
                { year: "2005", title: "Trade Experience Begins", desc: "Hands-on HVAC work begins — building the technical depth and field knowledge that defines every job today.", highlight: false },
                { year: "2017", title: "HVAC Group Inc Founded", desc: "Launched in Charlotte, NC with 12 years of experience and a commitment to honest, professional service.", highlight: false },
                { year: "Today", title: "Serving Charlotte", desc: "Trusted across Charlotte and surrounding communities — bilingual, growing, and committed to doing things right.", highlight: true },
              ].map(({ year, title, desc, highlight }) => (
                <div key={year} className="flex items-start gap-5">
                  <div className={`w-14 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${highlight ? "bg-emerald-600 text-white" : "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400"}`}>{year}</div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-600">Our values aren&apos;t marketing language — they&apos;re the principles that drive every job we take on.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Bilingual Service for Our Whole Community</h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">We offer full HVAC service in English and Spanish — so every customer understands exactly what&apos;s happening with their system, what their options are, and what it will cost.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a href="tel:+19802630912" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Call (EN): (980) 263-0912</a>
            <a href="tel:+17042819121" className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Llamar (ES): (704) 281-9121</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-slate-600 mb-8">Schedule service or request an estimate. We serve the Charlotte, NC area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">View Services <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
