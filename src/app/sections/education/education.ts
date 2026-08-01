import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { educationData } from './content/education.data';
import { EducationCard } from './components/education-card/education-card';

@Component({
  selector: 'app-education',
  imports: [EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  private lang = inject(LanguageService);
  t = this.lang.t;
  education = computed(() => educationData[this.lang.current()]);
  constructor() {
    console.log(this.education());
  }
}
