import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'LinguaFlashAI-Flashcard',
      url: 'https://linguaflashai.vercel.app/',
      repo: 'https://linguaflashai.vercel.app/',
      img: '/Linguaflash-AI.png',
      year: 2024,
      projectSkills: [
        { name: 'ReactJs', icon: 'logos:reactjs' },
        { name: 'OpenAI', icon: 'logos:openai' },
        { name: 'TailwindCss', icon: 'logos:tailwindcss' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'Clerk', icon: 'logos:clerk' },
        { name: 'NextJS', icon: 'logos:nextjs' },
      ],
    },
    {
      id: getId(),
      name: 'Supportly',
      url: 'https://supportly.vercel.app/',
      repo: 'https://supportly.vercel.app/',
      img: '/supportly.png',
      year: 2024,
      projectSkills: [
        { name: 'RAG', icon: 'logos:rag' },
        { name: 'MongoDB', icon: 'logos:Mon' },
        { name: 'OpenAI', icon: 'logos:openai' },
        { name: 'TailwindCss', icon: 'logos:tailwindcss' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'NextJS', icon: 'logos:nextjs' },
      ],
    },
    {
      id: getId(),
      name: 'Employer Critique',
      url: 'https://github.com/VriaA/rate-my-employer',
      repo: 'https://github.com/VriaA/rate-my-employer',
      img: '/empcrit.png',
      year: 2024,
      projectSkills: [
        { name: 'Pinecone', icon: 'logos:pinecone' },
        { name: 'RAG', icon: 'logos:rag' },
        { name: 'OpenAI', icon: 'logos:openai' },
        { name: 'TailwindCss', icon: 'logos:tailwindcss' },
        { name: 'NextJS', icon: 'logos:nextjs' },
      ],
    },
  ],
};
