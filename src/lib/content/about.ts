import { AboutSectionType} from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  paragraphs: [
    "I may not know much yet, but with the little knowledge I have, I've already built some impressive projects. My passion for learning and pushing the boundaries of what I can create drives me every day.",
    'Recently, I completed an internship at Headstarter, where I created several projects that helped improve my skills. My current focus is on my Python expertise and expanding my software engineering stack.',
    "When I'm not coding, you'll find me working on personal development or listening my favorite playlist."
  ],
  list: {
    title: 'Here are a few languages & frameworks I’ve been working with recently:',
    items: [
      'Python',
      'JavaScript',
      'HTML/CSS',
      'Firebase',
      'NextJS',
      'TailwindCSS'
    ],
  },
  img: '/img.jpg',
};
