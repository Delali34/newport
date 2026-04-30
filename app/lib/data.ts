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
 * Image workflow: drop files into /public/images/cases/<slug>/ and add a
 * cover/images entry on the matching case study below.
 */

export const profile: Profile = {
  name: "Ernest Delali",
  role: "Product Manager",
  location: "Accra · Remote",
  availability: "Open to Junior PM roles · 2026",
  email: "ernestanyomitse752@gmail.com",
  currentlyAt: "Independent — shipping 0→1 products",
  past: ["Aai Labs", "Dispatch", "JFK Mensah Books", "Eminence Lead", "Belleson Homes"],
  heroStats: [
    { val: "5+", desc: "Products shipped" },
    { val: "1–2wk", desc: "Avg time-to-launch" },
    { val: "100%", desc: "Live in production" },
    { val: "0→1", desc: "Launch specialist" },
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:ernestanyomitse752@gmail.com",
      handle: "ernestanyomitse752@gmail.com",
      meta: "Email",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/233204314170",
      handle: "+233 20 431 4170",
      meta: "WhatsApp",
    },
    {
      // TODO: replace with your real LinkedIn URL
      label: "LinkedIn",
      href: "https://linkedin.com/in/ernestdelali",
      handle: "linkedin.com/in/ernestdelali",
      meta: "LinkedIn",
    },
    {
      // TODO: replace with your real Calendly URL
      label: "Calendly",
      href: "https://calendly.com/ernestdelali",
      handle: "calendly.com/ernestdelali",
      meta: "Book a call",
    },
  ],
};

export const aboutCopy = {
  intro:
    "I don't manage features. I manage outcomes — for users, for businesses, and for the teams building them.",
  body: [
    "I came to product through engineering and UX. After two years at LeadAfrique International rebuilding their site and content surfaces, I joined Aai Labs (Lithuania) as Growth & Product Specialist — leading product design for an AI-powered EdTech platform that doubled user signups and engagement.",
    "Alongside that, I run an independent practice: shipping 0→1 web products in 1–2 weeks for clients across media, e-commerce, social impact, and PropTech. I work the seam between product thinking, frontend engineering, and modern automation (Claude Code, n8n, Make.com) — so a single operator can ship what used to need a small team.",
  ],
};

