export type NavItem = { label: string; href: string };

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bar: string;
  education: string;
  bio: string;
  approach: string;
  image: string;
  imageAlt: string;
  /** Honors & credentials — editorial display */
  credentials?: string[];
};

export type CaseResult = {
  id: string;
  headline: string;
  type: string;
  summary: string;
  outcome: string;
  /** Forum / region — local credibility without promising outcomes */
  venue?: string;
  /** Match practice pages via practice-registry tags */
  tags?: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  caseType: string;
  rating: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  /** Long-form body for article pages */
  body: string[];
};

/** `personal-injury` or `personal-injury/car-accidents` — unique route under /practice-areas */
export type PracticePath = string;

export type PracticeAreaKind = "parent" | "child";

export type PracticeAreaSummary = {
  kind: PracticeAreaKind;
  /** Last URL segment (e.g. car-accidents); for parents equals first segment */
  segment: string;
  /** Parent segment when kind === "child"; null for parent hubs */
  parentSegment: string | null;
  /** Full path under /practice-areas (e.g. criminal-defense/dui-dwi) */
  path: PracticePath;
  name: string;
  shortDescription: string;
  cardCta: string;
  image: string;
  imageAlt: string;
};

export type PracticeMidCta = {
  title: string;
  subtitle: string;
};

/** Per-page H2 overrides — avoids identical heading patterns across practice templates */
export type PracticeSectionHeadings = {
  overview?: string;
  /** Parent hub: heading above child practice cards */
  childHub?: string;
  painPoints?: string;
  situations?: string;
  whyMatters?: string;
  whyFirm?: string;
  attorney?: string;
  results?: string;
  /** Short paragraph under the results H2 (disclaimer tone can vary by practice) */
  resultsIntro?: string;
  faq?: string;
  local?: string;
  resources?: string;
  related?: string;
};

export type PracticeHeroCtas = {
  primary: string;
  secondary: string;
};

export type PracticeAreaPage = PracticeAreaSummary & {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Client-specific worries — distinct voice per practice */
  painPoints: string[];
  overview: string;
  examples: string[];
  whyMatters: string;
  whyFirm: string[];
  attorneyNote: string;
  faqs: { question: string; answer: string }[];
  localSeoHtml: string;
  /** Other practice paths for cross-linking */
  relatedPaths: PracticePath[];
  /** Filter CASE_RESULTS by these tags */
  caseResultTags: string[];
  /** Optional blog slugs prioritized for “Related resources” */
  relatedBlogSlugs?: string[];
  sectionHeadings?: PracticeSectionHeadings;
  heroCtas?: PracticeHeroCtas;
  midCta?: PracticeMidCta;
  /** Second conversion beat after results — urgency/voice matched to matter */
  closingCta?: PracticeMidCta;
  formHeadline?: string;
  formIntro?: string;
  /** Chat assistant: short intro line + follow-up prompts for this matter */
  chatContext: {
    focusLine: string;
    prompts: string[];
  };
};
