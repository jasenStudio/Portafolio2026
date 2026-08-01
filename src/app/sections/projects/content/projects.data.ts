import { Language } from '../../../i18n/language';

export interface Project {
  id: string;
  title: string;
  description: string;
  badges: string[];
  href: string;
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
    },
    {
      id: '01',
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      badges: ['badge 1', 'badge 2', 'badge 3'],
      href: '',
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
    },
    {
      id: '01',
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      badges: ['badge 1', 'badge 2', 'badge 3'],
      href: '',
    },
  ],
};
