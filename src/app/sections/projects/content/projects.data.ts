import { Language } from '../../../i18n/language';

export interface Project {
  id: string;
  title: string;
  description: string;
  badges: string[];
  href: string;
  slug: string;
}

export function slugify(text: string): string {
  return text
    .normalize('NFD') // separa acentos de las letras
    .replace(/[\u0300-\u036f]/g, '') // elimina los acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // quita caracteres especiales
    .replace(/[\s_-]+/g, '-') // espacios y guiones bajos -> guion
    .replace(/^-+|-+$/g, ''); // quita guiones al inicio/final
}

export const projectsData: Record<Language, Project[]> = {
  es: [
    {
      id: '01',
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      badges: ['badge 1', 'badge 2', 'badge 3'],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
    },
    {
      id: '01',
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      badges: ['badge 1', 'badge 2', 'badge 3'],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
    },
  ],
  en: [
    {
      id: '01',
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      badges: ['badge 1', 'badge 2', 'badge 3'],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
    },
    {
      id: '01',
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      badges: ['badge 1', 'badge 2', 'badge 3'],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
    },
  ],
};
