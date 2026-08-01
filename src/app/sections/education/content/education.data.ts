import { Language } from '../../../i18n/language';
export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}
export const educationData: Record<Language, Education[]> = {
  es: [
    {
      degree: 'Mantenimiento de Sistemas Informáticos',
      school: 'Nombre de tu Institución',
      period: 'Tu Periodo',
      description:
        'Specialized in installing, configuring, and maintaining computer systems, databases, and network infrastructure.',
    },
    {
      degree: 'Mantenimiento de Sistemas Informáticos',
      school: 'Nombre de tu Institución',
      period: 'Tu Periodo',
      description:
        'Specialized in installing, configuring, and maintaining computer systems, databases, and network infrastructure.',
    },
  ],
  en: [
    {
      degree: 'Associate of Applied Science in Computer Systems Maintenance',
      school: 'Nombre de tu Institución',
      period: 'Tu Periodo',
      description:
        'Specialized in installing, configuring, and maintaining computer systems, databases, and network infrastructure.',
    },
    {
      degree: 'Mantenimiento de Sistemas Informáticos',
      school: 'Nombre de tu Institución',
      period: 'Tu Periodo',
      description:
        'Specialized in installing, configuring, and maintaining computer systems, databases, and network infrastructure.',
    },
  ],
};
