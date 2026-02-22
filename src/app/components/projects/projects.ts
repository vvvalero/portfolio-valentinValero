import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
}

const PROJECT_STATIC: Omit<Project, 'name' | 'description'>[] = [
  {
    id: 1,
    tech: ['PHP', 'MySQL', 'Bootstrap', 'PayPal API', 'CSS'],
    image: '/img/nevom-preview.png',
    github: 'https://github.com/vvvalero/Nevom--ComercioElectronico',
    live: 'https://nevom.infinityfree.me/',
  },
  {
    id: 2,
    tech: ['JavaScript', 'Express.js', 'MongoDB', 'REST API', 'SPA'],
    image: '/img/libreria-preview.png',
    github: 'https://github.com/alejo9am/libreria',
    live: 'https://libreria.alejoarenas.dev/libreria/',
  },
  {
    id: 3,
    tech: ['React 18', 'Material UI', 'Vite', 'Context API', 'Drag & Drop'],
    image: '/img/taskflow-preview.png',
    github: 'https://github.com/vvvalero/taskflow',
    live: 'https://taskflow.vvalero.dev/',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private i18n = inject(I18nService);

  readonly sectionLabel = computed(() => this.i18n.T().projects.sectionLabel);
  readonly sectionHeading = computed(() => this.i18n.T().projects.sectionHeading);

  readonly projects = computed<Project[]>(() =>
    PROJECT_STATIC.map((s) => ({
      ...s,
      ...this.i18n.T().projects.items.find((it) => it.id === s.id)!,
    }))
  );

  padId(id: number): string {
    return id.toString().padStart(2, '0');
  }
}

