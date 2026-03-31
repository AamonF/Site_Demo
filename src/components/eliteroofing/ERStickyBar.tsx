"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:7045550123";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

export default function ERStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-zinc-950 border-t border-zinc-800 px-4 py-3 flex gap-3 items-center shadow-2xl shadow-black/60">
            <a
              href={PHONE_HREF}
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold py-3 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              {PHONE}
            </a>
            <button
              onClick={openModal}
              className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold py-3 rounded-xl text-sm transition-colors shadow-lg shadow-red-600/30"
            >
              <Calendar className="w-4 h-4" />
              Free Inspection
            </button>
          </div>
          {/* Safe area padding for iOS */}
          <div className="bg-zinc-950 h-safe" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
