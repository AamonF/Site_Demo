"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
    const onMove = (e: MouseEvent) => dragging.current && updatePosition(e.clientX);
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp, { once: true });
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* AFTER panel (full width, behind) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop&sat=-20&bri=10"
          alt="After plumbing repair - clean and working"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.75) saturate(0.7) hue-rotate(170deg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 to-green-900/20" />
        <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          Fixed ✓
        </div>
        <div className="absolute bottom-12 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-right">
          <p className="text-white font-bold text-sm">AFTER</p>
          <p className="text-green-300 text-xs">Restored in under 2 hours</p>
        </div>
      </div>

      {/* BEFORE panel (clips from left) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop"
          alt="Before plumbing repair - blocked drain"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.45) saturate(0.3)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-red-950/40" />
        <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          Blocked ✗
        </div>
        <div className="absolute bottom-12 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
          <p className="text-white font-bold text-sm">BEFORE</p>
          <p className="text-red-300 text-xs">Severe blockage · backed up</p>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-sky-500">
          <MoveHorizontal className="w-4 h-4 text-sky-600" strokeWidth={2.5} />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 bg-slate-900/60 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 z-10 bg-green-600/80 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
        AFTER
      </div>
    </div>
  );
}

export default function FPBeforeAfter() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            See the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Difference We Make
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Drag the slider to see a real before &amp; after from one of our recent jobs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BeforeAfterSlider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-slate-400 text-xs mt-4"
        >
          ← Drag the handle to compare →
        </motion.p>
      </div>
    </section>
  );
}
