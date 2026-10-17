export type ExperienceRole = {
  id: string;
  company: string;
  role: string;
  year: number;
  season: string;
  team?: string;
  location?: string;
  contributions: readonly string[];
  technologies: readonly string[];
  metrics: readonly { value: string; label: string }[];
};

// Latest first. Keep descriptions at the high level approved by the owner.
export const experiences = [
  {
    id: "amazon-2026",
    company: "Amazon",
    role: "Software Development Engineer Intern",
    year: 2026,
    season: "Summer",
    team: "IT Services",
    location: "Seattle, Washington",
    contributions: [
      "Built and deployed a production sentiment analysis service for an internal AI assistant serving 60,000+ weekly users.",
      "Developed an asynchronous, event-driven AWS pipeline that analyzed redacted customer conversations without adding latency to user interactions.",
      "Built monitoring capabilities to surface sentiment trends and help teams identify opportunities for product improvement.",
    ],
    technologies: ["AWS Lambda", "EventBridge", "DynamoDB", "Amazon Bedrock"],
    metrics: [{ value: "60,000+", label: "Weekly users of the internal AI assistant" }],
  },
  {
    id: "amazon-2025",
    company: "Amazon",
    role: "Software Development Engineer Intern",
    year: 2025,
    season: "Summer",
    contributions: [
      "Built a request management system supporting 250+ internal teams.",
      "Developed REST APIs and a React interface for tracking and coordinating internal requests.",
      "Reduced request coordination time by approximately 80%.",
      "Improved visibility into 100+ requests per quarter.",
    ],
    technologies: ["REST APIs", "React"],
    metrics: [
      { value: "250+", label: "Internal teams supported" },
      { value: "~80%", label: "Reduction in request coordination time" },
    ],
  },
] as const satisfies readonly ExperienceRole[];
