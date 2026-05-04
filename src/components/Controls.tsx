"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";
type Accent = "lemon" | "blue" | "magenta";

const THEME_KEY = "pf-theme";
const ACCENT_KEY = "pf-accent";

const ACCENTS: { id: Accent; label: string }[] = [
  { id: "lemon", label: "Lemon" },
  { id: "blue", label: "Blue" },
  { id: "magenta", label: "Magenta" },
];

export function Controls() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [accent, setAccent] = useState<Accent>("lemon");

  useEffect(() => {
    const r = document.documentElement;
    setTheme((r.getAttribute("data-theme") as Theme) || "dark");
    setAccent((r.getAttribute("data-accent") as Accent) || "lemon");
  }, []);

  const applyTheme = (t: Theme) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(THEME_KEY, t);
    setTheme(t);
  };

  const applyAccent = (a: Accent) => {
    document.documentElement.setAttribute("data-accent", a);
    localStorage.setItem(ACCENT_KEY, a);
    setAccent(a);
  };

  return (
    <div className="nav-controls">
      <div className="nav-ctrl-row">
        <span className="nav-ctrl-lbl">MODE</span>
        <div className="nav-ctrl-group">
          <button
            type="button"
            className={`nav-ctrl${theme === "dark" ? " is" : ""}`}
            onClick={() => applyTheme("dark")}
            aria-label="Dark mode"
          >
            ●
          </button>
          <button
            type="button"
            className={`nav-ctrl${theme === "light" ? " is" : ""}`}
            onClick={() => applyTheme("light")}
            aria-label="Light mode"
          >
            ○
          </button>
        </div>
      </div>
      <div className="nav-ctrl-row">
        <span className="nav-ctrl-lbl">HUE</span>
        <div className="nav-ctrl-group">
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              className={`nav-swatch${accent === a.id ? " is" : ""}`}
              data-accent={a.id}
              onClick={() => applyAccent(a.id)}
              title={a.label}
              aria-label={a.label}
            >
              <span className="dot" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
