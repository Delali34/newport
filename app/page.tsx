"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const competencies = [
  {
    label: "Product Strategy",
    items: [
      "Product Discovery",
      "OKR Planning",
      "North Star Metrics",
      "JTBD Framework",
      "MVP Strategy",
      "Market Sizing",
    ],
  },
  {
    label: "Execution",
    items: [
      "Roadmap Planning",
      "Sprint Facilitation",
      "RICE Scoring",
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
    items: ["API Design Review", "SQL", "Figma", "Data Studio", "Growth Loops"],
  },
];

type CaseBlock = { label: string; text: ReactNode };
type Outcome = { val: string; label: string };
type CaseStudy = {
  id: string;
  index: string;
  title: string;
  tags: string[];
  blocks: CaseBlock[];
  outcomes: Outcome[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "dispatch",
    index: "01",
    title: "Dispatch — Last-Mile Logistics Platform",
    tags: ["Logistics", "B2B"],
    blocks: [
      {
        label: "Problem",
        text: (
          <>
            Delivery partners were abandoning jobs mid-route at <strong>34%</strong> rate. Dispatch had no visibility into why — no tracking, no feedback loop, no analytics on drop-off behavior.
          </>
        ),
      },
      {
        label: "Research & Discovery",
        text: "12 driver interviews revealed core issues: unclear job specs, late payouts, and zero support during incidents. Mapped the full driver journey and identified 6 major friction points.",
      },
      {
        label: "MVP & Prioritization",
        text: (
          <>
            Used RICE scoring to focus first on <strong>real-time job clarity</strong> and payout visibility. Deferred route optimization. Built a "job card" redesign and in-app dispute flow in 6-week sprint.
          </>
        ),
      },
      {
        label: "Stakeholder Work",
        text: "Managed competing priorities between ops, engineering, and finance. Built shared metrics dashboard so all teams could see job completion impact in real time.",
      },
      {
        label: "Results",
        text: (
          <>
            <strong>Job abandonment dropped from 34% → 11%</strong> within 8 weeks. Driver NPS moved from 22 to 61. Ops workload from support tickets dropped 28%.
          </>
        ),
      },
      {
        label: "Learnings",
        text: (
          <>
            The product problem was a trust problem. Once drivers felt the system was fair, behavior changed faster than any UX tweak could have achieved. <em>Context matters more than interface.</em>
          </>
        ),
      },
    ],
    outcomes: [
      { val: "−23pp", label: "Job abandonment rate" },
      { val: "+39pt", label: "Driver NPS" },
      { val: "−28%", label: "Support ticket volume" },
      { val: "6wk", label: "Time to first ship" },
    ],
  },
  {
    id: "portal",
    index: "02",
    title: "Student Portal System — University Platform",
    tags: ["EdTech", "B2C"],
    blocks: [
      {
        label: "Problem",
        text: (
          <>
            Students were missing registration deadlines, failing to find course materials, and calling admin lines for tasks that should have been self-serve. <strong>62% of users called support for basic actions.</strong>
          </>
        ),
      },
      {
        label: "Research & Discovery",
        text: "Ran contextual inquiry sessions with 30 students across 3 faculties. Discovered information architecture was built around admin departments — not student mental models. Classic org-chart-as-UX problem.",
      },
      {
        label: "MVP & Prioritization",
        text: "Rebuilt navigation around student lifecycle stages (Apply → Enroll → Attend → Graduate). Used MoSCoW to ship registration and results in V1, defer financial aid to V2.",
      },
      {
        label: "Stakeholder Work",
        text: "IT, registrar, and academic affairs had conflicting data ownership claims. Facilitated 4 alignment sessions and built a RACI matrix to unblock development.",
      },
      {
        label: "Results",
        text: (
          <>
            Support call volume <strong>dropped 58%</strong> post-launch. Task completion for registration improved from 43% to 91%. Student satisfaction survey jumped 24 points.
          </>
        ),
      },
      {
        label: "Learnings",
        text: "Institutional products fail because they mirror internal org structure. The PM's job was to break that mirror and replace it with user-oriented architecture.",
      },
    ],
    outcomes: [
      { val: "−58%", label: "Support call volume" },
      { val: "+48pp", label: "Task completion rate" },
      { val: "+24pt", label: "Student satisfaction" },
    ],
  },
  {
    id: "finance",
    index: "03",
    title: "Finance Platform — Personal Banking App",
    tags: ["Fintech", "B2C"],
    blocks: [
      {
        label: "Problem",
        text: (
          <>
            Day-30 retention was at <strong>31%</strong> — users activated but didn't return. Standard for neobanks but unacceptable for long-term viability.
          </>
        ),
      },
      {
        label: "Research & Discovery",
        text: "Cohort analysis showed power users had one thing in common: they set a savings goal in their first session. Users who skipped onboarding prompts churned at 3× the rate.",
      },
      {
        label: "MVP",
        text: (
          <>
            Redesigned onboarding around <strong>"First Win"</strong> principle — forced users to complete one meaningful action (goal set, first transfer, or bill added) before reaching home screen. A/B tested three variants.
          </>
        ),
      },
      {
        label: "Results",
        text: (
          <>
            <strong>D30 retention improved from 31% → 52%</strong>. Goal-setting variant outperformed others. Feature added to roadmap permanently.
          </>
        ),
      },
      {
        label: "Metrics Framework",
        text: 'Defined North Star Metric as "Weekly Active Savers" — users who take at least one intentional savings action per week. Aligned entire team OKRs to this.',
      },
      {
        label: "Learnings",
        text: "The product wasn't broken. The contract with the user was. No first-session commitment = no habit formation. Behavioral design > feature design.",
      },
    ],
    outcomes: [
      { val: "+21pp", label: "D30 retention" },
      { val: "52%", label: "Day-30 retention achieved" },
      { val: "3×", label: "Churn improvement, skipped onboarding" },
    ],
  },
  {
    id: "ngo",
    index: "04",
    title: "NGO Platform — Donation & Campaign Engine",
    tags: ["Social Impact", "0→1"],
    blocks: [
      {
        label: "Problem",
        text: (
          <>
            NGO was running donation campaigns manually via WhatsApp. No tracking, no recurring giving, no donor visibility. <strong>Donation completion rate was untracked and estimated below 20%.</strong>
          </>
        ),
      },
      {
        label: "Research",
        text: "Surveyed 45 donors. Top blockers: distrust of manual processes, difficulty knowing where money went, and no easy recurring option.",
      },
      {
        label: "MVP",
        text: "Built campaign landing pages with impact tracking, one-click recurring donations, and transparent fund allocation display. Launched in 10 weeks.",
      },
      {
        label: "Results",
        text: (
          <>
            Donation completion moved to <strong>67%</strong>. Recurring donors grew to 31% of total base. Campaign fundraising increased 4× in first quarter.
          </>
        ),
      },
      {
        label: "Growth",
        text: "Built referral mechanic into thank-you flow — each donor prompted to share campaign. Added 23% incremental reach with zero paid acquisition.",
      },
      {
        label: "Learnings",
        text: (
          <>
            For mission-driven products, <strong>trust is the conversion lever</strong>. Showing impact immediately after donation triggered repeat behavior more than any discount or incentive.
          </>
        ),
      },
    ],
    outcomes: [
      { val: "67%", label: "Donation completion rate" },
      { val: "4×", label: "Quarterly fundraising growth" },
      { val: "+23%", label: "Referral reach, zero cost" },
    ],
  },
  {
    id: "jobs",
    index: "05",
    title: "Job Portal — Employer-Candidate Matching",
    tags: ["Marketplace", "Two-sided"],
    blocks: [
      {
        label: "Problem",
        text: (
          <>
            Two-sided marketplace with poor liquidity. Employers posted but got few applications; candidates browsed but rarely applied. <strong>Median applications per job: 1.8.</strong>
          </>
        ),
      },
      {
        label: "Research",
        text: 'Applied JTBD framework separately to both sides. Employers\' real job: "Help me shortlist quickly." Candidates\' real job: "Tell me if I\'d actually get this role."',
      },
      {
        label: "MVP",
        text: 'Added match-score indicator for candidates (% match to job requirements), and built an employer "shortlist score" sorting algorithm. Reduced time-to-shortlist as the North Star.',
      },
      {
        label: "Results",
        text: (
          <>
            Applications per job increased from <strong>1.8 → 7.4</strong>. Employer shortlist time dropped 44%. Job seeker application rate up 3.2×.
          </>
        ),
      },
      {
        label: "Two-sided Dynamics",
        text: "Fixed the chicken-and-egg by focusing first on employer quality-of-hire signal, which attracted better candidates, which attracted more employers — a proper growth loop.",
      },
      {
        label: "Learnings",
        text: "Matching products fail when they optimize only one side. Confidence signals for candidates are as valuable as shortlisting tools for employers.",
      },
    ],
    outcomes: [
      { val: "7.4×", label: "Avg applications per job" },
      { val: "−44%", label: "Employer shortlist time" },
      { val: "3.2×", label: "Candidate application rate" },
    ],
  },
];

