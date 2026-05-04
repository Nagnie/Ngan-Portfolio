"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  strength?: number;
  className?: string;
};

export function Magnetic({ children, strength = 0.35, className }: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const el = wrapRef.current;
    if (!el) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        xTo((e.clientX - cx) * strength);
        yTo((e.clientY - cy) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      cleanup = () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [strength]);

  return (
    <span ref={wrapRef} className={`magnetic${className ? ` ${className}` : ""}`}>
      {children}
    </span>
  );
}
