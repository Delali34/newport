import type {
  Profile,
  CompetencyGroup,
  CaseStudy,
  MetricCell,
  Resume,
  Testimonial,
  WritingPost,
  StatusCard,
} from "./types";

/**
 * All site content lives here. When the backend lands, replace each export
 * with an async fetcher (e.g. getProfile()) — components already accept
 * their data as props, so no other files need to change.
 *
 * Copy, names, metrics below are placeholder. Replace before launch.
 */

export const profile: Profile = {
  name: "Ernest Delali",
  role: "Product Manager",
  location: "Lagos · Remote",
  availability: "Open to PM roles · 2026",
  email: "ernest@example.com",
  currentlyAt: "Building [stealth fintech]",
  past: ["Dispatch", "Finbridge", "TechEdu"],
  heroStats: [
    { val: "5+", desc: "Products shipped" },
    { val: "40%", desc: "Avg retention lift" },
    { val: "3", desc: "Industries served" },
    { val: "0→1", desc: "Launch specialist" },
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:ernest@example.com",
      handle: "ernest@example.com",
      meta: "Email",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      handle: "linkedin.com/in/ernestdelali",
      meta: "LinkedIn",
    },
    {
      label: "Calendly",
      href: "https://calendly.com",
      handle: "calendly.com/ernestdelali",
      meta: "Book a call",
    },
    {
      label: "X / Twitter",
      href: "https://x.com",
      handle: "@ernestdelali",
      meta: "X / Twitter",
    },
  ],
};

export const aboutCopy = {
  intro:
    "I don't manage features. I manage outcomes — for users, for businesses, and for the teams building them.",
  body: [
    "My path to product wasn't linear. I started in engineering, moved into research, and found my edge sitting between user pain, technical feasibility, and business reality.",
    "I can read a codebase, a user interview, and a P&L in the same week and synthesize them into a clear strategic call. I've shipped for fintech, logistics, EdTech, and social impact — each forced a different definition of what 'success' meant.",
  ],
};

