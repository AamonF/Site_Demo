"use client";

import { Phone, CalendarDays } from "lucide-react";
import Link from "next/link";
import { COMPANY, BASE } from "@/lib/accarolinas/data";

export default function ACCMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-700 shadow-2xl">
      <div className="grid grid-cols-2 gap-px bg-zinc-700">
        <a
          href={COMPANY.phoneHref}
          className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 py-4 text-sm font-bold transition-colors active:bg-amber-600"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Call Now
        </a>
        <Link
          href={`${BASE}/contact`}
          className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-4 text-sm font-semibold transition-colors"
        >
          <CalendarDays className="w-4 h-4" />
          Get Estimate
        </Link>
      </div>
    </div>
  );
}
