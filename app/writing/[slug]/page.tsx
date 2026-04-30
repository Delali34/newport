import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { profile, writing } from "../../lib/data";
import { articles } from "../../lib/articles";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return writing.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = writing.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — ${profile.name}`,
    description: post.excerpt,
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const post = writing.find((p) => p.slug === params.slug);
  const body = articles[params.slug];
  if (!post || !body) notFound();

  // After the notFound() guard, both are defined. TypeScript's narrowing
  // doesn't cross the function boundary, so we re-assert for clarity.
  const safe = post!;
  const otherPosts = writing.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      <Nav brand={profile.name} />

      <article className="article">
        <div className="container article-container">
          <Link href="/#writing" className="article-back">
            <span aria-hidden>←</span> Back to writing
          </Link>

          <header className="article-header">
            <div className="article-meta">
              <span className="writing-type">{safe.type}</span>
              <span className="writing-date">{safe.date}</span>
              <span className="writing-date">·</span>
              <span className="writing-date">{safe.readTime}</span>
            </div>
            <h1 className="article-title">{safe.title}</h1>
            <p className="article-lede">{safe.excerpt}</p>
            <div className="article-byline">
              By {profile.name} · {profile.role}
            </div>
          </header>

          <div className="prose">{body}</div>

          <div className="article-footer">
            <div className="article-cta">
              <div className="article-cta-title">
                Liked this? I&rsquo;m open to <em>Junior PM roles</em>.
              </div>
              <p className="article-cta-desc">
                I write about shipping fast, scope discipline, and the engineering details that
                make products actually work. If you&rsquo;re hiring or want to chat about a
                product problem, get in touch.
              </p>
              <div className="article-cta-actions">
                <a href="/#contact" className="btn-primary">
                  Get in touch →
                </a>
                <Link href="/#work" className="btn-secondary">
                  See selected work
                </Link>
              </div>
            </div>

            {otherPosts.length > 0 && (
              <div className="article-more">
                <div className="comp-label" style={{ marginBottom: 16 }}>
                  More writing
                </div>
                <div className="article-more-list">
                  {otherPosts.map((p) => (
                    <Link key={p.slug} href={`/writing/${p.slug}`} className="article-more-item">
                      <div className="article-more-type">{p.type}</div>
                      <div className="article-more-title">{p.title}</div>
                      <div className="article-more-meta">
                        {p.date} · {p.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer profile={profile} />
    </>
  );
}
