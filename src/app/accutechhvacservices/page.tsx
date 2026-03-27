import type { Metadata } from "next";
import accuTechHvacServices from "@/lib/demos/accutechhvacservices";
import DemoBanner from "@/components/demo/DemoBanner";
import SchemaOrg from "@/components/demo/SchemaOrg";
import ATHeader from "@/components/accutech/ATHeader";
import ATHero from "@/components/accutech/ATHero";
import ATTrustStrip from "@/components/accutech/ATTrustStrip";
import ATServices from "@/components/accutech/ATServices";
import ATServiceAgreements from "@/components/accutech/ATServiceAgreements";
import ATWhyUs from "@/components/accutech/ATWhyUs";
import ATServiceAreas from "@/components/accutech/ATServiceAreas";
import ATProcess from "@/components/accutech/ATProcess";
import ATTestimonials from "@/components/accutech/ATTestimonials";
import ATFAQ from "@/components/accutech/ATFAQ";
import ATContactForm from "@/components/accutech/ATContactForm";
import ATFinalCTA from "@/components/accutech/ATFinalCTA";
import ATFooter from "@/components/accutech/ATFooter";

const demo = accuTechHvacServices;
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

export default function AccuTechHVACPage() {
  return (
    <>
      <SchemaOrg schemas={[businessSchema, faqSchema, breadcrumbSchema]} />
      <DemoBanner businessName={demo.name} slug={demo.slug} />
      <ATHeader demo={demo} />
      <main id="home">
        <ATHero demo={demo} />
        <ATTrustStrip demo={demo} />
        <ATServices demo={demo} />
        <ATServiceAgreements demo={demo} />
        <ATWhyUs demo={demo} />
        <ATServiceAreas demo={demo} />
        <ATProcess demo={demo} />
        <ATTestimonials demo={demo} />
        <ATFAQ demo={demo} />
        <ATContactForm demo={demo} />
        <ATFinalCTA demo={demo} />
      </main>
      <ATFooter demo={demo} />
    </>
  );
}
