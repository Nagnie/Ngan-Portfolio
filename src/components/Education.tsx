import portfolio from "@/data/portfolio.json";
import { Reveal } from "./Reveal";

export function Education() {
  const { edu } = portfolio;

  return (
    <section id="edu" className="sec" data-code="§ 04 / EDU">
      <div className="sec-head">
        <h2>
          Education <em>&amp; bg</em>
        </h2>
        <div className="sec-meta">
          Current<strong>Final year · 2026</strong>
        </div>
      </div>

      <Reveal className="edu">
        <div>
          <h3>
            {edu.school} <em>{edu.schoolEm}</em>
          </h3>
          <div className="edu-meta">{edu.degree}</div>
        </div>
        <div className="edu-gpa">
          {edu.gpa}
          <small>{edu.gpaSub}</small>
        </div>
      </Reveal>
    </section>
  );
}
