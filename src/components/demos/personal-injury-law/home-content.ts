import { PI_BRAND } from "./site-config";

export const trustStats = [
  { label: "Years fighting for injury victims", value: `${new Date().getFullYear() - PI_BRAND.foundingYear}+` },
  { label: "Cases won & favorably resolved", value: "2,400+" },
  { label: "Recovered for clients (demo)", value: "$250M+" },
  { label: "Client satisfaction", value: "5.0" },
] as const;

export const whyChoose = [
  {
    title: "Aggressive representation",
    body: "We prepare for trial from day one—because readiness changes outcomes.",
  },
  {
    title: "No upfront fees",
    body: "Contingency representation: we don’t get paid unless we recover for you (costs may still apply).",
  },
  {
    title: "Direct attorney access",
    body: "You’re not passed through endless call centers. Strategy comes from experienced counsel.",
  },
  {
    title: "Fast response",
    body: "Evidence disappears. We move quickly to preserve what matters for your claim.",
  },
  {
    title: "Proven results",
    body: "Seven-figure outcomes across vehicle, premises, and catastrophic injury matters (past results do not guarantee future results).",
  },
] as const;

export const caseResults = [
  { amount: "$850,000", type: "Car Accident", detail: "Policy limits + underinsured recovery" },
  { amount: "$1.2M", type: "Truck Accident", detail: "FMCSA violations + carrier liability" },
  { amount: "$425,000", type: "Motorcycle Accident", detail: "Severe orthopedic injuries" },
  { amount: "$2.1M", type: "Wrongful Death", detail: "Fatal collision — surviving spouse & children" },
  { amount: "$310,000", type: "Slip & Fall", detail: "Hip fracture — premises notice proven" },
  { amount: "$675,000", type: "Pedestrian Accident", detail: "Crosswalk impact — TBI" },
] as const;

export const testimonials = [
  {
    quote:
      "The insurance company treated me like a file. This team treated me like a person. They didn’t flinch when litigation was necessary—and they earned every dollar.",
    name: "Danielle R.",
    meta: "T-bone collision — cervical injury",
  },
  {
    quote:
      "I was overwhelmed with bills and fear. The firm handled the noise, explained every step, and pushed until the offer matched reality.",
    name: "James T.",
    meta: "Truck crash — missed work & surgery",
  },
  {
    quote:
      "They answered late-night questions, coordinated with my doctors, and made sure nothing slipped through the cracks. I’d recommend them in a heartbeat.",
    name: "Monica L.",
    meta: "Pedestrian injury — fractured leg",
  },
  {
    quote:
      "I didn’t want drama—I wanted results. They delivered clarity, pressure, and a settlement I could actually rebuild my life with.",
    name: "Evan K.",
    meta: "Slip & fall — shoulder surgery",
  },
] as const;

export const homeFaqs = [
  {
    q: "How much does it cost to hire your firm?",
    a: "We handle most injury cases on a contingency fee basis—you pay no attorney fee unless we recover compensation for you. Costs and filing fees may still apply and are explained in writing.",
  },
  {
    q: "What should I do after an accident?",
    a: "Seek medical care, report the incident, document what you can safely, avoid recorded statements with insurers, and contact us quickly so evidence can be preserved.",
  },
  {
    q: "How long will my case take?",
    a: "It depends on injury severity, liability disputes, and court schedules. We balance speed with maximizing value—rushing often costs clients money.",
  },
  {
    q: "Will my case go to trial?",
    a: "Many cases settle—but we prepare every file for trial because readiness drives better outcomes.",
  },
  {
    q: "What areas do you serve?",
    a: "We represent injury victims throughout [City] and surrounding counties. Call to confirm jurisdiction and strategy for your specific situation.",
  },
  {
    q: "What is my case worth?",
    a: "Value depends on liability, insurance coverage, medical proof, and how your injuries affect work and life. We don’t promise numbers at intake—we build proof first.",
  },
] as const;

export const processSteps = [
  { title: "Free Consultation", body: "Tell us what happened. We identify risks, evidence, and next steps—fast." },
  { title: "Case Evaluation", body: "We investigate liability, coverage, and medical documentation with precision." },
  { title: "We Handle Everything", body: "Negotiation, filings, experts, and insurer pressure—so you can heal." },
  { title: "You Get Paid", body: "We pursue maximum recovery and walk you through settlement mechanics clearly." },
] as const;
