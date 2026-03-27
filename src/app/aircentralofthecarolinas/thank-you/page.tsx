import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Clock, MessageSquare } from "lucide-react";
import { BASE, COMPANY } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "Request Received | Air Central Of The Carolinas",
  description: "Your service request has been received. Air Central Of The Carolinas will be in touch shortly.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  { icon: Clock, text: "We typically respond within a few hours during business hours (Mon–Fri 7am–6pm, Sat 8am–4pm)." },
  { icon: Phone, text: "If your situation is urgent, please call us directly at (704) 288-4822 rather than waiting for a reply." },
  { icon: MessageSquare, text: "We may follow up by phone or email depending on your preferred contact method." },
];

export default function ThankYouPage() {
  return (
    <section className="relative bg-zinc-950 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d97706, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">

        {/* Success icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-amber-500/15 border-2 border-amber-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-amber-500" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Message Received</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Thank You — We&apos;ll Be in Touch Soon
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Your request has been received by Air Central Of The Carolinas. Our team will review your information and reach out as quickly as possible.
        </p>

        {/* Next steps */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 text-left mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-5">What Happens Next</p>
          <div className="space-y-4">
            {nextSteps.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-7 py-3.5 rounded-md text-sm font-bold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call {COMPANY.phone}
          </a>
          <Link
            href={BASE}
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-zinc-600 text-sm">
          Air Central Of The Carolinas · Indian Trail, NC · Serving Charlotte Metro
        </p>
      </div>
    </section>
  );
}
