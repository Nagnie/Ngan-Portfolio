"use client";

import { useEffect, useRef } from "react";
import portfolio from "@/data/portfolio.json";

export function Marquee() {
  const { marquee } = portfolio;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const track = trackRef.current;
      if (!track) return;
      const trigger = ScrollTrigger.create({
        trigger: track.parentElement!,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          track.style.animationDuration = `${30 - self.getVelocity() * 0.002}s`;
        },
      });
      cleanup = () => trigger.kill();
    })();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  const renderRow = () => (
    <span>
      {marquee.map((word, i) => (
        <span key={i} style={{ display: "contents" }}>
          {word}
          {i < marquee.length - 1 ? <span className="plus">+</span> : <span className="plus">+ </span>}
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        {renderRow()}
        {renderRow()}
      </div>
    </div>
  );
}
