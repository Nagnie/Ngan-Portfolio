import portfolio from "@/data/portfolio.json";
import { Magnetic } from "./Magnetic";

export function Contact() {
  const { contact } = portfolio;

  return (
    <section id="contact" className="sec" data-code="§ 05 / CONTACT">
      <h2 className="cta">
        {contact.headline.map((part, i) => (
          <span key={i}>
            {part.italic ? <em>{part.text}</em> : part.text}
            {i < contact.headline.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <Magnetic strength={0.25}>
        <a className="cta-mail" href={`mailto:${contact.email}`}>
          {contact.email} →
        </a>
      </Magnetic>

      <div className="contact-grid">
        {contact.links.map((l) => (
          <Magnetic key={l.href} strength={0.2} className="contact-cell">
            <a href={l.href} target="_blank" rel="noreferrer">
              <span className="lbl">{l.label}</span>
              <span className="val">{l.value}</span>
            </a>
          </Magnetic>
        ))}
      </div>

      <footer className="coda">
        <div>{contact.footer.left}</div>
        <div>{contact.footer.right}</div>
      </footer>
    </section>
  );
}
