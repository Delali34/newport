import Image from "next/image";
import type { Profile } from "../lib/types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-dot" />
              <span className="hero-status">{profile.availability}</span>
            </div>
            <h1 className="hero-headline">
              I ship <em>outcomes</em>,
              <br />
              not features.
            </h1>
            <p className="hero-sub">
              Product Manager focused on 0→1 launches, retention, and growth
              loops — for fintech, marketplaces, and mission-driven products.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn-primary">
                Selected work →
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="id-card" aria-label="Profile summary">
            <div className="id-card-name">{profile.name}</div>
            <div className="id-card-role">
              {profile.role} · {profile.location}
            </div>

            <div className="id-card-row id-card-row-open">
              <span className="id-card-row-label">Open to</span>
              <span className="id-card-row-value">Junior PM roles · 2026</span>
            </div>
            {profile.currentlyAt && (
              <div className="id-card-row">
                <span className="id-card-row-label">Currently</span>
                <span className="id-card-row-value">{profile.currentlyAt}</span>
              </div>
            )}
            <div className="id-card-row">
              <span className="id-card-row-label">Past</span>
              <span className="id-card-row-value">
                {profile.past.join(" · ")}
              </span>
            </div>

            <div className="id-card-stats">
              <div className="id-card-stats-col">
                {profile.heroStats.map((s) => (
                  <div key={s.desc}>
                    <div className="id-card-stat-val">{s.val}</div>
                    <div className="id-card-stat-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
              <div className="id-card-photo">
                <Image
                  src="/ernest-portrait.jpeg"
                  alt={profile.name}
                  width={480}
                  height={600}
                  priority
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
