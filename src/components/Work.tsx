import portfolio from "@/data/portfolio.json";
import { Reveal } from "./Reveal";
import { ProjectVideo } from "./ProjectVideo";

export function Work() {
  const { work } = portfolio;

  return (
    <section id="work" className="sec" data-code="§ 01 / WORK">
      <div className="sec-head">
        <h2>
          Work <em>experience</em>
        </h2>
        <div className="sec-meta">
          Current engagement<strong>{work.period}</strong>
        </div>
      </div>

      <Reveal as="article" className="xp">
        <div className="xp-meta">
          {work.from}
          <br />
          —<br />
          {work.to}
          <strong>{work.duration}</strong>
        </div>
        <div className="xp-body">
          <h3>
            {work.company} <em>/ {work.role}</em>
          </h3>
          <div className="xp-role">{work.tagline}</div>

          <div className="xp-tags">
            {work.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="plist">
            {work.projects.map((p) => (
              <div className="project" key={p.num}>
                <div className="pnum">{p.num}</div>
                <div>
                  <h4>
                    {p.title} {p.titleEm && <em>{p.titleEm}</em>}
                  </h4>
                  <p>{p.description}</p>
                  {p.video && p.videoLabel && (
                    <ProjectVideo src={p.video} label={p.videoLabel} />
                  )}
                  {p.link && (
                    <a
                      className="ext-link"
                      href={p.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
