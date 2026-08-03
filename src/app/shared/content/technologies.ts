export type TechnologyType =
  | 'language' // JS, TS, PHP, Python
  | 'framework' // Angular, React, Laravel, Django, Express.js, Nest.js, Next.js, Vue
  | 'library' // Tailwind CSS, Bootstrap (técnicamente no son frameworks)
  | 'database' // PostgreSQL
  | 'tool' // Docker, Git
  | 'concept'; // REST APIs, IA

export interface technology {
  id: number;
  name: string;
  type: TechnologyType;
}
export const technologiesData: technology[] = [
  // languages
  { id: 1, name: 'JavaScript', type: 'language' },
  { id: 2, name: 'TypeScript', type: 'language' },
  { id: 3, name: 'PHP', type: 'language' },
  { id: 4, name: 'Python', type: 'language' },

  // frameworks
  { id: 5, name: 'Angular', type: 'framework' },
  { id: 6, name: 'React', type: 'framework' },
  { id: 7, name: 'Vue.js (Composition API)', type: 'framework' },
  { id: 8, name: 'Laravel', type: 'framework' },
  { id: 9, name: 'Django', type: 'framework' },
  { id: 10, name: 'Express.js', type: 'framework' },
  { id: 11, name: 'Nest.js', type: 'framework' },
  { id: 12, name: 'Next.js', type: 'framework' },
  { id: 20, name: 'Node.js', type: 'framework' },

  // libraries
  { id: 13, name: 'Tailwind CSS', type: 'library' },
  { id: 14, name: 'Bootstrap', type: 'library' },

  // databases
  { id: 15, name: 'PostgreSQL', type: 'database' },

  // tools
  { id: 16, name: 'Docker', type: 'tool' },
  { id: 17, name: 'Git', type: 'tool' },

  // concepts / skills
  { id: 18, name: 'REST APIs', type: 'concept' },
  { id: 19, name: 'IA', type: 'concept' },
];
