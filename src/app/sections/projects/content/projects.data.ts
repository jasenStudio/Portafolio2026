import { Language } from '../../../i18n/language';
import { stackTecnologiesIdsByProject } from './stackTechnologies.data';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologyIds: number[];
  href: string;
  slug: string;
  images: string[];
}

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const projectsData: Record<Language, Project[]> = {
  es: [
    {
      id: '01',
      title: 'StackMyHobbies',
      description:
        'Aplicación web para gestionar y realizar seguimiento de hobbies y contenidos de entretenimiento como series, películas, anime, libros, videojuegos y manga. Permite organizar bibliotecas personales, registrar el progreso, calificar contenidos, administrar etiquetas y visualizar información mediante filtros, ordenamiento y una interfaz moderna. Incluye autenticación completa, internacionalización y una arquitectura modular basada en Vue 3.',
      technologyIds: stackTecnologiesIdsByProject.stackMyHobbies.stacks,
      href: 'https://stackmyhobbies.netlify.app/',
      slug: slugify('StackMyHobbies'),
      images: stackTecnologiesIdsByProject.stackMyHobbies.images,
    },
    {
      id: '02',
      title: 'AMC Gestión de Riesgos SAS',
      description:
        'Sitio web corporativo para AMC Gestión de Riesgos SAS, diseñado para presentar sus servicios y fortalecer su presencia digital. Incluye una sección dinámica de proyectos donde los administradores pueden crear, editar y eliminar proyectos, mientras los visitantes pueden consultar sus detalles. También incorpora un blog administrable orientado a la publicación de contenido y a la generación de tráfico orgánico mediante SEO.',
      technologyIds: stackTecnologiesIdsByProject.AmcGestionDelRiesgo.stacks,
      href: 'https://www.amcgestiondelriesgo.com.co/',
      slug: slugify('AMC Gestión de Riesgos SAS'),
      images: [
        'https://placehold.co/1280x720?text=AMC+Gestion+de+Riesgos+1',
        'https://placehold.co/1280x720?text=AMC+Gestion+de+Riesgos+2',
      ],
    },
  ],
  en: [
    {
      id: '01',
      title: 'StackMyHobbies',
      description:
        'A web application for tracking and organizing entertainment content such as TV series, movies, anime, books, manga, and video games. Users can manage personal libraries, monitor progress, rate content, organize items with tags, and browse their collection through filtering, sorting, and customizable views. The application features complete authentication, internationalization, and a modular architecture built with Vue 3.',
      technologyIds: stackTecnologiesIdsByProject.stackMyHobbies.stacks,
      href: 'https://stackmyhobbies.netlify.app/',
      slug: slugify('StackMyHobbies'),
      images: stackTecnologiesIdsByProject.stackMyHobbies.images,
    },
    {
      id: '02',
      title: 'AMC Gestión de Riesgos SAS',
      description:
        'Corporate website for AMC Gestión de Riesgos SAS, designed to showcase its services and strengthen its digital presence. It includes a dynamic projects section where administrators can create, edit, and delete projects, while visitors can browse project details. The website also features a manageable blog focused on publishing valuable content and generating organic traffic through SEO.',
      technologyIds: stackTecnologiesIdsByProject.AmcGestionDelRiesgo.stacks,
      href: '',
      slug: slugify('AMC Gestión de Riesgos SAS'),
      images: stackTecnologiesIdsByProject.AmcGestionDelRiesgo.images,
    },
  ],
};
