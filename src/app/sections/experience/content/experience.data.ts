import { Language } from '../../../i18n/language';

export interface Job {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experienceData: Record<Language, Job[]> = {
  es: [
    {
      role: 'Desarrollador Web Full Stack (Freelance)',
      company: 'Freelancer',
      period: 'Sep 2023 - Presente',
      bullets: [
        'Diseño y desarrollo aplicaciones web utilizando Laravel, NestJS, Express, PHP y JavaScript para construir soluciones backend escalables.',
        'Desarrollo interfaces modernas y responsivas con React y Angular, priorizando la experiencia del usuario y el rendimiento.',
        'Implemento soluciones personalizadas para clientes, desde aplicaciones completas hasta mejoras y mantenimiento de sistemas existentes.',
      ],
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Sigpe Consultores S.A.S',
      period: 'Mar 2022 - Sep 2023',
      bullets: [
        'Diseñé, desarrollé e implementé aplicaciones web a medida utilizando Angular y React para clientes del sector de seguridad y salud en el trabajo.',
        'Colaboré directamente con clientes para comprender sus requerimientos y entregar soluciones alineadas con sus necesidades de negocio.',
        'Realicé pruebas funcionales para garantizar el correcto funcionamiento, rendimiento y estabilidad de las aplicaciones antes de su despliegue.',
      ],
    },
    {
      role: 'Auxiliar de Soporte',
      company: 'ARUS S.A',
      period: 'Sep 2021 - Feb 2022',
      bullets: [
        'Brindé soporte técnico a equipos de cómputo, asegurando su correcto funcionamiento y disponibilidad.',
        'Diagnostiqué y resolví incidentes relacionados con hardware, software y conectividad de red.',
        'Realicé mantenimiento preventivo y correctivo para mejorar la estabilidad y el rendimiento de los equipos.',
      ],
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Ice Cream And Coffee',
      period: 'Jun 2020 - Jul 2021',
      bullets: [
        'Participé en el desarrollo de una aplicación web enfocada en ofrecer una solución escalable y de fácil mantenimiento.',
        'Proporcioné soporte técnico continuo, implementando mejoras y resolviendo incidencias reportadas por los usuarios.',
        'Realicé pruebas funcionales para garantizar el correcto desempeño de la aplicación en distintos entornos.',
      ],
    },
  ],
  en: [
    {
      role: 'Full Stack Web Developer (Freelance)',
      company: 'Freelancer',
      period: 'Sep 2023 - Present',
      bullets: [
        'Design and develop web applications using Laravel, NestJS, Express, PHP, and JavaScript to build scalable backend solutions.',
        'Develop modern and responsive user interfaces with React and Angular, focusing on user experience and application performance.',
        'Deliver custom solutions for clients, ranging from full-scale web applications to enhancements and maintenance of existing systems.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Sigpe Consultores S.A.S',
      period: 'Mar 2022 - Sep 2023',
      bullets: [
        'Designed, developed, and deployed custom web applications using Angular and React for occupational health and safety clients.',
        'Worked closely with clients to understand business requirements and deliver solutions aligned with their objectives.',
        'Performed functional testing to ensure application reliability, performance, and stability before deployment.',
      ],
    },
    {
      role: 'IT Support Technician',
      company: 'ARUS S.A',
      period: 'Sep 2021 - Feb 2022',
      bullets: [
        'Provided technical support for computer equipment, ensuring reliable operation and system availability.',
        'Diagnosed and resolved hardware, software, and network connectivity issues.',
        'Performed preventive and corrective maintenance to improve equipment stability and performance.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Ice Cream And Coffee',
      period: 'Jun 2020 - Jul 2021',
      bullets: [
        'Contributed to the development of a scalable and maintainable web application.',
        'Provided ongoing technical support by implementing improvements and resolving user-reported issues.',
        'Conducted functional testing to ensure consistent application performance across different environments.',
      ],
    },
  ],
};
