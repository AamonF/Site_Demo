import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LawFirmPracticeTemplate } from "@/components/law-firm/LawFirmPracticeTemplate";
import {
  getChildPracticePages,
  getPracticePageByPath,
  getParentPracticePages,
} from "@/lib/law-firm/practice-registry";
import { lawMetadata } from "@/lib/law-firm/seo";

type Props = { params: Promise<{ parent: string; child: string }> };

export async function generateStaticParams() {
  const params: { parent: string; child: string }[] = [];
  for (const p of getParentPracticePages()) {
    for (const c of getChildPracticePages(p.segment)) {
      params.push({ parent: p.segment, child: c.segment });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { parent, child } = await params;
  const path = `${parent}/${child}`;
  const area = getPracticePageByPath(path);
  if (!area) return {};
  return lawMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/practice-areas/${area.path}`,
  });
}

export default async function PracticeChildPage({ params }: Props) {
  const { parent, child } = await params;
  const path = `${parent}/${child}`;
  const area = getPracticePageByPath(path);
  if (!area || area.kind !== "child") notFound();
  return (
    <main>
      <LawFirmPracticeTemplate area={area} />
    </main>
  );
}
