import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<string>(localStorage.getItem('theme') || 'night');

  constructor() {
    effect(() => {
      const theme = this.theme();

      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  changeTheme(theme: 'night' | 'cupcake') {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);
  }
}
