import type { Metadata } from "next";
import andrewMatthewsHvac from "@/lib/demos/andrewmatthewshvac";
import DemoBanner from "@/components/demo/DemoBanner";
import SchemaOrg from "@/components/demo/SchemaOrg";
import AMHeader from "@/components/amhvac/AMHeader";
import AMHero from "@/components/amhvac/AMHero";
import AMTrustStrip from "@/components/amhvac/AMTrustStrip";
import AMServices from "@/components/amhvac/AMServices";
import AMWhyUs from "@/components/amhvac/AMWhyUs";
import AMServiceAreas from "@/components/amhvac/AMServiceAreas";
import AMProcess from "@/components/amhvac/AMProcess";
import AMTestimonials from "@/components/amhvac/AMTestimonials";
import AMFAQ from "@/components/amhvac/AMFAQ";
import AMContactForm from "@/components/amhvac/AMContactForm";
import AMFinalCTA from "@/components/amhvac/AMFinalCTA";
import AMFooter from "@/components/amhvac/AMFooter";

const demo = andrewMatthewsHvac;
const url = `https://launchsitedemo.com/${demo.slug}`;

export const metadata: Metadata = {
  title: demo.metaTitle,
  description: demo.metaDescription,
  keywords: demo.keywords,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: demo.name,
    title: demo.metaTitle,
    description: demo.metaDescription,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: demo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: demo.metaTitle,
    description: demo.metaDescription,
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: demo.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": demo.schema.type,
  name: demo.schema.name,
  telephone: demo.schema.telephone,
  email: demo.schema.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: demo.schema.streetAddress,
    addressLocality: demo.schema.city,
    addressRegion: demo.schema.state,
    postalCode: demo.schema.postalCode,
    addressCountry: demo.schema.country,
  },
  areaServed: demo.schema.serviceArea,
  description: demo.metaDescription,
  priceRange: demo.schema.priceRange,
  url,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Launch Site Demo", item: "https://launchsitedemo.com" },
    { "@type": "ListItem", position: 2, name: demo.name, item: url },
  ],
};

export default function AndrewMatthewsHVACPage() {
  return (
    <>
      <SchemaOrg schemas={[businessSchema, faqSchema, breadcrumbSchema]} />
      <DemoBanner businessName={demo.name} slug={demo.slug} />
      <AMHeader demo={demo} />
      <main id="home">
        <AMHero demo={demo} />
        <AMTrustStrip demo={demo} />
        <AMServices demo={demo} />
        <AMWhyUs demo={demo} />
        <AMServiceAreas demo={demo} />
        <AMProcess demo={demo} />
        <AMTestimonials demo={demo} />
        <AMFAQ demo={demo} />
        <AMContactForm demo={demo} />
        <AMFinalCTA demo={demo} />
      </main>
      <AMFooter demo={demo} />
    </>
  );
}
