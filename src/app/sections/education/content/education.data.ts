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
      degree: 'Ingeniero de Sistemas y Ciencias Computacionales',
      school: 'Corporación Universitaria Latinoamericana (CUL)',
      period: '2021 - 2023',
      description:
        'Formación profesional enfocada en ingeniería de software, arquitectura de sistemas, bases de datos, redes, desarrollo de aplicaciones y gestión de proyectos tecnológicos. Desarrollé competencias para diseñar, implementar y mantener soluciones de software orientadas a las necesidades del negocio.',
    },
    {
      degree: 'Tecnólogo en Gestión de Sistemas Informáticos',
      school: 'Institución Universitaria ITSA',
      period: '2015 - 2016',
      description:
        'Formación orientada al diseño, desarrollo, configuración y administración de sistemas informáticos, aplicando buenas prácticas para optimizar los procesos tecnológicos y la infraestructura de las organizaciones.',
    },
    {
      degree: 'Técnico Profesional en Mantenimiento de Sistemas Informáticos',
      school: 'Institución Universitaria ITSA',
      period: '2013 - 2015',
      description:
        'Especialización en instalación, configuración y mantenimiento de hardware, software y redes, proporcionando soporte técnico y asegurando el funcionamiento confiable de la infraestructura tecnológica.',
    },
  ],
  en: [
    {
      degree: "Bachelor's Degree in Systems and Computer Science Engineering",
      school: 'Corporación Universitaria Latinoamericana (CUL)',
      period: '2021 - 2023',
      description:
        'Professional education focused on software engineering, systems architecture, databases, networking, application development, and technology project management. Developed the skills to design, implement, and maintain software solutions that address real-world business needs.',
    },
    {
      degree: 'Technology Degree in Information Systems Management',
      school: 'Institución Universitaria ITSA',
      period: '2015 - 2016',
      description:
        'Focused on the design, development, configuration, and administration of information systems while applying industry best practices to improve organizational efficiency and technology infrastructure.',
    },
    {
      degree: 'Professional Technical Degree in Computer Systems Maintenance',
      school: 'Institución Universitaria ITSA',
      period: '2013 - 2015',
      description:
        'Specialized in installing, configuring, and maintaining computer hardware, software, and network infrastructure while providing technical support and ensuring reliable IT operations.',
    },
  ],
};