const thinkingCards = [
  {
    type: "Teardown",
    title: "Why Notion's Onboarding Is Both Brilliant and Broken",
    excerpt:
      "Notion has one of the most powerful feature sets in productivity software — and one of the most cognitively overwhelming first-run experiences. Here's what I'd change.",
    footer: "JTBD · Onboarding · Activation",
  },
  {
    type: "Framework",
    title: "How I Use North Star Metrics to Align Entire Teams",
    excerpt:
      "A North Star Metric only works if the entire team — from engineering to finance — can trace their daily work back to it. Most teams skip that step.",
    footer: "NSM · OKRs · Alignment",
  },
  {
    type: "MVP Redesign",
    title: "How I'd Redesign Flutterwave's Payout Experience",
    excerpt:
      "The power-user path is buried three taps deep. A detailed breakdown of friction points and a prioritized roadmap for fixing them in 60 days.",
    footer: "Fintech · UX Critique · Roadmap",
  },
  {
    type: "Strategy",
    title: "RICE vs MoSCoW: When I Use Each and Why",
    excerpt:
      "These aren't competing frameworks — they answer different questions. RICE tells you what to build. MoSCoW tells you what's in scope for this sprint. Knowing the difference saves quarters.",
    footer: "Prioritization · RICE · MoSCoW",
  },
  {
    type: "UX Critique",
    title: "African Super-Apps Are Getting Onboarding Wrong",
    excerpt:
      "OPay, PalmPay, and their peers share a common failure: they treat KYC as a product step instead of a trust-building experience. The fix is simpler than you'd expect.",
    footer: "Africa · Mobile · Trust Patterns",
  },
  {
    type: "Framework",
    title: "Jobs to Be Done: A Practical Field Guide",
    excerpt:
      "How I run JTBD interviews, synthesize hiring jobs, and translate them into product requirements that engineering teams actually find useful.",
    footer: "JTBD · User Research · Discovery",
  },
];

