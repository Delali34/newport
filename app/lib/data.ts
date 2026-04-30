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
 * To add case study images:
 *   1. Drop image files into /public/images/cases/<slug>/
 *   2. Reference them on the matching case study via `cover` and `images`
 *      (paths are relative to /public, e.g. "/images/cases/dispatch/cover.jpg").
 */

export const profile: Profile = {
  name: "Ernest Delali",
  role: "Product Manager",
  location: "Accra · Remote",
  availability: "Open to PM roles · 2026",
  email: "ernest@example.com",
  currentlyAt: "Independent — shipping 0→1 products",
  past: ["Dispatch", "JFK Mensah Books", "Eminence Lead", "Belleson Homes"],
  heroStats: [
    { val: "4", desc: "Products shipped" },
    { val: "1–2wk", desc: "Avg time-to-launch" },
    { val: "4", desc: "Industries served" },
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
    "I ship fast — 1 to 2 weeks from brief to live — by combining tight discovery, modern automation tooling (Claude Code, n8n, Make.com), and clean API integration. I've shipped for logistics, e-commerce, social impact, and PropTech in Ghana and beyond.",
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
      "Growth Loops",
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
    label: "Build & Automation",
    items: [
      "Claude Code",
      "n8n",
      "Make.com",
      "API Integrations",
      "SQL",
      "Figma",
    ],
  },
];

