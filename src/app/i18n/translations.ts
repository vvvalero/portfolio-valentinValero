export type Lang = 'es' | 'en';

export interface Translations {
  nav: {
    experience: string;
    projects: string;
    contact: string;
    viewCv: string;
  };
  hero: {
    role: string;
    description: string;
    metaBase: string;
    metaBaseVal: string;
    metaFocus: string;
    metaFocusVal: string;
    metaStack: string;
    metaStackVal: string;
    cta1: string;
    cta2: string;
  };
  experience: {
    sectionLabel: string;
    sectionHeading: string;
    tabWork: string;
    tabEducation: string;
    work: { id: number; role: string; company: string; date: string; description: string }[];
    education: { id: number; role: string; company: string; date: string; description: string }[];
  };
  projects: {
    sectionLabel: string;
    sectionHeading: string;
    items: { id: number; name: string; description: string }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    headingEm: string;
    sub: string;
  };
  footer: {
    copy: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    nav: {
      experience: 'Trayectoria',
      projects: 'Proyectos',
      contact: 'Contacto',
      viewCv: 'Ver CV',
    },
    hero: {
      role: 'Ingeniería Informática · Ciberseguridad',
      description:
        'Estudiante de 4.º curso con mención en Tecnologías de la Información. Base sólida en desarrollo de software, sistemas y redes, con vistas a especializarme en seguridad ofensiva y defensa de sistemas.',
      metaBase: 'Base',
      metaBaseVal: 'España',
      metaFocus: 'Foco',
      metaFocusVal: 'Ciberseguridad & Red Team',
      metaStack: 'Stack',
      metaStackVal: 'Java · JavaScript · Linux',
      cta1: 'Ver proyectos',
      cta2: 'Contactar',
    },
    experience: {
      sectionLabel: 'Carrera profesional',
      sectionHeading: 'Trayectoria',
      tabWork: 'Experiencia profesional',
      tabEducation: 'Formación',
      work: [
        {
          id: 1,
          role: 'Desarrollador Full-Stack',
          company: 'Tragsatec',
          date: 'Jun 2025 — Sep 2025',
          description:
            'Modernización y migración de una aplicación legacy escrita en Java 6 con servidor JBoss 5.1, adaptándola a estándares y tecnologías actuales. Análisis del código heredado, refactorización progresiva y validación funcional durante todo el proceso de migración.',
        },
      ],
      education: [
        {
          id: 1,
          role: 'Grado en Ingeniería Informática',
          company: 'Universidad de Castilla-La Mancha',
          date: '2022 — Actualidad',
          description:
            'Formación en fundamentos de ingeniería del software, algoritmos, redes, bases de datos y seguridad informática. Nota media superior al 7,5. Énfasis en desarrollo web, programación orientada a objetos (Java, C/C++, Python) y habilidades de Red Team y Pentesting.',
        },
        {
          id: 2,
          role: 'Certificado de Inglés B2',
          company: 'Escuela Oficial de Idiomas',
          date: '2025',
          description: 'Certificación oficial de nivel B2 en lengua inglesa.',
        },
        {
          id: 3,
          role: 'Cambridge C1 Advanced (en curso)',
          company: 'Cambridge Assessment English',
          date: '2026 — Actualidad',
          description: 'Preparación del examen Cambridge C1 Advanced (CAE).',
        },
      ],
    },
    projects: {
      sectionLabel: 'Lo que he construido',
      sectionHeading: 'Proyectos',
      items: [
        {
          id: 1,
          name: 'NEVOM',
          description:
            'Plataforma web de comercio electrónico para la compraventa de dispositivos móviles. Implementa roles de cliente y administrador, integración con PayPal para pagos en tiempo real, generación de facturas en PDF, carrito de compras y sistema de autenticación con contraseñas hasheadas (bcrypt).',
        },
        {
          id: 2,
          name: 'Librería Online',
          description:
            'Aplicación web de gestión de librería con arquitectura cliente-servidor. Frontend SPA con navegación sin recarga y backend API REST con Node.js y Express. Permite gestionar el catálogo de libros, búsquedas y operaciones CRUD completas con persistencia en MongoDB.',
        },
        {
          id: 3,
          name: 'TaskFlow',
          description:
            'Gestor de tareas con funcionalidades avanzadas: subtareas con barra de progreso, etiquetas personalizadas con colores, drag & drop para reordenar, modo oscuro, fechas de vencimiento, exportación/importación en JSON y persistencia en localStorage.',
        },
      ],
    },
    contact: {
      sectionLabel: 'Contacto',
      heading: 'Trabajemos',
      headingEm: 'juntos.',
      sub: 'Si mi perfil te encaja, escríbeme.',
    },
    footer: {
      copy: '© 2026 Valentín Valero Jiménez',
    },
  },

