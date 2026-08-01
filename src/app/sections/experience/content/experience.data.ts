import { Language } from '../../../i18n/language';

export interface Job {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experienceData: Record<Language, Job[]> = {
  es: [
    {
      role: 'Ingeniero de Software Senior',
      company: 'Tech Company',
      period: 'Ene 2022 - Presente',
      bullets: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
      ],
    },
    {
      role: 'Ingeniero de Software Senior',
      company: 'Tech Company',
      period: 'Ene 2022 - Presente',
      bullets: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
      ],
    },
  ],
  en: [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Company',
      period: 'Jan 2022 - Present',
      bullets: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Tech Company',
      period: 'Jan 2022 - Present',
      bullets: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam qui, laboriosam maiores non alias, ipsam similique quae accusantium iste, ex aliquam porro quibusdam quod blanditiis ipsum! Sapiente, sequi deleniti?',
      ],
    },
  ],
};
