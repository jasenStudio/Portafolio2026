import { computed, effect, Injectable, signal } from '@angular/core';
import { Language } from './language';
import { translations } from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private lang = signal<Language>(localStorage.getItem('lang') === 'en' ? 'en' : 'es');
  readonly current = this.lang.asReadonly();
  t = computed(() => translations[this.lang()]);

  constructor() {
    effect(() => {
      localStorage.setItem('lang', this.lang());
    });
  }

  getLang() {
    return this.lang();
  }

  changeLang(lang: Language) {
    if (!lang) return;
    this.lang.set(lang);
    localStorage.setItem('lang', lang);
  }
}
