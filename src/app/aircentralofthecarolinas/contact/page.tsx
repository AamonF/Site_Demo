import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import ACCContactForm from "@/components/accarolinas/shared/ACCContactForm";
import { COMPANY } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "Contact Air Central Of The Carolinas | Indian Trail, NC HVAC",
  description:
    "Contact Air Central Of The Carolinas for HVAC repair, installation, and maintenance in Indian Trail and the Charlotte area. Call (704) 288-4822 or request service online.",
  alternates: { canonical: "/aircentralofthecarolinas/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Get in Touch with <span className="text-amber-500">Air Central</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Ready to schedule service, request an estimate, or ask a question? We respond quickly and are always glad to help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-zinc-950 py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Sidebar: contact info */}
            <div className="space-y-5">

              {/* Emergency alert */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <p className="text-red-400 text-xs font-semibold uppercase tracking-wider">Emergency?</p>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  For heating or cooling emergencies, <strong>call us directly</strong> — don&apos;t wait for a form response.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: {COMPANY.phone}
                </a>
              </div>

              {/* Contact details */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Contact Details</p>

                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">Phone</p>
                    <p className="text-white font-semibold text-sm group-hover:text-amber-500 transition-colors">
                      {COMPANY.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">Email</p>
                    <p className="text-white text-sm group-hover:text-amber-500 transition-colors break-all">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">Location</p>
                    <p className="text-white text-sm">{COMPANY.address}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">Serving Charlotte Metro</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">Business Hours</p>
                </div>
                <div className="space-y-3">
                  {[
                    { day: COMPANY.hours.weekdays, note: "" },
                    { day: COMPANY.hours.saturday, note: "" },
                    { day: COMPANY.hours.sunday, note: "Emergencies only" },
                  ].map(({ day, note }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-zinc-300 text-sm">{day}</span>
                      {note && <span className="text-zinc-500 text-xs">{note}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="h-44 bg-zinc-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                    <p className="text-zinc-500 text-xs">Indian Trail, NC 28079</p>
                    <p className="text-zinc-600 text-xs mt-1">Map embed available on live site</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                <h2 className="text-white font-bold text-xl mb-2">Request Service or Estimate</h2>
                <p className="text-zinc-400 text-sm mb-7">
                  Fill out the form below and we&apos;ll get back to you as soon as possible. All fields marked with * are required.
                </p>
                <ACCContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
