import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};

export default config;
