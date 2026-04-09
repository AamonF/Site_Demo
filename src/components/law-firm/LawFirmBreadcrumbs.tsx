import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Crumb = { label: string; href?: string };

export function LawFirmBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-8">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={LAW_FIRM_BASE} className="hover:text-law-navy-800">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 opacity-50 shrink-0" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="hover:text-law-navy-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-law-navy-950 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
