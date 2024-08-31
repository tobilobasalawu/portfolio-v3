import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'I’m currently seeking internship roles and apprenticeships.',
    'Looking to discuss a project or just say hi? Feel free to reach out!',
    ],
    link: `mailto:${author.email}`,
};