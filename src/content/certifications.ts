import { assets, type PortfolioImage } from "./assets";

type Certification = {
  name: string;
  image: PortfolioImage | null;
};

export const certifications = [
  { name: "AWS Certified AI Practitioner", image: assets.images.certifications.awsAiPractitioner },
  { name: "Udacity AI Programming Nanodegree", image: assets.images.certifications.udacity },
] as const satisfies readonly Certification[];
