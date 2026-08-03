import { Language } from '../../../i18n/language';

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
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      technologyIds: [1, 2, 3],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
      images: [
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        'https://imgs.search.brave.com/pPrhgTqkcpIrhhXh4GVH7k5Zpk9bOrPv6eGqWMPDj-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIy/NTkzMjgwMS92ZWN0/b3IvYXJ0LWxldHRl/ci1uLW1vZGVybi1m/b250LXRyZW5keS1h/bHBoYWJldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bldr/QXlFUEl4MGNWT0tZ/QkdqTkJRdmdsVTQx/aHZlWDBPc3dkREhu/YVY5Zz0',
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      ],
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
      title: 'AI Dev Roundup NewsLetter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ad, quae laboriosam modi unde voluptate ducimus veniam culpa vero iure est. Aperiam laboriosam fugiat dicta id nostrum numquam, suscipit repudiandae.',
      technologyIds: [1, 2, 3],
      href: '',
      slug: slugify('AI Dev Roundup NewsLetter'),
      images: [
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      ],
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
