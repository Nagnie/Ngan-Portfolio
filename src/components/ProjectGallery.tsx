"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { ThemedSlides } from "@/data/galleryImages";

type Mode = "light" | "dark";

export function ProjectGallery({ slides }: { slides: ThemedSlides }) {
  const [mode, setMode] = useState<Mode>(slides.light.length ? "light" : "dark");
  const [active, setActive] = useState(0);

  const current = slides[mode];

  // Keep the active index valid when switching between image sets.
  useEffect(() => {
    setActive((a) => (a < current.length ? a : 0));
  }, [current.length]);

  const prev = useCallback(
    () => setActive((a) => (a - 1 + current.length) % current.length),
    [current.length],
  );
  const next = useCallback(
    () => setActive((a) => (a + 1) % current.length),
    [current.length],
  );

  useEffect(() => {
    if (current.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, current.length]);

  const modes: Mode[] = ["light", "dark"];
  const isPortrait = slides.orientation === "portrait";
  const objectFit = isPortrait ? "contain" : "cover";

  return (
    <div className={`pl-gal${isPortrait ? " is-portrait" : ""}`}>
      {/* Theme toggle */}
      <div className="pl-gal-toolbar">
        <span className="pl-gal-mode-lbl">MODE</span>
        <div className="pl-gal-mode-group">
          {modes.map((m) => (
            <button
              key={m}
              type="button"
              className={`pl-gal-mode${mode === m ? " is-active" : ""}`}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
            >
              {m === "dark" ? "● Dark" : "○ Light"}
            </button>
          ))}
        </div>
      </div>

      {current.length === 0 ? (
        <div className="pl-gal-empty">
          <span>No {mode} screenshots yet</span>
        </div>
      ) : (
        <>
          {/* Main image */}
          <div className="pl-gal-main">
            {current.map((s, i) => (
              <div key={i} className={`pl-gal-frame${i === active ? " is-active" : ""}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ objectFit, objectPosition: isPortrait ? "center" : "top center" }}
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
              <span className="pl-gal-alt">{current[active]?.alt}</span>
              <span className="pl-gal-num">
                {String(active + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(current.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div
            className="pl-gal-strip"
            style={{ gridTemplateColumns: `repeat(${current.length}, 1fr)` }}
          >
            {current.map((s, i) => (
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
                  style={{ objectFit, objectPosition: isPortrait ? "center" : "top center" }}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
