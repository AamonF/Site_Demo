import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CdPracticePageView } from "@/components/demos/criminal-defense-law/CdPracticePageView";
import { PRACTICE_PAGES } from "@/components/demos/criminal-defense-law/practice-data";
import { CD_PRACTICE_SLUGS, isCdPracticeSlug } from "@/components/demos/criminal-defense-law/site-config";

type Props = { params: Promise<{ practice: string }> };

export function generateStaticParams() {
  return CD_PRACTICE_SLUGS.map((practice) => ({ practice }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practice } = await params;
  if (!isCdPracticeSlug(practice)) return {};
  const c = PRACTICE_PAGES[practice];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

export default async function CriminalDefensePracticePage({ params }: Props) {
  const { practice } = await params;
  if (!isCdPracticeSlug(practice)) notFound();
  const content = PRACTICE_PAGES[practice];
  return <CdPracticePageView content={content} />;
}
