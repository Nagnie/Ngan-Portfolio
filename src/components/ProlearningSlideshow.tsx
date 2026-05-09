"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const SLIDES: { src: string; alt: string }[] = [
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.43.55 copy.png").default, alt: "ProLearning — Home" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.49.53 copy.png").default, alt: "ProLearning — Flashcards" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.52.53.png").default, alt: "ProLearning — Study set" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.53.50.png").default, alt: "ProLearning — Roadmap" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.54.38.png").default, alt: "ProLearning — Review" },
];

const INTERVAL = 3800;

export function ProlearningSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerKey = useRef(0);

  const goTo = (i: number) => {
    setCurrent(i);
    timerKey.current += 1;
  };

  const next = () => goTo((current + 1) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
      timerKey.current += 1;
    }, INTERVAL);
    return () => clearTimeout(id);
  }, [current, paused]);

  return (
    <div
      className="pl-show"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={next}
      role="button"
      aria-label="Next screenshot"
    >
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} className={`pl-slide${i === current ? " is-active" : ""}`}>
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Top overlay */}
      <div className="pl-overlay-top">
        <span className="pl-label">PROLEARNING · SCREENSHOTS</span>
        <span className="pl-counter">
          {String(current + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bars */}
      <div className="pl-bars">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className="pl-bar-track"
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              key={`${i}-${timerKey.current}`}
              className={`pl-bar-fill${i === current && !paused ? " is-running" : ""}`}
              style={{
                width: i < current ? "100%" : i > current ? "0%" : undefined,
              }}
            />
          </button>
        ))}
      </div>

      {/* Pause hint */}
      {paused && (
        <div className="pl-pause-hint">
          <span>PAUSED · CLICK TO ADVANCE</span>
        </div>
      )}
    </div>
  );
}
