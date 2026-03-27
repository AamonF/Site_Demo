import type { Metadata } from "next";
import ACServicePage from "@/components/aircentral/shared/ACServicePage";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Maintenance in Charlotte, NC | Air Central of the Carolinas",
  description:
    "Preventive HVAC maintenance plans for NC homeowners. Keep your system running efficiently, prevent breakdowns, and save money. Call Air Central today!",
  keywords: ["HVAC maintenance Charlotte NC", "AC tune-up North Carolina", "furnace maintenance NC", "HVAC service plan Charlotte"],
  alternates: { canonical: "/air-central-carolinas/hvac-maintenance" },
};

const data = {
  badge: "HVAC Maintenance · Charlotte, NC",
  headline: "HVAC Maintenance That Keeps You Comfortable All Year",
  subheadline:
    "Prevent breakdowns, lower your energy bills, and extend the life of your system. Air Central of the Carolinas offers comprehensive HVAC maintenance plans designed to keep North Carolina homeowners comfortable through every season.",
  heroIcon: Shield,
  heroColor: "text-emerald-600",
  problem:
    "Most homeowners don't think about their HVAC system until something goes wrong — and by then, it's often an expensive emergency. Skipping annual maintenance means your system is working harder than it needs to, your energy bills are higher than they should be, and small issues are quietly becoming big problems. An HVAC breakdown in summer or winter always seems to happen at the worst possible time.",
  solution:
    "Our preventive maintenance program catches problems before they become breakdowns. We service your system twice a year — once in spring before cooling season and once in fall before heating season. Each visit includes a thorough inspection, cleaning, and tune-up that keeps your equipment running at peak efficiency and gives you peace of mind year-round.",
  benefits: [
    {
      title: "Prevent Costly Breakdowns",
      desc: "Regular maintenance catches minor issues before they become major repairs — saving you from emergency service calls and costly surprises.",
    },
    {
      title: "Lower Energy Bills",
      desc: "A clean, well-tuned system runs more efficiently. Most homeowners see measurable savings on their energy costs after regular maintenance.",
    },
    {
      title: "Extend System Life",
      desc: "Proper maintenance can add years to your HVAC system's lifespan — protecting your investment and delaying costly replacements.",
    },
    {
      title: "Priority Scheduling",
      desc: "Maintenance plan members go to the front of the line. When you need service, you don't wait behind non-members.",
    },
    {
      title: "Discounts on Repairs",
      desc: "Plan members receive exclusive discounts on any repairs or parts needed — saving money every time you need us.",
    },
    {
      title: "Two Tune-Ups Per Year",
      desc: "We service your system in spring (before cooling season) and fall (before heating season) to keep it ready for whatever's coming.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Sign Up for a Plan",
      desc: "Call us or use our contact form to enroll in the Comfort Plan. We'll schedule your first tune-up right away.",
    },
    {
      step: "2",
      title: "Spring Cooling Tune-Up",
      desc: "Before the heat hits, we inspect and service your AC system — checking refrigerant, cleaning coils, and testing all components.",
    },
    {
      step: "3",
      title: "Fall Heating Tune-Up",
      desc: "Before temperatures drop, we service your heating system — checking combustion, heat exchanger, thermostat, and more.",
    },
    {
      step: "4",
      title: "Full System Report",
      desc: "After each visit, we share a clear summary of what we checked, what we found, and any recommendations going forward.",
    },
    {
      step: "5",
      title: "Priority Service All Year",
      desc: "As a plan member, you get priority access to our schedule and exclusive discounts whenever you need additional service.",
    },
  ],
  faqs: [
    {
      q: "How often should I have my HVAC system serviced?",
      a: "Most HVAC manufacturers recommend service twice per year — once in spring for your cooling system and once in fall for your heating system. This keeps both systems running efficiently and helps identify issues before they become emergencies.",
    },
    {
      q: "What does a maintenance tune-up include?",
      a: "Our tune-up includes cleaning coils, checking refrigerant levels, testing electrical components, inspecting the heat exchanger, lubricating moving parts, checking thermostat calibration, inspecting filters, and a full system performance test.",
    },
    {
      q: "How much does a maintenance plan cost?",
      a: "Our Comfort Plan pricing is competitive and includes two tune-ups plus member benefits. Contact us for current plan pricing — we believe it's one of the best values we offer.",
    },
    {
      q: "What if I don't have a plan — can I still get a one-time tune-up?",
      a: "Absolutely. We offer one-time tune-ups as well. Many customers start with a single tune-up and then join a plan after seeing the value.",
    },
    {
      q: "Will maintenance really make a difference in my energy bills?",
      a: "Yes. Studies show that properly maintained HVAC systems use 15–25% less energy than neglected systems. The savings on your monthly energy bills often pay for the maintenance cost many times over.",
    },
  ],
  relatedLinks: [
    { label: "AC Repair", href: "/air-central-carolinas/ac-repair" },
    { label: "Heating Repair", href: "/air-central-carolinas/heating-repair" },
    { label: "Indoor Air Quality", href: "/air-central-carolinas/indoor-air-quality" },
    { label: "AC Installation", href: "/air-central-carolinas/ac-installation" },
    { label: "All Services", href: "/air-central-carolinas/services" },
  ],
};

export default function HVACMaintenancePage() {
  return <ACServicePage data={data} />;
}
