import { Component } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  padId(id: number): string {
    return id.toString().padStart(2, '0');
  }

  projects: Project[] = [
    {
      id: 1,
      name: 'NEVOM',
      description:
        'Plataforma web de comercio electrónico para la compraventa de dispositivos móviles. Implementa roles de cliente y administrador, integración con PayPal para pagos en tiempo real, generación de facturas en PDF, carrito de compras y sistema de autenticación con contraseñas hasheadas (bcrypt).',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'PayPal API', 'CSS'],
      image: '/img/nevom-preview.png',
      github: 'https://github.com/vvvalero/Nevom--ComercioElectronico',
      live: 'https://nevom.infinityfree.me/',
    },
    {
      id: 2,
      name: 'Librería Online',
      description:
        'Aplicación web de gestión de librería con arquitectura cliente-servidor. Frontend SPA con navegación sin recarga y backend API REST con Node.js y Express. Permite gestionar el catálogo de libros, búsquedas y operaciones CRUD completas con persistencia en MongoDB.',
      tech: ['JavaScript', 'Express.js', 'MongoDB', 'REST API', 'SPA'],
      image: '/img/libreria-preview.png',
      github: 'https://github.com/alejo9am/libreria',
      live: 'https://libreria.alejoarenas.dev/libreria/',
    },
    {
      id: 3,
      name: 'TaskFlow',
      description:
        'Gestor de tareas con funcionalidades avanzadas: subtareas con barra de progreso, etiquetas personalizadas con colores, drag & drop para reordenar, modo oscuro, fechas de vencimiento, exportación/importación en JSON y persistencia en localStorage.',
      tech: ['React 18', 'Material UI', 'Vite', 'Context API', 'Drag & Drop'],
      image: '/img/taskflow-preview.png',
      github: 'https://github.com/vvvalero/taskflow',
      live: 'https://taskflow-tau-hazel.vercel.app/',
    },
  ];
}