/**
 * Case studies. Each project links to a live deployment.
 * Add cover/images by dropping files into /public/images/cases/<id>/
 * and uncommenting the cover/images fields below.
 *
 * The text blocks are placeholders calibrated to each project — replace
 * the bracketed sections with real numbers and details before launch.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "dispatch",
    index: "01",
    title: "Dispatch — Beat Platform",
    category: "Media · B2C",
    scope: "0→1 · 1 week",
    liveUrl: "https://www.dispatchbeat.com/",
    preview: { val: "1wk", label: "Brief to live" },
    // cover: { src: "/images/cases/dispatch/cover.jpg", alt: "Dispatch homepage" },
    blocks: [
      {
        label: "Problem",
        text: "[Replace] The team needed a credible web presence to surface their content and convert readers into a recurring audience — without dragging timelines.",
      },
      {
        label: "Discovery",
        text: "[Replace] Audited similar publications, mapped the reader journey, and identified the smallest set of features needed to launch with confidence.",
      },
      {
        label: "MVP",
        text: "[Replace] Shipped a content-first homepage, article surfaces, and capture flow in a one-week sprint. Built on a stack tuned for speed of iteration.",
      },
      {
        label: "Result",
        text: "[Replace with real metrics — sessions, returning users, signups, etc.] Live within 7 days from brief.",
      },
      {
        label: "Learning",
        text: "[Replace] Constraints (1 week, lean budget) forced ruthless prioritization. Anything that didn't directly serve a reader's first session got cut.",
      },
    ],
    // images: [{ src: "/images/cases/dispatch/screen-1.jpg", alt: "..." }],
    outcomes: [
      { val: "1wk", label: "Time to launch" },
      { val: "Live", label: "dispatchbeat.com" },
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
    // cover: { src: "/images/cases/jfk-mensah-books/cover.jpg", alt: "JFK Mensah Books storefront" },
    blocks: [
      {
        label: "Problem",
        text: "[Replace] The author needed a direct-to-reader sales channel without depending on third-party retailers — full ownership of brand, pricing, and customer relationship.",
      },
      {
        label: "Discovery",
        text: "[Replace] Mapped the reader journey from discovery to delivery. Reviewed peer author sites and self-publishing playbooks to size the right scope for V1.",
      },
      {
        label: "MVP",
        text: "[Replace] Shipped storefront, catalog, payment integration, and order management in two weeks. Used API integrations + automation (n8n / Make.com) to keep ops lean.",
      },
      {
        label: "Result",
        text: "[Replace with real numbers — orders, revenue, conversion rate, AOV.] Live and accepting orders.",
      },
      {
        label: "Learning",
        text: "[Replace] For low-volume publishing, automation matters more than features. The right Make.com flows replaced what would have been three weeks of custom backend.",
      },
    ],
    // images: [],
    outcomes: [
      { val: "2wk", label: "Time to launch" },
      { val: "Live", label: "jfkmensahbooks.com" },
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
    // cover: { src: "/images/cases/eminence-lead/cover.jpg", alt: "Eminence Lead site" },
    blocks: [
      {
        label: "Problem",
        text: "[Replace] The existing site didn't reflect the org's credibility or convert visitors into participants, donors, or volunteers. Information was hard to find.",
      },
      {
        label: "Discovery",
        text: "[Replace] Audited the previous site, mapped donor / participant flows, and identified the calls-to-action that mattered most for the org's mission funnel.",
      },
      {
        label: "MVP",
        text: "[Replace] Restructured information architecture around the visitor's journey. Rebuilt the homepage, programs, and contact paths in two weeks.",
      },
      {
        label: "Result",
        text: "[Replace with real numbers — donations, signups, time-on-page, bounce rate.] Live redesign deployed.",
      },
      {
        label: "Learning",
        text: "[Replace] Mission-driven sites convert on trust and clarity, not features. Removing options often increases conversion.",
      },
    ],
    // images: [],
    outcomes: [
      { val: "2wk", label: "Redesign shipped" },
      { val: "Live", label: "eminencelead.org" },
    ],
  },
  {
    id: "belleson-homes",
    index: "04",
    title: "Belleson Homes — Property Sales",
    category: "PropTech · Marketplace",
    scope: "0→1 · 2 weeks",
    liveUrl: "https://bellesonhomes.com/",
    preview: { val: "2wk", label: "Brief to live" },
    // cover: { src: "/images/cases/belleson-homes/cover.jpg", alt: "Belleson Homes listings" },
    blocks: [
      {
        label: "Problem",
        text: "[Replace] Buyers in Ghana lacked a clean digital experience for browsing properties. Existing portals were cluttered, slow, and made shortlisting painful.",
      },
      {
        label: "Discovery",
        text: "[Replace] Reviewed competitor portals (local + global), mapped the buyer journey, and isolated the highest-leverage interactions: search, listing detail, agent contact.",
      },
      {
        label: "MVP",
        text: "[Replace] Shipped listings, search/filter, listing detail, and lead-capture flow in two weeks. API integrations connected listing data and notifications.",
      },
      {
        label: "Result",
        text: "[Replace with real numbers — listings live, leads generated, time on listing pages.] Live and accepting buyer enquiries.",
      },
      {
        label: "Learning",
        text: "[Replace] PropTech in Ghana wins on photography, clarity of price, and speed of agent response — not on advanced search. Most filters were noise.",
      },
    ],
    // images: [],
    outcomes: [
      { val: "2wk", label: "Time to launch" },
      { val: "Live", label: "bellesonhomes.com" },
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
    val: "4",
    desc: "Industries served — media, e-commerce, social impact, PropTech",
    project: "All Projects",
  },
  {
    val: "100%",
    desc: "Projects shipped to production and currently live",
    project: "All Projects",
  },
  {
    val: "API",
    desc: "Custom integrations across payment, content, and ops layers",
    project: "All Projects",
  },
  {
    val: "0→1",
    desc: "Three of four projects launched from scratch in two weeks or less",
    project: "All Projects",
  },
];

export const metricsIntro =
  "Products without numbers are hypotheses. Replace these with real metrics from each launch.";

export const resume: Resume = {
  experience: [
    {
      title: "Independent Product Manager",
      date: "2024 — Present",
      org: "Accra, Ghana — Remote",
      desc: "Ship 0→1 products and redesigns for Ghanaian and global clients. Recent: Dispatch, JFK Mensah Books, Eminence Lead, Belleson Homes — all shipped in 1–2 weeks using Claude Code, n8n, Make.com, and modern API integrations.",
    },
    {
      title: "[Add prior role]",
      date: "[Year — Year]",
      org: "[Add company / location]",
      desc: "[Replace with real description of prior role and impact.]",
    },
  ],
  education: [
    {
      title: "[Add degree]",
      date: "[Year — Year]",
      org: "[Add institution]",
    },
  ],
  skills: [
    "Claude Code",
    "n8n",
    "Make.com",
    "API Integrations",
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
      "[Replace] Ernest didn't just build a site — he reframed how we thought about the launch. The two-week timeline felt impossible until it didn't.",
    name: "[Client name]",
    role: "[Role, Company]",
  },
  {
    quote:
      "[Replace] He moved faster than any agency we'd worked with, and the result was sharper. The automation he set up still saves us hours every week.",
    name: "[Client name]",
    role: "[Role, Company]",
  },
  {
    quote:
      "[Replace] What surprised me was the rigor — proper discovery, prioritization, and a clear roadmap, all inside a two-week sprint.",
    name: "[Client name]",
    role: "[Role, Company]",
  },
];

export const writing: WritingPost[] = [
  {
    type: "Essay",
    date: "[Date]",
    title: "[Add post title]",
    excerpt: "[Replace with the post excerpt.]",
    href: "#",
    footer: "Read on LinkedIn",
  },
  {
    type: "Framework",
    date: "[Date]",
    title: "[Add post title]",
    excerpt: "[Replace with the post excerpt.]",
    href: "#",
    footer: "Read essay",
  },
  {
    type: "Teardown",
    date: "[Date]",
    title: "[Add post title]",
    excerpt: "[Replace with the post excerpt.]",
    href: "#",
    footer: "Read on Substack",
  },
  {
    type: "Field Guide",
    date: "[Date]",
    title: "[Add post title]",
    excerpt: "[Replace with the post excerpt.]",
    href: "#",
    footer: "Read field guide",
  },
];

export const status: StatusCard[] = [
  {
    label: "Active Build",
    title: "[Add current project]",
    desc: "[Replace with description of an in-flight build, experiment, or rollout.]",
    indicator: "In progress",
  },
  {
    label: "Open to Work",
    title: "Senior PM · Global · Remote-First",
    desc: "Exploring Senior or Lead PM roles at product-led companies. Bias toward marketplaces, fintech, and growth-stage startups.",
    indicator: "Immediately available",
  },
  {
    label: "Side Project",
    title: "[Add side project]",
    desc: "[Replace with current side project, resource, or community work.]",
    indicator: "[Status]",
  },
];
