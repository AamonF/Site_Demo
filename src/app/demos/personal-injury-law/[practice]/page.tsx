import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PracticePageView } from "@/components/demos/personal-injury-law/PracticePageView";
import { PRACTICE_PAGES } from "@/components/demos/personal-injury-law/practice-data";
import { PI_PRACTICE_SLUGS, isPiPracticeSlug } from "@/components/demos/personal-injury-law/site-config";

type Props = { params: Promise<{ practice: string }> };

export function generateStaticParams() {
  return PI_PRACTICE_SLUGS.map((practice) => ({ practice }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practice } = await params;
  if (!isPiPracticeSlug(practice)) return {};
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

export default async function PracticeAreaPage({ params }: Props) {
  const { practice } = await params;
  if (!isPiPracticeSlug(practice)) notFound();
  const content = PRACTICE_PAGES[practice];
  return <PracticePageView content={content} />;
}
