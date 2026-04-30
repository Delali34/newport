export type Profile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  socials: Social[];
  currentlyAt?: string;
  past: string[];
  heroStats: Stat[];
};

export type Social = {
  label: string;
  href: string;
  handle: string;
  meta: string;
};

export type Stat = {
  val: string;
  desc: string;
};

export type CompetencyGroup = {
  label: string;
  items: string[];
};

export type CaseBlockData = {
  label: string;
  text: string;
};

export type CaseImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  category: string;
  scope: string;
  liveUrl?: string;
  preview: { val: string; label: string };
  cover?: CaseImage;
  blocks: CaseBlockData[];
  images?: CaseImage[];
  outcomes: { val: string; label: string }[];
};

export type MetricCell = {
  val: string;
  desc: string;
  project: string;
};

export type ResumeItem = {
  title: string;
  date: string;
  org: string;
  desc?: string;
};

export type Resume = {
  experience: ResumeItem[];
  education: ResumeItem[];
  skills: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type WritingPost = {
  type: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  footer: string;
};

export type StatusCard = {
  label: string;
  title: string;
  desc: string;
  indicator: string;
};
