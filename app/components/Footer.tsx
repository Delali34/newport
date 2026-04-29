import type { Profile } from "../lib/types";

export default function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <footer className="site-footer">
        <span className="footer-brand">{profile.name}</span>
        <div className="footer-links">
          {profile.socials.slice(0, 3).map((s) => {
            const external = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {s.label}
              </a>
            );
          })}
        </div>
        <span className="footer-copy">
          © {year} · {profile.role} · {profile.location}
        </span>
      </footer>
    </div>
  );
}
