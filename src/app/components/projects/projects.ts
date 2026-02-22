import { Component } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
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
      github: 'https://github.com/vvvalero/Nevom--ComercioElectronico',
    },
    {
      id: 2,
      name: 'Librería Online',
      description:
        'Aplicación web de gestión de librería con arquitectura cliente-servidor. Frontend SPA con navegación sin recarga y backend API REST con Node.js y Express. Permite gestionar el catálogo de libros, búsquedas y operaciones CRUD completas con persistencia en MongoDB.',
      tech: ['JavaScript', 'Express.js', 'MongoDB', 'REST API', 'SPA'],
      github: 'https://github.com/alejo9am/libreria',
      live: 'https://libreria.alejoarenas.dev/libreria/',
    },
    {
      id: 3,
      name: 'Portfolio Personal',
      description:
        'Este mismo portfolio, construido con Angular 21 y SSR. Componentes standalone, diseño sin librerías de UI externas, animaciones en CSS puro e IntersectionObserver para navegación activa.',
      tech: ['Angular 21', 'TypeScript', 'SCSS', 'SSR'],
      github: 'https://github.com/vvvalero',
    },
  ];
}

