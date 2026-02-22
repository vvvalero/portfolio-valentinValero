import { Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

export type ExperienceTab = 'work' | 'education';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent {
  readonly i18n = inject(I18nService);
  activeTab = signal<ExperienceTab>('work');

  readonly workExperiences = computed(() => this.i18n.T().experience.work);
  readonly education = computed(() => this.i18n.T().experience.education);

  setTab(tab: ExperienceTab): void {
    this.activeTab.set(tab);
  }
}
