import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { Testimonial } from "../lib/types";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials">
      <div className="container">
        <SectionHeader num="06">
          What <em>others say</em>
        </SectionHeader>
        <Reveal>
          <div className="testimonials-grid">
            {items.map((t) => (
              <div key={t.name} className="testimonial">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
