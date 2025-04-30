import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Oluwatobi Salawu",
  initials: "OS",
  url: "https://oluwatobisalawu.tech",
  location: "Birmingham, UK",
  locationLink: "https://www.google.com/maps/place/Birmingham/",
  description:
    "An aspiring Software Engineer and Entrepreneur. Passionate about building innovative solutions and constantly learning. Balancing school, a startup, and refining my skills.",
  summary:
    "I started coding when I was 9, diving into Arduino, HTML, and CSS. Fast forward to now—I’m 18, studying [Software Engineering at T-Level in college(sixth form)](/#education),  while building [LEAF Network a platform that helps students in building acadmic and career development opportunities](https://www.leaf-network.org). Along the way,[I’ve won 4 out of 4 hackathons I’ve participated in](/#hackathons) and am focused on gaining real world experience while mastering my craft.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "TailwindCSS",
    "Matplotlib",
    "Pandas",
    "Git",
    "GitHub",
    "Firebase",
    "Clerk",
    "OpenAI",
    "Vercel",
    "Figma",
    "WebFlow",
    "Wordpress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tobisal.dev@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tobilobasalawu",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oluwatobi-s/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Toby_Sal/",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tobisal.dev@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Headstarter",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/headstarter.png",
      start: "July 2024",
      end: "September 2024",
      description:
        "I built and deployed five AI projects in five weeks using React, Next.js, Firebase, and Vercel, following agile and CI/CD practices. Worked in teams to develop an AI-powered support agent and a SaaS flashcard generator using OpenAI, Pinecone, and Stripe. Built a web scraper for Rate My Professor, integrating it with a RAG pipeline for real-time insights. Scaled projects to 200+ users and iterated based on feedback. I also participate in weekly sessions with top engineers from Google, Y Combinator, and Stanford to refine my skills.",
    },
    {
      company: "Fiilix Academy",
      badges: [],
      href: "/#experience",
      location: "Remote",
      title: "Junior User Interface Designer",
      logoUrl: "/fiilix.png",
      start: "April 2023",
      end: "August 2023",
      description:
        "Collaborated with product managers and developers to design user-friendly web and mobile interfaces. Created wireframes, prototypes, and high-fidelity mockups to enhance usability and accessibility. Applied UI/UX best practices and trends, delivering 2+ projects on time, reducing post-launch issues and improving user engagement.",
    },
  ],
  education: [
    {
      school: "South & City College Birmingham",
      href: "https://www.sccb.ac.uk/",
      degree: "T-Level Digital Production, Design & Development",
      logoUrl: "/sccb.jpeg",
      start: "2024",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "LinguaFlash",
      href: "https://linguaflashai.vercel.app/",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Developed an innovative language learning application that leverages artificial intelligence to create personalized flashcards for efficient vocabulary acquisition and language mastery.",
      technologies: [
        "Next.js",
        "React",
        "Clerk",
        "OpenAI",
        "TailwindCSS",
        "Firebase",
        "Figma"
      ],
      links: [
        {
          type: "Website",
          href: "https://linguaflashai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tobilobasalawu/LinguaFlash-AI-Flashcard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/linguaflash.mp4",
    },
    {
      title: "Employer Critique",
      href: "https://companycritique.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Built a data extraction tool that provides detailed ratings and insights on employers with information from popular platforms like Indeed and Trustpilot.",
      technologies: [
        "Next.js",
        "Expressjs",
        "OpenAI",
        "TailwindCSS",
        "RAG",
        "PineCone",
      ],
      links: [
        {
          type: "Website",
          href: "https://companycritique.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VriaA/CompanyCritique",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/employer.mp4",
    },
    {
      title: "Supportly AI-Chatbot",
      href: "https://github.com/VriaA/Supportly",
      dates: "July 2024",
      active: true,
      description:
        "Built an AI-powered chat application designed to provide users with mental health support.",
      technologies: [
        "Next.js",
        "RAG",
        "OpenAI",
        "Firebase",
        "TailwindCSS",
        "MongoDB",
        "HuggingFace",
      ],
      links: [
        {
          type: "Website",
          href: "https://supportly.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VriaA/Supportly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/supportly.mp4",
    },
    {
      title: "WAprentice",
      href: "https://www.wapprentice.app/",
      dates: "January 2025 - Present",
      active: true,
      description:
        "Designed a platform to help students find, track, and apply for apprenticeships seamlessly. This landing page is built to collect waitlist sign-ups before the full launch.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "ShadcnUI",
        "Firebase",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.wapprentice.app/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/tobilobasalawu/WApprentice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/wapprentice.mp4",
    },
  ],
  hackathons: [
    {
      title: "Superflex frontend hackathon",
      dates: "February 15th - 19th, 2024",
      location: "Online",
      description:
        "Developed an interactive platform that helps users enhance their frontend design skills by participating in AI-powered design challenges",
      image:
        "/superflex.png",
      links: [
          {
            title: "Source",
            icon: <Icons.github className="h-4 w-4" />,
            href: "https://github.com/tobilobasalawu/ui-royale",
          }
      ],
    },
    {
      title: "Hack the Future: AI & Open Source Hackathon",
      dates: "January 24th - 27th, 2024",
      location: "Online",
      description:
        "Developed an AI chat Bot that blends humor, fun, and learning in a unique and interactive way. It uses engaging conversation techniques to motivate students and keep them focused while studying",
      image:
        "/opencommunity.jpeg",
      links: [
          {
            title: "devpost",
            icon: <Icons.devpost className="h-4 w-4" />,
            href: "https://devpost.com/software/brainrot-chat-bot",
          },
          {
            title: "Source",
            icon: <Icons.github className="h-4 w-4" />,
            href: "https://github.com/krishnapriya-n/brainrot-chat-bot",
          },
      ],
    },
    {
      title: "Nosu AI Hackathon",
      dates: "Jan 11 - Jan 16, 2025",
      location: "Online",
      description:
        "Developed a revolutionary, privacy-focused platform designed to help users discover, share, and validate discount coupons without compromising on their personal data. ",
      icon: "public",
      image:
        "/nosu.png",
      links: [
        {
          title: "devpost",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/nobeeswax",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Warfarian/NoBeesWax",
        },
      ],
    },
    {
      title: "Trading Algorithm Hackathon 2025",
      dates: "January 10th - 20th, 2025",
      location: "Online",
      description:
        "A Python tool for creating and testing trading algorithms. Configured stock data, indicators.",
      image:
        "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/tobilobasalawu/trading-algorithm-boilerplate",
        },
      ],
    },
  ],
} as const;
