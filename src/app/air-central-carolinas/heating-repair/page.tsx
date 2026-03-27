import type { Metadata } from "next";
import ACServicePage from "@/components/aircentral/shared/ACServicePage";
import { Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Heating Repair in Charlotte, NC | Air Central of the Carolinas",
  description:
    "Expert heating repair services for NC homeowners. Furnace, heat pump & more. Air Central of the Carolinas responds fast — call today for same-day service!",
  keywords: ["heating repair Charlotte NC", "furnace repair North Carolina", "heat pump repair NC", "heater not working Charlotte"],
  alternates: { canonical: "/air-central-carolinas/heating-repair" },
};

const data = {
  badge: "Heating Repair · Charlotte, NC",
  headline: "Fast Heating Repair for North Carolina Homes",
  subheadline:
    "A heater that stops working in winter is more than an inconvenience — it's a real problem. Air Central of the Carolinas provides prompt, professional heating repair for NC homeowners. We fix furnaces, heat pumps, and all types of heating systems.",
  heroIcon: Flame,
  heroColor: "text-orange-500",
  problem:
    "When your heating system fails, every hour counts. Cold temperatures can make your home uncomfortable quickly, especially for children, elderly family members, or pets. Too many homeowners waste precious time trying to troubleshoot the problem themselves or waiting days for an overbooked contractor who then gives them a vague diagnosis and an inflated bill.",
  solution:
    "Air Central of the Carolinas responds quickly, diagnoses your heating system accurately, and gives you a clear, honest price before we start any work. Our licensed technicians are experienced with all major heating systems — furnaces, heat pumps, electric air handlers, and more. We repair what needs to be repaired and recommend replacement only when it truly makes financial sense.",
  benefits: [
    {
      title: "Fast Response Time",
      desc: "We prioritize heating calls in cold weather. Same-day service is available for most heating repair requests in the Charlotte area.",
    },
    {
      title: "All Heating Systems",
      desc: "We repair gas furnaces, electric furnaces, heat pumps, dual-fuel systems, and air handlers — whatever heats your home.",
    },
    {
      title: "Honest Diagnosis",
      desc: "We tell you exactly what's wrong and why, in plain language. No upselling, no unnecessary repairs.",
    },
    {
      title: "Upfront Pricing",
      desc: "You'll receive a clear quote before any repair begins. No hidden fees or surprise charges after the fact.",
    },
    {
      title: "Licensed & Insured",
      desc: "Every technician who enters your home is fully licensed, insured, and background-checked for your peace of mind.",
    },
    {
      title: "Repair vs. Replace Advice",
      desc: "We help you make a smart financial decision — repair if it makes sense, replace if it's the smarter long-term investment.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Call or Schedule Online",
      desc: "Contact us by phone or form. We'll ask about your heating system and get you on the schedule quickly.",
    },
    {
      step: "2",
      title: "Technician Arrives On Time",
      desc: "We give you a clear arrival window and honor it. Our technician comes prepared with common parts and tools.",
    },
    {
      step: "3",
      title: "Thorough Diagnostic",
      desc: "We inspect your heating system from top to bottom to find the real cause of the problem — not just the symptoms.",
    },
    {
      step: "4",
      title: "Clear Quote Before Work Begins",
      desc: "You'll know exactly what the repair involves and what it costs before we do anything. No surprises.",
    },
    {
      step: "5",
      title: "Repair Completed & Tested",
      desc: "We complete the repair, run the system through a full cycle, and confirm your home is heating properly before we leave.",
    },
  ],
  faqs: [
    {
      q: "My heat pump is blowing cold air — what could be wrong?",
      a: "A heat pump blowing cold air could indicate a refrigerant issue, a reversing valve problem, a defrost cycle malfunction, or other issues. It's important to have a licensed technician diagnose it rather than guessing — some of these issues can cause further damage if ignored.",
    },
    {
      q: "My furnace turns on but the house isn't warming up — why?",
      a: "This could be caused by a dirty air filter restricting airflow, a clogged heat exchanger, duct leaks, or a failing blower motor. A proper diagnostic will identify the issue quickly.",
    },
    {
      q: "Is it safe to run my furnace if it's making a strange noise?",
      a: "Not always. Banging or screeching sounds can indicate serious mechanical issues. A burning smell could signal an overheating component. If in doubt, shut the system off and call us — it's better to be safe.",
    },
    {
      q: "How long do heating systems last in North Carolina?",
      a: "Gas furnaces typically last 15–20 years, heat pumps last 12–15 years with proper maintenance. Regular tune-ups can significantly extend your system's lifespan.",
    },
    {
      q: "Do you offer emergency heating repair?",
      a: "Yes. We understand heating emergencies can't wait. Call us and we'll do our best to get a technician to you as quickly as possible.",
    },
  ],
  relatedLinks: [
    { label: "Heating Installation", href: "/air-central-carolinas/heating-installation" },
    { label: "AC Repair", href: "/air-central-carolinas/ac-repair" },
    { label: "HVAC Maintenance", href: "/air-central-carolinas/hvac-maintenance" },
    { label: "Indoor Air Quality", href: "/air-central-carolinas/indoor-air-quality" },
    { label: "All Services", href: "/air-central-carolinas/services" },
  ],
};

export default function HeatingRepairPage() {
  return <ACServicePage data={data} />;
}
