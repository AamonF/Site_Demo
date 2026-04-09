import type { PracticeAreaPage, PracticePath } from "./types";
import { LAW_FIRM_BASE } from "./site";

import { PRACTICE_PAGES } from "./practice-data";

export { PRACTICE_PAGES };

export function getAllPracticePages(): PracticeAreaPage[] {
  return PRACTICE_PAGES;
}

export function getPracticeAreas(): PracticeAreaPage[] {
  return PRACTICE_PAGES;
}

export function getParentPracticePages(): PracticeAreaPage[] {
  return PRACTICE_PAGES.filter((p) => p.kind === "parent");
}

export function getChildPracticePages(parentSegment: string): PracticeAreaPage[] {
  return PRACTICE_PAGES.filter(
    (p) => p.kind === "child" && p.parentSegment === parentSegment,
  );
}

export function getPracticePageByPath(path: string): PracticeAreaPage | undefined {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  return PRACTICE_PAGES.find((p) => p.path === normalized);
}

export function getPracticeBySlug(slug: string): PracticeAreaPage | undefined {
  /** @deprecated prefer getPracticePageByPath — kept for incremental refactors */
  return getPracticePageByPath(slug);
}

export function getRelatedPracticePages(paths: PracticePath[]): PracticeAreaPage[] {
  return paths
    .map((path) => getPracticePageByPath(path))
    .filter((p): p is PracticeAreaPage => Boolean(p));
}

export type IntakePracticeOption = {
  value: string;
  label: string;
  group: string;
};

export function getIntakePracticeOptions(): IntakePracticeOption[] {
  const out: IntakePracticeOption[] = [];
  for (const parent of getParentPracticePages()) {
    out.push({
      value: parent.path,
      label: parent.name,
      group: "Practice areas",
    });
    for (const child of getChildPracticePages(parent.segment)) {
      out.push({
        value: child.path,
        label: `${child.name}`,
        group: parent.name,
      });
    }
  }
  return out;
}

export function practiceDetailUrl(path: PracticePath): string {
  return `${LAW_FIRM_BASE}/practice-areas/${path}`;
}

export type PracticeNavGroup = {
  title: string;
  href: string;
  children: { name: string; href: string }[];
};

export function getPracticeNavGroups(): PracticeNavGroup[] {
  return getParentPracticePages().map((p) => ({
    title: p.name,
    href: practiceDetailUrl(p.path),
    children: getChildPracticePages(p.segment).map((c) => ({
      name: c.name,
      href: practiceDetailUrl(c.path),
    })),
  }));
}