export const competencies: CompetencyGroup[] = [
  {
    label: "Strategy",
    items: [
      "Discovery",
      "OKRs",
      "North Star Metrics",
      "JTBD",
      "MVP Strategy",
      "Market Sizing",
    ],
  },
  {
    label: "Execution",
    items: [
      "Roadmapping",
      "Sprint Facilitation",
      "RICE",
      "MoSCoW",
      "Stakeholder Mgmt",
      "Go-to-Market",
    ],
  },
  {
    label: "Research & Data",
    items: [
      "User Interviews",
      "Usability Testing",
      "Funnel Analysis",
      "A/B Testing",
      "Cohort Analysis",
    ],
  },
  {
    label: "Technical",
    items: ["API Design Review", "SQL", "Figma", "Looker", "Growth Loops"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "dispatch",
    index: "01",
    title: "Dispatch — Last-Mile Logistics",
    category: "Logistics · B2B",
    scope: "0→1 · 8 weeks",
    preview: { val: "−23pp", label: "Job abandonment" },
    blocks: [
      {
        label: "Problem",
        text: "Delivery partners abandoned jobs mid-route at 34%. Dispatch had no visibility into why — no tracking, no feedback loop, no analytics on drop-off behavior.",
      },
      {
        label: "Discovery",
        text: "12 driver interviews surfaced unclear job specs, late payouts, and zero in-incident support. Mapped the driver journey and isolated 6 friction points.",
      },
      {
        label: "MVP",
        text: "RICE-prioritized to job clarity and payout visibility. Deferred route optimization. Shipped a job-card redesign and in-app dispute flow in a 6-week sprint.",
      },
      {
        label: "Stakeholders",
        text: "Aligned ops, engineering, and finance on a shared metrics dashboard so each team could watch the same job-completion signal in real time.",
      },
      {
        label: "Result",
        text: "Job abandonment fell 34% → 11% in 8 weeks. Driver NPS moved 22 → 61. Support ticket volume dropped 28%.",
      },
      {
        label: "Learning",
        text: "The product problem was a trust problem. Once drivers felt the system was fair, behavior changed faster than any UX tweak. Context > interface.",
      },
    ],
    outcomes: [
      { val: "−23pp", label: "Job abandonment" },
      { val: "+39pt", label: "Driver NPS" },
      { val: "−28%", label: "Support tickets" },
      { val: "6wk", label: "Time to first ship" },
    ],
  },
  {
    id: "finance",
    index: "02",
    title: "Finbridge — Personal Banking",
    category: "Fintech · B2C",
    scope: "Retention · Onboarding",
    preview: { val: "+21pp", label: "D30 retention" },
    blocks: [
      {
        label: "Problem",
        text: "Day-30 retention was at 31% — users activated but didn't return. Acceptable for a neobank in beta, fatal long-term.",
      },
      {
        label: "Discovery",
        text: "Cohort analysis showed power users shared one trait: they set a savings goal in their first session. Skippers churned at 3× the rate.",
      },
      {
        label: "MVP",
        text: "Redesigned onboarding around a 'First Win' principle — required one meaningful action (goal, transfer, or bill) before reaching home. A/B tested three variants.",
      },
      {
        label: "Result",
        text: "D30 retention improved 31% → 52%. Goal-setting variant won. The First-Win pattern was added to the platform's permanent activation playbook.",
      },
      {
        label: "Metrics",
        text: "Defined the North Star as Weekly Active Savers — users taking at least one intentional savings action per week. Realigned team OKRs around it.",
      },
      {
        label: "Learning",
        text: "The product wasn't broken. The contract with the user was. No first-session commitment = no habit. Behavioral design > feature design.",
      },
    ],
    outcomes: [
      { val: "+21pp", label: "D30 retention" },
      { val: "52%", label: "D30 reached" },
      { val: "3×", label: "Churn improvement" },
    ],
  },
  {
    id: "portal",
    index: "03",
    title: "TechEdu — Student Portal",
    category: "EdTech · B2C",
    scope: "Redesign · IA",
    preview: { val: "−58%", label: "Support call volume" },
    blocks: [
      {
        label: "Problem",
        text: "Students missed deadlines, couldn't find materials, and called admin for self-serve tasks. 62% called support for basic actions.",
      },
      {
        label: "Discovery",
        text: "Contextual inquiry with 30 students across 3 faculties. The information architecture mirrored admin departments, not student mental models — classic org-chart-as-UX.",
      },
      {
        label: "MVP",
        text: "Rebuilt navigation around the student lifecycle (Apply → Enroll → Attend → Graduate). MoSCoW shipped registration and results in V1; deferred financial aid to V2.",
      },
      {
        label: "Stakeholders",
        text: "IT, registrar, and academic affairs had overlapping data ownership. Facilitated 4 alignment sessions and built a RACI matrix to unblock the build.",
      },
      {
        label: "Result",
        text: "Support calls dropped 58%. Registration task completion went 43% → 91%. Student satisfaction jumped 24 points.",
      },
      {
        label: "Learning",
        text: "Institutional products fail because they mirror internal org structure. The PM's job was to break that mirror.",
      },
    ],
    outcomes: [
      { val: "−58%", label: "Support calls" },
      { val: "+48pp", label: "Task completion" },
      { val: "+24pt", label: "Satisfaction" },
    ],
  },
  {
    id: "ngo",
    index: "04",
    title: "NGO Platform — Donations Engine",
    category: "Social Impact · 0→1",
    scope: "0→1 · 10 weeks",
    preview: { val: "4×", label: "Quarterly fundraising" },
    blocks: [
      {
        label: "Problem",
        text: "Campaigns ran manually over WhatsApp. No tracking, no recurring giving, no donor visibility. Estimated completion < 20%.",
      },
      {
        label: "Discovery",
        text: "Surveyed 45 donors. Top blockers: distrust of manual flow, no visibility into fund allocation, and no easy recurring option.",
      },
      {
        label: "MVP",
        text: "Campaign pages with impact tracking, one-click recurring donations, and transparent fund allocation. Shipped in 10 weeks.",
      },
      {
        label: "Result",
        text: "Donation completion reached 67%. Recurring donors grew to 31% of base. Fundraising rose 4× in one quarter.",
      },
      {
        label: "Growth",
        text: "Built a referral mechanic into the thank-you flow. Each donor was prompted to share their campaign. Added 23% incremental reach with zero paid spend.",
      },
      {
        label: "Learning",
        text: "For mission-driven products, trust is the conversion lever. Showing impact triggered repeat behavior more than any incentive.",
      },
    ],
    outcomes: [
      { val: "67%", label: "Completion rate" },
      { val: "4×", label: "Quarterly fundraising" },
      { val: "+23%", label: "Referral reach" },
    ],
  },
  {
    id: "jobs",
    index: "05",
    title: "Job Portal — Two-Sided Matching",
    category: "Marketplace",
    scope: "Liquidity · Loops",
    preview: { val: "7.4×", label: "Apps per job" },
    blocks: [
      {
        label: "Problem",
        text: "Two-sided marketplace with poor liquidity. Employers posted but got few applications; candidates browsed but rarely applied. Median: 1.8 apps/job.",
      },
      {
        label: "Discovery",
        text: "JTBD applied to both sides separately. Employers' real job: shortlist quickly. Candidates' real job: know if they'd actually get the role.",
      },
      {
        label: "MVP",
        text: "Match-score indicator for candidates (% match). Employer 'shortlist score' algorithm. North Star: time-to-shortlist.",
      },
      {
        label: "Result",
        text: "Apps per job rose 1.8 → 7.4. Employer shortlist time fell 44%. Candidate application rate up 3.2×.",
      },
      {
        label: "Loops",
        text: "Solved chicken-and-egg by leading with employer quality-of-hire signal. Better hires attracted better candidates, attracting more employers.",
      },
      {
        label: "Learning",
        text: "Matching products fail when they optimize one side. Confidence signals for candidates matter as much as shortlisting tools for employers.",
      },
    ],
    outcomes: [
      { val: "7.4×", label: "Apps per job" },
      { val: "−44%", label: "Shortlist time" },
      { val: "3.2×", label: "App rate" },
    ],
  },
];

export const metrics: MetricCell[] = [
  { val: "+21pp", desc: "Day-30 retention on fintech platform", project: "Finbridge" },
  { val: "−58%", desc: "Reduction in support call volume", project: "TechEdu" },
  { val: "−23pp", desc: "Job abandonment for delivery partners", project: "Dispatch" },
  { val: "4×", desc: "Quarterly donation fundraising growth", project: "NGO Platform" },
  { val: "3.2×", desc: "Candidate application rate uplift", project: "Job Portal" },
  { val: "+39pt", desc: "Driver NPS improvement", project: "Dispatch" },
  { val: "67%", desc: "Donation completion rate (from < 20%)", project: "NGO Platform" },
  { val: "6wk", desc: "Average time-to-first-ship across 0→1", project: "All Projects" },
];

export const metricsIntro =
  "Products without numbers are hypotheses. Here's what shipped work actually moved.";

export const resume: Resume = {
  experience: [
    {
      title: "Senior Product Manager",
      date: "2023 — Present",
      org: "Dispatch Logistics — Lagos, Nigeria",
      desc: "Led end-to-end PM function across driver and merchant surfaces. Reduced job abandonment by 23pp. Introduced data-driven roadmap process.",
    },
    {
      title: "Product Manager",
      date: "2021 — 2023",
      org: "Finbridge — Remote",
      desc: "Owned activation and retention for personal banking app. Onboarding redesign moved D30 retention 31% → 52%. Built experimentation culture from zero.",
    },
    {
      title: "Associate Product Manager",
      date: "2019 — 2021",
      org: "TechEdu — Accra, Ghana",
      desc: "Rebuilt the university student portal. Cut support call volume 58% and lifted task completion 43% → 91% post-launch.",
    },
  ],
  education: [
    {
      title: "BSc. Computer Science",
      date: "2015 — 2019",
      org: "University of Ghana, Legon",
    },
  ],
  skills: [
    "Product School — CPM",
    "Mixpanel",
    "Amplitude",
    "Google Analytics",
    "Figma",
    "Jira",
    "Notion",
    "SQL",
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ernest didn't just run discovery — he changed how our whole team thinks about user problems. He brought rigor to a process we thought was already working.",
    name: "Yemi Adeyemi",
    role: "Co-founder & CEO, Dispatch",
  },
  {
    quote:
      "In six weeks he went from zero context to a launched MVP with real user data. The rare PM who understands both what to build and how to get it built.",
    name: "Ama Sarpong",
    role: "Head of Engineering, Finbridge",
  },
  {
    quote:
      "The retention numbers speak for themselves. What really impressed me was how he kept our team aligned during a stretch of real technical constraints.",
    name: "Kojo Mensah",
    role: "Founder, TechEdu Ghana",
  },
];

export const writing: WritingPost[] = [
  {
    type: "Essay",
    date: "March 2026",
    title: "The PM Skill Nobody Talks About: Knowing When Not to Build",
    excerpt:
      "The most valuable decision I made last quarter was killing a feature three weeks into development. Here's the framework I used — and why it was the right call.",
    href: "#",
    footer: "Read on LinkedIn",
  },
  {
    type: "Framework",
    date: "February 2026",
    title: "How I Use North Star Metrics to Align Entire Teams",
    excerpt:
      "A North Star Metric only works if every function — from engineering to finance — can trace daily work back to it. Most teams skip that step.",
    href: "#",
    footer: "Read essay",
  },
  {
    type: "Teardown",
    date: "January 2026",
    title: "What African Startups Get Wrong About Product-Market Fit",
    excerpt:
      "PMF in markets with infrastructure gaps and trust deficits looks fundamentally different from Silicon Valley playbooks. A framework that fits the context.",
    href: "#",
    footer: "Read on Substack",
  },
  {
    type: "Field Guide",
    date: "December 2025",
    title: "Jobs to Be Done: A Practical Field Guide",
    excerpt:
      "How I run JTBD interviews, synthesize hiring jobs, and translate them into product requirements that engineering teams actually find useful.",
    href: "#",
    footer: "Read field guide",
  },
];

export const status: StatusCard[] = [
  {
    label: "Active Experiment",
    title: "Community-Led Onboarding for B2B SaaS",
    desc: "Testing whether peer cohorts reduce time-to-value more effectively than in-app product tours. 200-user beta, 6-week run.",
    indicator: "Week 3 of 6",
  },
  {
    label: "Open to Work",
    title: "Senior PM · Global · Remote-First",
    desc: "Exploring Senior or Lead PM roles at product-led companies. Bias toward marketplaces, fintech, and growth-stage startups.",
    indicator: "Immediately available",
  },
  {
    label: "Side Project",
    title: "PM Interview Prep for Africa",
    desc: "A structured guide calibrated to the PM hiring process at top global and African tech companies — the resource I wish I'd had.",
    indicator: "Early access · April 2026",
  },
];
