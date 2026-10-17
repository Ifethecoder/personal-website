import { assets, type PortfolioImage } from "./assets";

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: readonly string[];
  event: { name: string; date: string; dateLabel: string };
  tags: readonly string[];
  highlight?: string;
  image: PortfolioImage;
  imageNote: string;
};

export const featuredProjects = [
  {
    id: "firesight",
    name: "FireSight",
    subtitle: "An AI voice agent for firefighter pre-incident surveys.",
    description: [
      "FireSight helps firefighters collect and organize critical building information through conversational voice interactions, making pre-incident planning more efficient.",
      "Built with a team at the YC Voice Agents Hackathon, where we placed second in the B2B category.",
    ],
    event: { name: "YC Voice Agents Hackathon", date: "2026-04", dateLabel: "April 2026" },
    tags: ["Voice AI", "Hackathon", "Public Safety"],
    highlight: "2nd Place — B2B Category",
    image: assets.images.hackathons.talkToUsers,
    // The owner has not yet confirmed that this photo shows the YC event.
    // Identify the visible event separately from the supplied project event.
    imageNote: "From the hackathon archive · Talk to Users",
  },
  {
    id: "yooni",
    name: "Yooni",
    subtitle: "A voice-powered assistant for mobile applications.",
    description: [
      "Yooni explores how natural voice interactions can make mobile applications easier to use.",
      "Built at TreeHacks with a team of four, I worked on the native Android frontend using Kotlin and Jetpack Compose, integrating speech-to-text, text-to-speech, and responsive UI interactions.",
    ],
    event: { name: "TreeHacks", date: "2026-02", dateLabel: "February 2026" },
    tags: ["Android", "Kotlin", "Jetpack Compose", "Speech AI"],
    image: assets.images.hackathons.treehacks,
    imageNote: "From the hackathon archive · TreeHacks",
  },
] as const satisfies readonly Project[];
