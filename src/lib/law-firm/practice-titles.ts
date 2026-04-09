import type { PracticeAreaPage } from "./types";
import { FIRM } from "./firm";

/** Fallbacks are intentionally varied by category so empty slots still don’t all read identically. */
export function practiceChildPageTitles(area: PracticeAreaPage) {
  const h = area.sectionHeadings ?? {};
  return {
    overview: h.overview ?? "How we think about your situation",
    painPoints: h.painPoints ?? "The pressure points we plan around",
    situations: h.situations ?? "Where these disputes actually show up",
    whyMatters: h.whyMatters ?? "Why early decisions stick",
    whyFirm: h.whyFirm ?? "What our team does differently here",
    attorney: h.attorney ?? "Counsel you’ll work with",
    results: h.results ?? "Illustrative outcomes (not promises)",
    faq: h.faq ?? "Answers people ask before calling",
    local: h.local ?? `${FIRM.city} & ${FIRM.county} context`,
    resources: h.resources ?? "Articles that pair with this page",
    related: h.related ?? "Related services",
  };
}

export function practiceParentPageTitles(area: PracticeAreaPage) {
  const h = area.sectionHeadings ?? {};
  return {
    overview: h.overview ?? `Inside our ${area.name.toLowerCase()} practice`,
    childHub: h.childHub ?? "Choose the situation closest to yours",
    situations: h.situations ?? "What this category can include",
    whyMatters: h.whyMatters ?? "Why clients don’t go it alone",
    whyFirm: h.whyFirm ?? "How we support families and individuals here",
    attorney: h.attorney ?? "Leadership on these files",
    results: h.results ?? "Illustrative outcomes",
    faq: h.faq ?? "Category-level questions",
    local: h.local ?? `Serving ${FIRM.city} and surrounding filings`,
    resources: h.resources ?? "Further reading",
    related: h.related ?? "Other practice hubs",
  };
}
