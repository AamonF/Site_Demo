// ─── Business identity ───────────────────────────────────────────────────────

export const SC_BUSINESS = {
  name: "Super Cool HVAC",
  tagline: "Honest HVAC. Real Results. Charlotte's Choice.",
  phone: "(704) 899-2665",
  phoneHref: "tel:+17048992665",
  email: "info@supercoolcharlotte.com",
  emailHref: "mailto:info@supercoolcharlotte.com",
  address: "954 N Davidson St, Charlotte, NC 28206",
  neighborhood: "NoDa / Belmont, Charlotte",
  hours: {
    weekday: "Mon–Fri  7:30 AM – 5:30 PM",
    weekend: "Sat–Sun  9:00 AM – 3:00 PM",
  },
  serviceArea: "Charlotte, NC and surrounding communities",
  social: {
    facebook: "https://www.facebook.com/supercoolcharlotte",
    instagram: "https://www.instagram.com/supercoolcharlotte",
  },
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const SC_NAV_SERVICES = [
  { label: "Residential HVAC", href: "/supercoolhvac/residential", icon: "Home" },
  { label: "Commercial HVAC", href: "/supercoolhvac/commercial", icon: "Building2" },
  { label: "HVAC Maintenance", href: "/supercoolhvac/maintenance", icon: "Wrench" },
  { label: "HVAC Installation", href: "/supercoolhvac/installation", icon: "Settings2" },
  { label: "HVAC Repair", href: "/supercoolhvac/repair", icon: "Zap" },
  { label: "Indoor Air Quality", href: "/supercoolhvac/indoor-air-quality", icon: "Wind" },
  { label: "HVAC Inspections", href: "/supercoolhvac/inspections", icon: "ClipboardCheck" },
];

export const SC_NAV_MAIN = [
  { label: "Home", href: "/supercoolhvac" },
  { label: "About", href: "/supercoolhvac/about" },
  { label: "Environmental", href: "/supercoolhvac/environmental" },
  { label: "Financing", href: "/supercoolhvac/financing" },
  { label: "Contact", href: "/supercoolhvac/contact" },
];

// ─── Homepage services grid ───────────────────────────────────────────────────

export const SC_SERVICES_GRID = [
  { id: "residential", title: "Residential HVAC", icon: "Home", href: "/supercoolhvac/residential", description: "Home comfort without the upsell. Expert repairs, installations, and maintenance for Charlotte homeowners." },
  { id: "commercial", title: "Commercial HVAC", icon: "Building2", href: "/supercoolhvac/commercial", description: "Reliable climate control for offices, retail, restaurants, and commercial spaces across Charlotte." },
  { id: "maintenance", title: "Preventive Maintenance", icon: "Wrench", href: "/supercoolhvac/maintenance", description: "Seasonal tune-ups that extend equipment life, prevent breakdowns, and keep warranties valid." },
  { id: "installation", title: "HVAC Installation", icon: "Settings2", href: "/supercoolhvac/installation", description: "Right-sized systems, energy-efficient equipment, and professional installation with warranty included." },
  { id: "repair", title: "HVAC Repair", icon: "Zap", href: "/supercoolhvac/repair", description: "Fast, accurate diagnosis and repairs for all makes and models — no unnecessary upsells, ever." },
  { id: "indoor-air-quality", title: "Indoor Air Quality", icon: "Wind", href: "/supercoolhvac/indoor-air-quality", description: "Filtration upgrades, humidity balancing, UV purification, and ventilation improvements." },
  { id: "inspections", title: "HVAC Inspections", icon: "ClipboardCheck", href: "/supercoolhvac/inspections", description: "Pre-purchase inspections and system audits for homebuyers, sellers, and property owners." },
  { id: "financing", title: "Flexible Financing", icon: "CreditCard", href: "/supercoolhvac/financing", description: "Payment plans, manufacturer rebates, and utility incentives to make your upgrade affordable." },
];

// ─── Why choose us ────────────────────────────────────────────────────────────

export const SC_WHY_POINTS = [
  { id: "local", icon: "MapPin", title: "Locally Owned, Charlotte-Rooted", description: "We live in this city and care about this community. No corporate scripts, no private equity pressure to upsell — just honest service from neighbors." },
  { id: "honest", icon: "ShieldCheck", title: "No-Pressure, Honest Assessments", description: "We'll tell you what your system actually needs — not what generates the biggest ticket. If a repair is all you need, that's what we'll recommend." },
  { id: "quality", icon: "Award", title: "Quality Workmanship", description: "We stand behind our work with equipment and labor warranties. Every installation and repair is done to manufacturer specs and local codes." },
  { id: "eco", icon: "Leaf", title: "Eco-Conscious Approach", description: "We prioritize energy-efficient solutions, responsible refrigerant handling, and systems that reduce your environmental footprint." },
  { id: "transparent", icon: "FileText", title: "Transparent Pricing", description: "Clear quotes before any work begins. No hidden fees, no surprise charges. You always know exactly what you're paying for and why." },
  { id: "warranty", icon: "BadgeCheck", title: "Warranty Registration Included", description: "After every installation, our team handles equipment warranty registration so you don't have to worry about missing a deadline." },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const SC_TESTIMONIALS = [
  { name: "Katherine L.", location: "NoDa, Charlotte", rating: 5, text: "Super Cool has been servicing our home for three years. They're honest, on time, and genuinely don't try to sell you things you don't need. After a bad experience with a big-box HVAC company, finding a team like this was a relief." },
  { name: "Marcus T.", location: "Plaza Midwood, Charlotte", rating: 5, text: "They diagnosed and repaired our system the same day I called. The technician explained everything clearly, showed me exactly what was wrong, and had it running within two hours. Fair price too — I'll never use anyone else." },
  { name: "Rebecca H.", location: "Dilworth, Charlotte", rating: 5, text: "We had Super Cool do a full system replacement. From the estimate to the final walkthrough, everything was professional and transparent. They even registered the warranty for us. Couldn't be happier." },
  { name: "David W.", location: "Belmont, Charlotte", rating: 5, text: "The maintenance plan has been worth every penny. They caught a refrigerant issue during routine service that could have turned into a very expensive repair. Proactive, knowledgeable, and a pleasure to work with." },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const SC_FAQ_GENERAL = [
  { question: "What areas do you serve?", answer: "We primarily serve Charlotte, NC and surrounding communities including NoDa, Plaza Midwood, Dilworth, South End, SouthPark, Ballantyne, Concord, Huntersville, Matthews, and more." },
  { question: "Do you handle both residential and commercial HVAC?", answer: "Yes. We work with single-family homes, condos, townhomes, small offices, retail spaces, restaurants, and mixed-use commercial properties throughout the Charlotte area." },
  { question: "How soon can you come out for a repair?", answer: "We prioritize urgent service calls and often have same-day availability. Call (704) 899-2665 and we'll get you scheduled as quickly as possible." },
  { question: "Do you offer financing for new equipment?", answer: "Yes. We offer flexible financing options and help identify available manufacturer and utility rebates to maximize your savings." },
  { question: "Do you register equipment warranties for customers?", answer: "Yes — this is one of our most appreciated services. After every installation, our administrative team handles warranty registration so you don't have to keep track of one more thing." },
  { question: "Are you an eco-conscious company?", answer: "Absolutely. We prioritize energy-efficient equipment, responsible refrigerant handling, and actively advise customers on heat pump technology and electrification options when appropriate." },
  { question: "What's included in your maintenance plan?", answer: "Our maintenance visits cover full system inspection, coil and component cleaning, refrigerant check, filter replacement, electrical inspection, thermostat calibration, and a complete condition report." },
];

// ─── Service areas ────────────────────────────────────────────────────────────

export const SC_SERVICE_AREAS = ["NoDa / Belmont", "Plaza Midwood", "Dilworth", "South End / LoSo", "SouthPark", "Uptown Charlotte", "Ballantyne", "Myers Park", "University City", "Concord", "Huntersville", "Matthews", "Pineville", "Mint Hill", "Lake Norman Area"];

// ─── Trust bar items ─────────────────────────────────────────────────────────

export const SC_TRUST_ITEMS = [
  { label: "Locally Owned & Operated" },
  { label: "Residential & Commercial" },
  { label: "Warranties Registered for You" },
  { label: "Transparent Pricing" },
  { label: "Energy-Efficient Solutions" },
  { label: "No-Pressure Service" },
];

// ─── Schema helpers ───────────────────────────────────────────────────────────

export const SC_SCHEMA_BASE = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Super Cool HVAC",
  telephone: "+17048992665",
  email: "info@supercoolcharlotte.com",
  address: { "@type": "PostalAddress", streetAddress: "954 N Davidson St", addressLocality: "Charlotte", addressRegion: "NC", postalCode: "28206", addressCountry: "US" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:30", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "09:00", closes: "15:00" },
  ],
  areaServed: "Charlotte, NC and surrounding areas",
  priceRange: "$$",
  url: "https://launchsitedemo.com/supercoolhvac",
};

export const SC_BREADCRUMB_HOME = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Launch Site Demo", item: "https://launchsitedemo.com" },
    { "@type": "ListItem", position: 2, name: "Super Cool HVAC", item: "https://launchsitedemo.com/supercoolhvac" },
  ],
};

export function makeBreadcrumb(pageName: string, pageSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Launch Site Demo", item: "https://launchsitedemo.com" },
      { "@type": "ListItem", position: 2, name: "Super Cool HVAC", item: "https://launchsitedemo.com/supercoolhvac" },
      { "@type": "ListItem", position: 3, name: pageName, item: `https://launchsitedemo.com/supercoolhvac/${pageSlug}` },
    ],
  };
}

export function makeFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
