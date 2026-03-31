"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import FPLeadModal from "./FPLeadModal";

const PHONE_HREF = "tel:+17045550123";

export default function FPMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 shadow-2xl transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-3 px-4 py-3 pb-safe">
          <a
            href={PHONE_HREF}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-2xl font-bold text-sm transition-colors shadow-lg shadow-red-500/25"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            Emergency Call
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-3.5 rounded-2xl font-bold text-sm transition-colors shadow-lg shadow-sky-600/25"
          >
            <Calendar className="w-4 h-4" strokeWidth={2} />
            Book Service
          </button>
        </div>
      </div>

      <FPLeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