const metricCells = [
  {
    val: "+21pp",
    desc: "Day-30 retention improvement on fintech platform",
    project: "Finance Platform",
  },
  {
    val: "−58%",
    desc: "Reduction in support call volume post-redesign",
    project: "Student Portal",
  },
  {
    val: "−23pp",
    desc: "Job abandonment rate reduction for delivery partners",
    project: "Dispatch",
  },
  {
    val: "4×",
    desc: "Quarterly donation fundraising growth post-launch",
    project: "NGO Platform",
  },
  {
    val: "3.2×",
    desc: "Candidate application rate on job marketplace",
    project: "Job Portal",
  },
  {
    val: "+39pt",
    desc: "Net Promoter Score improvement, driver satisfaction",
    project: "Dispatch",
  },
  {
    val: "67%",
    desc: "Donation completion rate (from estimated <20%)",
    project: "NGO Platform",
  },
  {
    val: "6wk",
    desc: "Average time-to-first-ship across 0→1 launches",
    project: "All Projects",
  },
];

const testimonials = [
  {
    quote:
      "Alex didn't just run discovery — he changed how our whole team thinks about user problems. He brought rigor to a process we thought was already working.",
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
      "The retention numbers speak for themselves, but what really impressed me was how Alex kept our team aligned and moving during a period of significant technical constraints.",
    name: "Kojo Mensah",
    role: "Founder, TechEdu Ghana",
  },
];

const writingPosts = [
  {
    platform: "LinkedIn",
    date: "March 2026",
    title: "The PM Skill Nobody Talks About: Knowing When Not to Build",
    excerpt:
      "The most valuable decision I made last quarter was recommending we kill a feature three weeks into development. Here's the framework I used — and why it was the right call.",
  },
  {
    platform: "Substack",
    date: "February 2026",
    title: "What African Startups Get Wrong About Product-Market Fit",
    excerpt:
      "PMF in markets with infrastructure gaps, trust deficits, and fragmented distribution looks fundamentally different from Silicon Valley playbooks. Here's a framework that actually fits the context.",
  },
  {
    platform: "LinkedIn",
    date: "January 2026",
    title: "My Stakeholder Management Playbook (After Getting It Wrong Twice)",
    excerpt:
      "Early in my career I confused alignment with agreement. They're completely different things — and confusing them will slow your roadmap, damage trust, and eventually get features killed.",
  },
  {
    platform: "Product Essay",
    date: "December 2025",
    title: "On Being a Technical PM Without Being the Tech Lead",
    excerpt:
      "Having a CS background as a PM is a superpower — but only if you know where to use it. I've seen it become a liability when PMs slip into the tech-lead role. The line matters.",
  },
];

