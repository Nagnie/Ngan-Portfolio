import portfolio from "@/data/portfolio.json";

export function StatusBar() {
  const { meta } = portfolio;
  return (
    <div className="statusbar">
      <div>
        Portfolio / <strong>{meta.shortName}</strong> · {meta.version}
      </div>
      <div className="avail">{meta.availability}</div>
    </div>
  );
}
