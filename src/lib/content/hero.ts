import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
    subtitle: "I'm Bouta Cook :)",
    title: [
        'This Site is Under Construction'
    ],
    tagline: 'Specializing in ETL pipelines and solutions architecture.',
    description: 
        "I am a T-level student and an aspiring software engineer. I don't know much, but with the little I do know, I've built some pretty crazy things. I'm eager to learn and push the boundaries of what I can create.",
    specialText: 'Currently open to Internship and Apprentiship Opportunities.',
    cta: {
        title: 'View My Resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true
    }

    
};
