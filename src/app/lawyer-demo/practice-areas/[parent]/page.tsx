import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LawFirmParentPracticeTemplate } from "@/components/law-firm/LawFirmParentPracticeTemplate";
import { getParentPracticePages, getPracticePageByPath } from "@/lib/law-firm/practice-registry";
import { lawMetadata } from "@/lib/law-firm/seo";

type Props = { params: Promise<{ parent: string }> };

export async function generateStaticParams() {
  return getParentPracticePages().map((p) => ({ parent: p.segment }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { parent } = await params;
  const area = getPracticePageByPath(parent);
  if (!area || area.kind !== "parent") return {};
  return lawMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/practice-areas/${area.path}`,
  });
}

export default async function PracticeParentPage({ params }: Props) {
  const { parent } = await params;
  const area = getPracticePageByPath(parent);
  if (!area || area.kind !== "parent") notFound();
  return (
    <main>
      <LawFirmParentPracticeTemplate area={area} />
    </main>
  );
}
