import { FIRM } from "./firm";
import { lawFirmUrl } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": lawFirmUrl("/") + "#business",
    name: FIRM.name,
    description: `${FIRM.name} provides strategic legal representation for personal injury, auto and truck accidents, criminal defense, DUI, drug and assault charges, family law, divorce, custody, immigration, green cards, and naturalization in Charlotte, Mecklenburg County, and the greater North Carolina metro area.`,
    url: lawFirmUrl("/"),
    telephone: FIRM.phoneTel,
    email: FIRM.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: FIRM.addressLine1,
      addressLocality: FIRM.city,
      addressRegion: FIRM.stateAbbr,
      postalCode: "28202",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: FIRM.city,
      containedInPlace: { "@type": "State", name: FIRM.state },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export function attorneyJsonLd(member: {
  name: string;
  role: string;
  image: string;
  bar: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: member.name,
    jobTitle: member.role,
    image: member.image,
    memberOf: {
      "@type": "Organization",
      name: FIRM.name,
      url: lawFirmUrl("/"),
    },
    knowsAbout: member.bar,
  };
}

export function faqPageJsonLd(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** `path` is the URL path after `/lawyer-demo` (e.g. `/practice-areas/personal-injury/car-accidents`) */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: lawFirmUrl(item.path),
    })),
  };
}
