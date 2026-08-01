import { Component, computed, inject } from '@angular/core';
import { AnimateOnViewport } from '../../directives/animate-on-viewport';
import { LanguageService } from '../../i18n/language.service';
import { aboutMeData } from './content/about-me.data';

@Component({
  selector: 'app-about-me',
  imports: [AnimateOnViewport],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  private lang = inject(LanguageService);
  t = inject(LanguageService).t;
  content = computed(() => aboutMeData[this.lang.current()]);
}
