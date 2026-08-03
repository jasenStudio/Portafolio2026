import { Component, computed, inject } from '@angular/core';
import { AnimateOnViewport } from '../../directives/animate-on-viewport';
import { LanguageService } from '../../i18n/language.service';
import { aboutMeData } from './content/about-me.data';
import { technologiesData } from '../../shared/content/technologies';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge';

@Component({
  selector: 'app-about-me',
  imports: [AnimateOnViewport, TechBadgeComponent],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  private lang = inject(LanguageService);
  t = inject(LanguageService).t;
  content = computed(() => aboutMeData[this.lang.current()]);

  technologies = computed(() => {
    const ids = this.content().technologyIds;
    return ids.map((id) => technologiesData.find((t) => t.id === id)!);
  });
}
