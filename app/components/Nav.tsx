"use client";

import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#metrics", label: "Impact" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
];

export default function Nav({ brand }: { brand: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          {brand}
        </a>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" onClick={close}>
          Get in touch
        </a>
        <button
          className="nav-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
