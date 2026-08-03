import { Language } from '../../../i18n/language';

export interface AboutMeContent {
  paragraphs: string[];
  technologyIds: number[];
}

export const aboutMeData: Record<Language, AboutMeContent> = {
  es: {
    paragraphs: [
      'Soy desarrollador fullstack y disfruto convertir ideas en aplicaciones web funcionales, escalables y fáciles de usar. Me gusta enfrentar nuevos retos, aprender tecnologías que aporten valor y escribir código limpio que sea sencillo de mantener y evolucionar con el tiempo.',
      'Trabajo principalmente con JavaScript, TypeScript, PHP y Laravel, desarrollando interfaces modernas con React y Angular, además de APIs y servicios backend. También tengo experiencia integrando bases de datos SQL y NoSQL, construyendo aplicaciones completas de principio a fin.',
    ],
    technologyIds: [2, 5, 6, 20, 12, 10, 11, 3, 8, 13, 15, 16, 17, 18, 4, 9, 7, 19],
  },
  en: {
    paragraphs: [
      'I am a fullstack developer who enjoys turning ideas into functional, scalable, and user-friendly web applications. I like tackling new challenges, learning technologies that add value, and writing clean code that is easy to maintain and evolve over time.',
      'I work primarily with JavaScript, TypeScript, PHP, and Laravel, developing modern interfaces with React and Angular, as well as backend APIs and services. I also have experience integrating SQL and NoSQL databases, building complete applications from start to finish.',
    ],
    technologyIds: [2, 5, 6, 20, 12, 10, 11, 3, 8, 13, 15, 16, 17, 18, 4, 9, 7, 19],
  },
};
