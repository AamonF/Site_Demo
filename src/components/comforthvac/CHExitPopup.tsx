"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Phone } from "lucide-react";

export default function CHExitPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered.current) {
        triggered.current = true;
        setOpen(true);
      }
    };

    // Also trigger on mobile after 45s
    const mobileTimer = setTimeout(() => {
      if (!triggered.current && !dismissed) {
        triggered.current = true;
        setOpen(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [dismissed]);

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden pointer-events-auto">

              {/* Top gradient banner */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white text-center relative">
                <button
                  onClick={close}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg -rotate-3">
                  <Tag className="w-7 h-7 text-yellow-900" strokeWidth={2.5} />
                </div>

                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Wait! Before You Go</p>
                <h2 className="text-3xl font-extrabold text-white mb-1">Get $50 Off</h2>
                <p className="text-blue-200 text-sm">Your First HVAC Service</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 text-center">
                  Mention code <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">SAVE50</span> when you call or submit your estimate request — and we&apos;ll take $50 off your first service.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+17045550123"
                    onClick={close}
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-600/20"
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    Call (704) 555-0123 Now
                  </a>
                  <button
                    onClick={() => {
                      close();
                      setTimeout(() => {
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }, 200);
                    }}
                    className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50 py-3.5 rounded-xl font-bold text-sm transition-colors"
                  >
                    Request Estimate Online
                  </button>
                  <button
                    onClick={close}
                    className="w-full text-slate-400 hover:text-slate-600 py-2 text-xs transition-colors"
                  >
                    No thanks, I&apos;ll pay full price
                  </button>
                </div>

                <p className="text-center text-slate-400 text-[10px] mt-4">
                  Offer valid for new customers only. Expires soon. Cannot be combined with other offers.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
