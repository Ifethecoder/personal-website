import { assets, type PortfolioImage } from "./assets";

type Certification = {
  name: string;
  image: PortfolioImage | null;
};

export const certifications = [
  { name: "AWS Certified AI Practitioner", image: assets.images.certifications.awsAiPractitioner },
  // The credential is supplied by the owner; no Udacity image exists yet.
  { name: "Udacity AI Programming Nanodegree", image: null },
] as const satisfies readonly Certification[];
