import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { Social } from "../lib/types";

type Props = {
  socials: Social[];
};

export default function Contact({ socials }: Props) {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeader num="08">
          Let&rsquo;s <em>connect</em>
        </SectionHeader>
        <div className="contact-layout">
          <Reveal>
            <h3 className="contact-headline">
              If you&rsquo;re building something <em>important</em>,
              <br />I want to hear about it.
            </h3>
            <p className="contact-sub">
              Founder, recruiter, or fellow PM — I&rsquo;m open to conversations about hard
              product problems, global roles, and collaborations worth having.
            </p>
            <div className="contact-response">
              <span className="label">Response time</span>
              <span className="contact-response-text">Usually within 24 hours on weekdays.</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-links">
              {socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="contact-link"
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <span>{s.handle}</span>
                    <span className="contact-link-end">
                      <span className="contact-link-meta">{s.meta}</span>
                      <span className="contact-link-arrow" aria-hidden>
                        ↗
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
