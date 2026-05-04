"use client";

import { useState } from "react";

type Props = { src: string; label: string };

export function ProjectVideo({ src, label }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="proj-video"
      onClick={() => setActive(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setActive(true);
      }}
    >
      {active ? (
        <iframe
          src={src}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <div className="video-placeholder">
          <div className="play" />
          <div>{label}</div>
        </div>
      )}
    </div>
  );
}
