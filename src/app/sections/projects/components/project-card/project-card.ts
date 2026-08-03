import { Component, computed, inject, input } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { technologiesData, technology } from '../../../../shared/content/technologies';
import { TechBadgeComponent } from '../../../../shared/components/tech-badge/tech-badge';

@Component({
  selector: 'project-card',
  imports: [TechBadgeComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  private lang = inject(LanguageService);
  t = this.lang.t;

  id = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  badges = input.required<number[]>();
  href = input.required<string>();
  slug = input.required<string>();

  techs = computed<technology[]>(() => {
    return this.badges()
      .map((id) => technologiesData.find((t) => t.id === id))
      .filter((t): t is technology => t !== undefined);
  });

  hasExternalLink = computed(() => this.href() !== '');
}
