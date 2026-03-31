import type { Metadata } from "next";
import PEPageClient from "@/components/precisionelectric/PEPageClient";
import SchemaOrg from "@/components/demo/SchemaOrg";
import DemoBanner from "@/components/demo/DemoBanner";

const PHONE = "(704) 555-0123";
const CITY = "[City]";
const COMPANY = "[Company Name]";
const SLUG = "electrical-demo";
const URL = `https://launchsitedemo.com/${SLUG}`;

export const metadata: Metadata = {
  title: `Electrician in ${CITY}, NC | Licensed Electrical Services`,
  description: `${COMPANY} provides licensed, code-compliant electrical services in ${CITY}, NC. Panel upgrades, wiring, EV charger installation & 24/7 emergency electrical. Call ${PHONE}.`,
  keywords: [
    `electrician ${CITY} NC`,
    "licensed electrician",
    "electrical services",
    "panel upgrade",
    "EV charger installation",
    "emergency electrician",
    "wiring repair",
    "electrical troubleshooting",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: URL,
    siteName: COMPANY,
    title: `Electrician in ${CITY}, NC | Licensed Electrical Services`,
    description: `${COMPANY} — licensed electricians serving ${CITY}, NC. Code-compliant work, upfront pricing, 24/7 emergency response.`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: COMPANY }],
  },
  robots: { index: false, follow: false },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: COMPANY,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: CITY,
  description: `Licensed electrical services in ${CITY}, NC.`,
  priceRange: "$$",
  url: URL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Launch Site Demo", item: "https://launchsitedemo.com" },
    { "@type": "ListItem", position: 2, name: COMPANY, item: URL },
  ],
};

export default function ElectricalDemoPage() {
  return (
    <>
      <SchemaOrg schemas={[businessSchema, breadcrumbSchema]} />
      <DemoBanner businessName={COMPANY} slug={SLUG} />
      <PEPageClient phone={PHONE} city={CITY} company={COMPANY} />
    </>
  );
}
