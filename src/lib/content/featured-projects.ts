import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "some of the projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'LinguaFlashAI-Flashcard',
      description: 'An innovative language learning application that leverages AI to create flashcards.',
      tasks: 'LinguaFlash-AI is an AI-powered tool that creates custom flashcards for over 50 languages, making language learning easier and more efficient.',
      url: 'https://linguaflashai.vercel.app/',
      img: '/Linguaflash-AI.png',
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
      description: 'An AI-powered chatbot designed to handle mental health support queries.',
      tasks: "An AI-powered chatbot that leverages huggingface embeddings and OpenAI's chat completion API to provide mental health support in a compassionate and effective manner.",
      url: 'https://supportly.vercel.app/',
      img: '/supportly.png',
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
      description: 'A program that extracts data from Indeed and Trustpilot to rate and analyze employers.',
      tasks: 'EmployerCritiques is an advanced data extraction and analysis tool that gathers information from popular platforms like Indeed and Trustpilot. It leverages this data to provide detailed ratings and insights on employers.',
      url: 'https://github.com/VriaA/rate-my-employer',
      img: '/empcrit.png',
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

export default featuredProjectsSection;
