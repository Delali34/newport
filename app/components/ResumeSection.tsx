import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { Profile, Resume } from "../lib/types";

type Props = {
  profile: Profile;
  resume: Resume;
};

export default function ResumeSection({ profile, resume }: Props) {
  return (
    <section id="resume">
      <div className="container">
        <SectionHeader num="05">
          Experience <em>overview</em>
        </SectionHeader>
        <div className="resume-layout">
          <Reveal>
            <div className="resume-doc">
              <div className="resume-name">{profile.name}</div>
              <div className="resume-tagline">
                {profile.role} · {profile.location}
              </div>

              <div className="resume-section-title">Experience</div>
              {resume.experience.map((item) => (
                <div key={item.org + item.date} className="resume-item">
                  <div className="resume-item-header">
                    <span className="resume-item-title">{item.title}</span>
                    <span className="resume-item-date">{item.date}</span>
                  </div>
                  <div className="resume-item-org">{item.org}</div>
                  {item.desc && <div className="resume-item-desc">{item.desc}</div>}
                </div>
              ))}

              <div className="resume-section-title">Tools &amp; certifications</div>
              <div className="resume-skills">
                {resume.skills.map((s) => (
                  <span key={s} className="resume-skill">
                    {s}
                  </span>
                ))}
              </div>

              <div className="resume-section-title">Education</div>
              <div className="resume-education-line">
                {resume.education.map((item, i) => (
                  <span key={item.org + item.date}>
                    {i > 0 && <span className="resume-education-sep"> · </span>}
                    <span className="resume-education-org">{item.org}</span>
                    <span className="resume-education-meta">
                      {" "}
                      — {item.title} ({item.date})
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="resume-sidebar">
              <div className="resume-action">
                <div className="resume-action-title">Download full resume</div>
                <div className="resume-action-desc">
                  PDF version with detailed role descriptions, full metrics, and references on
                  request.
                </div>
                <a
                  href="/Ernest_Delali_Resume.pdf"
                  download
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Download PDF →
                </a>
              </div>
              <div className="resume-action">
                <div className="resume-action-title">Schedule a call</div>
                <div className="resume-action-desc">
                  30 or 60-minute conversation about product challenges, open roles, or
                  collaborations.
                </div>
                <a
                  href="#contact"
                  className="btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Book via Calendly
                </a>
              </div>
              <div className="resume-action resume-seeking">
                <div className="resume-action-title">Currently seeking</div>
                <div className="resume-seeking-text">
                  Junior or Associate PM roles at <strong>product-led startups</strong>, Series
                  A–C or scale-ups. Remote-first preferred. Open to global relocation.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
