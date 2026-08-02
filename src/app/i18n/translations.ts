interface TranslationShape {
  nav: { about: string; projects: string; experience: string; education: string };
  hero: { greeting: string; intro: string; name: string; role: string };
  about: { title: string };
  experience: { title: string };
  education: { title: string };
  projects: { title: string };
  footer: { copyright: string };
}

export const translations: Record<import('./language').Language, TranslationShape> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
    },
    hero: {
      greeting: 'hola! \ud83d\udc4b',
      intro: 'Soy',
      name: 'Jorge Salgado E',
      role: 'Desarrollador fullstack',
    },
    about: { title: 'Sobre mí' },
    experience: { title: 'Experiencia' },
    education: { title: 'Educación' },
    projects: { title: 'Proyectos' },
    footer: {
      copyright: 'Derechos reservados',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
    },
    hero: {
      greeting: 'hello! \ud83d\udc4b',
      intro: "I'm",
      name: 'Jorge Salgado E',
      role: 'Fullstack Developer',
    },
    about: { title: 'About' },
    education: { title: 'Education' },
    experience: { title: 'Experience' },
    projects: { title: 'Projects' },
    footer: {
      copyright: 'All rights reserved',
    },
  },
};