export const competencies: CompetencyGroup[] = [
  {
    label: "Product & Strategy",
    items: [
      "Discovery",
      "Product Positioning",
      "Go-to-Market",
      "MVP Strategy",
      "JTBD",
      "OKRs",
      "Roadmapping",
      "QA Testing",
    ],
  },
  {
    label: "Research & Data",
    items: [
      "User Interviews",
      "Funnel Analysis",
      "A/B Testing",
      "PostHog",
      "Amplitude",
      "Google Analytics 4",
      "Jira",
    ],
  },
  {
    label: "Build & Automation",
    items: [
      "Claude Code",
      "n8n",
      "Make.com",
      "API Integrations",
      "PostgreSQL",
      "Firebase",
      "Prisma",
    ],
  },
  {
    label: "Design & Frontend",
    items: [
      "Figma",
      "Adobe Suite",
      "React / Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML / CSS",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "dispatch",
    index: "01",
    title: "Dispatch — Beat Platform",
    category: "Media · B2C",
    scope: "0→1 · 1 week",
    liveUrl: "https://www.dispatchbeat.com/",
    preview: { val: "1wk", label: "Brief to live" },
    blocks: [
      {
        label: "Problem",
        text: "Dispatch had a brand and an editorial vision but no public home — and no time to build one. They needed a credible publication site live within seven days, before their first content drop.",
      },
      {
        label: "Discovery",
        text: "Audited the indie media stack — Substack, Ghost, custom — and mapped the reader journey from arrival to article to return. The bottleneck was the path from first read to second visit, not the article surface itself.",
      },
      {
        label: "MVP",
        text: "Shipped a content-first homepage anchored by featured stories, fast article reading surfaces tuned for mobile, and a subscribe capture above the fold. Cut commenting, search, and archives to a deliberate V2 list.",
      },
      {
        label: "Result",
        text: "Live in seven days. Editorial team began publishing without bottlenecks. The reader-to-subscriber capture sits above industry baseline for a launch site.",
      },
      {
        label: "Learning",
        text: "For media products, getting to publishable beats getting to perfect. A clean reader experience and a working subscribe field do most of the work in week one.",
      },
    ],
    outcomes: [
      { val: "1wk", label: "Time to launch" },
      { val: "Live", label: "dispatchbeat.com" },
      { val: "Mobile-first", label: "Reading surface" },
    ],
  },
  {
    id: "jfk-mensah-books",
    index: "02",
    title: "JFK Mensah Books — Online Bookstore",
    category: "E-commerce · B2C",
    scope: "0→1 · 2 weeks",
    liveUrl: "https://www.jfkmensahbooks.com/",
    preview: { val: "2wk", label: "Brief to live" },
    blocks: [
      {
        label: "Problem",
        text: "The author was selling through informal channels — WhatsApp orders, in-person pickup, manual receipts. No way to scale, no analytics on demand, no recurring relationship with the reader after the sale.",
      },
      {
        label: "Discovery",
        text: "Mapped the reader journey from 'heard about the book' to 'owns the book'. Friction was concentrated at trust and post-purchase confirmation. Buyers hesitated on manual bank-transfer flows and didn't know whether their order was real until it shipped.",
      },
      {
        label: "MVP",
        text: "Branded storefront, catalogue, payment integration, automated order confirmation. Make.com handles post-purchase ops — confirmation email, fulfilment trigger, receipt — so the author's manual time is decoupled from the order volume.",
      },
      {
        label: "Result",
        text: "First online order within 24 hours of launch. Sales now run independently of the author's manual capacity. The post-purchase loop is fully automated.",
      },
      {
        label: "Learning",
        text: "For low-volume, high-trust products you don't need Shopify — you need a credible page, a working checkout, and automation that closes the loop after the sale.",
      },
    ],
    outcomes: [
      { val: "2wk", label: "Time to launch" },
      { val: "Live", label: "jfkmensahbooks.com" },
      { val: "Automated", label: "Post-purchase ops" },
    ],
  },
  {
    id: "eminence-lead",
    index: "03",
    title: "Eminence Lead — NGO Platform Redesign",
    category: "Social Impact · NGO",
    scope: "Redesign · 2 weeks",
    liveUrl: "https://www.eminencelead.org/",
    preview: { val: "2wk", label: "Redesign shipped" },
    blocks: [
      {
        label: "Problem",
        text: "The previous site looked dated and didn't reflect the program quality of a serious leadership organization. Visitors weren't converting into program applicants, donors, or volunteers — and the information architecture mirrored internal departments instead of visitor intent.",
      },
      {
        label: "Discovery",
        text: "Audited the existing site and mapped the three primary visitor flows — apply, give, volunteer. Each flow needed its own minimal CTA path; the previous IA was sending everyone in circles.",
      },
      {
        label: "MVP",
        text: "Restructured the homepage and program pages around visitor intent. Clear hierarchy: who, what, why, how to engage. Rebuilt the donate and program-application paths as distinct flows rather than one shared form.",
      },
      {
        label: "Result",
        text: "The site now reads as a credible leadership organization rather than a static brochure. Program pages sit at the top of the engagement funnel they were always meant to be.",
      },
      {
        label: "Learning",
        text: "Mission-driven sites convert on trust signals — clear leadership, clear outcomes, clear next step. Most NGO sites lose this by trying to communicate everything at once.",
      },
    ],
    outcomes: [
      { val: "2wk", label: "Redesign shipped" },
      { val: "Live", label: "eminencelead.org" },
      { val: "3", label: "Distinct conversion paths" },
    ],
  },
  {
    id: "belleson-homes",
    index: "04",
    title: "Belleson Homes — Property Sales Platform",
    category: "PropTech · Marketplace",
    scope: "0→1 · 2 weeks",
    liveUrl: "https://bellesonhomes.com/",
    preview: { val: "2wk", label: "Brief to live" },
    blocks: [
      {
        label: "Problem",
        text: "Property buyers in Ghana were stuck between WhatsApp listings (no structure, no trust) and bloated regional portals (slow, irrelevant, built for a different market). The product gap was a fast, clean, locally-tuned listings experience.",
      },
      {
        label: "Discovery",
        text: "Reviewed local and global PropTech — Zillow, Rightmove, regional portals — and spoke to Ghanaian buyers and agents. Buyers wanted clean photos, clear price in cedis, and fast agent contact. Agents wanted a credible board to send leads to.",
      },
      {
        label: "MVP",
        text: "Listings index, search by area and price, listing detail with photos and direct agent contact, lead-capture form. API integrations route leads to agents in real time, replacing unstructured WhatsApp messages with a structured pipeline.",
      },
      {
        label: "Result",
        text: "Live and accepting buyer enquiries. Agents now receive structured leads instead of fragmented WhatsApp threads. The platform becomes the brand anchor for future inventory growth.",
      },
      {
        label: "Learning",
        text: "PropTech in emerging markets wins on photography, price clarity, and agent-response speed — not on filters or AI matching. Most 'advanced' features were noise we cut.",
      },
    ],
    outcomes: [
      { val: "2wk", label: "Time to launch" },
      { val: "Live", label: "bellesonhomes.com" },
      { val: "Real-time", label: "Lead routing" },
    ],
  },
];

export const metrics: MetricCell[] = [
  {
    val: "1wk",
    desc: "Brief-to-live for the Dispatch Beat platform",
    project: "Dispatch",
  },
  {
    val: "2wk",
    desc: "Brief-to-live for the JFK Mensah online bookstore",
    project: "JFK Mensah Books",
  },
  {
    val: "2wk",
    desc: "Full redesign and deploy of the Eminence Lead NGO platform",
    project: "Eminence Lead",
  },
  {
    val: "2wk",
    desc: "Brief-to-live for the Belleson Homes property platform",
    project: "Belleson Homes",
  },
  {
    val: "100%",
    desc: "User signups and engagement growth on Aai Labs EdTech platform",
    project: "Aai Labs",
  },
  {
    val: "5+ hrs",
    desc: "Saved each week on KPI tracking via automated reporting workflows",
    project: "Aai Labs",
  },
  {
    val: "50%",
    desc: "Client referral rate on independent product builds",
    project: "Independent",
  },
  {
    val: "100%",
    desc: "Search visibility uplift from SEO work on shipped sites",
    project: "Independent",
  },
];

export const metricsIntro =
  "Products without numbers are hypotheses. Here's what shipped work actually moved.";

export const resume: Resume = {
  experience: [
    {
      title: "Growth & Product Specialist",
      date: "May 2025 — Jan 2026",
      org: "Aai Labs — Lithuania",
      desc: "Led product design for an AI-powered EdTech platform — 100% growth in user signups and engagement. Defined product positioning and go-to-market direction, managed website development from requirements to deployment, and built automated reporting workflows that saved 5+ hours weekly on KPI tracking.",
    },
    {
      title: "Independent Product Manager & Builder",
      date: "Jan 2024 — Present",
      org: "Self-employed — Accra",
      desc: "Ship 0→1 web products and redesigns for clients across media, e-commerce, social impact, and PropTech. Recent: Dispatch, JFK Mensah Books, Eminence Lead, Belleson Homes — all live in 1–2 weeks. 50% client referral rate. SEO work raised search visibility 100% and traffic 50% on shipped sites.",
    },
    {
      title: "Front-End Developer",
      date: "Mar 2023 — Dec 2023",
      org: "LeadAfrique International — Ghana",
      desc: "Led the redesign of the organization's website, lifting user engagement 50%. Translated stakeholder requirements into technical specs, created digital content for leadership programs (50% lift in social engagement), and monitored site performance to guide improvements.",
    },
    {
      title: "Intern",
      date: "Nov 2021 — Mar 2023",
      org: "LeadAfrique International — Ghana",
      desc: "Supported development of educational program materials (90% supervisor satisfaction), coordinated leadership programs and logistics, and created internal documentation and training content.",
    },
  ],
  education: [
    {
      title: "Software Development (Web & Mobile)",
      date: "Feb 2022 — Oct 2023",
      org: "Codetrain",
    },
    {
      title: "Agile Project Management",
      date: "In progress",
      org: "Coursera",
    },
    {
      title: "General Science",
      date: "2017 — 2020",
      org: "Bishop Herman College",
    },
  ],
  skills: [
    "Claude Code",
    "n8n",
    "Make.com",
    "API Integrations",
    "PostHog",
    "Amplitude",
    "Google Analytics 4",
    "Jira",
    "Figma",
    "PostgreSQL",
    "Firebase",
    "Prisma",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
};

/**
 * Empty until real client testimonials are collected.
 * The Testimonials component will not render the section while this is empty.
 */
export const testimonials: Testimonial[] = [];

export const writing: WritingPost[] = [
  {
    slug: "ship-0-to-1-in-two-weeks",
    type: "Essay",
    date: "April 2026",
    title: "How I Ship 0→1 Products in Two Weeks",
    excerpt:
      "Speed isn't recklessness — it's discipline about scope. Across Dispatch, JFK Mensah Books, Eminence Lead, and Belleson Homes the same playbook held: a 24-hour discovery sprint, an 80/20 MVP cut, and an automation stack that replaces the team you don't have.",
    footer: "Read essay",
    readTime: "8 min read",
  },
  {
    slug: "make-com-or-custom-backend",
    type: "Framework",
    date: "March 2026",
    title: "Make.com or Custom Backend? A Decision Framework",
    excerpt:
      "Make.com and n8n have replaced what used to take three weeks of custom backend work. They've also become a graveyard for products that should have been built properly. Here's the rubric I use to decide which is which — and the warning signs that say 'go custom now.'",
    footer: "Read framework",
    readTime: "7 min read",
  },
  {
    slug: "proptech-emerging-markets",
    type: "Teardown",
    date: "February 2026",
    title: "PropTech in Emerging Markets: What Western Playbooks Miss",
    excerpt:
      "Filters and AI matching — the features Zillow ships don't translate to a market where the real friction is photography quality and agent response time. A breakdown of what actually moves the conversion needle in Accra, and why I cut most 'advanced' search features from Belleson.",
    footer: "Read teardown",
    readTime: "9 min read",
  },
  {
    slug: "discovery-one-week-sprints",
    type: "Field Guide",
    date: "January 2026",
    title: "Discovery for One-Week Sprints: A Practical Checklist",
    excerpt:
      "When you have seven days from brief to live, traditional discovery cycles will kill you. The compressed version: six questions to the founder, four reference products to audit, and one priority cut that defines V1. The whole thing fits on a single page.",
    footer: "Read field guide",
    readTime: "6 min read",
  },
];

export const status: StatusCard[] = [
  {
    label: "Currently",
    title: "Independent product work — Accra",
    desc: "Shipping 0→1 web products and redesigns for selected clients in 1–2 week sprints. Booking limited engagements through 2026.",
    indicator: "Available — May 2026",
  },
  {
    label: "Open to Work",
    title: "Junior PM · Global · Remote-First",
    desc: "Exploring Junior or Associate PM roles at product-led companies. Bias toward marketplaces, fintech, EdTech, and growth-stage startups. Open to global relocation.",
    indicator: "Immediately available",
  },
  {
    label: "In Progress",
    title: "Agile Project Management — Coursera",
    desc: "Working through the Agile PM specialization to formalize the cross-functional process I already use in client work. Targeting completion mid-2026.",
    indicator: "On track",
  },
];
