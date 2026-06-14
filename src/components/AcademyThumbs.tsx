import type { AcademyCard } from "@/data/types";
import { ProjectSlideshow } from "./ProjectSlideshow";
import { GALLERIES } from "@/data/galleryImages";

export function AcademyThumb({ kind }: { kind: AcademyCard["thumb"] }) {
  if (kind === "prolearning") {
    return (
      <ProjectSlideshow
        slides={GALLERIES.prolearning.light}
        label="PROLEARNING · SCREENSHOTS"
      />
    );
  }

  if (kind === "memorymap") {
    return (
      <ProjectSlideshow
        slides={GALLERIES.memorymap.light}
        label="MEMORYMAP · SCREENSHOTS"
      />
    );
  }

  if (kind === "lexi") {
    return (
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="225" style={{ fill: "var(--bg-2)" }} />
        <g style={{ stroke: "var(--line)" }} strokeWidth="0.5">
          <line x1="0" y1="56.25" x2="400" y2="56.25" />
          <line x1="0" y1="112.5" x2="400" y2="112.5" />
          <line x1="0" y1="168.75" x2="400" y2="168.75" />
        </g>
        <rect
          x="140"
          y="40"
          width="120"
          height="145"
          rx="16"
          fill="none"
          style={{ stroke: "var(--accent)" }}
          strokeWidth="1.5"
        />
        <rect x="156" y="60" width="88" height="12" rx="2" style={{ fill: "var(--accent)" }} opacity="0.9" />
        <rect x="156" y="82" width="60" height="6" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.7" />
        <rect x="156" y="96" width="70" height="6" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.5" />
        <rect x="156" y="130" width="36" height="36" rx="4" style={{ fill: "var(--accent)" }} opacity="0.4" />
        <rect x="198" y="130" width="36" height="36" rx="4" style={{ fill: "var(--accent)" }} opacity="0.7" />
      </svg>
    );
  }

  if (kind === "kindred") {
    return (
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="225" style={{ fill: "var(--bg-2)" }} />
        <rect
          x="30"
          y="30"
          width="340"
          height="18"
          rx="2"
          style={{ fill: "var(--panel)", stroke: "var(--line)" }}
        />
        <circle cx="42" cy="39" r="3" fill="#ff5a3d" />
        <circle cx="54" cy="39" r="3" style={{ fill: "var(--accent)" }} />
        <circle cx="66" cy="39" r="3" style={{ fill: "var(--muted)" }} />
        <rect x="30" y="48" width="340" height="150" style={{ fill: "var(--panel)", stroke: "var(--line)" }} />
        <rect x="50" y="70" width="80" height="110" rx="4" style={{ fill: "var(--accent)" }} opacity="0.25" />
        <rect x="150" y="70" width="80" height="110" rx="4" style={{ fill: "var(--accent)" }} opacity="0.5" />
        <rect x="250" y="70" width="80" height="110" rx="4" style={{ fill: "var(--accent)" }} opacity="0.85" />
        <text
          x="200"
          y="130"
          fontFamily="JetBrains Mono"
          fontSize="8"
          style={{ fill: "var(--bg)" }}
          fontWeight="600"
          textAnchor="middle"
          letterSpacing="2"
        >
          KINDRED
        </text>
      </svg>
    );
  }

  if (kind === "pulse") {
    return (
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="225" style={{ fill: "var(--bg-2)" }} />
        <g style={{ stroke: "var(--line)" }} strokeWidth="0.5" fill="none">
          <path d="M0 160 H400 M0 120 H400 M0 80 H400" />
        </g>
        <path
          d="M30 180 Q 100 80, 180 140 T 370 60"
          style={{ stroke: "var(--accent)" }}
          strokeWidth="2"
          fill="none"
        />
        <g style={{ fill: "var(--accent)" }}>
          <circle cx="30" cy="180" r="4" />
          <circle cx="180" cy="140" r="4" />
          <circle cx="370" cy="60" r="4" />
        </g>
      </svg>
    );
  }

  // minic
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="225" style={{ fill: "var(--bg)" }} />
      <g fontFamily="JetBrains Mono" fontSize="10" style={{ fill: "var(--accent)" }}>
        <text x="20" y="36">$ mini-c build src/main.mini</text>
        <text x="20" y="58" style={{ fill: "var(--ink-2)" }}>
          ▸ lex       ✓ 142 tokens
        </text>
        <text x="20" y="78" style={{ fill: "var(--ink-2)" }}>
          ▸ parse     ✓ AST 84 nodes
        </text>
        <text x="20" y="98" style={{ fill: "var(--ink-2)" }}>
          ▸ typecheck ✓ no errors
        </text>
        <text x="20" y="118" style={{ fill: "var(--ink-2)" }}>
          ▸ codegen   ✓ out.asm
        </text>
        <text x="20" y="146" style={{ fill: "var(--ink)" }}>
          → done in 42ms
        </text>
        <text x="20" y="176" style={{ fill: "var(--accent)" }}>
          ▮
        </text>
      </g>
    </svg>
  );
}
