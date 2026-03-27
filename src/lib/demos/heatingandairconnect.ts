import type { BusinessDemo } from "./types";

const heatingAndAirConnect: BusinessDemo = {
  slug: "heatingandairconnect",
  name: "Heating & Air Connect",
  tagline: "Trusted HVAC Service for Charlotte Homeowners",
  phone: "(980) 275-0924",
  phoneHref: "tel:+19802750924",
  email: "heatingandairconnect@gmail.com",
  city: "Charlotte",
  state: "NC",
  serviceArea: "Charlotte, NC and surrounding areas",
  industry: "HVAC",
  bookingCTA: "Book Appointment",

  metaTitle:
    "Heating & Air Connect | HVAC Repair, Maintenance & Installation in Charlotte, NC",
  metaDescription:
    "Heating & Air Connect provides HVAC diagnostics, maintenance, repair, replacement guidance, and real estate HVAC inspections in Charlotte, NC and surrounding areas. Licensed technicians. Honest pricing.",
  keywords: [
    "HVAC Charlotte NC",
    "AC repair Charlotte",
    "heating repair Charlotte NC",
    "HVAC maintenance Charlotte",
    "HVAC inspection Charlotte",
    "air conditioning service Charlotte",
    "HVAC replacement Charlotte",
    "HVAC second opinion Charlotte",
    "HVAC diagnostic Charlotte NC",
    "real estate HVAC inspection Charlotte",
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Real Estate", href: "#real-estate" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  heroHeadline: "Trusted HVAC Repair & Maintenance in Charlotte, NC",
  heroSubheadline:
    "Licensed HVAC technicians with over a decade of experience serving Charlotte and the surrounding area. Fast scheduling, honest recommendations, and no-pressure guidance — from diagnosis to full replacement.",
  heroTrustBadges: [
    { label: "Licensed Technicians" },
    { label: "10+ Years Experience" },
    { label: "Charlotte Area Service" },
    { label: "Honest Pricing" },
  ],

  trustStripItems: [
    { label: "Licensed HVAC Professionals" },
    { label: "Fast Response Scheduling" },
    { label: "Repair-First Recommendations" },
    { label: "Charlotte Local Service" },
    { label: "Budget-Conscious Options" },
  ],
  trustTagline:
    "Homeowners and real estate professionals across Charlotte trust Heating & Air Connect for clear answers and reliable HVAC service.",

  services: [
    {
      id: "diagnostic",
      title: "HVAC Diagnostic",
      price: "$89",
      description:
        "A thorough inspection by a licensed HVAC technician who will identify what's wrong with your system and walk you through the options — clearly and without pressure.",
      bullets: [
        "Prompt on-site inspection by a licensed tech",
        "Clear explanation of the issue and repair options",
        "Diagnostic fee credited toward qualifying repair or replacement",
      ],
      cta: "Schedule Diagnostic",
    },
    {
      id: "maintenance",
      title: "Heating & Air Maintenance",
      price: "$99",
      description:
        "Keep your system running efficiently year-round with a professional seasonal tune-up. Preventive maintenance helps avoid costly breakdowns and extends the life of your equipment.",
      bullets: [
        "Full system inspection and cleaning",
        "Helps prevent mid-season breakdowns",
        "Supports efficiency and longer equipment life",
      ],
      cta: "Schedule Maintenance",
      featured: true,
    },
    {
      id: "replacement",
      title: "System Replacement Options",
      price: "Free",
      priceLabel: "Second Opinion",
      description:
        "Already received a replacement quote? Send it over and get an honest second opinion by phone — at no charge. We'll also recommend a diagnostic if there's a chance your current system can still be saved.",
      bullets: [
        "Submit your existing quote for a free phone review",
        "Honest guidance — repair vs. replace",
        "Permit-ready replacement help if you decide to move forward",
      ],
      cta: "Get a Second Opinion",
    },
    {
      id: "realestate",
      title: "Real Estate HVAC Inspection",
      price: "$178",
      priceLabel: "per system pair",
      description:
        "A comprehensive HVAC inspection with a written report designed for real estate transactions. Gives agents, buyers, and sellers the clear picture they need before closing.",
      bullets: [
        "Full inspection of AC and furnace system pair",
        "Written report delivered fast before closing",
        "Financing note: 50% upfront, balance due at closing if replacement needed",
      ],
      cta: "Request RE Inspection",
      featured: false,
    },
  ],

  whyTitle: "Why Charlotte Homeowners Choose Heating & Air Connect",
  whySubtitle:
    "More than a decade of HVAC experience in the Charlotte area — built on honest work, clear communication, and real results for homeowners and real estate professionals.",
  whyPoints: [
    {
      id: "licensed",
      title: "Licensed & Experienced Technicians",
      description:
        "Every job is handled by licensed HVAC professionals with over ten years of hands-on experience across residential and light commercial systems.",
    },
    {
      id: "honest",
      title: "Honest, No-Pressure Recommendations",
      description:
        "We give you the full picture and let you decide. No upselling, no pressure — just clear options and honest guidance on whether to repair or replace.",
    },
    {
      id: "diagnostic",
      title: "Thorough Diagnostics",
      description:
        "We take the time to properly diagnose the issue before recommending any solution. An accurate diagnosis saves you money and avoids unnecessary repairs.",
    },
    {
      id: "realestate",
      title: "Real Estate Inspection Ready",
      description:
        "We work with agents, buyers, and sellers throughout the Charlotte area — providing detailed HVAC inspection reports built for real estate transactions.",
    },
    {
      id: "local",
      title: "Local Charlotte Service",
      description:
        "We're local to the Charlotte area and serve surrounding communities including Matthews, Concord, Huntersville, and more — with the responsiveness of a neighborhood company.",
    },
    {
      id: "budget",
      title: "Budget-Conscious Approach",
      description:
        "We understand HVAC work is a significant expense. We prioritize solutions that fit your budget and make sense for the long-term value of your home.",
    },
  ],

  realEstate: {
    title: "HVAC Inspections for Real Estate Transactions",
    subtitle: "Clear, Fast, and Built for Closing",
    description:
      "Whether you're a buyer, seller, or agent, a proper HVAC inspection can protect the deal and set realistic expectations before closing. We provide a comprehensive written report covering both the AC and furnace system — delivered fast so your timeline stays on track.",
    price: "$178",
    priceLabel: "per system pair (AC + Furnace)",
    bullets: [
      "Full on-site inspection of heating and cooling systems",
      "Clear written report with findings and recommendations",
      "Useful for buyers, sellers, and real estate agents",
      "Fast turnaround to support your closing timeline",
      "If replacement is needed prior to closing: 50% due upfront, balance due at closing",
    ],
    paymentNote:
      "If a system replacement is determined prior to closing, we offer a flexible payment structure: 50% is due upfront, with the remaining balance due at closing.",
    ctaPrimary: "Request Real Estate Inspection",
    ctaSecondary: "Call Now",
  },

  serviceAreas: [
    {
      city: "Charlotte",
      slug: "charlotte",
      description:
        "Our primary service area — we provide HVAC repair, maintenance, diagnostics, and real estate inspections throughout Charlotte and all major neighborhoods.",
    },
    {
      city: "Matthews",
      slug: "matthews",
      description:
        "Fast and reliable HVAC service for Matthews homeowners — from seasonal tune-ups and diagnostic inspections to system replacement guidance.",
    },
    {
      city: "Concord",
      slug: "concord",
      description:
        "Serving Concord, NC with licensed HVAC technicians for repairs, maintenance, and real estate inspection support across the area.",
    },
    {
      city: "Huntersville",
      slug: "huntersville",
      description:
        "Huntersville homeowners trust Heating & Air Connect for honest HVAC diagnostics, maintenance services, and no-pressure replacement options.",
    },
    {
      city: "Cornelius",
      slug: "cornelius",
      description:
        "HVAC service in Cornelius, NC — quick scheduling, accurate diagnostics, and full seasonal maintenance for residential systems.",
    },
    {
      city: "Gastonia",
      slug: "gastonia",
      description:
        "Gastonia area HVAC repair and maintenance — licensed technicians ready to restore comfort to your home when you need it most.",
    },
    {
      city: "Rock Hill",
      slug: "rock-hill",
      description:
        "Serving Rock Hill, SC with reliable HVAC diagnostics, maintenance, and system replacement options from a trusted Charlotte-area team.",
    },
    {
      city: "Mint Hill",
      slug: "mint-hill",
      description:
        "Mint Hill HVAC service — from diagnostic inspections and seasonal tune-ups to comprehensive real estate inspection reports.",
    },
  ],

  processSteps: [
    {
      number: "01",
      title: "Call or Request Service",
      description:
        "Call us directly or submit a service request online. We respond quickly and schedule at a time that works for you.",
    },
    {
      number: "02",
      title: "Get a Clear Diagnosis",
      description:
        "A licensed technician inspects your system and explains the issue clearly — what's wrong, why it happened, and what your options are.",
    },
    {
      number: "03",
      title: "Review Your Options",
      description:
        "We walk you through repair and replacement options with honest pricing. No pressure, no upselling — just the information you need to decide.",
    },
    {
      number: "04",
      title: "Restore Your Comfort",
      description:
        "We complete the work efficiently and professionally, leaving your home comfortable and your system running the way it should.",
    },
  ],

  testimonials: [
    {
      name: "Sarah M.",
      location: "Charlotte, NC",
      rating: 5,
      text: "Had an issue with my AC in the middle of summer. They came out quickly, diagnosed the problem clearly, and fixed it the same day. Pricing was straightforward and there was no pressure to do anything beyond what was actually needed. I really appreciated the honesty.",
    },
    {
      name: "David R.",
      location: "Matthews, NC",
      rating: 5,
      text: "I had gotten a quote from another company recommending a full system replacement. Called Heating & Air Connect for a second opinion and they found the actual issue — a failed capacitor that cost a fraction of a replacement. Saved me thousands. These guys are the real deal.",
    },
    {
      name: "Lauren T.",
      location: "Concord, NC",
      rating: 5,
      text: "Used them for the $99 maintenance service before the heating season. Technician was thorough, explained everything he found, and the system has been running great all winter. Easy scheduling and professional service from start to finish.",
    },
    {
      name: "James P.",
      location: "Huntersville, NC",
      rating: 5,
      text: "Needed an HVAC inspection for a home purchase and they were exactly what I needed. The written report was clear and detailed, and they turned it around fast so we could stay on our closing timeline. Will definitely use them as the homeowners too.",
    },
    {
      name: "Monica G.",
      location: "Charlotte, NC",
      rating: 5,
      text: "Our furnace stopped working in January. They were able to get out the same day, diagnosed the issue quickly, and had it running again within a couple hours. Really glad I called them — fair pricing and no nonsense.",
    },
    {
      name: "Brian K.",
      location: "Cornelius, NC",
      rating: 5,
      text: "I'm a real estate agent and I've used Heating & Air Connect for HVAC inspections on several transactions now. Their reports are clear, thorough, and my clients always feel confident in the findings. I won't use anyone else for this.",
    },
  ],

  faq: [
    {
      question: "How much does an HVAC diagnostic cost in Charlotte?",
      answer:
        "Our HVAC diagnostic is $89. A licensed technician will inspect your system on-site, identify the issue, and walk you through your options clearly. The diagnostic fee is credited toward qualifying repair or replacement work if you choose to move forward with us.",
    },
    {
      question: "What is included in your $99 maintenance service?",
      answer:
        "Our Heating & Air Maintenance service includes a full seasonal system inspection and tune-up. This covers cleaning key components, checking refrigerant levels, inspecting electrical connections, testing system performance, and identifying anything that could cause a breakdown before it happens. It's one of the best investments you can make to protect your HVAC system.",
    },
    {
      question: "Do you offer free second opinions on replacement quotes?",
      answer:
        "Yes. If another company has quoted you a system replacement, you can send us the quote and we'll provide a free second opinion by phone. We'll let you know if the recommendation makes sense or if a diagnostic might reveal a more affordable solution first.",
    },
    {
      question: "Do you work on both heating and cooling systems?",
      answer:
        "Yes — we service both heating and air conditioning systems, including central AC, heat pumps, furnaces, and ductless mini-split systems. If you're not sure whether we service your specific equipment, give us a call and we'll let you know right away.",
    },
    {
      question: "What is included in a real estate HVAC inspection?",
      answer:
        "Our real estate HVAC inspection ($178 per system pair) includes a full on-site inspection of both the air conditioning and furnace system. You'll receive a written report with clear findings and recommendations — useful for buyers, sellers, and real estate agents. We turn reports around quickly to support your closing timeline.",
    },
    {
      question: "Do you serve areas outside Charlotte?",
      answer:
        "Yes. We serve Charlotte and a number of surrounding communities including Matthews, Concord, Huntersville, Cornelius, Gastonia, Rock Hill, and Mint Hill. If you're unsure whether we cover your area, call us and we'll confirm quickly.",
    },
    {
      question: "How quickly can I schedule an appointment?",
      answer:
        "We prioritize fast scheduling. In most cases, we can get a technician out within one to two business days. For urgent situations — such as a system failure during extreme temperatures — call us directly and we'll do our best to accommodate you as quickly as possible.",
    },
  ],

  finalCtaHeadline: "Need HVAC Help in Charlotte?",
  finalCtaSubheadline:
    "Book service, request an inspection, or get a free second opinion today. Fast scheduling and honest answers — no pressure.",

  footerDescription:
    "Licensed HVAC service for Charlotte, NC homeowners and real estate professionals. Diagnostics, maintenance, replacement guidance, and comprehensive HVAC inspection reports.",
  footerSeoBlurb:
    "Heating & Air Connect serves Charlotte, Matthews, Concord, Huntersville, Cornelius, Gastonia, Rock Hill, and Mint Hill with professional HVAC repair, maintenance, and real estate inspection services.",

  schema: {
    type: "HVACBusiness",
    name: "Heating & Air Connect",
    telephone: "+19802750924",
    email: "heatingandairconnect@gmail.com",
    city: "Charlotte",
    state: "NC",
    country: "US",
    serviceArea: "Charlotte, NC and surrounding areas",
    serviceType: "HVAC Repair, Maintenance, Diagnostics, and Real Estate Inspections",
    priceRange: "$$",
  },
};

export default heatingAndAirConnect;
