"use client";

import { useState } from "react";
import { X, Eye } from "lucide-react";
import Link from "next/link";

interface DemoBannerProps {
  businessName: string;
  slug: string;
}

export default function DemoBanner({ businessName, slug }: DemoBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-blue-950 text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <Eye className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <p className="text-blue-100 truncate">
            <span className="font-semibold text-white">Website Demo Preview</span>
            {" — "}
            Built for{" "}
            <span className="font-medium text-blue-200">{businessName}</span>
            <span className="hidden sm:inline text-blue-400">
              {" · "}
              <Link
                href="/"
                className="hover:text-white underline underline-offset-2 transition-colors"
              >
                launchsitedemo.com/{slug}
              </Link>
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-800 hover:bg-blue-700 text-white text-xs font-medium transition-colors"
          >
            View All Demos
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded text-blue-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
