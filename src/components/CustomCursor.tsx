"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR =
  'a, button, [data-cursor="hover"], .video-placeholder, .nav-swatch, .nav-ctrl';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !dotRef.current || !ringRef.current) return;

      document.documentElement.classList.add("has-custom-cursor");

      const dot = dotRef.current;
      const ring = ringRef.current;

      gsap.set([dot, ring], { xPercent: -50, yPercent: -50, force3D: true });

      const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
      const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

      const onMove = (e: MouseEvent) => {
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
      };

      const onOver = (e: MouseEvent) => {
        const t = e.target as Element | null;
        if (t?.closest?.(HOVER_SELECTOR)) {
          ring.classList.add("is-hover");
          dot.classList.add("is-hover");
        }
      };
      const onOut = (e: MouseEvent) => {
        const t = e.target as Element | null;
        if (t?.closest?.(HOVER_SELECTOR)) {
          ring.classList.remove("is-hover");
          dot.classList.remove("is-hover");
        }
      };
      const onDown = () => ring.classList.add("is-down");
      const onUp = () => ring.classList.remove("is-down");
      const onLeave = () => {
        ring.style.opacity = "0";
        dot.style.opacity = "0";
      };
      const onEnter = () => {
        ring.style.opacity = "";
        dot.style.opacity = "";
      };

      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);
      window.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);
      document.addEventListener("mouseleave", onLeave);
      document.addEventListener("mouseenter", onEnter);

      cleanup = () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
        window.removeEventListener("mousedown", onDown);
        window.removeEventListener("mouseup", onUp);
        document.removeEventListener("mouseleave", onLeave);
        document.removeEventListener("mouseenter", onEnter);
        document.documentElement.classList.remove("has-custom-cursor");
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
