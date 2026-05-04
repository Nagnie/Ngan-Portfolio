"use client";

import { useEffect, useRef } from "react";
import portfolio from "@/data/portfolio.json";

export function Hero() {
  const { hero } = portfolio;
  const titleRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      ctx = gsap.context(() => {
        const inners = titleRef.current?.querySelectorAll(".inner") ?? [];
        gsap.set(inners, { yPercent: 110 });
        gsap.to(inners, {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.15,
        });
        if (topRef.current) {
          gsap.from(topRef.current, { opacity: 0, y: 10, duration: 0.8, delay: 0.1 });
        }
        if (mainRef.current) {
          gsap.from(mainRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.9,
            ease: "power3.out",
          });
        }
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section id="hero" className="sec">
      <div className="hero-top" ref={topRef}>
        <span>[ {hero.role} ]</span>
        <span>
          {hero.from} ↗ {hero.to}
        </span>
      </div>

      <h1 className="hero-title" ref={titleRef}>
        {hero.title.map((part, i) => (
          <span key={i} className="line">
            <span className={`inner${part.outline ? " outline" : ""}`}>
              {part.italic ? <em>{part.text}</em> : part.text}
            </span>
          </span>
        ))}
      </h1>

      <div className="hero-main" ref={mainRef}>
        <div className="avatar-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="avatar" src={hero.avatarSrc} alt={portfolio.meta.name} />
          <div className="avatar-tag">{hero.avatarTag}</div>
        </div>

        <p className="hero-bio" dangerouslySetInnerHTML={{ __html: hero.bio }} />

        <div className="hero-stats">
          {hero.stats.map((s) => (
            <div key={s.label}>
              {s.label}
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
