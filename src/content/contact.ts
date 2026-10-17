export type ContactDetails = {
  email: string | null;
  github: string | null;
  linkedin: string | null;
  resume: string | null;
};

// No public contact records or résumé were present in the repository.
// Add only owner-confirmed values. A local résumé URL must name a real file.
export const contactDetails: ContactDetails = {
  email: null,
  github: null,
  linkedin: null,
  resume: null,
};

export const contactCopy = {
  heading: "Have something in mind? Let's build it.",
  invitation: "Have a project, an idea, or a good question? I'd love to connect, exchange ideas, and explore a collaboration.",
  pending: "Contact details coming soon.",
};
