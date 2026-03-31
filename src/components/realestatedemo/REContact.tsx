"use client";

import { Mail, Phone, Send } from "lucide-react";

import { CITY_SHORT, MAIL_HREF, PHONE, PHONE_HREF } from "./constants";

export default function REContact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="re-contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            Contact
          </p>
          <h2 id="re-contact-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Connect with our team
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Tell us about your timeline and goals—we&apos;ll follow up with next steps and market
            context for {CITY_SHORT}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 rounded-xl bg-[#faf9f7] px-5 py-4 ring-1 ring-neutral-200 hover:ring-[#c9a962]/50 transition-all"
            >
              <Phone className="w-5 h-5 text-[#9a7b2d]" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Call</p>
                <p className="font-semibold text-neutral-900">{PHONE}</p>
              </div>
            </a>
            <a
              href={MAIL_HREF}
              className="inline-flex items-center gap-3 rounded-xl bg-[#faf9f7] px-5 py-4 ring-1 ring-neutral-200 hover:ring-[#c9a962]/50 transition-all"
            >
              <Mail className="w-5 h-5 text-[#9a7b2d]" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Email</p>
                <p className="font-semibold text-neutral-900">hello@companyname.com</p>
              </div>
            </a>
          </div>

          <form
            className="mt-10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form demo"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="re-fn" className="sr-only">
                  First name
                </label>
                <input
                  id="re-fn"
                  placeholder="First name"
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
                />
              </div>
              <div>
                <label htmlFor="re-ln" className="sr-only">
                  Last name
                </label>
                <input
                  id="re-ln"
                  placeholder="Last name"
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
                />
              </div>
            </div>
            <div>
              <label htmlFor="re-em" className="sr-only">
                Email
              </label>
              <input
                id="re-em"
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
              />
            </div>
            <div>
              <label htmlFor="re-msg" className="sr-only">
                Message
              </label>
              <textarea
                id="re-msg"
                rows={4}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40 resize-y min-h-[120px]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              <Send className="w-4 h-4" aria-hidden />
              Send message
            </button>
            <p className="text-xs text-neutral-500">
              Demo form — wire to your CRM or email handler for production.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
