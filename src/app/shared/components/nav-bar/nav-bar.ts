import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../i18n/language.service';
import { ThemeController } from './components/theme-controller/theme-controller';
import { LangController } from './components/lang-controller/lang-controller';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [ThemeController, LangController, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  t = inject(LanguageService).t;
}
