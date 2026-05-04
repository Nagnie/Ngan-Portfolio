"use client";

import { useEffect, useState } from "react";
import portfolio from "@/data/portfolio.json";
import { Controls } from "./Controls";

export function SideNav() {
  const { nav, navFoot, meta } = portfolio;
  const [activeId, setActiveId] = useState(nav[0]?.id);
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((s): s is HTMLElement => Boolean(s));

    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];
      for (const s of sections) {
        if (s.offsetTop <= y) current = s;
      }
      if (current) setActiveId(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav]);

  useEffect(() => {
    const tick = () => {
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: meta.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setClock(new Intl.DateTimeFormat("en-GB", opts).format(new Date()));
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [meta.timezone]);

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 40, behavior: "smooth" });
  };

  return (
    <aside className="nav">
      <div className="brand">
        <div className="brand-dot" />
        <div>{meta.brand}</div>
      </div>

      <ul className="nav-links">
        {nav.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === activeId ? "active" : ""}
              onClick={(e) => onLinkClick(e, item.id)}
            >
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <Controls />

      <div className="nav-foot">
        {navFoot.map((f) => (
          <a key={f.href} href={f.href} target="_blank" rel="noreferrer">
            {f.label}
          </a>
        ))}
        <div style={{ marginTop: 14, color: "var(--muted)" }}>
          {meta.location}
          <br />
          Local <span>{clock}</span>
        </div>
      </div>
    </aside>
  );
}
