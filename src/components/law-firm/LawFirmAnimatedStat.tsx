"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  label: string;
  sub?: string;
};

export function LawFirmAnimatedStat({ value, label, sub }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^([\d,]+)(\+)?$/);
    if (!match || !isInView) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2] || "";
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const dur = 1200;
    const t0 = performance.now();
    function tick(now: number) {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(eased * target);
      setDisplay(current.toLocaleString() + suffix);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="text-3xl sm:text-4xl font-semibold text-law-navy-950 tracking-tight tabular-nums">
        {display}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-600 uppercase tracking-[0.12em]">{label}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}
