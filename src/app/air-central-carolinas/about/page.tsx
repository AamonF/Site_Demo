import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar, MapPin, Award, Heart, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Air Central of the Carolinas",
  description:
    "Learn about Air Central of the Carolinas — a trusted local HVAC company serving Charlotte, NC and surrounding areas. Honest, friendly, and dependable.",
  keywords: ["about Air Central of the Carolinas", "local HVAC company NC", "Charlotte HVAC company", "trusted HVAC North Carolina"],
  alternates: { canonical: "/air-central-carolinas/about" },
};

const values = [
  {
    icon: Heart,
    title: "We Put People First",
    desc: "Every decision we make starts with what's best for the homeowner in front of us. That's not just a saying — it's how we actually run our business.",
  },
  {
    icon: Award,
    title: "We Take Pride in Our Work",
    desc: "We're not done until the job is done right. Our technicians take ownership of every installation and repair.",
  },
  {
    icon: Users,
    title: "We're a Real Local Team",
    desc: "We're not a franchise. We're a local North Carolina business, and we treat our customers the way we'd want to be treated.",
  },
];

const promises = [
  "Show up when we say we will",
  "Explain the problem in plain language",
  "Give you an honest price before we start",
  "Never recommend something you don't need",
  "Leave your home as clean as we found it",
  "Stand behind our work",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" /> Charlotte, NC &amp; Surrounding Areas
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              A Local HVAC Company That Actually Cares
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Air Central of the Carolinas was built on a simple belief: that North Carolina homeowners
              deserve honest, reliable HVAC service from a team they can actually trust. That&apos;s been our
              standard from day one, and it&apos;s what we hold ourselves to every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Built Right Here in the Carolinas
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Air Central of the Carolinas started with a straightforward goal: provide the kind of
                  HVAC service that homeowners could actually count on. No runaround, no inflated quotes,
                  no disappearing act after the job is done.
                </p>
                <p>
                  We&apos;ve grown by doing things the right way — showing up when we say we will,
                  fixing problems correctly the first time, and treating every home we enter with the
                  same respect we&apos;d want shown in our own.
                </p>
                <p>
                  Today, we&apos;re proud to serve hundreds of homeowners across Charlotte and the surrounding
                  communities of North Carolina. Our team of licensed, experienced HVAC technicians
                  handles everything from emergency AC repairs to full system replacements — and every
                  call is handled with the same attention and care.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "500+", label: "Happy Homeowners" },
                { num: "7 Days", label: "A Week Availability" },
                { num: "All Brands", label: "Serviced & Installed" },
                { num: "NC Proud", label: "Locally Owned" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center">
                  <p className="text-blue-600 font-extrabold text-2xl mb-1">{num}</p>
                  <p className="text-slate-600 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 lg:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Believe In</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Customer Promise</p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              What You Can Always Expect From Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {promises.map((p) => (
              <div key={p} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-800/50 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            See for yourself why hundreds of NC homeowners trust Air Central of the Carolinas for all their HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/air-central-carolinas/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
            >
              <Calendar className="w-4 h-4" /> Schedule Service
            </Link>
            <a
              href="tel:+17045550190"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white border border-blue-600/50 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" /> Call (704) 555-0190
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
