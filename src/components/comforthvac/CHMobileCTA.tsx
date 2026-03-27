"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export default function CHMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (!visible || dismissed) {
    return (
      <a
        href="tel:+17045550123"
        className="lg:hidden fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl shadow-blue-600/40 transition-all active:scale-95"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" strokeWidth={2.5} />
      </a>
    );
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm">Need HVAC help?</p>
          <p className="text-slate-400 text-xs truncate">Same-day service available</p>
        </div>
        <a
          href="tel:+17045550123"
          className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
        >
          Call Now
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 text-slate-500 hover:text-slate-300 transition-colors p-1"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
