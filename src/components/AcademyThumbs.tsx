import type { AcademyCard } from "@/data/types";

export function AcademyThumb({ kind }: { kind: AcademyCard["thumb"] }) {
  if (kind === "prolearning") {
    return (
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="225" style={{ fill: "var(--bg-2)" }} />
        <g style={{ stroke: "var(--line)" }} strokeWidth="0.5">
          <line x1="0" y1="56.25" x2="400" y2="56.25" />
          <line x1="0" y1="112.5" x2="400" y2="112.5" />
          <line x1="0" y1="168.75" x2="400" y2="168.75" />
          <line x1="100" y1="0" x2="100" y2="225" />
          <line x1="200" y1="0" x2="200" y2="225" />
          <line x1="300" y1="0" x2="300" y2="225" />
        </g>
        {/* Stacked flashcards */}
        <g transform="translate(60,52)">
          <rect x="6" y="14" width="160" height="100" rx="6" style={{ fill: "var(--panel)", stroke: "var(--line)" }} strokeWidth="1" />
          <rect x="3" y="7" width="160" height="100" rx="6" style={{ fill: "var(--bg)", stroke: "var(--line)" }} strokeWidth="1" />
          <rect x="0" y="0" width="160" height="100" rx="6" style={{ fill: "var(--bg)", stroke: "var(--accent)" }} strokeWidth="1.5" />
          <rect x="14" y="18" width="42" height="6" rx="2" style={{ fill: "var(--accent)" }} opacity="0.85" />
          <rect x="14" y="34" width="120" height="5" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.7" />
          <rect x="14" y="46" width="100" height="5" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.55" />
          <rect x="14" y="58" width="86" height="5" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.4" />
          <g transform="translate(14,76)">
            <rect width="36" height="14" rx="3" style={{ fill: "var(--accent)" }} opacity="0.25" />
            <rect x="42" width="36" height="14" rx="3" style={{ fill: "var(--accent)" }} opacity="0.55" />
            <rect x="84" width="36" height="14" rx="3" style={{ fill: "var(--accent)" }} opacity="0.85" />
          </g>
        </g>
        {/* AI badge */}
        <g transform="translate(248,40)">
          <rect width="110" height="68" rx="6" style={{ fill: "var(--bg)", stroke: "var(--line)" }} strokeWidth="1" />
          <text x="14" y="22" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2" style={{ fill: "var(--muted)" }}>AI · GEMINI</text>
          <path d="M14 32 L96 32" style={{ stroke: "var(--line)" }} strokeWidth="0.5" />
          <g transform="translate(14,40)">
            <circle r="3" cx="3" cy="6" style={{ fill: "var(--accent)" }} />
            <rect x="12" y="3" width="62" height="5" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.7" />
            <circle r="3" cx="3" cy="18" style={{ fill: "var(--accent)" }} opacity="0.55" />
            <rect x="12" y="15" width="50" height="5" rx="2" style={{ fill: "var(--ink-2)" }} opacity="0.5" />
          </g>
        </g>
        {/* Progress / streak bars */}
        <g transform="translate(248,128)">
          <rect width="110" height="62" rx="6" style={{ fill: "var(--panel)", stroke: "var(--line)" }} strokeWidth="1" />
          <g transform="translate(12,14)">
            <rect width="86" height="4" rx="2" style={{ fill: "var(--line)" }} />
            <rect width="62" height="4" rx="2" style={{ fill: "var(--accent)" }} />
            <rect y="14" width="86" height="4" rx="2" style={{ fill: "var(--line)" }} />
            <rect y="14" width="40" height="4" rx="2" style={{ fill: "var(--accent)" }} opacity="0.7" />
            <rect y="28" width="86" height="4" rx="2" style={{ fill: "var(--line)" }} />
            <rect y="28" width="74" height="4" rx="2" style={{ fill: "var(--accent)" }} opacity="0.45" />
          </g>
        </g>
        {/* Spark */}
        <g transform="translate(204,38)" style={{ stroke: "var(--accent)" }} strokeWidth="1.5" fill="none">
          <path d="M8 0 L8 16 M0 8 L16 8 M2 2 L14 14 M14 2 L2 14" opacity="0.85" />
        </g>
      </svg>
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
