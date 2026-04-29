import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { MetricCell } from "../lib/types";

type Props = {
  intro: string;
  cells: MetricCell[];
};

export default function Metrics({ intro, cells }: Props) {
  return (
    <section id="metrics">
      <div className="container">
        <SectionHeader num="03">
          Measurable <em>impact</em>
        </SectionHeader>
        <Reveal>
          <p className="metrics-intro">{intro}</p>
        </Reveal>
        <Reveal>
          <div className="metrics-grid">
            {cells.map((m) => (
              <div key={m.desc} className="metric-cell">
                <div className="metric-val">{m.val}</div>
                <div className="metric-desc">{m.desc}</div>
                <div className="metric-project">{m.project}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
