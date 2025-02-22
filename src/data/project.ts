export type Project = {
  year: string;
  name: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    year: "2023",
    name: "Emerson Collective",
    technologies: ["Next.js", "TypeScript", "SCSS", "Contentful"],
    link: "https://emersoncollective.com",
  },
  // Add more projects here...
];