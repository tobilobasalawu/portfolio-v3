export type Project = {
  year: string;
  name: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    year: "2025",
    name: "UI-Royale",
    technologies: ["Next.js", "Firebase", "ShadcnUI", "MagicUI", "Superflex"],
    link: "https://ui-royale.vercel.app/",
  },
  {
    year: "2025",
    name: "WApprentice",
    technologies: ["Next.js", "Firebase", "ShadcnUI", "TailwindCSS"],
    link: "https://www.wapprentice.app/",
  },
  {
    year: "2025",
    name: "NoBeesWax",
    technologies: ["Clerk", "Firebase", "Vite", "Ollama",'Meta-AI', "Reddit API"],
    link: "https://github.com/tobilobasalawu/NoBeesWax",
  },
  {
    year: "2025",
    name: "Brainrot-ChatBot",
    technologies: ["Python", "Firebase", "Streamlit", "OpenAI", "Flask"],
    link: "https://github.com/tobilobasalawu/brainrot-chat-bot",
  },
  {
    year: "2025",
    name: "Personal Website V3",
    technologies: ["Next.js", "ShadcnUI", "MagicUI", "Motion", "TailwindCSS"],
    link: "https://oluwatobisalawu.me/",
  },
];