  en: {
    nav: {
      experience: 'Career Path',
      projects: 'Projects',
      contact: 'Contact',
      viewCv: 'View CV',
    },
    hero: {
      role: 'Computer Engineering · Cybersecurity',
      description:
        '4th-year student with a focus on Information Technologies. Solid background in software development, systems and networks, with a view to specialising in offensive security and system defence.',
      metaBase: 'Based',
      metaBaseVal: 'Spain',
      metaFocus: 'Focus',
      metaFocusVal: 'Cybersecurity & Red Team',
      metaStack: 'Stack',
      metaStackVal: 'Java · JavaScript · Linux',
      cta1: 'View projects',
      cta2: 'Contact',
    },
    experience: {
      sectionLabel: 'Professional career',
      sectionHeading: 'Career Path',
      tabWork: 'Work experience',
      tabEducation: 'Education',
      work: [
        {
          id: 1,
          role: 'Full-Stack Developer',
          company: 'Tragsatec',
          date: 'Jun 2025 — Sep 2025',
          description:
            'Modernisation and migration of a legacy application written in Java 6 with a JBoss 5.1 server, adapting it to current standards and technologies. Analysis of the inherited codebase, progressive refactoring and functional validation throughout the migration process.',
        },
      ],
      education: [
        {
          id: 1,
          role: 'Bachelor\'s Degree in Computer Engineering',
          company: 'University of Castilla-La Mancha',
          date: '2022 — Present',
          description:
            'Training in software engineering fundamentals, algorithms, networks, databases and computer security. Average grade above 7.5 / 10. Emphasis on web development, object-oriented programming (Java, C/C++, Python) and Red Team & Pentesting skills.',
        },
        {
          id: 2,
          role: 'B2 English Certificate',
          company: 'Official School of Languages',
          date: '2025',
          description: 'Official B2 level certification in English language.',
        },
        {
          id: 3,
          role: 'Cambridge C1 Advanced (in progress)',
          company: 'Cambridge Assessment English',
          date: '2026 — Present',
          description: 'Preparation for the Cambridge C1 Advanced (CAE) exam.',
        },
      ],
    },
    projects: {
      sectionLabel: 'What I\'ve built',
      sectionHeading: 'Projects',
      items: [
        {
          id: 1,
          name: 'NEVOM',
          description:
            'E-commerce web platform for buying and selling mobile devices. Implements customer and admin roles, PayPal integration for real-time payments, PDF invoice generation, shopping cart and authentication system with hashed passwords (bcrypt).',
        },
        {
          id: 2,
          name: 'Librería Online',
          description:
            'Bookstore management web application with a client-server architecture. SPA frontend with no-reload navigation and a REST API backend built with Node.js and Express. Manages the book catalogue, search and full CRUD operations with MongoDB persistence.',
        },
        {
          id: 3,
          name: 'TaskFlow',
          description:
            'Task manager with advanced features: subtasks with a progress bar, custom colour labels, drag & drop reordering, dark mode, due dates, JSON export/import and localStorage persistence.',
        },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      heading: 'Let\'s work',
      headingEm: 'together.',
      sub: 'If my profile fits, reach out.',
    },
    footer: {
      copy: '© 2026 Valentín Valero Jiménez',
    },
  },
};
