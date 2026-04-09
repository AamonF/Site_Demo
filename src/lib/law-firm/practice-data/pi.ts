import type { PracticeAreaPage } from "../types";
import { FIRM } from "../firm";

const c = FIRM.city;
const cy = FIRM.county;

const D =
  "This assistant does not provide legal advice and does not create an attorney-client relationship.";

export const PI_PRACTICE_PAGES: PracticeAreaPage[] = [
  {
    kind: "parent",
    segment: "personal-injury",
    parentSegment: null,
    path: "personal-injury",
    name: "Personal Injury",
    shortDescription:
      "Catastrophic injury, disputed liability, and insurer gamesmanship—handled with evidence discipline, not volume advertising.",
    cardCta: "How we handle injury files",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Case files and legal research representing serious injury advocacy",
    metaTitle: `Serious Injury Claims in ${c} | Trial-Ready ${FIRM.name}`,
    metaDescription: `Not a billboard firm—${c} personal injury counsel for complex negligence, disputed fault, and insurer standoffs. Evidence-first strategy. ${FIRM.phoneDisplay}.`,
    heroTitle: "When the injury is serious, the file has to be stronger than the billboard next to it",
    heroSubtitle:
      "We build negligence cases for scrutiny—from medical causation to coverage stacks—so you are not negotiating against yourself while you are still in treatment.",
    painPoints: [
      "You are getting calls from adjusters while you are still figuring out what hurts—and they sound helpful until you realize they are locking you into words.",
      "Your medical bills are climbing, but nobody will explain which policy pays first, second, or not at all.",
      "Someone told you North Carolina law ‘bars’ your case because you were even 1% at fault—and you do not know if that is true for your fact pattern.",
      "You are afraid to post a normal life update online because you have been warned insurance investigators are watching.",
    ],
    overview: `Personal injury is not one thing—it is a cluster of problems: proof, timing, credibility, and money. In ${c}, we see injury clients get steamrolled when they treat a negligence claim like a customer service ticket. Our team works serious negligence matters where damages justify real work: liability fights, multiple carriers, commercial defendants, and injuries that will not resolve quietly in thirty days.`,
    examples: [
      "Commercial vehicle and fleet exposure with layered insurance and indemnity fights",
      "Intersection and highway crashes where fault is genuinely contested—not just ‘he said / she said’ posturing",
      "Injuries with long-tail care needs where future damages are the whole point of the case",
      "Wrongful death and survival issues where families need structure—not pressure",
    ],
    whyMatters: `The difference between a strong injury file and a weak one is usually not drama—it is documentation, sequencing, and knowing what ${cy} judges and mediators treat as credible. Insurers know the difference too. They respond to files that look ready.`,
    whyFirm: [
      "We do not outsource your story to junior staff and vanish—your theory of the case has to hold up under scrutiny",
      "We coordinate experts when they add truth—not when they add invoices",
      "We explain leverage in plain language: what is likely, what is uncertain, and what is foolish to promise",
    ],
    attorneyNote:
      "Michael Reed leads our injury docket with a simple standard: if we cannot explain the damages story to a skeptical judge, we are not ready to ask a carrier for real money.",
    faqs: [
      {
        question: "Do you take ‘small’ car accident cases?",
        answer:
          "We are selective. Some matters are better handled through insurance channels without full litigation staffing. If we are not the right fit, we will tell you—early.",
      },
      {
        question: "Will you send me to ‘your doctors’?",
        answer:
          "No ethical firm should control your treatment. We may suggest documentation approaches and help you understand what records matter—but medical decisions belong to you and your providers.",
      },
      {
        question: "How long will my case take?",
        answer:
          "If someone guarantees a timeline, be skeptical. Serious injury cases depend on treatment course, disputes, and court schedules. We give ranges after we understand your injuries and defendants.",
      },
      {
        question: "What does ‘contributory negligence’ mean for me?",
        answer:
          "It can be a complete bar in some negligence cases—which is why internet guesses are dangerous. We evaluate whether your facts fit exceptions, alternative theories, or different defendant structures.",
      },
    ],
    localSeoHtml: `<p>People searching for a <strong>${c} personal injury attorney</strong> often land on ads that promise fast cash. Serious negligence work is slower—and more precise. ${FIRM.name} represents injured people in ${cy} when the stakes justify a prepared file.</p>`,
    relatedPaths: ["personal-injury/car-accidents", "criminal-defense", "family-law"],
    caseResultTags: ["pi", "pi-auto"],
    relatedBlogSlugs: ["what-to-do-after-charlotte-car-accident", "truck-crash-ecm-logs-spoliation"],
    sectionHeadings: {
      overview: "What ‘personal injury’ means in a serious case",
      painPoints: "The stress points we see before clients hire counsel",
      situations: "Injury matters that belong in a prepared file",
      whyMatters: "Why ‘just dealing with insurance’ backfires",
      whyFirm: "What we refuse to do—and why",
      attorney: "How we lead injury strategy",
      results: "Examples of the work—not a promise of yours",
      resultsIntro:
        "These summaries are anonymized composites for a law firm website demo. They are not guarantees. Outcomes depend on facts, judges, and insurance realities.",
      faq: "Questions injury clients ask once—not twice",
      local: `${c} courts, carriers, and medical documentation realities`,
      resources: "Guides that pair with injury intake",
      related: "If your situation spills into another legal system",
      childHub: "Pick the injury problem closest to yours",
    },
    heroCtas: {
      primary: "Request an injury strategy call",
      secondary: `Speak with intake · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If adjusters are already framing your story, you need a counter-narrative—not a hotter voicemail.",
      subtitle: `We prioritize same-week review for new injury intakes with emergency treatment or disputed liability—${c} and ${cy}.`,
    },
    closingCta: {
      title: "Stop trying to ‘be reasonable’ with a team trained to pay less.",
      subtitle:
        "A consultation helps you understand what is leverage, what is theater, and what is a real deadline—without obligating you to anything.",
    },
    formHeadline: "Tell us what happened—without performing for an adjuster",
    formIntro:
      "Default to Personal Injury. Add detail in the message box: who is insured, what treatment you have had, and whether anyone has asked for a recorded statement.",
    chatContext: {
      focusLine: "Injury intake: we triage treatment status, coverage layers, and whether liability is already being disputed.",
      prompts: [
        "Are you still treating, or have you reached maximum improvement for now?",
        "Has any insurer taken a recorded statement or asked you to sign a release?",
        `Any commercial vehicle, rideshare, or municipal involvement? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "car-accidents",
    parentSegment: "personal-injury",
    path: "personal-injury/car-accidents",
    name: "Car Accidents",
    shortDescription:
      "Policy limits, UM/UIM, rental gaps, and liability fights—when a ‘fender bender’ becomes a financial crisis.",
    cardCta: "Auto collision review",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nighttime city traffic—auto collision context",
    metaTitle: `Car Accident Injury Claims in ${c}: Coverage, Fault & Medical Bills | ${FIRM.name}`,
    metaDescription: `Hurt in a ${c} car crash? UM/UIM, liability disputes, and medical liens—counsel that reads policies, not headlines. ${FIRM.phoneDisplay}.`,
    heroTitle: "A Charlotte car wreck can wreck your credit before it wrecks your case—if you move out of order",
    heroSubtitle:
      "We map liability, coverage stacks, and treatment documentation so you are not paying out of pocket for someone else’s mistake—or accepting a check that closes future care.",
    painPoints: [
      "The other insurer says you are at fault because you ‘admitted’ something at the scene when you were just being polite.",
      "Your health insurer is paying bills you think should be on auto coverage—and now you are getting subrogation letters you do not understand.",
      "You feel fine for three days, then wake up unable to turn your neck—and the adjuster says gap in treatment means gap in causation.",
      "You drive for work or need a rental, but nobody explains how long coverage lasts or what happens if liability is denied.",
    ],
    overview: `Auto cases are not generic. In ${c}, we see crashes where the real fight is UM/UIM, stacked vs. non-stacked selections, rideshare layers, or a defendant with state-minimum limits and no assets. We also see ‘soft tissue’ injuries that are real—and get dismissed because the file looks thin. Our job is to match the case to the proof: scene evidence, EDR considerations when appropriate, provider records that tell a coherent story, and a demand that reads like a human life, not a form letter.`,
    examples: [
      "Multi-vehicle chain reactions on I-77 / I-485 merge zones with disputed merge fault",
      "Low-speed impacts with delayed disc or concussion symptoms and skeptical carriers",
      "Pedestrian and cyclist strikes in Uptown / South End corridors with visibility arguments",
      "Accidents where the at-fault driver was working—employer coverage and agency questions",
    ],
    whyMatters: `The first two weeks after a crash are when people accidentally damage their own case: friendly chats with adjusters, social posts, and gaps in care that carriers later weaponize. You do not have to be perfect—you need a plan.`,
    whyFirm: [
      "We read your declarations page like a contract—because it is",
      "We coordinate lien and subrogation issues so you are not surprised at settlement time",
      "We do not confuse ‘activity’ with progress—your file should get stronger, not louder",
    ],
    attorneyNote:
      "Auto work is detail hygiene: photos, diagnostics, consistent treatment narrative, and a demand that anticipates the carrier’s favorite excuses.",
    faqs: [
      {
        question: "The insurance company says I do not need a lawyer for a ‘minor’ accident. True?",
        answer:
          "Sometimes—but ‘minor’ is a word adjusters love. If you have injury, wage loss, or coverage questions, a consultation is not overkill; it is risk management.",
      },
      {
        question: "Should I use my health insurance for crash-related treatment?",
        answer:
          "Often yes—but coordination matters. Liens, ERISA plans, and reimbursement rights can change net recovery. We map this after seeing your policies.",
      },
      {
        question: "What if the other driver fled?",
        answer:
          "UM claims and hit-and-run investigations have specific proof needs. Preserve any dashcam, witness info, and police report details immediately.",
      },
      {
        question: "Will my rates go up if I use my own UM/UIM?",
        answer:
          "That depends on carrier practices and state rules—and it is a question clients should ask with specifics. Do not let fear of premium changes forfeit coverage you paid for.",
      },
    ],
    localSeoHtml: `<p>Searching for a <strong>${c} car accident lawyer</strong> usually means you are juggling pain, work, and a mailbox full of insurance paperwork. ${FIRM.name} helps clients in ${cy} translate ‘coverage language’ into decisions you can live with.</p>`,
    relatedPaths: ["personal-injury/truck-accidents", "personal-injury/motorcycle-accidents", "personal-injury"],
    caseResultTags: ["pi-auto", "car"],
    relatedBlogSlugs: ["what-to-do-after-charlotte-car-accident", "motorcycle-um-coverage-stacked-limits"],
    sectionHeadings: {
      overview: "Auto injury claims are coverage puzzles disguised as negligence cases",
      painPoints: "What actually keeps people awake after a crash",
      situations: "Auto files that turn contentious fast",
      whyMatters: "Why the first adjuster call can haunt you later",
      whyFirm: "What we do on auto cases that generic mills skip",
      attorney: "How we build a credible auto file",
      results: "Auto-related illustrations (demo)",
      resultsIntro:
        "These examples are hypothetical composites for this website demo—not your case, not a promise. Insurance outcomes depend on limits, liability, and medical proof.",
      faq: "Auto injury FAQs people wish they asked sooner",
      local: `${c} corridors, ${cy} filings, and local insurer habits`,
      resources: "Reading before you give a recorded statement",
      related: "If your crash is not a ‘standard’ auto file",
    },
    heroCtas: {
      primary: "Get a coverage-and-injury review",
      secondary: `Urgent question? ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "Recorded statement scheduled? Pause—and get aligned on what ‘neutrality’ actually means.",
      subtitle: "We help clients respond to urgency without giving away the case in fifteen minutes on the phone.",
    },
    closingCta: {
      title: "If you are staring at medical bills and a low policy limit, you need a strategy—not another app notification.",
      subtitle:
        "Same-week consults for active treatment or looming statute concerns—tell us if a child, elderly passenger, or gig worker is involved.",
    },
    formHeadline: "Auto crash intake—tell us what hurts and what paperwork you already have",
    formIntro:
      "We default to Car Accidents. Mention police report number, insurer names, and whether you are missing work or driving for a living.",
    chatContext: {
      focusLine: "Auto intake: we prioritize injury treatment status, UM/UIM selections, and any recorded statement requests.",
      prompts: [
        "Did police respond—and do you have an exchange or report number?",
        "Have you had imaging or ER treatment—and are symptoms changing?",
        `Has any insurer asked for a recorded statement or app upload? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "truck-accidents",
    parentSegment: "personal-injury",
    path: "personal-injury/truck-accidents",
    name: "Truck Accidents",
    shortDescription:
      "Carrier liability, federal safety culture, and catastrophic injury risk when a tractor-trailer is involved.",
    cardCta: "Commercial crash analysis",
    image:
      "https://images.unsplash.com/photo-1519003722824-194742120636?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Semi-truck on highway",
    metaTitle: `${c} Truck Accident Lawyers | Commercial Liability & Injury | ${FIRM.name}`,
    metaDescription: `Serious truck crash counsel in ${c}: motor carriers, logs, maintenance, and injury claims when commercial policies and federal rules matter. ${FIRM.phoneDisplay}.`,
    heroTitle: "A truck crash is a corporate liability event—not a bigger car accident",
    heroSubtitle:
      "We treat early preservation, carrier indemnity, and reconstruction seriously—because trucking defendants do.",
    painPoints: [
      "You are hearing from multiple ‘investigators’ while you are still in trauma care—and you do not know who works for whom.",
      "Someone mentioned the truck’s ‘black box,’ but nobody will put data in your hands.",
      "You are being told the driver was ‘independent’ so there is ‘no deep pocket’—and that sounds wrong, but you cannot prove it yet.",
      "Your injuries are catastrophic, but the settlement chatter already sounds like a single-policy conversation.",
    ],
    overview: `Commercial motor vehicle collisions implicate safety culture: hiring, training, maintenance, hours-of-service reality, and sometimes brokers who distance themselves from risk. Our ${c} team maps defendants beyond the driver when facts support it, and we take preservation seriously—because carriers move fast when exposure is large. We coordinate reconstruction and life-care planning when injuries demand it—not as buzzwords, as necessities.`,
    examples: [
      "Underride and override collisions with complex biomechanics",
      "Jackknife scenarios involving speed, braking, and load shift questions",
      "Maintenance failures where DOT inspections and shop records become exhibits",
      "Broker / shipper disputes about who controlled selection of the motor carrier",
    ],
    whyMatters: `Trucking insurers staff major wrecks immediately. The gap between Day 3 and Day 30 can be the gap between preserved telematics and a ‘we don’t have it anymore’ story.`,
    whyFirm: [
      "We know what carrier counsel looks for first—because we prepare for that scrutiny",
      "We do not treat federal motor carrier rules as trivia—they are often the spine of negligence theories",
      "We are comfortable naming corporate defendants when indemnity and insurance towers support it",
    ],
    attorneyNote:
      "If your lawyer talks about trucks like they are just heavy cars, you are under-armed. We build these files for corporate defense playbooks.",
    faqs: [
      {
        question: "Why can’t we just sue the driver?",
        answer:
          "Sometimes you can—but motor carriers often have deeper coverage and legal responsibility depending on lease arrangements, supervision, and regulatory duties. The right defendants depend on facts and contracts.",
      },
      {
        question: "What is a spoliation letter?",
        answer:
          "A targeted preservation request sent when litigation is anticipated. It is not magic—but it creates accountability if evidence disappears.",
      },
      {
        question: "Will my case take years because it involves a company?",
        answer:
          "Complexity and injury severity drive timelines more than ‘company’ status alone. We give realistic ranges after understanding defendants and treatment.",
      },
      {
        question: "What if I was partially at fault?",
        answer:
          "Do not assume. Contributory negligence issues are fact-specific and sometimes contested vigorously. Have the scene work reviewed by counsel before you accept blame in writing.",
      },
    ],
    localSeoHtml: `<p>If you need a <strong>${c} truck accident attorney</strong>, look for counsel who understands motor carrier litigation—not only passenger-car demand letters. ${FIRM.name} handles commercial vehicle injury matters with preservation-first discipline.</p>`,
    relatedPaths: ["personal-injury/wrongful-death", "personal-injury/car-accidents", "personal-injury"],
    caseResultTags: ["truck", "pi"],
    relatedBlogSlugs: ["truck-crash-ecm-logs-spoliation", "what-to-do-after-charlotte-car-accident"],
    sectionHeadings: {
      overview: "Why trucking cases are corporate negligence cases",
      painPoints: "What truck crash clients feel before the legal story is clear",
      situations: "Commercial crash patterns we investigate",
      whyMatters: "Why evidence disappears if you wait politely",
      whyFirm: "What trucking defense teams expect—and what we deliver",
      attorney: "Litigation posture on commercial injury files",
      results: "Trucking illustrations (demo)",
      resultsIntro:
        "Demo composites only. Trucking outcomes depend on preservation, experts, and sometimes parallel regulatory investigations—not marketing promises.",
      faq: "Truck crash questions that separate guesswork from strategy",
      local: `${c} freight corridors and regional carrier practice`,
      resources: "Further reading on preservation and ECM issues",
      related: "When catastrophic injury overlaps other claims",
    },
    heroCtas: {
      primary: "Start preservation review",
      secondary: `Catastrophic injury line · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If the truck insurer already has a team, you should have a file—not a hope.",
      subtitle: "We send targeted preservation requests when liability and exposure justify immediate action.",
    },
    closingCta: {
      title: "Serious injury + commercial defendant = do not let ‘cooperation’ mean ‘unilateral disclosure.’",
      subtitle:
        "Tell us if OSHA, NTSB, or company safety departments are in the background—we map parallel tracks without drowning you in jargon.",
    },
    formHeadline: "Commercial vehicle crash—tell us who contacted you and what you have saved",
    formIntro:
      "Include motor carrier name if known, DOT number from photos, and whether you have police photos or dashcam.",
    chatContext: {
      focusLine: "Trucking intake: carrier identity, injuries, and any company reps who reached out.",
      prompts: [
        "Do you have photos of truck markings, trailer numbers, or company logos?",
        "Were you hospitalized—and is rehabilitation ongoing?",
        `Has anyone asked you to sign a medical authorization broadly? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "motorcycle-accidents",
    parentSegment: "personal-injury",
    path: "personal-injury/motorcycle-accidents",
    name: "Motorcycle Accidents",
    shortDescription:
      "Rider bias, road defects, severe trauma, and UM fights—advocacy for people who get blamed for being hard to see.",
    cardCta: "Rider injury consult",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361e9bf3b87?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Motorcycle on open road",
    metaTitle: `${c} Motorcycle Injury Attorney | Rider Bias & UM Claims | ${FIRM.name}`,
    metaDescription: `Injured riding in ${cy}? Road defects, visibility disputes, serious trauma, and uninsured motorist issues—counsel that knows rider cases. ${FIRM.phoneDisplay}.`,
    heroTitle: "Motorcycle cases lose in the story before they lose in court—so we build the story carefully",
    heroSubtitle:
      "We counter ‘invisible rider’ narratives with scene physics, witness work, and trauma documentation that matches how riders actually get hurt.",
    painPoints: [
      "You were wearing gear and still got hurt badly—but the comment section already blames ‘bikers.’",
      "The driver’s insurer is framing you as speeding because motorcycles ‘always are.’",
      "You discover your UM coverage is weaker than you thought—after the hit-and-run or minimum-limits driver disappears.",
      "You are dealing with road rash, surgery, and PTSD while someone asks why you ‘chose risk.’",
    ],
    overview: `Rider injury cases are cultural and medical. Jurors arrive with stereotypes; adjusters know it. Our ${c} team pairs reconstruction literacy with trauma reality: road rash infection risk, complex fractures, head injury timelines, and the way missed work hits riders in gig and trade jobs. We also examine roadway defects and notice issues when a municipality may share responsibility—those cases have unique procedural traps.`,
    examples: [
      "Left-turn conflicts where sight lines and signal timing matter",
      "Lane-splitting misconceptions even when not legally relevant to the actual maneuver",
      "Single-bike crashes involving debris, construction zones, or maintenance failures",
      "UM/UIM and hit-and-run investigations when the rider’s own policy becomes the battlefield",
    ],
    whyMatters: `Bias does not disappear because you are right. It disappears because your proof is organized, your witnesses are credible, and your medical story is coherent.`,
    whyFirm: [
      "We do not treat rider cases as car cases with two wheels",
      "We prepare clients for how juries actually perceive risk—then we counter with facts",
      "We push UM/UIM analysis early because riders often face underinsured defendants",
    ],
    attorneyNote:
      "If your lawyer smirks at motorcycles, get a different lawyer. These cases require respect for the client and precision in the proof.",
    faqs: [
      {
        question: "I wasn’t wearing a helmet—does that end my case?",
        answer:
          "Helmet use can influence damages and sometimes comparative arguments, but it does not automatically erase a negligence claim. Get individualized analysis—do not self-eliminate.",
      },
      {
        question: "What if the driver says they never saw me?",
        answer:
          "That is often the defense theme. We respond with angles, lighting, distraction evidence, and sometimes human factors experts when the dollars justify it.",
      },
      {
        question: "Can I recover if I laid the bike down to avoid worse impact?",
        answer:
          "Sometimes yes—avoidance maneuvers can still be part of a negligence story. Facts and documentation matter.",
      },
      {
        question: "Do I need different insurance advice as a rider?",
        answer:
          "Often yes—UM/UIM selections matter enormously. We review declarations when clients bring them.",
      },
    ],
    localSeoHtml: `<p>Riders searching for a <strong>${c} motorcycle accident lawyer</strong> deserve counsel who will not treat bias as inevitable. ${FIRM.name} advocates for injured riders across ${cy} with fact-first narratives.</p>`,
    relatedPaths: ["personal-injury/car-accidents", "personal-injury", "criminal-defense"],
    caseResultTags: ["moto", "pi"],
    relatedBlogSlugs: ["motorcycle-um-coverage-stacked-limits", "what-to-do-after-charlotte-car-accident"],
    sectionHeadings: {
      overview: "Why rider cases need a different narrative than auto cases",
      painPoints: "The emotional weight riders carry—not just physical pain",
      situations: "Crash patterns we see with motorcycles—not stereotypes",
      whyMatters: "Why ‘fair’ and ‘believable’ are different problems",
      whyFirm: "Our approach to rider credibility and proof",
      attorney: "Advocacy philosophy on motorcycle injury files",
      results: "Rider injury illustrations (demo)",
      resultsIntro:
        "Demo illustrations only. Rider outcomes depend heavily on liability proof, UM coverage, and injury severity.",
      faq: "Rider-specific questions (beyond helmet clichés)",
      local: `${c} riding conditions and jury realities`,
      resources: "Insurance and safety context for riders",
      related: "If criminal or traffic issues overlap",
    },
    heroCtas: {
      primary: "Protect your rider claim",
      secondary: `Call ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If someone is already telling your story wrong, silence is not neutrality—it is surrender.",
      subtitle: "We help riders document injury and dispute bias-driven narratives early.",
    },
    closingCta: {
      title: "Serious road rash or fracture? UM issues? We should talk this week—not after the first low offer.",
      subtitle:
        "Tell us if you ride for work, rely on gig income, or cannot afford downtime—those facts change strategy.",
    },
    formHeadline: "Rider injury—describe the scene and your gear",
    formIntro:
      "Note helmet use honestly, bike type, and whether you have photos of road debris or construction.",
    chatContext: {
      focusLine: "Motorcycle intake: visibility, road conditions, and UM coverage are our first triage points.",
      prompts: [
        "Were you transported from the scene—and what injuries are documented so far?",
        "Was a citation issued—and to whom?",
        `Do you carry stacked UM/UIM—or are you unsure? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "wrongful-death",
    parentSegment: "personal-injury",
    path: "personal-injury/wrongful-death",
    name: "Wrongful Death",
    shortDescription:
      "Estate structure, beneficiaries, and accountability after a fatal crash or negligence—handled with restraint and rigor.",
    cardCta: "Speak with us privately",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Quiet memorial flowers",
    metaTitle: `${c} Wrongful Death Lawyer | Estates, Liability & Family Guidance | ${FIRM.name}`,
    metaDescription: `Fatal negligence claims in ${cy}: wrongful death strategy with dignity—beneficiaries, estates, and accountability. ${FIRM.name}. ${FIRM.phoneDisplay}.`,
    heroTitle: "Wrongful death work is grief-first, law-second—and we never confuse the order",
    heroSubtitle:
      "We help families stabilize the legal architecture: representatives, beneficiaries, and claims that honor a life without turning pain into performance.",
    painPoints: [
      "You are getting calls from insurers while you are planning a funeral—and it feels obscene.",
      "Family members disagree about who should ‘handle’ the case—and nobody wants to sound greedy.",
      "You are afraid a lawsuit looks like you are putting a price on love.",
      "You heard there is a short clock—but you cannot think in clocks right now.",
    ],
    overview: `Wrongful death claims are statutory and sensitive. They require correct plaintiff structure, careful coordination with estates, and damages storytelling that is truthful without being exploitative. Our ${c} team represents families in fatal negligence matters where accountability matters—but we do not treat your loss as content. We focus on admissible proof, responsible client communication, and realistic timelines so you are not dragged through litigation surprises you never agreed to.`,
    examples: [
      "Fatal motor vehicle collisions involving commercial defendants and complex insurance towers",
      "Workplace fatality overlap where third-party negligence may exist alongside comp exclusivity",
      "Medical negligence resulting in death—where expert strategy must be sober and disciplined",
      "Survival actions paired with wrongful death when conscious suffering is provable",
    ],
    whyMatters: `A wrong step early—signing releases, giving informal statements, or fighting publicly—can haunt a family for years. Legal process cannot fix grief, but it can prevent additional harm.`,
    whyFirm: [
      "We communicate in plain language and paced meetings—no ‘war room’ theatrics",
      "We coordinate probate and litigation counsel when estates are not straightforward",
      "We prepare for trial even when settlement is likely—because dignity and leverage coexist",
    ],
    attorneyNote:
      "We will not market your tragedy. We will prosecute accountability where the law allows—and tell you when it does not.",
    faqs: [
      {
        question: "Who is allowed to bring the claim?",
        answer:
          "North Carolina law defines eligible plaintiffs and administration requirements. We determine proper structure before filing—not after infighting hardens.",
      },
      {
        question: "How long will this take?",
        answer:
          "Fatal cases can be slow when liability or damages are disputed. We provide ranges and checkpoints so families are not left in information darkness.",
      },
      {
        question: "Will we have to go to trial?",
        answer:
          "Sometimes—but not always. Credible preparation often improves settlement posture. We do not promise either path on day one.",
      },
      {
        question: "What if family members disagree?",
        answer:
          "Disagreements happen. We focus on lawful plaintiff structure and transparent communication—sometimes with separate counsel for estate issues.",
      },
    ],
    localSeoHtml: `<p>Families looking for a <strong>${c} wrongful death attorney</strong> need patience and precision—not pressure. ${FIRM.name} handles fatal negligence matters in ${cy} with careful pacing.</p>`,
    relatedPaths: ["personal-injury/truck-accidents", "personal-injury", "family-law"],
    caseResultTags: ["wrongful", "pi"],
    relatedBlogSlugs: ["wrongful-death-personal-representative-nc", "truck-crash-ecm-logs-spoliation"],
    sectionHeadings: {
      overview: "Wrongful death claims: law, family systems, and timing",
      painPoints: "What families feel before they can say what they need",
      situations: "Fatal negligence scenarios we help families navigate",
      whyMatters: "Why early missteps can compound grief",
      whyFirm: "How we protect families while pursuing accountability",
      attorney: "Counsel approach in fatal negligence matters",
      results: "Illustrative outcomes (demo)",
      resultsIntro:
        "These summaries are hypothetical composites for advertising. They are not representations of actual clients or guaranteed results.",
      faq: "Questions families ask when they can finally breathe",
      local: `${cy} venues and wrongful death practice realities`,
      resources: "Estate and litigation context (educational)",
      related: "When loss touches other legal needs",
    },
    heroCtas: {
      primary: "Schedule a private consultation",
      secondary: `Gentle intake · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If insurers are circling, you deserve a buffer—not another voice in your ear at 9 p.m.",
      subtitle: "We can help you understand what must be decided now versus what can wait a week.",
    },
    closingCta: {
      title: "You do not have to decide today whether to pursue a claim—you need to know your options.",
      subtitle:
        "We respond to wrongful death inquiries with pacing: clear next steps, no manufactured urgency, and respect for family meetings.",
    },
    formHeadline: "Confidential intake—tell us your relationship and what happened",
    formIntro:
      "We route wrongful death inquiries carefully. Include whether an estate is opened and any law enforcement case number if available.",
    chatContext: {
      focusLine: "Wrongful death triage: relationship to decedent, jurisdiction, and any insurer contact so far.",
      prompts: [
        "Has a personal representative been appointed—or is probate pending?",
        "Was there an accident report or ongoing investigation?",
        `Are media or insurers contacting multiple family members? ${D}`,
      ],
    },
  },
];
