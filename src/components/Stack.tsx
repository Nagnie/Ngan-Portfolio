import portfolio from "@/data/portfolio.json";

export function Stack() {
  const { stack } = portfolio;

  return (
    <section id="stack" className="sec" data-code="§ 03 / STACK">
      <div className="sec-head">
        <h2>
          Tools I <em>reach for</em>
        </h2>
        <div className="sec-meta">
          Daily drivers<strong>Updated 04 / 2026</strong>
        </div>
      </div>

      <div className="stack-grid">
        {stack.map((col) => (
          <div className="stack-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
