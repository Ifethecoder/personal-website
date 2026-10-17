import type { StaticImageData } from "next/image";
import profile from "../../public/images/profile/profilePic.JPG";
import amazon2025 from "../../public/images/experience/Amazon'25.jpeg";
import amazon2026 from "../../public/images/experience/Amazon'26.jpeg";
import talkToUsers from "../../public/images/hackathons/talkToUsersHackathon.JPG";
import treehacks from "../../public/images/hackathons/treehacks.jpeg";
import ycVoiceAgents from "../../public/images/hackathons/yc_hackathon.jpeg";
import colorstackMinerva from "../../public/images/community/colorstack_minerva.JPG";
import personalHighlight from "../../public/images/highlights/photoWithSamAltman.jpeg";
import awsAiPractitioner from "../../public/images/certifications/aws-certified-ai-practitioner.png";
import udacity from "../../public/images/certifications/udacity.png";
import soccerTeam from "../../public/images/soccer/soccer_image.jpeg";
import soccerPoster from "../../public/images/soccer/soccer-poster.jpg";

export type PortfolioImage = {
  readonly src: StaticImageData;
  readonly alt: string;
  // Captions and event context must come from the owner, not filenames.
  readonly caption: string | null;
};

type AssetLibrary = {
  images: Record<string, Record<string, PortfolioImage>>;
  videos: Record<string, {
    src: string;
    mimeType: string;
    durationSeconds: number;
    hasAudio: boolean;
    description: string | null;
  }>;
};

// Static imports validate image filenames at build time and provide dimensions
// and image metadata. Import this server-side; pass only selected media to clients.
// Alt text describes visible content; null captions await the owner's context.
export const assets = {
  images: {
    profile: {
      portrait: {
        // Next's automatic blur generation skips uppercase JPG extensions.
        // This tiny thumbnail comes from the original portrait, which is retained.
        src: { ...profile, blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAECAwQRIRIiMf/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAEE0H/2gAMAwEAAhEDEQA/AJ0LuEr2UXWXF6SzrwGEn0TANRUGSnL/2Q==" },
        alt: "Portrait of me smiling against a coral background",
        caption: null,
      },
    },
    experience: {
      amazon2025: { src: amazon2025, alt: "A person standing beside an Amazon sign outside an office building", caption: null },
      amazon2026: { src: amazon2026, alt: "A person standing beside an Amazon welcome interns display", caption: null },
    },
    hackathons: {
      ycVoiceAgents: { src: ycVoiceAgents, alt: "Four people standing beside a Y Combinator sign outside a building", caption: null },
      talkToUsers: { src: talkToUsers, alt: "Three people standing in front of a Talk to Users event screen", caption: null },
      treehacks: { src: treehacks, alt: "A person standing in front of illuminated TreeHacks lettering", caption: null },
    },
    community: {
      colorstackMinerva: { src: colorstackMinerva, alt: "Two people presenting beside a screen reading Your profile is your pitch", caption: null },
    },
    highlights: {
      personalHighlight: { src: personalHighlight, alt: "Ifeoluwa with Sam Altman at the OpenAI Student Collective Builder Party", caption: null },
    },
    certifications: {
      awsAiPractitioner: { src: awsAiPractitioner, alt: "AWS Certified AI Practitioner foundational badge", caption: null },
      udacity: { src: udacity, alt: "Udacity logo", caption: null },
    },
    soccer: {
      poster: { src: soccerPoster, alt: "A player on a floodlit outdoor soccer pitch", caption: null },
      team: { src: soccerTeam, alt: "A group posing in front of a soccer goal on a floodlit field", caption: null },
    },
  },
  videos: {
    soccerWeb: {
      src: "/videos/soccer-web.mp4",
      mimeType: "video/mp4",
      durationSeconds: 7.6,
      hasAudio: false,
      description: "Silent, 8-second clip: a player moves across a floodlit soccer pitch, with a ball and goal in view.",
    },
  },
} as const satisfies AssetLibrary;
