"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/accarolinas/data";

export default function ACCFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-zinc-900 py-24 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Common Questions
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Quick answers to the questions we hear most often. Don&apos;t see yours? Call or contact us directly.
            </p>

            <div className="mt-8 bg-zinc-950 border border-zinc-800 rounded-xl p-5">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Have a different question?</p>
              <p className="text-white font-semibold text-sm mb-3">We&apos;re happy to help.</p>
              <a
                href="tel:+17042884822"
                className="text-amber-500 hover:text-amber-400 font-bold transition-colors"
              >
                (704) 288-4822
              </a>
            </div>
          </div>

          {/* FAQ list */}
          <div className="lg:col-span-8">
            <div className="space-y-2">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className={`bg-zinc-950 border rounded-xl overflow-hidden transition-colors ${
                    openIndex === i ? "border-zinc-700" : "border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className={`font-medium text-sm pr-4 ${openIndex === i ? "text-white" : "text-zinc-300"}`}>
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                        openIndex === i ? "rotate-180 text-amber-500" : "text-zinc-500"
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-5">
                      <div className="h-px bg-zinc-800 mb-4" />
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
