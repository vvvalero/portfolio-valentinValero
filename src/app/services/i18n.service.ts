import { computed, inject, Injectable, PLATFORM_ID, signal, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang, TRANSLATIONS, Translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);

  readonly lang = signal<Lang>(this.detectLang());

  readonly T = computed<Translations>(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.lang = this.lang();
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  private detectLang(): Lang {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language?.slice(0, 2).toLowerCase();
      return browserLang === 'es' ? 'es' : 'en';
    }
    return 'es';
  }
}
