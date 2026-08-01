import { Component, computed, inject } from '@angular/core';
import { AnimateOnViewport } from '../../directives/animate-on-viewport';
import { LanguageService } from '../../i18n/language.service';
import { ExperienceCard } from './components/experience-card/experience-card';
import { experienceData } from './content/experience.data';

@Component({
  selector: 'app-experience',
  imports: [AnimateOnViewport, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private lang = inject(LanguageService);
  t = this.lang.t;
  jobs = computed(() => experienceData[this.lang.current()]);
}
