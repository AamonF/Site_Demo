export const PI_DEMO_BASE = "/demos/personal-injury-law";

export const PI_BRAND = {
  name: "Your Injury Law Firm",
  shortName: "Home",
  phone: "(555) 273-9529",
  phoneTel: "+15552739529",
  email: "contact@example.com",
  addressLine1: "100 Liberty Plaza, Suite 900",
  cityStateZip: "[City], ST 12345",
  foundingYear: 2009,
  attorneyName: "Your Name",
  attorneyTitle: "Founding Partner",
  barAdmissions: "State Bar; U.S. District Court",
} as const;

export const PI_PRACTICE_SLUGS = [
  "car-accidents",
  "truck-accidents",
  "motorcycle-accidents",
  "slip-and-fall",
  "wrongful-death",
  "pedestrian-accidents",
] as const;

export type PiPracticeSlug = (typeof PI_PRACTICE_SLUGS)[number];

export function isPiPracticeSlug(s: string): s is PiPracticeSlug {
  return (PI_PRACTICE_SLUGS as readonly string[]).includes(s);
}
