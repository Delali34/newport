"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { CaseStudy } from "../lib/types";

export default function CaseStudies({ items }: { items: CaseStudy[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="work">
      <div className="container">
        <SectionHeader num="02">
          Selected <em>work</em>
        </SectionHeader>
        <Reveal>
          <div className="case-list">
            {items.map((cs) => {
              const isOpen = openId === cs.id;
              return (
                <div key={cs.id} className={`case-item${isOpen ? " open" : ""}`}>
                  <button
                    type="button"
                    className="case-header"
                    onClick={() => setOpenId(isOpen ? null : cs.id)}
                    aria-expanded={isOpen}
                    aria-controls={`case-${cs.id}-body`}
                  >
                    <span className="case-index">{cs.index}</span>
                    <span className="case-title-block">
                      <span className="case-title">{cs.title}</span>
                      <span className="case-meta">
                        <span>{cs.category}</span>
                        <span className="case-meta-sep">·</span>
                        <span>{cs.scope}</span>
                      </span>
                    </span>
                    <span className="case-preview" aria-hidden>
                      <span className="case-preview-val">{cs.preview.val}</span>
                      <span className="case-preview-label">{cs.preview.label}</span>
                    </span>
                    <span className="case-toggle" aria-hidden>
                      +
                    </span>
                  </button>
                  <div className="case-body" id={`case-${cs.id}-body`}>
                    <div className="case-body-inner">
                      <div className="case-body-content">
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
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
