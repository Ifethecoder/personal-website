import { assets, type PortfolioImage, type PortfolioVideo } from "./assets";

export type BeyondStory = {
  id: string;
  category: string;
  title: string;
  description: string;
  caption: string;
  layout: "wide" | "narrow";
  tags?: readonly string[];
} & (
  | { kind: "photo"; photo: PortfolioImage; photoPosition: string; photoAspectRatio: string }
  | { kind: "video"; video: PortfolioVideo; poster: PortfolioImage }
);

export const beyondStories = [
  {
    id: "community",
    kind: "photo",
    category: "Student leadership",
    title: "Building community.",
    description: "I'm a founding president of ColorStack Minerva, a student community focused on helping students grow through technical learning, career development, and meaningful connections.",
    photo: assets.images.community.colorstackMinerva,
    caption: "ColorStack Minerva",
    layout: "wide",
    photoPosition: "50% 50%",
    photoAspectRatio: "3 / 2",
    tags: ["Community building", "Technical workshops", "Student leadership"],
  },
  {
    id: "events",
    kind: "photo",
    category: "Hackathons & tech events",
    title: "Building alongside builders.",
    description: "I've participated in TreeHacks at Stanford, the YC Voice Agents Hackathon, and SF Tech Week hackathons and founder events. These experiences have allowed me to collaborate with other builders, explore ideas, and learn from founders.",
    photo: assets.images.hackathons.talkToUsers,
    caption: "From the hackathon archive · Talk to Users",
    layout: "narrow",
    photoPosition: "50% 52%",
    photoAspectRatio: "3 / 4",
  },
  {
    id: "openai",
    kind: "photo",
    category: "Memorable moments",
    title: "A moment at OpenAI.",
    description: "At the OpenAI Student Collective Builder Party, I met fellow student builders and had a brief conversation with Sam Altman. The experience reinforced the importance of continuing to build and solve meaningful problems beyond schoolwork.",
    photo: assets.images.highlights.personalHighlight,
    caption: "OpenAI Student Collective Builder Party",
    layout: "narrow",
    photoPosition: "50% 27%",
    photoAspectRatio: "3 / 4",
  },
  {
    id: "soccer",
    kind: "video",
    category: "Outside tech",
    title: "Time on the pitch.",
    description: "Soccer is one of my favorite hobbies.",
    video: assets.videos.soccerWeb,
    poster: assets.images.soccer.poster,
    caption: "Away from the keyboard, on the pitch.",
    layout: "wide",
  },
] as const satisfies readonly BeyondStory[];
