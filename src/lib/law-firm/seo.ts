import type { Metadata } from "next";

import { FIRM } from "./firm";
import { SITE } from "./content";
import { lawFirmUrl } from "./site";

export function lawMetadata(overrides: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const path = overrides.path ?? "";
  const url = lawFirmUrl(path);
  const pageTitle = overrides.title.includes(FIRM.name)
    ? overrides.title
    : `${overrides.title} | ${FIRM.name}`;
  return {
    title: pageTitle,
    description: overrides.description,
    keywords: [
      `${FIRM.city} attorney`,
      `${FIRM.city} lawyer`,
      `${FIRM.county} law firm`,
      "North Carolina attorney",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: FIRM.name,
      title: pageTitle,
      description: overrides.description,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `${FIRM.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: overrides.description,
      images: [SITE.ogImage],
    },
    robots: overrides.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
