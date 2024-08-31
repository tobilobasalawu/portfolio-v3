import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Headstarter',
      companyUrl: 'https://headstarter.co/info',
      role: 'Software Engineer Intern',
      started: 'July 2024',
      upto: 'Present',
      tasks: [
        'Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment.',
        'Worked in a team of 3 to develop an interactive customer support agent using Next.js, integrated a custom RAG pipeline using OpenAI that responds based on a company’s knowledge base.',
        'Collaborated with 3 Fellows to build and deploy a SaaS product that generates dynamic flashcards.',
        'Scaled each web-app to 200+ users, iterated on user feedback to make continuous optimizations.',
        'Participated in weekly sessions with engineers from Google, Y Combinator, Stanford, Amazon and venture-backed startups.'
      ],
    },
    {
      company: 'CompuLearn Foundation',
      companyUrl: 'https://www.compulearnfoundation.com/',
      role: 'Web Developer',
      started: 'August 2024',
      upto: 'Present',
      tasks: [
        'Accomplished responsive website design as measured by user engagement metrics, by creating a visually appealing and mobile-friendly site.',
        'Generated 10% more funds as measured by donation and fundraising metrics, by creating and promoting online donation features to increase financial support',
      ],
    },
    {
      company: 'Fiilix Academy',
      companyUrl: '/',
      role: 'Junior User Interface Designer',
      started: 'April 2023',
      upto: 'August 2023',
      tasks: [
        'Collaborated with product managers and developers to deliver 4+ design projects on time, resulting in an increase in user satisfaction and a 15% reduction in post-launch issues.',
        ' Designed user interfaces for 4+ web and mobile applications, achieving a 30% increase in user engagement by focusing on usability, accessibility, and responsiveness.',
        'Worked with the latest UI/UX design trends, tools, and techniques and incorporated them into projects.',
      ],
    },
  ],
};
