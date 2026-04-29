import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Metrics from "./components/Metrics";
import Status from "./components/Status";
import ResumeSection from "./components/ResumeSection";
import Testimonials from "./components/Testimonials";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  profile,
  aboutCopy,
  competencies,
  caseStudies,
  metrics,
  metricsIntro,
  resume,
  testimonials,
  writing,
  status,
} from "./lib/data";

export default function Home() {
  return (
    <>
      <Nav brand={profile.name} />
      <Hero profile={profile} />
      <About copy={aboutCopy} competencies={competencies} />
      <CaseStudies items={caseStudies} />
      <Metrics intro={metricsIntro} cells={metrics} />
      <Status cards={status} />
      <ResumeSection profile={profile} resume={resume} />
      <Testimonials items={testimonials} />
      <Writing posts={writing} />
      <Contact socials={profile.socials} />
      <Footer profile={profile} />
    </>
  );
}
