import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDemoBySlug, getAllDemoSlugs } from "@/lib/demos";
import DemoBanner from "@/components/demo/DemoBanner";
import DemoHeader from "@/components/demo/DemoHeader";
import DemoHero from "@/components/demo/DemoHero";
import DemoTrustStrip from "@/components/demo/DemoTrustStrip";
import ServicesSection from "@/components/demo/ServicesSection";
import WhyChooseUs from "@/components/demo/WhyChooseUs";
import RealEstateSection from "@/components/demo/RealEstateSection";
import ServiceAreasSection from "@/components/demo/ServiceAreasSection";
import ProcessSection from "@/components/demo/ProcessSection";
import TestimonialsSection from "@/components/demo/TestimonialsSection";
import FAQSection from "@/components/demo/FAQSection";
import DemoFinalCTA from "@/components/demo/DemoFinalCTA";
import DemoFooter from "@/components/demo/DemoFooter";
import SchemaOrg from "@/components/demo/SchemaOrg";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDemoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) return {};

  const url = `https://launchsitedemo.com/${demo.slug}`;

  return {
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
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: demo.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
      addressLocality: demo.schema.city,
      addressRegion: demo.schema.state,
      addressCountry: demo.schema.country,
    },
    areaServed: demo.schema.serviceArea,
    description: demo.metaDescription,
    priceRange: demo.schema.priceRange,
    url: `https://launchsitedemo.com/${demo.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Launch Site Demo",
        item: "https://launchsitedemo.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: demo.name,
        item: `https://launchsitedemo.com/${demo.slug}`,
      },
    ],
  };

  return (
    <>
      <SchemaOrg schemas={[businessSchema, faqSchema, breadcrumbSchema]} />
      <DemoBanner businessName={demo.name} slug={demo.slug} />
      <DemoHeader demo={demo} />
      <main id="home">
        <DemoHero demo={demo} />
        <DemoTrustStrip demo={demo} />
        <ServicesSection demo={demo} />
        <WhyChooseUs demo={demo} />
        {demo.realEstate && <RealEstateSection demo={demo} />}
        <ServiceAreasSection demo={demo} />
        <ProcessSection demo={demo} />
        <TestimonialsSection demo={demo} />
        <FAQSection demo={demo} />
        <DemoFinalCTA demo={demo} />
      </main>
      <DemoFooter demo={demo} />
    </>
  );
}
