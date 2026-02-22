import { Component, signal } from '@angular/core';

export type ExperienceTab = 'work' | 'education';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent {
  activeTab = signal<ExperienceTab>('work');

  workExperiences = [
    {
      id: 1,
      role: 'Desarrollador Full-Stack',
      company: 'Tragsatec',
      date: 'Jun 2025 — Sep 2025',
      description:
        'Modernización y migración de una aplicación legacy escrita en Java 6 con servidor JBoss 5.1, adaptándola a estándares y tecnologías actuales. Análisis del código heredado, refactorización progresiva y validación funcional durante todo el proceso de migración.',
    },
  ];

  education = [
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
      description:
        'Certificación oficial de nivel B2 en lengua inglesa.',
    },
    {
      id: 3,
      role: 'Cambridge C1 Advanced (en curso)',
      company: 'Cambridge Assessment English',
      date: '2026 — Actualidad',
      description:
        'Preparación del examen Cambridge C1 Advanced (CAE).',
    },
  ];

  setTab(tab: ExperienceTab): void {
    this.activeTab.set(tab);
  }
}
