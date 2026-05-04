import portfolio from "@/data/portfolio.json";
import type { AcademyCard } from "@/data/types";
import { Reveal } from "./Reveal";
import { AcademyThumb } from "./AcademyThumbs";

export function Academy() {
  const cards = portfolio.academy as AcademyCard[];

  return (
    <section id="academy" className="sec" data-code="§ 02 / PROJECTS">
      <div className="sec-head">
        <h2>
          Academy <em>projects</em>
        </h2>
        <div className="sec-meta">
          Self-initiated &amp; coursework<strong>2022 — 2025</strong>
        </div>
      </div>

      <div className="academy-grid">
        {cards.map((c) => (
          <Reveal as="article" className="acard" key={c.idx}>
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
            <div className="acard-foot">
              <span>{c.stack}</span>
              <a href={c.link} target="_blank" rel="noreferrer">
                {c.linkLabel}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
