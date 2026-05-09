import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import portfolio from "@/data/portfolio.json";
import type { AcademyCard } from "@/data/types";
import { StatusBar } from "@/components/StatusBar";
import { CustomCursor } from "@/components/CustomCursor";
import { AcademyThumb } from "@/components/AcademyThumbs";
import { ProlearningGallery } from "@/components/ProlearningGallery";

type Params = { slug: string };

const cards = portfolio.academy as AcademyCard[];

export function generateStaticParams(): Params[] {
  return cards.filter((c) => c.slug).map((c) => ({ slug: c.slug as string }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const card = cards.find((c) => c.slug === params.slug);
  if (!card) return { title: "Project not found" };
  return {
    title: `${card.title} · ${portfolio.meta.name}`,
    description: card.description,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const card = cards.find((c) => c.slug === params.slug);
  if (!card) notFound();

  return (
    <>
      <CustomCursor />
      <StatusBar />

      <main className="proj-page">
        <Link href="/#academy" className="proj-back">Back to projects</Link>

        <header className="proj-hero">
          <div>
            <div className="tag">{card.tag}</div>
            <h1>
              {card.title} {card.titleEm && <em>{card.titleEm}</em>}
            </h1>
            <p className="sub">{card.description}</p>
          </div>

          <aside className="proj-hero-side">
            {card.period && (
              <div>
                Period
                <strong>{card.period}</strong>
              </div>
            )}
            {card.role && (
              <div>
                Role
                <strong>{card.role}</strong>
              </div>
            )}
            {card.status && (
              <div>
                Status
                <strong className="status-dot">{card.status}</strong>
              </div>
            )}
          </aside>
        </header>

        <section className="proj-section" aria-labelledby="preview">
          <h2 id="preview">
            What it <em>looks like</em>
          </h2>
          {card.slug === "prolearning" ? (
            <ProlearningGallery />
          ) : (
            <div className="acard-thumb" style={{ maxWidth: 900 }}>
              <AcademyThumb kind={card.thumb} />
            </div>
          )}
        </section>

        {card.overview && card.overview.length > 0 && (
          <section className="proj-section proj-overview" aria-labelledby="overview">
            <h2 id="overview">
              The <em>idea</em>
            </h2>
            {card.overview.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {card.features && card.features.length > 0 && (
          <section className="proj-section" aria-labelledby="features">
            <h2 id="features">
              Key <em>features</em>
            </h2>
            <div className="proj-features">
              {card.features.map((f, i) => (
                <div className="proj-feature" key={f.title}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {card.techStack && card.techStack.length > 0 && (
          <section className="proj-section" aria-labelledby="tech">
            <h2 id="tech">
              Tech <em>stack</em>
            </h2>
            <div className="proj-tech">
              {card.techStack.map((g) => (
                <div className="proj-tech-col" key={g.label}>
                  <h4>// {g.label}</h4>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {card.contributions && (
          <section className="proj-section" aria-labelledby="role">
            <h2 id="role">
              My <em>role</em>
            </h2>
            <p className="proj-role">{card.contributions}</p>
          </section>
        )}

        <section className="proj-section" aria-labelledby="links" style={{ borderBottom: 0 }}>
          <h2 id="links">
            Links <em>↗</em>
          </h2>
          <div className="proj-links">
            {card.live && (
              <a href={card.live} target="_blank" rel="noreferrer">
                <span className="lbl">// Live</span>
                <span className="val">{card.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                <span className="arr">VISIT →</span>
              </a>
            )}
            {card.repos?.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noreferrer">
                <span className="lbl">// Source</span>
                <span className="val">{r.label}</span>
                <span className="arr">GITHUB →</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
