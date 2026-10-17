import { assets, type PortfolioImage } from "./assets";

export type BeyondStory = {
  id: string;
  category: string;
  title: string;
  description: string;
  photo: PortfolioImage;
  caption: string;
  layout: "wide" | "narrow";
  photoPosition: string;
  tags?: readonly string[];
};

export const beyondStories = [
  {
    id: "community",
    category: "Student leadership",
    title: "Building community.",
    description: "I'm a founding president of ColorStack Minerva, a student community focused on helping students grow through technical learning, career development, and meaningful connections.",
    photo: assets.images.community.colorstackMinerva,
    caption: "ColorStack Minerva",
    layout: "wide",
    photoPosition: "50% 50%",
    tags: ["Community building", "Technical workshops", "Student leadership"],
  },
  {
    id: "events",
    category: "Hackathons & tech events",
    title: "Building alongside builders.",
    description: "I've participated in TreeHacks at Stanford, the YC Voice Agents Hackathon, and SF Tech Week hackathons and founder events. These experiences have allowed me to collaborate with other builders, explore ideas, and learn from founders.",
    photo: assets.images.hackathons.talkToUsers,
    caption: "From the hackathon archive · Talk to Users",
    layout: "narrow",
    photoPosition: "50% 52%",
  },
  {
    id: "openai",
    category: "Memorable moments",
    title: "A moment at OpenAI.",
    description: "At the OpenAI Student Collective Builder Party, I met fellow student builders and had a brief conversation with Sam Altman. The experience reinforced the importance of continuing to build and solve meaningful problems beyond schoolwork.",
    photo: assets.images.highlights.personalHighlight,
    caption: "OpenAI Student Collective Builder Party",
    layout: "narrow",
    photoPosition: "50% 27%",
  },
  {
    id: "soccer",
    category: "Outside tech",
    title: "Time on the pitch.",
    description: "Soccer is one of my favorite hobbies.",
    photo: assets.images.soccer.team,
    caption: "Away from the keyboard, on the pitch.",
    layout: "wide",
    photoPosition: "50% 52%",
  },
] as const satisfies readonly BeyondStory[];
