interface TranslationShape {
  nav: { about: string; projects: string; experience: string; education: string; hero: string };
  hero: { greeting: string; intro: string; name: string; role: string };
  about: { title: string };
  experience: { title: string };
  education: { title: string };
  projects: {
    title: string;
    readMore: string;
    openProject: string;
    gallery: { open: string };
  };
  footer: { copyright: string };
  pageTitle: { portfolio: string; projects: string };
}

export const translations: Record<import('./language').Language, TranslationShape> = {
  es: {
    nav: {
      hero: 'Inicio',
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
    projects: {
      title: 'Proyectos',
      readMore: 'Ver más',
      openProject: 'Ver proyecto',
      gallery: { open: 'Abrir galería' },
    },
    footer: {
      copyright: 'Derechos reservados',
    },
    pageTitle: { portfolio: 'Portafolio JaseDev', projects: 'Proyectos' },
  },
  en: {
    nav: {
      hero: 'Home',
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
    projects: {
      title: 'Projects',
      readMore: 'Read more',
      openProject: 'View project',
      gallery: { open: 'Open gallery' },
    },
    footer: {
      copyright: 'All rights reserved',
    },
    pageTitle: { portfolio: 'Portfolio JaseDev', projects: 'Projects' },
  },
};
