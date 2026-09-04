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
  showInCards: boolean;
}
export const technologiesData: technology[] = [
  // languages
  { id: 1, name: 'JavaScript', type: 'language', showInCards: true },
  { id: 2, name: 'TypeScript', type: 'language', showInCards: true },
  { id: 3, name: 'PHP', type: 'language', showInCards: true },
  { id: 4, name: 'Python', type: 'language', showInCards: true },

  // frameworks
  { id: 5, name: 'Angular', type: 'framework', showInCards: true },
  { id: 6, name: 'React', type: 'framework', showInCards: true },
  { id: 7, name: 'Vue.js (Composition API)', type: 'framework', showInCards: true },
  { id: 8, name: 'Laravel', type: 'framework', showInCards: true },
  { id: 9, name: 'Django', type: 'framework', showInCards: true },
  { id: 10, name: 'Express.js', type: 'framework', showInCards: true },
  { id: 11, name: 'Nest.js', type: 'framework', showInCards: true },
  { id: 12, name: 'Next.js', type: 'framework', showInCards: true },
  { id: 20, name: 'Node.js', type: 'framework', showInCards: true },

  // libraries
  { id: 13, name: 'Tailwind CSS', type: 'library', showInCards: true },
  { id: 14, name: 'Bootstrap', type: 'library', showInCards: true },

  // databases
  { id: 15, name: 'PostgreSQL', type: 'database', showInCards: true },

  // tools
  { id: 16, name: 'Docker', type: 'tool', showInCards: true },
  { id: 17, name: 'Git', type: 'tool', showInCards: false },

  // concepts / skills
  { id: 18, name: 'REST APIs', type: 'concept', showInCards: true },
  { id: 19, name: 'IA', type: 'concept', showInCards: true },

  // new technologies
  { id: 21, name: 'Pinia', type: 'library', showInCards: false },
  { id: 22, name: 'TanStack Query', type: 'library', showInCards: false },
  { id: 23, name: 'Vue Router', type: 'library', showInCards: false },
  { id: 24, name: 'Vite', type: 'tool', showInCards: false },
  { id: 25, name: 'Bun', type: 'tool', showInCards: true },
  { id: 26, name: 'Vitest', type: 'tool', showInCards: false },
  { id: 27, name: 'Cypress', type: 'tool', showInCards: true },
  { id: 28, name: 'Zod', type: 'library', showInCards: false },
  { id: 29, name: 'VeeValidate', type: 'library', showInCards: false },
  { id: 30, name: 'Vue I18n', type: 'library', showInCards: false },
  { id: 31, name: 'Headless UI', type: 'library', showInCards: false },
  { id: 32, name: 'DaisyUI', type: 'library', showInCards: false },
  { id: 33, name: 'Livewire', type: 'framework', showInCards: true },

  { id: 34, name: 'Ruby', type: 'language', showInCards: true },
  { id: 35, name: 'Ruby on Rails', type: 'framework', showInCards: true },
  { id: 36, name: 'MongoDB', type: 'database', showInCards: true },
  { id: 37, name: 'Sidekiq', type: 'tool', showInCards: true },
  { id: 38, name: 'Redis', type: 'tool', showInCards: false },
];
