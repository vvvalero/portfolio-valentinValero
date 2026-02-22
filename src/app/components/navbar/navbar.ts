import { Component, HostListener, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

const SECTIONS = ['hero', 'experience', 'projects', 'contact'];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  readonly i18n = inject(I18nService);

  isScrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal<string>('hero');

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isScrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    // Si está al fondo del todo, marcar siempre contact
    const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 8;
    if (atBottom) {
      this.activeSection.set('contact');
      return;
    }
    // Trigger point: 35% desde el top del viewport (debajo del navbar)
    const trigger = window.scrollY + window.innerHeight * 0.35;
    let current = SECTIONS[0];
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= trigger) {
        current = id;
      }
    }
    this.activeSection.set(current);
  }

  scrollTo(sectionId: string): void {
    this.menuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}

