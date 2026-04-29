import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { StatusCard } from "../lib/types";

export default function Status({ cards }: { cards: StatusCard[] }) {
  return (
    <section id="status">
      <div className="container">
        <SectionHeader num="04">
          Currently <em>building</em>
        </SectionHeader>
        <Reveal>
          <div className="status-grid">
            {cards.map((card) => (
              <div key={card.title} className="status-card">
                <div className="status-card-label">{card.label}</div>
                <div className="status-card-title">{card.title}</div>
                <div className="status-card-desc">{card.desc}</div>
                <div className="status-indicator">
                  <span className="status-dot" />
                  <span className="status-text">{card.indicator}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
