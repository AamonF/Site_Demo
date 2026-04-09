export const CD_DEMO_BASE = "/demos/criminal-defense-law";

export const CD_BRAND = {
  /** Universal placeholder — swap for the client’s firm name in a fork or CMS. */
  name: "Your Criminal Defense Firm",
  shortName: "Home",
  tagline: "Serious charges. Strategic defense.",
  /** Short line for header / hero when you want no branded firm name. */
  publicLabel: "Criminal Defense Attorneys",
  phone: "(555) 418-7743",
  phoneTel: "+15554187743",
  email: "contact@example.com",
  addressLine1: "400 Justice Tower, Suite 1200",
  cityStateZip: "[City], ST 12345",
  stateLicense: "Licensed in [State]",
  foundingYear: 2007,
  attorneySectionHeading: "Lead defense counsel",
  attorneyTitle: "Trial attorney • Former prosecutor (optional)",
  barAdmissions: "[State] Bar; Federal District Court",
} as const;

export const CD_PRACTICE_SLUGS = [
  "dui-dwi",
  "drug-charges",
  "assault-violent-crimes",
  "theft-property-crimes",
  "domestic-violence",
] as const;

export type CdPracticeSlug = (typeof CD_PRACTICE_SLUGS)[number];

export function isCdPracticeSlug(s: string): s is CdPracticeSlug {
  return (CD_PRACTICE_SLUGS as readonly string[]).includes(s);
}
