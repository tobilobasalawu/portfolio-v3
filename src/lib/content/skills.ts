import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'Skills',
  skills: [
    {
      id: getId(),
      title: 'Software Engineering & Web Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive websites for various devices.',
        'Creating user-friendly software solutions.',
        'Optimizing web applications for performance and scalability.',
        'Ensuring code quality through testing and code reviews.',
      ],
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'Figma', icon: 'logos:figma' },
        { name: 'Wordpress', icon: 'logos:wordpress'},
        { name: 'Bootstrap', icon: 'logos:bootstrap'},
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Github', icon: 'logos:github-icon'},
        { name: 'NextJS', icon: 'logos:nextjs' },
        { name: 'TailwindCSS', icon: 'logos:tailwindcss' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Vercel', icon: 'vscode-icons:file-type-vercel' },
      ],
    },
  ],
};
