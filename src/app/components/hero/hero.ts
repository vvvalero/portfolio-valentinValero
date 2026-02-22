import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private platformId = inject(PLATFORM_ID);

  readonly marqueeItems: string[] = [
    'Angular', 'TypeScript', 'RxJS', 'SCSS', 'Node.js', 'Git',
    'REST APIs', 'Testing', 'Arquitectura limpia', 'Rendimiento web',
    'Accesibilidad', 'Diseño responsivo',
  ];

  scrollTo(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
