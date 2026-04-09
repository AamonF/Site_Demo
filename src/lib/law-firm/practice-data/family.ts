import type { PracticeAreaPage } from "../types";
import { FIRM } from "../firm";

const c = FIRM.city;
const cy = FIRM.county;

const D =
  "This assistant does not provide legal advice and does not create an attorney-client relationship.";

export const FAMILY_PRACTICE_PAGES: PracticeAreaPage[] = [
  {
    kind: "parent",
    segment: "family-law",
    parentSegment: null,
    path: "family-law",
    name: "Family Law",
    shortDescription:
      "Divorce, custody, support, and high-conflict parenting—strategy for outcomes you can live with after the cameras leave.",
    cardCta: "Explore family representation",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc6659783b58?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Family at home",
    metaTitle: `${c} Family Law Attorney | Divorce, Custody & Support | ${FIRM.name}`,
    metaDescription: `Family law counsel in ${cy}: divorce, custody, support, modifications—documentation-first advocacy. ${FIRM.phoneDisplay}.`,
    heroTitle: "Family law is not ‘winning’—it is building a life you can sustain on the other side",
    heroSubtitle:
      "We help you choose battles, document reality, and avoid the self-inflicted exhibits that turn temporary conflict into permanent damage.",
    painPoints: [
      "You are drafting angry texts at 1 a.m. knowing you should not send them—and sending them anyway.",
      "You are afraid your kids are becoming messengers—or trophies—in someone else’s fight.",
      "You are watching money leak to conflict that does not improve outcomes for anyone but attorneys—except you cannot stop.",
      "You are googling ‘full custody’ like it is a product you can order—and terrified of what that even means for your child.",
    ],
    overview: `Family disputes are financial, emotional, and logistical at the same time. Our ${c} attorneys represent parents and spouses in divorce, custody, support, modifications, and enforcement—with an emphasis on credible documentation and child-centered framing when courts apply best-interest standards. We do not promise painless outcomes; we promise strategy that reduces regret: clear disclosures, realistic timelines, and courtroom preparation when the other side will not negotiate in good faith.`,
    examples: [
      "Contested custody with school districts, activities, and travel logistics as battlegrounds",
      "Support cases with self-employment, equity comp, or concealed cash flow",
      "Relocation requests where stability arguments cut both ways",
      "High-conflict communication patterns that need structure—not more accusations",
    ],
    whyMatters: `${cy} family courts have seen every performance. Judges reward credibility and punish theatrics—especially when children are watching the file later.`,
    whyFirm: [
      "We separate venting from strategy—you can be heard without becoming your own worst witness",
      "We use mediation when it protects leverage—not when it hides information",
      "We coordinate immigration counsel when status intersects parenting and support",
    ],
    attorneyNote:
      "James Carter’s family practice is built on durable plans: parenting schedules that survive school years, not Instagram moments.",
    faqs: [
      {
        question: "Can I get ‘full custody’?",
        answer:
          "Courts focus on parenting time and decision-making within best-interest standards—not labels you see online. We translate goals into workable orders.",
      },
      {
        question: "How much will this cost?",
        answer:
          "Cost tracks conflict and complexity. We discuss fee expectations and ways to control spend—without pretending family law is cheap when people refuse to cooperate.",
      },
      {
        question: "Should I move out?",
        answer:
          "Move-out decisions can affect possession, bills, and safety. Do not improvise without counsel—especially with children involved.",
      },
      {
        question: "Can we keep this off social media?",
        answer:
          "We strongly discourage public case narratives. Screenshots become exhibits. Silence is often a strategy—not weakness.",
      },
    ],
    localSeoHtml: `<p>Clients searching for a <strong>${c} family law attorney</strong> need local procedure fluency and emotional discipline—not slogans. ${FIRM.name} represents parents and spouses across ${cy} with structured advocacy.</p>`,
    relatedPaths: ["family-law/divorce", "criminal-defense", "immigration-law"],
    caseResultTags: ["fam", "custody"],
    relatedBlogSlugs: ["custody-apps-text-threads-best-interest", "custody-best-interest-factors-nc"],
    sectionHeadings: {
      overview: "Family law: what courts actually optimize for",
      painPoints: "What parents feel before the first hearing",
      situations: `Family disputes we help clients structure in ${cy}`,
      childHub: "Choose the family law problem that matches your life",
      whyMatters: "Why ‘winning’ the argument can lose the outcome",
      whyFirm: "Our family practice philosophy",
      attorney: "How we lead family files",
      results: "Family law illustrations (demo)",
      resultsIntro:
        "Demo composites only. Custody and support outcomes depend on facts, judges, and child needs—not marketing.",
      faq: "Family law FAQs—beyond the Reddit version",
      local: `${c} family courts and mediation culture`,
      resources: "Parenting and custody reading",
      related: "When family issues touch criminal or immigration systems",
    },
    heroCtas: {
      primary: "Plan a family law consult",
      secondary: `Discreet intake · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If your coparent is building a file against you, you should be building a truthful one.",
      subtitle: "We help clients document calmly—before impulsive messages become trial exhibits.",
    },
    closingCta: {
      title: "The goal is a stable future—not a dramatic day in court.",
      subtitle:
        "Tell us if safety, substance use, or relocation is involved—we triage those facts immediately.",
    },
    formHeadline: "Family law intake—children, finances, urgency",
    formIntro:
      "Note whether you have been served, whether DVPOs apply, and any upcoming court dates.",
    chatContext: {
      focusLine: "Family triage: kids, safety, service of papers, and financial complexity.",
      prompts: [
        "Are minor children involved—and where do they attend school?",
        "Has any DVPO or criminal no-contact order been filed?",
        `Have you been served with divorce or custody papers—when? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "divorce",
    parentSegment: "family-law",
    path: "family-law/divorce",
    name: "Divorce",
    shortDescription:
      "Equitable distribution, alimony, executive pay, and parenting—when ‘fair’ is a spreadsheet and a story.",
    cardCta: "Divorce financial review",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Divorce documents",
    metaTitle: `${c} Divorce Lawyer | Property, Alimony & Parenting Plans | ${FIRM.name}`,
    metaDescription: `Divorce counsel in ${cy}: equitable distribution, support, RSUs, and parenting strategy—not cookie-cutter filings. ${FIRM.phoneDisplay}.`,
    heroTitle: "Divorce is a financial unwinding with feelings taped to it—treat the money like math",
    heroSubtitle:
      "We build credible inventories, trace compensation, and negotiate parenting plans that courts can adopt without turning your life into a permanent deposition.",
    painPoints: [
      "You discovered accounts you did not know existed—or assets you cannot access.",
      "You are earning well but terrified alimony will ignore reality on both sides.",
      "You want the house for stability, but you cannot afford the note without support clarity.",
      "You are one financial surprise away from agreeing to something you will resent for a decade.",
    ],
    overview: `Divorce is not a single hearing—it is a sequence of disclosures, temporary motions, and negotiated or litigated resolutions. Our ${c} divorce team handles equitable distribution of real property, retirement, equity compensation, and business interests with forensic discipline when needed. We also build parenting proposals that match real schedules: school zones, travel, and work demands—not fantasy calendars that collapse after three weeks.`,
    examples: [
      "High-income households with RSUs, bonuses, and clawback risk",
      "Stay-at-home parent cases with earning-capacity disputes",
      "Separate property tracing when premarital assets mixed with marital funds",
      "Temporary support and exclusive-use home requests during pendency",
    ],
    whyMatters: `Hidden spending, undisclosed accounts, and emotional trading (‘you can keep X if I keep Y’) often age poorly. The time to prevent regret is before signatures.`,
    whyFirm: [
      "We treat financial discovery as a truth-seeking process—not a fishing expedition",
      "We build parenting plans for school-year reality",
      "We litigate when disclosure is weaponized or withheld",
    ],
    attorneyNote:
      "James Carter focuses on durable resolutions—because clients pay twice when sloppy agreements collapse under changed circumstances.",
    faqs: [
      {
        question: "Who keeps the marital home?",
        answer:
          "It depends on equity, financing, children’s stability, and offsetting assets. Courts balance factors—there is no automatic ‘moms keep the house’ rule.",
      },
      {
        question: "How is alimony decided?",
        answer:
          "North Carolina evaluates statutory factors including need, ability to pay, and marital standard of living. We model scenarios with documentation—not vibes.",
      },
      {
        question: "Can we settle without going to court?",
        answer:
          "Often—when both sides exchange complete disclosures in good faith. Mediation fails when someone hides the ball or when safety requires court intervention.",
      },
      {
        question: "What if my spouse is spending wildly?",
        answer:
          "Dissipation and waste claims exist—but they require proof. Move quickly on documentation and injunctions when assets are at risk.",
      },
    ],
    localSeoHtml: `<p>If you need a <strong>${c} divorce lawyer</strong> for ${cy}, look for counsel comfortable with modern compensation and honest parenting proposals. ${FIRM.name} handles divorce with financial literacy and restraint.</p>`,
    relatedPaths: ["family-law/child-custody", "family-law", "immigration-law"],
    caseResultTags: ["divorce", "fam"],
    relatedBlogSlugs: ["divorce-executive-compensation-hidden-income", "custody-best-interest-factors-nc"],
    sectionHeadings: {
      overview: "Divorce as finance + parenting architecture",
      painPoints: "What keeps people awake during separation",
      situations: "Divorce conflicts that need forensic and parenting discipline",
      whyMatters: "Why ‘quick deals’ cost more later",
      whyFirm: "How we run divorce files without performative warfare",
      attorney: "Counsel approach on money and kids",
      results: "Divorce illustrations (demo)",
      resultsIntro:
        "Demo summaries only. Property and support outcomes depend on facts, disclosure, and judicial discretion.",
      faq: "Divorce money questions people avoid asking",
      local: `${cy} equitable distribution practice notes`,
      resources: "Executive comp and divorce reading",
      related: "When divorce intersects immigration petitions",
    },
    heroCtas: {
      primary: "Schedule a financial + parenting consult",
      secondary: `Private intake · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If you are about to move money or empty accounts, pause—that becomes the story.",
      subtitle: "We help clients stabilize accounts and disclosures before positions harden.",
    },
    closingCta: {
      title: "The decree you sign is the one you live with—get the numbers right first.",
      subtitle:
        "Bring pay stubs, tax returns, and any business ownership docs to accelerate meaningful advice.",
    },
    formHeadline: "Divorce intake—assets, kids, and whether you have been served",
    formIntro:
      "Mention RSUs, business interests, and any urgency (upcoming travel, job offer, safety).",
    chatContext: {
      focusLine: "Divorce triage: separation date, children, and financial complexity.",
      prompts: [
        "Have you or your spouse filed yet—and is there a pending court date?",
        "Are there minor children and a current school district?",
        `Any business, RSU, or rental property to divide? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "child-custody",
    parentSegment: "family-law",
    path: "family-law/child-custody",
    name: "Child Custody",
    shortDescription:
      "Parenting time, decision-making, relocation, and enforcement—when stability is the real asset.",
    cardCta: "Custody strategy call",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Parent walking with child",
    metaTitle: `${c} Child Custody Lawyer | Parenting Plans & Relocation | ${FIRM.name}`,
    metaDescription: `Custody attorney in ${cy}: parenting plans, modifications, relocation, enforcement—child-centered strategy. ${FIRM.phoneDisplay}.`,
    heroTitle: "Custody is not a slogan—it is a thousand small decisions that add up to a childhood",
    heroSubtitle:
      "We help you build schedules, communication rules, and evidence that courts can trust—without turning your kids into props.",
    painPoints: [
      "You are terrified the other parent will outspend you—or out-narrate you.",
      "You are exhausted from parallel parenting and worried your child is absorbing poison.",
      "You need to move for work—but custody orders feel like a cage.",
      "You are tempted to gather ‘dirt’ online—and you know it could backfire.",
    ],
    overview: `Custody litigation is where good intentions meet bad exhibits. Our ${c} custody attorneys focus on stability: school continuity, caregiving history, and child safety when allegations are serious. We prepare clients for mediation when it protects children—and for hearings when the other side will not cooperate. We also handle modifications and enforcement when orders are violated in ways that harm kids, not just annoy adults.`,
    examples: [
      "Primary custody contests with competing school placements",
      "Relocation cases with employment offers and extended-family networks",
      "Substance concerns where testing protocols must be workable—not performative",
      "Enforcement when exchanges become hostile or withheld",
    ],
    whyMatters: `Judges have seen manufactured conflict. Credibility wins. Documentation beats speeches—calendars, third parties, and professional involvement when appropriate.`,
    whyFirm: [
      "We discourage ‘win the internet’ strategies—courts punish them",
      "We build parenting proposals that match real logistics",
      "We coordinate GAL and professional roles when courts appoint them",
    ],
    attorneyNote:
      "Children deserve attorneys who refuse to treat them as messaging tools—even when parents forget.",
    faqs: [
      {
        question: "Will my teenager get to choose?",
        answer:
          "Older children’s wishes may be considered in age-appropriate ways, but no minor ‘chooses’ outright. Courts weigh many statutory factors.",
      },
      {
        question: "Can I relocate with my child?",
        answer:
          "Relocation law is strict and fact-heavy. Notice requirements and best-interest analysis can make or break a move. Plan before you sign leases.",
      },
      {
        question: "What is parallel parenting?",
        answer:
          "A structured way to reduce conflict when co-parenting is not realistic. It is not failure—it is harm reduction for kids.",
      },
      {
        question: "Should I install a parenting app?",
        answer:
          "Sometimes—if it reduces conflict and creates an admissible record. Sometimes it becomes another battlefield. We help you choose tools, not trends.",
      },
    ],
    localSeoHtml: `<p>Searching for a <strong>${c} child custody attorney</strong> in ${cy}? ${FIRM.name} advocates for parenting plans grounded in credible evidence and child needs—not theatrics.</p>`,
    relatedPaths: ["family-law/divorce", "family-law", "criminal-defense"],
    caseResultTags: ["custody", "fam"],
    relatedBlogSlugs: ["custody-apps-text-threads-best-interest", "custody-best-interest-factors-nc"],
    sectionHeadings: {
      overview: "Custody: what courts optimize for (and what they ignore)",
      painPoints: "What custody fights do to parents—beyond court dates",
      situations: "Custody disputes that need structure, not volume",
      whyMatters: "Why ‘winning’ online can lose in court",
      whyFirm: "Our child-centered litigation posture",
      attorney: "Counsel approach on parenting evidence",
      results: "Custody illustrations (demo)",
      resultsIntro:
        "Demo summaries only. Custody outcomes depend on facts, professionals, and judicial discretion.",
      faq: "Custody FAQs for parents under stress",
      local: `${cy} family court expectations`,
      resources: "Communication and evidence reading",
      related: "When custody intersects criminal charges or DVPOs",
    },
    heroCtas: {
      primary: "Build a parenting plan strategy",
      secondary: `Call ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If your coparent is building a narrative, build a calendar—not a group chat war.",
      subtitle: "We help clients document exchanges and third-party observations responsibly.",
    },
    closingCta: {
      title: "If safety is real—not rhetorical—tell us now. If it is rhetorical, we will tell you that too.",
      subtitle:
        "Urgent hearings require credible affidavits—not screenshots out of context.",
    },
    formHeadline: "Custody intake—current order, schools, and stress points",
    formIntro:
      "Include whether DSS, police, or a GAL is involved—and any upcoming mediation date.",
    chatContext: {
      focusLine: "Custody triage: current schedule, school, and any safety allegations.",
      prompts: [
        "What orders exist today—temporary or final?",
        "Is relocation or a school change on the table?",
        `Any criminal cases or DVPOs affecting contact? ${D}`,
      ],
    },
  },
];
