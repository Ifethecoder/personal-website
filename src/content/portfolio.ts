import type { StaticImageData } from "next/image";

export type PortfolioImage = {
  src: string | StaticImageData;
  alt: string;
};

// Intentionally empty: no personal media was present during the asset audit.
// Set this only after adding a real portrait. See public/ASSETS.md.
export const portrait: PortfolioImage | null = null;
