import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { WritingPost } from "../lib/types";

export default function Writing({ posts }: { posts: WritingPost[] }) {
  return (
    <section id="writing">
      <div className="container">
        <SectionHeader num="07">
          Writing &amp; <em>frameworks</em>
        </SectionHeader>
        <Reveal>
          <div className="writing-grid">
            {posts.map((post) => (
              <a key={post.title} className="writing-card" href={post.href}>
                <div className="writing-meta">
                  <span className="writing-type">{post.type}</span>
                  <span className="writing-date">{post.date}</span>
                </div>
                <div className="writing-title">{post.title}</div>
                <p className="writing-excerpt">{post.excerpt}</p>
                <div className="writing-footer">
                  <span>{post.footer}</span>
                  <span aria-hidden>→</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
