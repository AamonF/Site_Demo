"use client";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function ACMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-blue-100 px-4 py-3 grid grid-cols-2 gap-2.5 shadow-lg shadow-blue-900/10">
        <a
          href="tel:+17045550190"
          className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white py-3.5 rounded-xl text-sm font-bold transition-colors"
          aria-label="Call Air Central of the Carolinas"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Call Now
        </a>
        <Link
          href="/air-central-carolinas/contact"
          className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-700 py-3.5 rounded-xl text-sm font-bold transition-colors"
        >
          <Calendar className="w-4 h-4" strokeWidth={2.5} />
          Schedule
        </Link>
      </div>
    </div>
  );
}
