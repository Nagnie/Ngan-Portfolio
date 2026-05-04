"use client";

import { useEffect, useRef } from "react";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({ as = "div", className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !ref.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const tween = gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
