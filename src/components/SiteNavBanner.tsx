"use client";

import Link from "next/link";
import { Layers } from "lucide-react";
import { usePathname } from "next/navigation";

export function SiteNavBanner() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="sticky top-0 z-[100] subpixel-antialiased">
      <Link
        href="/"
        className="group flex w-full items-center justify-center gap-1 rounded-b-lg bg-gradient-to-b from-accent-600 to-accent-700 px-2.5 py-0.5 text-center text-[10px] font-medium leading-none tracking-wide text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_12px_-6px_rgba(30,64,175,0.4)] ring-1 ring-inset ring-white/10 transition-[filter,box-shadow] duration-200 hover:from-accent-500 hover:to-accent-600 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_6px_16px_-6px_rgba(30,64,175,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 active:brightness-95"
      >
        <Layers
          className="size-2.5 shrink-0 opacity-90 transition-transform duration-200 group-hover:-rotate-6"
          strokeWidth={2}
          aria-hidden
        />
        <span>View other demos</span>
      </Link>
    </div>
  );
}
