import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { CompetencyGroup } from "../lib/types";

type Props = {
  copy: { intro: string; body: string[] };
  competencies: CompetencyGroup[];
};

export default function About({ copy, competencies }: Props) {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader num="01">
          About <em>the work</em>
        </SectionHeader>
        <div className="about-grid">
          <Reveal>
            <p className="about-intro">{copy.intro}</p>
            {copy.body.map((p, i) => (
              <p key={i} className="about-body">
                {p}
              </p>
            ))}
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
  );
}
