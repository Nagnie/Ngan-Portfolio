import type { StaticImageData } from "next/image";

export type Slide = { src: StaticImageData; alt: string };
export type ThemedSlides = { light: Slide[]; dark: Slide[] };

/* eslint-disable @typescript-eslint/no-require-imports */

const prolearningLight: Slide[] = [
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.43.55 copy.png").default, alt: "ProLearning — Home" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.49.53 copy.png").default, alt: "ProLearning — Flashcards" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.52.53.png").default, alt: "ProLearning — Study set" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.53.50.png").default, alt: "ProLearning — Roadmap" },
  { src: require("@/data/images/prolearning/Screenshot 2026-05-09 at 17.54.38.png").default, alt: "ProLearning — Review" },
];

const memorymapLight: Slide[] = [
  { src: require("@/data/images/memorymap/light/landing.jpg").default, alt: "MemoryMap — Landing" },
  { src: require("@/data/images/memorymap/light/login.jpg").default, alt: "MemoryMap — Login" },
  { src: require("@/data/images/memorymap/light/journey.jpg").default, alt: "MemoryMap — Journey" },
  { src: require("@/data/images/memorymap/light/map.jpg").default, alt: "MemoryMap — Map" },
  { src: require("@/data/images/memorymap/light/duomap.jpg").default, alt: "MemoryMap — Duo map" },
  { src: require("@/data/images/memorymap/light/profile.jpg").default, alt: "MemoryMap — Profile" },
];

const memorymapDark: Slide[] = [
  { src: require("@/data/images/memorymap/dark/landing.jpg").default, alt: "MemoryMap — Landing" },
  { src: require("@/data/images/memorymap/dark/login.jpg").default, alt: "MemoryMap — Login" },
  { src: require("@/data/images/memorymap/dark/journey.jpg").default, alt: "MemoryMap — Journey" },
  { src: require("@/data/images/memorymap/dark/map.jpg").default, alt: "MemoryMap — Map" },
  { src: require("@/data/images/memorymap/dark/duomap.jpg").default, alt: "MemoryMap — Duo map" },
  { src: require("@/data/images/memorymap/dark/profile.jpg").default, alt: "MemoryMap — Profile" },
];

/* eslint-enable @typescript-eslint/no-require-imports */

export const GALLERIES: Record<string, ThemedSlides> = {
  // ProLearning has no dark screenshots yet — drop them into
  // src/data/images/prolearning/dark and list them here when ready.
  prolearning: { light: prolearningLight, dark: [] },
  memorymap: { light: memorymapLight, dark: memorymapDark },
};
