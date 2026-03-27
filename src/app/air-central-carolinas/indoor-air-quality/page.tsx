import type { Metadata } from "next";
import ACServicePage from "@/components/aircentral/shared/ACServicePage";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Indoor Air Quality in Charlotte, NC | Air Central of the Carolinas",
  description:
    "Improve the air quality in your NC home. Air purifiers, humidity control, UV lights & more. Call Air Central of the Carolinas for healthier indoor air today!",
  keywords: ["indoor air quality Charlotte NC", "air purifier NC", "whole home humidifier North Carolina", "IAQ services Charlotte"],
  alternates: { canonical: "/air-central-carolinas/indoor-air-quality" },
};

const data = {
  badge: "Indoor Air Quality · Charlotte, NC",
  headline: "Breathe Easier in Your North Carolina Home",
  subheadline:
    "The air inside your home can be 2–5 times more polluted than outdoor air. Air Central of the Carolinas helps NC homeowners improve their indoor air quality with proven solutions that reduce allergens, control humidity, and create a healthier living environment.",
  heroIcon: Leaf,
  heroColor: "text-teal-600",
  problem:
    "Most homeowners don't think about what's in the air they breathe indoors — but the EPA estimates that indoor air quality is a significant health concern for millions of Americans. Dust, pollen, pet dander, mold spores, VOCs, and excess humidity can all accumulate inside your home, triggering allergies, worsening asthma, and creating conditions for mold growth. Your standard HVAC filter isn't enough to address all of these issues.",
  solution:
    "We assess the specific air quality challenges in your home and recommend targeted solutions. From whole-home air purifiers and UV germicidal lights that eliminate bacteria and viruses, to humidifiers and dehumidifiers that bring humidity to the ideal range, to high-efficiency filtration — we have the tools to make a real difference in the air your family breathes every day.",
  benefits: [
    {
      title: "Reduce Allergens & Irritants",
      desc: "High-efficiency filtration captures dust, pollen, pet dander, and other particles that standard filters miss.",
    },
    {
      title: "Eliminate Bacteria & Viruses",
      desc: "UV germicidal systems neutralize harmful microorganisms as air passes through your HVAC system — protecting your whole family.",
    },
    {
      title: "Control Humidity Levels",
      desc: "Ideal humidity (40–60%) makes your home more comfortable and prevents mold growth, wood damage, and static electricity.",
    },
    {
      title: "Reduce Odors & VOCs",
      desc: "Whole-home air purifiers with activated carbon filtration capture odors, chemical vapors, and volatile organic compounds.",
    },
    {
      title: "Better Sleep & Health",
      desc: "Cleaner air means fewer nighttime allergy symptoms, better sleep quality, and improved overall health for your family.",
    },
    {
      title: "Whole-Home Solutions",
      desc: "Our IAQ systems work with your existing HVAC equipment — no standalone units cluttering every room.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Home Air Quality Assessment",
      desc: "We discuss your specific concerns — allergies, musty smells, dry air, humidity issues — and inspect your current setup.",
    },
    {
      step: "2",
      title: "Personalized Recommendations",
      desc: "We recommend the solutions that address your specific needs and fit within your budget. No one-size-fits-all approach.",
    },
    {
      step: "3",
      title: "Professional Installation",
      desc: "We install your chosen air quality solutions in a way that integrates seamlessly with your existing HVAC system.",
    },
    {
      step: "4",
      title: "System Testing",
      desc: "We verify the system is working correctly and performing as expected before we wrap up.",
    },
    {
      step: "5",
      title: "Ongoing Support",
      desc: "We're here for any questions and provide maintenance guidance to keep your IAQ system performing at its best.",
    },
  ],
  faqs: [
    {
      q: "What indoor air quality products do you offer?",
      a: "We offer whole-home air purifiers, UV germicidal lights, whole-home humidifiers and dehumidifiers, high-MERV filtration systems, and ventilation solutions. We'll help you identify which solution (or combination) is right for your home.",
    },
    {
      q: "How do I know if I have an indoor air quality problem?",
      a: "Common signs include frequent allergy symptoms indoors, musty or stale odors, visible dust buildup, dry skin or static in winter, or condensation on windows. If you or family members have asthma or allergies, IAQ improvements often make a noticeable difference.",
    },
    {
      q: "Are whole-home IAQ systems better than portable air purifiers?",
      a: "Generally, yes. Whole-home systems treat all the air in your house through your HVAC system, rather than just one room at a time. They're also more convenient and typically more cost-effective over time.",
    },
    {
      q: "What's the right humidity level for a home?",
      a: "The EPA recommends keeping indoor humidity between 30–50%. In North Carolina summers, dehumidification is often needed; in winter, humidification can help with dry air discomfort.",
    },
    {
      q: "Do UV lights really work against germs and viruses?",
      a: "UV-C germicidal lights have been proven effective against many bacteria, mold spores, and viruses when air passes through the UV zone in your air handler. They're a useful layer of protection, especially for households with immune-compromised members.",
    },
  ],
  relatedLinks: [
    { label: "HVAC Maintenance", href: "/air-central-carolinas/hvac-maintenance" },
    { label: "AC Repair", href: "/air-central-carolinas/ac-repair" },
    { label: "Heating Repair", href: "/air-central-carolinas/heating-repair" },
    { label: "AC Installation", href: "/air-central-carolinas/ac-installation" },
    { label: "All Services", href: "/air-central-carolinas/services" },
  ],
};

export default function IndoorAirQualityPage() {
  return <ACServicePage data={data} />;
}
