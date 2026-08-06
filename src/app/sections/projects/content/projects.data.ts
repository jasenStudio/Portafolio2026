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
      title: 'StackMyHobbies',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      technologyIds: [2, 3, 4, 5],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
      images: [
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
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
      title: 'StackMyHobbies',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      technologyIds: [2, 3, 4, 5],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
      images: [
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      ],
    },
  ],
};
