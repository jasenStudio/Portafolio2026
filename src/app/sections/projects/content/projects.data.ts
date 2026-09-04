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
      images: stackTecnologiesIdsByProject.AmcGestionDelRiesgo.images,
    },
    // 3) Agregar dentro de projectsData.es
    {
      id: '03',
      title: 'Sammy Replies',
      description:
        'Asistente de inteligencia artificial para WhatsApp orientado a negocios de servicios, que automatiza el agendamiento de citas y las respuestas a clientes. Implementa una arquitectura RAG (Retrieval-Augmented Generation) con búsqueda vectorial y embeddings para recuperar información contextual del catálogo de productos y servicios de cada negocio, junto con un sistema de coincidencia difusa que reconoce servicios mencionados con nombres o alias alternativos. Cuenta con arquitectura multi-negocio (multi-tenant) construida con Ruby on Rails, procesamiento asíncrono con Sidekiq y persistencia en MongoDB.',
      technologyIds: stackTecnologiesIdsByProject.sammyReplies.stacks,
      href: '',
      slug: slugify('Sammy Replies'),
      images: stackTecnologiesIdsByProject.sammyReplies.images,
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
    // 4) Agregar dentro de projectsData.en
    {
      id: '03',
      title: 'Sammy Replies',
      description:
        "AI-powered WhatsApp assistant for service businesses that automates appointment scheduling and customer responses. It implements a RAG (Retrieval-Augmented Generation) architecture with vector search and embeddings to retrieve contextual information from each business's product and service catalog, along with a fuzzy-matching system that recognizes services mentioned under alternate names or aliases. Built with a multi-tenant architecture using Ruby on Rails, asynchronous processing with Sidekiq, and MongoDB for data persistence.",
      technologyIds: stackTecnologiesIdsByProject.sammyReplies.stacks,
      href: '',
      slug: slugify('Sammy Replies'),
      images: stackTecnologiesIdsByProject.sammyReplies.images,
    },
  ],
};