const statusCards = [
  {
    label: "Active Experiment",
    title: "Community-Led Onboarding for B2B SaaS",
    desc: "Testing whether peer cohorts reduce time-to-value more effectively than in-app product tours. Running with a 200-user beta over 6 weeks.",
    indicator: "In progress · Week 3 of 6",
  },
  {
    label: "Open to Work",
    title: "Senior PM · Global Roles · Remote-First",
    desc: "Actively exploring Senior or Lead PM roles at product-led companies, with a particular interest in marketplace products, fintech, and growth-stage startups.",
    indicator: "Immediately available",
  },
  {
    label: "Side Project",
    title: "PM Interview Prep Resource for Africa",
    desc: "Building a structured guide specifically calibrated to the PM hiring process at top global and African tech companies — the resource I wish I'd had.",
    indicator: "Early access · April 2026",
  },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? " visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [openCase, setOpenCase] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            Alex Osei
          </a>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li>
              <a href="#work" onClick={closeMenu}>
                Work
              </a>
            </li>
            <li>
              <a href="#thinking" onClick={closeMenu}>
                Thinking
              </a>
            </li>
            <li>
              <a href="#metrics" onClick={closeMenu}>
                Impact
              </a>
            </li>
            <li>
              <a href="#writing" onClick={closeMenu}>
                Writing
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
          </ul>
          <a href="#contact" className="nav-cta">
            Get in touch
          </a>
          <button
            className="nav-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <section id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-dot" />
                <span className="hero-status">Open to Global PM Roles — 2026</span>
              </div>
              <h1 className="hero-headline">
                I turn <em>messy problems</em>
                <br />
                into scalable digital
                <br />
                products people
                <br />
                actually use.
              </h1>
              <p className="hero-sub">
                Product Manager with a technical background. I work at the intersection of{" "}
                <strong>user discovery, systems thinking, and execution</strong> — taking products
                from zero-to-one and from friction to retention.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn-primary">
                  View Case Studies →
                </a>
                <a href="#resume" className="btn-secondary">
                  Download Resume
                </a>
                <a href="#contact" className="btn-secondary">
                  Book a Call
                </a>
              </div>
            </div>

            <div className="hero-portrait-col">
              <div className="hero-portrait">
                <svg
                  className="portrait-silhouette"
                  width="220"
                  height="320"
                  viewBox="0 0 220 320"
                  fill="none"
                >
                  <ellipse cx="110" cy="95" rx="55" ry="60" fill="#D8D8D8" />
                  <path d="M20 320 C20 220 200 220 200 320" fill="#C8C8C8" />
                </svg>
                <div className="portrait-label">
                  <div className="portrait-name">Alex Osei</div>
                  <div className="portrait-title">Product Manager · Lagos / Remote</div>
                </div>
              </div>
              <div className="hero-metrics">
                <div className="hero-metric">
                  <div className="hero-metric-val">5+</div>
                  <div className="hero-metric-desc">Products shipped</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-val">40%</div>
                  <div className="hero-metric-desc">Avg. retention lift</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-val">3</div>
                  <div className="hero-metric-desc">Industries served</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-val">0→1</div>
                  <div className="hero-metric-desc">Launch specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">
              About <em>the product thinker</em>
            </h2>
          </Reveal>
          <div className="about-grid">
            <Reveal>
              <p className="about-intro">
                I don't manage features. I manage outcomes — for users, for businesses, and for
                the teams building them.
              </p>
              <p className="about-body">
                My path to product wasn't linear. I started with{" "}
                <strong>engineering fundamentals</strong>, moved into UX research, and eventually
                landed where I feel most effective: sitting at the intersection of customer pain,
                technical feasibility, and business viability.
              </p>
              <p className="about-body">
                What makes me different is that I can{" "}
                <strong>read a codebase, a user interview, and a P&amp;L</strong> in the same week
                and synthesize them into a clear strategic decision. I've built products for NGOs,
                fintech startups, enterprise logistics, and educational institutions — each
                teaching me a different model of what "success" means.
              </p>
              <p className="about-body">
                I'm rigorous about prioritization, honest about tradeoffs, and relentless about{" "}
                <strong>reducing friction</strong> — for users and for engineering teams.
              </p>
            </Reveal>
            <Reveal>
              <div className="competencies">
                {competencies.map((group) => (
                  <div key={group.label} className="comp-group">
                    <div className="comp-label">{group.label}</div>
                    <div className="comp-items">
                      {group.items.map((item) => (
                        <span key={item} className="comp-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">
              Featured <em>case studies</em>
            </h2>
          </Reveal>
          <div className="case-list">
            {caseStudies.map((cs) => {
              const isOpen = openCase === cs.id;
              return (
                <div key={cs.id} className={`case-item${isOpen ? " open" : ""}`}>
                  <button
                    type="button"
                    className="case-header"
                    onClick={() => setOpenCase(isOpen ? null : cs.id)}
                  >
                    <span className="case-index">{cs.index}</span>
                    <span className="case-title">{cs.title}</span>
                    <div className="case-tags">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="case-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="case-toggle">+</span>
                  </button>
                  <div className="case-body">
                    <div className="case-grid">
                      {cs.blocks.map((block) => (
                        <div key={block.label}>
                          <div className="case-block-label">{block.label}</div>
                          <div className="case-block-text">{block.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="case-outcomes">
                      {cs.outcomes.map((o) => (
                        <div key={o.label} className="case-outcome">
                          <span className="case-outcome-val">{o.val}</span>
                          <span className="case-outcome-label">{o.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="thinking">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">
              Product <em>thinking</em>
            </h2>
          </Reveal>
          <Reveal className="thinking-grid">
            {thinkingCards.map((card) => (
              <div key={card.title} className="thinking-card">
                <div className="thinking-type">{card.type}</div>
                <div className="thinking-title">{card.title}</div>
                <div className="thinking-excerpt">{card.excerpt}</div>
                <div className="thinking-footer">{card.footer}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="metrics">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">04</span>
            <h2 className="section-title">
              Measurable <em>impact</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="metrics-intro">
              Products without numbers are hypotheses. Here's what shipped work actually moved.
            </p>
          </Reveal>
          <Reveal className="metrics-grid">
            {metricCells.map((m) => (
              <div key={m.desc} className="metric-cell">
                <div className="metric-val">{m.val}</div>
                <div className="metric-desc">{m.desc}</div>
                <div className="metric-project">{m.project}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="resume">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">05</span>
            <h2 className="section-title">
              Experience <em>overview</em>
            </h2>
          </Reveal>
          <div className="resume-layout">
            <Reveal>
              <div className="resume-doc">
                <div className="resume-name">Alex Osei</div>
                <div className="resume-tagline">
                  Product Manager · Technical Background · Remote / Global
                </div>

                <div className="resume-section-title">Experience</div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <span className="resume-item-title">Senior Product Manager</span>
                    <span className="resume-item-date">2023 – Present</span>
                  </div>
                  <div className="resume-item-org">Dispatch Logistics — Lagos, Nigeria</div>
                  <div className="resume-item-desc">
                    Led end-to-end PM function across driver-facing and merchant-facing surfaces.
                    Rebuilt driver experience and reduced abandonment by 23pp. Introduced
                    data-driven roadmap process.
                  </div>
                </div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <span className="resume-item-title">Product Manager</span>
                    <span className="resume-item-date">2021 – 2023</span>
                  </div>
                  <div className="resume-item-org">Finbridge (Fintech Startup) — Remote</div>
                  <div className="resume-item-desc">
                    Owned user activation and retention for personal banking app. Led onboarding
                    redesign that improved D30 retention from 31% to 52%. Built experimentation
                    culture from scratch.
                  </div>
                </div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <span className="resume-item-title">Associate Product Manager</span>
                    <span className="resume-item-date">2019 – 2021</span>
                  </div>
                  <div className="resume-item-org">TechEdu — Accra, Ghana</div>
                  <div className="resume-item-desc">
                    Rebuilt university student portal from ground up. Reduced support call volume
                    58% and improved task completion rate from 43% to 91% post-launch.
                  </div>
                </div>

                <div className="resume-section-title">Education</div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <span className="resume-item-title">BSc. Computer Science</span>
                    <span className="resume-item-date">2015 – 2019</span>
                  </div>
                  <div className="resume-item-org">University of Ghana, Legon</div>
                </div>

                <div className="resume-section-title">Certifications &amp; Tools</div>
                <div className="resume-skills">
                  {[
                    "Product School — CPM",
                    "Google Analytics",
                    "Mixpanel",
                    "Figma",
                    "Jira",
                    "Notion",
                    "SQL",
                    "Amplitude",
                  ].map((s) => (
                    <span key={s} className="resume-skill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="resume-sidebar">
              <div className="resume-action">
                <div className="resume-action-title">Download Full Resume</div>
                <div className="resume-action-desc">
                  PDF version includes detailed role descriptions, full metrics, and references
                  available on request.
                </div>
                <a
                  href="#"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Download PDF →
                </a>
              </div>
              <div className="resume-action">
                <div className="resume-action-title">Schedule a Call</div>
                <div className="resume-action-desc">
                  30 or 60-minute conversation about your product challenges, open roles, or
                  collaboration opportunities.
                </div>
                <a
                  href="#contact"
                  className="btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Book via Calendly
                </a>
              </div>
              <div
                className="resume-action"
                style={{ background: "var(--gray-100)", borderColor: "var(--gray-200)" }}
              >
                <div className="comp-label" style={{ marginBottom: 12 }}>
                  Currently seeking
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "var(--gray-600)",
                  }}
                >
                  Senior / Lead PM roles at
                  <br />
                  <strong style={{ color: "var(--black)" }}>product-led startups</strong>,
                  <br />
                  Series A–C or scale-ups.
                  <br />
                  Remote-first preferred.
                  <br />
                  Open to global relocation.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">06</span>
            <h2 className="section-title">
              What <em>others say</em>
            </h2>
          </Reveal>
          <Reveal className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial">
                <div className="testimonial-quote">"{t.quote}"</div>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="writing">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">07</span>
            <h2 className="section-title">
              Writing &amp; <em>thought leadership</em>
            </h2>
          </Reveal>
          <Reveal className="writing-grid">
            {writingPosts.map((post) => (
              <a key={post.title} className="writing-card" href="#">
                <div className="writing-meta">
                  <span className="writing-platform">{post.platform}</span>
                  <span className="writing-date">{post.date}</span>
                </div>
                <div className="writing-title">{post.title}</div>
                <div className="writing-excerpt">{post.excerpt}</div>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="status">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">08</span>
            <h2 className="section-title">
              Currently <em>building</em>
            </h2>
          </Reveal>
          <Reveal className="status-grid">
            {statusCards.map((card) => (
              <div key={card.title} className="status-card">
                <div className="status-card-label">{card.label}</div>
                <div className="status-card-title">{card.title}</div>
                <div className="status-card-desc">{card.desc}</div>
                <div className="status-indicator">
                  <div className="status-dot" />
                  <span className="status-text">{card.indicator}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-num">09</span>
            <h2 className="section-title">
              Let's <em>connect</em>
            </h2>
          </Reveal>
          <div className="contact-layout">
            <Reveal>
              <h3 className="contact-headline">
                If you're building something <em>important</em>,
                <br />I want to hear about it.
              </h3>
              <p className="contact-sub">
                Whether you're a founder, recruiter, or fellow PM — I'm open to conversations
                about interesting product challenges, global opportunities, and collaborations
                worth having.
              </p>
              <div className="contact-response">
                <span className="label">Response time</span>
                <span className="contact-response-text">Usually within 24 hours on weekdays.</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-links">
                <a href="mailto:alex@example.com" className="contact-link">
                  <span>alex@example.com</span>
                  <span className="contact-link-end">
                    <span className="contact-link-meta">Email</span>
                    <span className="contact-link-arrow">↗</span>
                  </span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span>linkedin.com/in/alexosei</span>
                  <span className="contact-link-end">
                    <span className="contact-link-meta">LinkedIn</span>
                    <span className="contact-link-arrow">↗</span>
                  </span>
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span>calendly.com/alexosei</span>
                  <span className="contact-link-end">
                    <span className="contact-link-meta">Book a call</span>
                    <span className="contact-link-arrow">↗</span>
                  </span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span>@alexosei_pm</span>
                  <span className="contact-link-end">
                    <span className="contact-link-meta">X / Twitter</span>
                    <span className="contact-link-arrow">↗</span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container">
        <footer className="site-footer">
          <span className="footer-brand">Alex Osei</span>
          <span className="footer-copy">© 2026 · Product Manager · Lagos / Global</span>
        </footer>
      </div>
    </>
  );
}
