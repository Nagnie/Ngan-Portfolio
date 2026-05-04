import Link from "next/link";
import portfolio from "@/data/portfolio.json";
import type { AcademyCard } from "@/data/types";
import { Reveal } from "./Reveal";
import { AcademyThumb } from "./AcademyThumbs";

function CardLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Academy() {
  const cards = portfolio.academy as AcademyCard[];

  return (
    <section id="academy" className="sec" data-code="§ 02 / PROJECTS">
      <div className="sec-head">
        <h2>
          Academy <em>projects</em>
        </h2>
        <div className="sec-meta">
          Self-initiated &amp; coursework<strong>2022 — 2026</strong>
        </div>
      </div>

      <div className="academy-grid">
        {cards.map((c) => {
          const isInternal = c.link.startsWith("/");
          return (
            <Reveal
              as="article"
              className={`acard${c.featured ? " is-featured" : ""}`}
              key={c.idx}
            >
              <div className="acard-head">
                <span className="idx">{c.idx}</span>
                <span>{c.tag}</span>
              </div>

              <div className="acard-thumb">
                <AcademyThumb kind={c.thumb} />
              </div>

              <div className="acard-title">
                {c.title} {c.titleEm && <em>{c.titleEm}</em>}
              </div>

              <div className="acard-desc">{c.description}</div>

              {c.featured && (
                <div className="acard-featured-meta">
                  {c.period && (
                    <div>
                      <span className="lbl">Period</span>
                      <strong>{c.period}</strong>
                    </div>
                  )}
                  {c.role && (
                    <div>
                      <span className="lbl">Role</span>
                      <strong>{c.role}</strong>
                    </div>
                  )}
                  {c.status && (
                    <div>
                      <span className="lbl">Status</span>
                      <strong className="acard-status">{c.status}</strong>
                    </div>
                  )}
                </div>
              )}

              <div className="acard-foot">
                <span>{c.stack}</span>
                <CardLink href={c.link} external={!isInternal}>
                  {c.linkLabel}
                </CardLink>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
