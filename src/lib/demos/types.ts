export interface ServiceOffer {
  id: string;
  title: string;
  price: string;
  priceLabel?: string;
  description: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  city: string;
  description: string;
  slug?: string;
}

export interface WhyPoint {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TrustBadge {
  label: string;
}

export interface TrustStripItem {
  label: string;
}

export interface RealEstateSection {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceLabel: string;
  bullets: string[];
  paymentNote: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SchemaData {
  type: "LocalBusiness" | "HVACBusiness" | "Plumber" | "GeneralContractor";
  name: string;
  telephone: string;
  email: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  streetAddress?: string;
  serviceArea: string;
  serviceType: string;
  priceRange?: string;
}

export interface BusinessDemo {
  // Core identity
  slug: string;
  name: string;
  tagline: string;
  logoUrl?: string;
  phone: string;
  phoneHref: string;
  email: string;
  city: string;
  state: string;
  serviceArea: string;
  industry: string;
  bookingCTA: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Nav
  navLinks: NavLink[];

  // Hero
  heroHeadline: string;
  heroSubheadline: string;
  heroTrustBadges: TrustBadge[];

  // Trust strip
  trustStripItems: TrustStripItem[];
  trustTagline: string;

  // Services
  services: ServiceOffer[];

  // Why choose us
  whyTitle: string;
  whySubtitle: string;
  whyPoints: WhyPoint[];

  // Real estate (optional, HVAC / home inspection)
  realEstate?: RealEstateSection;

  // Service areas
  serviceAreas: ServiceArea[];

  // Process
  processSteps: ProcessStep[];

  // Testimonials
  testimonials: Testimonial[];

  // FAQ
  faq: FAQItem[];

  // Final CTA
  finalCtaHeadline: string;
  finalCtaSubheadline: string;

  // Footer
  footerDescription: string;
  footerSeoBlurb: string;

  // Schema
  schema: SchemaData;
}
