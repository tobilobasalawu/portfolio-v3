export type Project = {
  year: string;
  name: string;
  madeAt: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    year: "2023",
    name: "Emerson Collective",
    madeAt: "Upstatement",
    technologies: ["Next.js", "TypeScript", "SCSS", "Contentful"],
    link: "https://emersoncollective.com",
  },
  // Add more projects here...
];