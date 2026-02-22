import { Component, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { I18nService } from '../../services/i18n.service';

export interface MarqueeItem {
  name: string;
  icon: string;
}

const svg = (inner: string): string =>
  `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  imports: [SafeHtmlPipe],
})
export class Hero {
  private platformId = inject(PLATFORM_ID);
  private i18n = inject(I18nService);
  readonly heroT = computed(() => this.i18n.T().hero);

  readonly marqueeItems: MarqueeItem[] = [
    {
      name: 'Pentesting',
      icon: svg(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>`),
    },
    {
      name: 'Linux',
      icon: svg(`<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>`),
    },
    {
      name: 'JavaScript',
      icon: svg(`<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`),
    },
    {
      name: 'Java',
      icon: svg(`<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>`),
    },
    {
      name: 'Git',
      icon: svg(`<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`),
    },
    {
      name: 'MySQL',
      icon: svg(`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`),
    },
    {
      name: 'OSINT',
      icon: svg(`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
    },
    {
      name: 'Red Team',
      icon: svg(`<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>`),
    },
    {
      name: 'C / C++',
      icon: svg(`<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`),
    },
    {
      name: 'LoRaWAN / LPWAN',
      icon: svg(`<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>`),
    },
  ];

  scrollTo(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
