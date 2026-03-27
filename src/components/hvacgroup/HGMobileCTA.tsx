"use client";
import { Phone } from "lucide-react";

export default function HGMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-slate-200 px-4 py-3 grid grid-cols-2 gap-2.5 shadow-lg shadow-black/10">
        <a href="tel:+19802630912"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white py-3.5 rounded-xl text-sm font-bold transition-colors"
          aria-label="Call English line">
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Call Now (EN)
        </a>
        <a href="tel:+17042819121"
          className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-900 py-3.5 rounded-xl text-sm font-bold transition-colors"
          aria-label="Call Spanish line">
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Llamar (ES)
        </a>
      </div>
    </div>
  );
}
