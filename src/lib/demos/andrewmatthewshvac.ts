import type { BusinessDemo } from "./types";

// Primary phone: 704-277-6711
// Alternate public number: 980-269-7764
// To swap the primary number globally, update `phone` and `phoneHref` below.

const andrewMatthewsHvac: BusinessDemo = {
  slug: "andrewmatthewshvac",
  name: "Andrew Matthews HVAC",
  tagline: "Honest Heating & Cooling Service for Charlotte Homeowners",
  phone: "(704) 277-6711",
  phoneHref: "tel:+17042776711",
  email: "andrewmatthewshvac@gmail.com",
  city: "Charlotte",
  state: "NC",
  serviceArea: "Charlotte, NC and surrounding areas",
  industry: "HVAC",
  bookingCTA: "Book Online",

  metaTitle:
    "Andrew Matthews HVAC | Heating & Cooling Service in Charlotte, NC",
  metaDescription:
    "Andrew Matthews HVAC provides honest heating and cooling diagnostics, tune-ups, maintenance plans, and repair service for Charlotte-area homeowners. Serving the community since 2009.",
  keywords: [
    "HVAC Charlotte NC",
    "heating and cooling Charlotte",
    "HVAC contractor Charlotte",
    "HVAC maintenance Charlotte",
    "HVAC tune-up Charlotte",
    "heating repair Charlotte",
    "air conditioning repair Charlotte",
    "HVAC service plans Charlotte",
    "HVAC diagnostic Charlotte NC",
    "Charlotte HVAC company",
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Plans & Pricing", href: "#services" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  heroHeadline: "Honest HVAC Service for Charlotte Homeowners",
  heroSubheadline:
    "Andrew Matthews HVAC has been serving the Charlotte area since 2009 as a certified local contractor. We offer straightforward pricing, no-pressure recommendations, and the convenience of online booking — so you get the HVAC help you need without the runaround.",
  heroTrustBadges: [
    { label: "Serving Charlotte Since 2009" },
    { label: "Certified HVAC Contractor" },
    { label: "Straightforward Pricing" },
    { label: "Maintenance Plans Available" },
  ],

  trustStripItems: [
    { label: "Serving Charlotte Since 2009" },
    { label: "Certified Local Contractor" },
    { label: "Honest, No-Pressure Service" },
    { label: "Straightforward Pricing" },
    { label: "Book Online Anytime" },
  ],
  trustTagline:
    "Charlotte-area homeowners have trusted Andrew Matthews HVAC since 2009 for honest diagnostics, affordable tune-ups, and practical maintenance — without the sales pressure.",

  services: [
    {
      id: "cooling-diagnostic",
      title: "Residential Cooling Diagnostic",
      price: "$99",
      description:
        "When your air conditioning isn't performing the way it should, a proper diagnosis is the first step. We inspect your cooling system on-site, identify the issue clearly, and walk you through your options — no pressure, no guesswork.",
      bullets: [
        "On-site inspection by a certified HVAC technician",
        "Clear explanation of what's wrong and what it will take to fix it",
        "Honest recommendations — repair only if it makes sense",
        "Plan members pay just $45 for diagnostic visits",
      ],
      cta: "Book a Cooling Diagnostic",
    },
    {
      id: "heating-diagnostic",
      title: "Residential Heating Diagnostic",
      price: "$99",
      description:
        "Don't let a heating problem turn into a cold-weather emergency. We diagnose your furnace or heat pump on-site and give you a straight answer about what's wrong and what it will cost to fix it.",
      bullets: [
        "Full on-site inspection of your heating system",
        "Straightforward findings with no upsell pressure",
        "Works for furnaces, heat pumps, and related equipment",
        "Plan members pay just $45 for diagnostic visits",
      ],
      cta: "Book a Heating Diagnostic",
    },
    {
      id: "summer-tuneup",
      title: "Summer Tune-Up",
      price: "From $105",
      priceLabel: "per system",
      description:
        "Get your cooling system ready before the heat hits. A summer tune-up helps your AC run more efficiently, reduces the risk of mid-season breakdowns, and extends the life of your equipment.",
      bullets: [
        "1 System — $105",
        "2 Systems — $210",
        "3 Systems — $315",
        "Outdoor coil cleaning, refrigerant check, and system performance test included",
      ],
      cta: "Schedule a Summer Tune-Up",
      featured: false,
    },
    {
      id: "winter-tuneup",
      title: "Winter Tune-Up",
      price: "From $105",
      priceLabel: "per system",
      description:
        "Prepare your heating system before temperatures drop. Our winter tune-up covers your furnace safety devices, ductwork, and more — so you're not scrambling when the cold arrives.",
      bullets: [
        "1 System — $105",
        "2 Systems — $210",
        "3 Systems — $315",
        "Fall furnace tune-up, safety device testing, and carbon monoxide inspection included",
      ],
      cta: "Schedule a Winter Tune-Up",
      featured: false,
    },
    {
      id: "maintenance-plan",
      title: "Annual Maintenance Plan",
      price: "From $15/mo",
      priceLabel: "billed monthly, no contract",
      description:
        "The most cost-effective way to keep your HVAC system running well year-round. Two visits per year — one in spring, one in fall — covering everything your system needs to stay reliable and efficient.",
      bullets: [
        "1 System — $15/month",
        "2 Systems — $30/month  ★ Most Popular",
        "3 Systems — $45/month",
        "Two seasonal visits (spring + fall) per year",
        "Outdoor coil cleaning, filter replacement, drain line cleaning",
        "Refrigerant level check and furnace fall tune-up",
        "Safety device testing and carbon monoxide inspection",
        "Ductwork air leak inspection",
        "Smoke and CO detector check",
        "Diagnostic visits reduced to $45 for plan members",
      ],
      cta: "View Maintenance Plans",
      featured: true,
    },
    {
      id: "general-service",
      title: "General HVAC Service & Repair",
      price: "Call for Pricing",
      description:
        "Whether it's an unexpected repair, a refrigerant issue, or something else that came up during a diagnostic, we handle a full range of residential HVAC service work for Charlotte-area homeowners.",
      bullets: [
        "Repair work following a completed diagnostic",
        "Refrigerant recharge and leak detection",
        "Thermostat, capacitor, and component replacement",
        "Honest recommendations on repair vs. replacement",
      ],
      cta: "Call Now",
    },
  ],

  whyTitle: "Why Charlotte Homeowners Choose Andrew Matthews HVAC",
  whySubtitle:
    "Since 2009, we've built a reputation in the Charlotte area for honest service, practical recommendations, and straightforward pricing — without the pressure tactics you'll find elsewhere.",
  whyPoints: [
    {
      id: "experience",
      title: "Serving Charlotte Since 2009",
      description:
        "Over 15 years of hands-on HVAC experience in the Charlotte area. We know the local climate, the common system issues, and the neighborhoods we serve.",
    },
    {
      id: "honest",
      title: "Honest, No-Pressure Recommendations",
      description:
        "We give you the real picture. If your system can be repaired affordably, we'll tell you. If replacement makes more sense, we'll explain exactly why — and let you decide.",
    },
    {
      id: "pricing",
      title: "Straightforward Pricing",
      description:
        "Our pricing is clear and upfront. Diagnostics are $99. Tune-ups start at $105. Maintenance plans start at $15/month. No surprise fees, no bait-and-switch.",
    },
    {
      id: "certified",
      title: "Certified Local Contractor",
      description:
        "Andrew Matthews HVAC is a certified HVAC contractor serving the Charlotte area with the standards and accountability that homeowners deserve.",
    },
    {
      id: "booking",
      title: "Online Booking Convenience",
      description:
        "Schedule your diagnostic, tune-up, or maintenance visit online at your convenience — no need to play phone tag or wait on hold.",
    },
    {
      id: "plans",
      title: "Maintenance Plans That Make Sense",
      description:
        "Starting at just $15/month, our annual maintenance plans include two seasonal visits, reduced diagnostic rates, and everything your system needs to stay reliable year-round.",
    },
  ],

  serviceAreas: [
    {
      city: "Charlotte",
      slug: "charlotte",
      description:
        "Our home base — we provide HVAC diagnostics, tune-ups, maintenance, and repair service throughout Charlotte and all major neighborhoods.",
    },
    {
      city: "Matthews",
      slug: "matthews",
      description:
        "Local HVAC service for Matthews homeowners — from $99 diagnostics and seasonal tune-ups to annual maintenance plans.",
    },
    {
      city: "Concord",
      slug: "concord",
      description:
        "Serving Concord, NC with honest HVAC diagnostics, cooling and heating tune-ups, and affordable maintenance plans.",
    },
    {
      city: "Cornelius",
      slug: "cornelius",
      description:
        "HVAC service in Cornelius, NC — certified contractor, quick scheduling, and straightforward pricing for residential systems.",
    },
    {
      city: "Davidson",
      slug: "davidson",
      description:
        "Davidson homeowners trust Andrew Matthews HVAC for reliable seasonal tune-ups and no-pressure HVAC guidance.",
    },
    {
      city: "Huntersville",
      slug: "huntersville",
      description:
        "Huntersville HVAC service — diagnostics, summer and winter tune-ups, and annual maintenance plans for local homeowners.",
    },
    {
      city: "Gastonia",
      slug: "gastonia",
      description:
        "Serving Gastonia, NC with certified HVAC repair, maintenance, and tune-up services at straightforward prices.",
    },
    {
      city: "Harrisburg",
      slug: "harrisburg",
      description:
        "Harrisburg, NC HVAC service from a certified local contractor — honest recommendations and transparent pricing.",
    },
    {
      city: "Indian Trail",
      slug: "indian-trail",
      description:
        "Indian Trail homeowners can book HVAC diagnostics, tune-ups, and maintenance plans online with Andrew Matthews HVAC.",
    },
    {
      city: "Monroe",
      slug: "monroe",
      description:
        "Serving Monroe, NC with residential HVAC diagnostics, seasonal tune-ups, and affordable annual maintenance plans.",
    },
    {
      city: "Pineville",
      slug: "pineville",
      description:
        "Pineville HVAC service — certified contractor serving homeowners with honest heating and cooling help.",
    },
    {
      city: "Waxhaw",
      slug: "waxhaw",
      description:
        "Waxhaw, NC HVAC diagnostics, tune-ups, and maintenance plans from a trusted Charlotte-area contractor.",
    },
    {
      city: "Fort Mill",
      slug: "fort-mill",
      description:
        "Serving Fort Mill, SC homeowners with professional HVAC diagnostics, tune-ups, and seasonal maintenance.",
    },
  ],

  processSteps: [
    {
      number: "01",
      title: "Book Online or Call",
      description:
        "Schedule your diagnostic, tune-up, or maintenance visit online at your convenience — or call us directly. We keep it simple.",
    },
    {
      number: "02",
      title: "We Inspect Your System",
      description:
        "A certified HVAC technician arrives at your home, inspects your system thoroughly, and identifies any issues — no shortcuts.",
    },
    {
      number: "03",
      title: "Get Clear, Honest Answers",
      description:
        "We explain exactly what we found, what your options are, and what each path will cost — with no pressure to spend more than you need to.",
    },
    {
      number: "04",
      title: "Restore Your Comfort",
      description:
        "We complete the work efficiently, leave your home in order, and make sure your system is running the way it should before we go.",
    },
  ],

  testimonials: [
    {
      name: "Kristen H.",
      location: "Charlotte, NC",
      rating: 5,
      text: "Andrew came out for a cooling diagnostic and was completely upfront about what was wrong. He fixed the issue, explained everything clearly, and didn't try to sell me anything I didn't need. Pricing was exactly what was quoted. This is the kind of honest service that's hard to find.",
    },
    {
      name: "Marcus T.",
      location: "Matthews, NC",
      rating: 5,
      text: "Had another company tell me I needed a whole new system. Called Andrew Matthews HVAC for a second opinion — turned out it was a capacitor that cost me $150 to replace. These guys saved me thousands and were totally straight with me. They've earned a customer for life.",
    },
    {
      name: "Jennifer B.",
      location: "Huntersville, NC",
      rating: 5,
      text: "I signed up for the 2-system annual maintenance plan and it's been worth every penny. Spring and fall visits, everything gets checked out, and the booking process was easy online. No hassle, no upsell — just good service.",
    },
    {
      name: "David S.",
      location: "Concord, NC",
      rating: 5,
      text: "Booked a winter tune-up before the season hit and they were prompt, professional, and thorough. The technician walked me through everything he checked and flagged one thing to keep an eye on — without pressuring me to fix it immediately. Refreshing honesty.",
    },
    {
      name: "Angela R.",
      location: "Indian Trail, NC",
      rating: 5,
      text: "My AC stopped cooling in July. Andrew Matthews HVAC got out the next morning, diagnosed the problem quickly, and had it running again the same visit. Fair price for the repair and zero sales pressure. Highly recommend for anyone in the Charlotte area.",
    },
    {
      name: "Chris M.",
      location: "Fort Mill, SC",
      rating: 5,
      text: "Been using Andrew Matthews HVAC for a few years now. They're the only HVAC company I trust to give me a straight answer. The maintenance plan is a great deal and knowing I have a reliable contractor in my corner is worth it.",
    },
  ],

  faq: [
    {
      question: "How much does an HVAC diagnostic cost?",
      answer:
        "Our residential cooling and heating diagnostics are each $99. A certified technician will inspect your system on-site, identify the issue, and walk you through your repair options clearly. Annual maintenance plan members receive a reduced diagnostic rate of $45 per visit.",
    },
    {
      question: "Do you offer heating and cooling tune-ups?",
      answer:
        "Yes. We offer both summer tune-ups (cooling systems) and winter tune-ups (heating systems). Pricing is based on the number of systems: 1 system is $105, 2 systems are $210, and 3 systems are $315 — for either summer or winter tune-ups.",
    },
    {
      question: "What is included in your annual maintenance plans?",
      answer:
        "Our annual maintenance plans include two visits per year — one in spring and one in fall. Each visit covers outdoor coil cleaning, replacement of customer-provided filters, drain line cleaning, refrigerant level check, fall furnace tune-up, safety device cleaning and testing, carbon monoxide inspection, ductwork air leak check, and a smoke and CO detector inspection. Plan members also receive a reduced diagnostic rate of $45 per visit.",
    },
    {
      question: "Which plan do I need for multiple systems?",
      answer:
        "Our maintenance plans are priced by the number of HVAC systems in your home: 1 system is $15/month, 2 systems are $30/month, and 3 systems are $45/month. All plans include the same comprehensive seasonal visits and member benefits.",
    },
    {
      question: "Do you serve areas outside Charlotte?",
      answer:
        "Yes. We serve Charlotte and many surrounding communities including Matthews, Concord, Cornelius, Davidson, Huntersville, Gastonia, Harrisburg, Indian Trail, Monroe, Pineville, Waxhaw, and Fort Mill. If you're not sure whether we cover your area, give us a call and we'll confirm right away.",
    },
    {
      question: "Can I book service online?",
      answer:
        "Yes — you can book a diagnostic, tune-up, or maintenance plan visit online at your convenience without needing to call. We've made it easy to schedule on your schedule. You can also call us directly if you prefer.",
    },
    {
      question: "Do you work on both heating and cooling systems?",
      answer:
        "Yes. We service both heating and air conditioning systems, including central AC units, heat pumps, and furnaces. Our diagnostics, tune-ups, and maintenance plans apply to both heating and cooling equipment.",
    },
    {
      question: "How long has Andrew Matthews HVAC been in business?",
      answer:
        "Andrew Matthews HVAC has been serving the Charlotte area since 2009 — over 15 years of local HVAC experience. We're a certified contractor with a reputation for honest service and practical recommendations.",
    },
  ],

  finalCtaHeadline: "Need HVAC Service in Charlotte?",
  finalCtaSubheadline:
    "Book diagnostics, tune-ups, or annual maintenance with a local contractor focused on honest service. Serving the Charlotte area since 2009.",

  footerDescription:
    "Certified HVAC service for Charlotte, NC homeowners. Diagnostics, summer and winter tune-ups, annual maintenance plans, and honest repair guidance.",
  footerSeoBlurb:
    "Andrew Matthews HVAC serves Charlotte, Matthews, Concord, Cornelius, Davidson, Huntersville, Gastonia, Harrisburg, Indian Trail, Monroe, Pineville, Waxhaw, and Fort Mill with professional heating and cooling diagnostics, tune-ups, and maintenance plans.",

  schema: {
    type: "HVACBusiness",
    name: "Andrew Matthews HVAC",
    telephone: "+17042776711",
    email: "andrewmatthewshvac@gmail.com",
    streetAddress: "8616 Peyton Randolph Dr",
    city: "Charlotte",
    state: "NC",
    postalCode: "28277",
    country: "US",
    serviceArea: "Charlotte, NC and surrounding areas",
    serviceType:
      "HVAC Diagnostics, Tune-Ups, Maintenance Plans, and Repair Service",
    priceRange: "$$",
  },
};

export default andrewMatthewsHvac;
