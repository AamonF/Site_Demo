import type { Metadata } from "next";
import ACServicePage from "@/components/aircentral/shared/ACServicePage";
import { Snowflake } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair in Charlotte, NC | Air Central of the Carolinas",
  description:
    "Fast, professional AC repair services in Charlotte, NC. Same-day service available. Air Central of the Carolinas gets your cool air back — call today!",
  keywords: ["AC repair Charlotte NC", "air conditioner repair North Carolina", "HVAC repair NC", "broken AC fix NC"],
  alternates: { canonical: "/air-central-carolinas/ac-repair" },
};

const data = {
  badge: "AC Repair · Charlotte, NC",
  headline: "AC Repair You Can Count On — Fast",
  subheadline:
    "When your air conditioner breaks down in the North Carolina heat, you need a team that shows up quickly and fixes it right. Air Central of the Carolinas provides same-day AC repair services for homeowners across the Charlotte area.",
  heroIcon: Snowflake,
  heroColor: "text-sky-600",
  problem:
    "A broken air conditioner in a North Carolina summer isn't just uncomfortable — it can be dangerous. Most homeowners don't know what's wrong with their AC, and some contractors use that uncertainty to recommend expensive repairs that aren't needed. The heat keeps climbing while you wait for answers and wonder if you're being taken advantage of.",
  solution:
    "Our licensed HVAC technicians diagnose the real problem quickly and explain it to you in plain language — no jargon, no pressure. We show up on time, give you an honest quote before any work begins, and fix your AC right the first time. For most common AC repairs in North Carolina, we can have your home cool again the same day.",
  benefits: [
    {
      title: "Same-Day Service Available",
      desc: "We offer same-day AC repair appointments for most calls in the Charlotte area. Call early and we'll do our best to get out the same day.",
    },
    {
      title: "Upfront, Honest Pricing",
      desc: "You'll always know what you're paying before we start. No surprise charges, no bait-and-switch — just clear, fair pricing.",
    },
    {
      title: "Licensed & Insured Technicians",
      desc: "Every technician we send to your home is fully licensed, insured, and trained on all major AC brands and models.",
    },
    {
      title: "All Brands Serviced",
      desc: "Carrier, Trane, Lennox, Goodman, Rheem, Bryant — we service them all. Whatever's in your home, we can fix it.",
    },
    {
      title: "Repair or Replace Guidance",
      desc: "We'll give you an honest recommendation on whether repair or replacement makes more sense for your situation and budget.",
    },
    {
      title: "Clean, Respectful Service",
      desc: "We treat your home with care. Our team leaves work areas clean and respects your property throughout every visit.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Call or Schedule Online",
      desc: "Reach out by phone or use our contact form. We'll ask a few quick questions and get you on the schedule — often for the same day.",
    },
    {
      step: "2",
      title: "We Diagnose Your System",
      desc: "Our technician arrives on time, performs a thorough diagnostic, and identifies exactly what's causing your AC problem.",
    },
    {
      step: "3",
      title: "You Get a Clear Quote",
      desc: "Before any repair work begins, we explain what needs to be done and give you a clear, honest price — no pressure.",
    },
    {
      step: "4",
      title: "We Fix It Right",
      desc: "With your approval, we complete the repair using quality parts. Most AC repairs are done in a single visit.",
    },
    {
      step: "5",
      title: "Follow-Up & Peace of Mind",
      desc: "We'll make sure everything is running properly before we leave, and we stand behind our work.",
    },
  ],
  faqs: [
    {
      q: "How quickly can you come out for an AC repair?",
      a: "We offer same-day service for most AC repair calls in the Charlotte area. If you call in the morning, we can typically have someone out that afternoon. For emergency situations, we do our best to respond as quickly as possible.",
    },
    {
      q: "How much does AC repair cost in North Carolina?",
      a: "AC repair costs vary depending on the issue. Common repairs range from $150–$600, but larger issues like compressor replacement can cost more. We always provide a clear quote before starting any work so you know exactly what to expect.",
    },
    {
      q: "My AC is blowing warm air — what's wrong?",
      a: "Warm air from your AC could indicate a refrigerant leak, a dirty air filter, a failing compressor, or a thermostat issue. A proper diagnosis is needed to identify the root cause. Our technicians can pinpoint the issue quickly.",
    },
    {
      q: "Should I repair or replace my air conditioner?",
      a: "If your unit is under 10 years old and the repair cost is less than half the cost of a new system, repair usually makes sense. Older units or those needing costly repairs are often better candidates for replacement. We'll give you an honest recommendation.",
    },
    {
      q: "Do you service all AC brands?",
      a: "Yes. We service all major brands including Carrier, Trane, Lennox, Bryant, Goodman, Rheem, American Standard, and more.",
    },
  ],
  relatedLinks: [
    { label: "AC Installation", href: "/air-central-carolinas/ac-installation" },
    { label: "HVAC Maintenance", href: "/air-central-carolinas/hvac-maintenance" },
    { label: "Heating Repair", href: "/air-central-carolinas/heating-repair" },
    { label: "Indoor Air Quality", href: "/air-central-carolinas/indoor-air-quality" },
    { label: "All Services", href: "/air-central-carolinas/services" },
  ],
};

export default function ACRepairPage() {
  return <ACServicePage data={data} />;
}
