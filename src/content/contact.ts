export type ContactDetails = {
  email: string | null;
  github: string | null;
  linkedin: string | null;
  resume: string | null;
};

// Verified by the owner. Keep the résumé hidden until an actual file is supplied.
export const contactDetails: ContactDetails = {
  email: "ifeoluwa@uni.minerva.edu",
  github: "https://github.com/Ifethecoder",
  linkedin: "https://www.linkedin.com/in/ifeoluwa-oyetimehin",
  resume: null,
};

export const contactCopy = {
  heading: "Have something in mind? Let's build it.",
  invitation: "Have a project, an idea, or a good question? I'd love to connect, exchange ideas, and explore a collaboration.",
};
