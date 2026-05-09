"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const SLIDES: { src: string; alt: string }[] = [
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.43.55 copy.png").default, alt: "ProLearning — Home" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.49.53 copy.png").default, alt: "ProLearning — Flashcards" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.52.53.png").default, alt: "ProLearning — Study set" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.53.50.png").default, alt: "ProLearning — Roadmap" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.54.38.png").default, alt: "ProLearning — Review" },
];

export function ProlearningGallery() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % SLIDES.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="pl-gal">
      {/* Main image */}
      <div className="pl-gal-main">
        {SLIDES.map((s, i) => (
          <div key={i} className={`pl-gal-frame${i === active ? " is-active" : ""}`}>
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority={i === 0}
            />
          </div>
        ))}

        <button className="pl-gal-arrow pl-gal-arrow--prev" onClick={prev} aria-label="Previous">
          ←
        </button>
        <button className="pl-gal-arrow pl-gal-arrow--next" onClick={next} aria-label="Next">
          →
        </button>

        <div className="pl-gal-badge">
          <span className="pl-gal-alt">{SLIDES[active].alt}</span>
          <span className="pl-gal-num">
            {String(active + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="pl-gal-strip">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            className={`pl-gal-thumb${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={s.alt}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="200px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
