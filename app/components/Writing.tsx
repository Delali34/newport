import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import type { WritingPost } from "../lib/types";

function Card({ post }: { post: WritingPost }) {
  const inner = (
    <>
      <div className="writing-meta">
        <span className="writing-type">{post.type}</span>
        <span className="writing-date">{post.date}</span>
        <span className="writing-date">·</span>
        <span className="writing-date">{post.readTime}</span>
      </div>
      <div className="writing-title">{post.title}</div>
      <p className="writing-excerpt">{post.excerpt}</p>
      <div className="writing-footer">
        <span>{post.footer}</span>
        <span aria-hidden>→</span>
      </div>
    </>
  );

  const external = post.href && /^https?:\/\//.test(post.href);
  if (external) {
    return (
      <a
        className="writing-card"
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link className="writing-card" href={`/writing/${post.slug}`}>
      {inner}
    </Link>
  );
}

export default function Writing({ posts }: { posts: WritingPost[] }) {
  return (
    <section id="writing">
      <div className="container">
        <SectionHeader num="06">
          Writing &amp; <em>frameworks</em>
        </SectionHeader>
        <Reveal>
          <div className="writing-grid">
            {posts.map((post) => (
              <Card key={post.slug} post={post} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
