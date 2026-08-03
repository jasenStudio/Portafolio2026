import { Component, inject, output } from '@angular/core';
import { LanguageService } from '../../../../../i18n/language.service';
import { LangController } from '../lang-controller/lang-controller';
import { ThemeController } from '../theme-controller/theme-controller';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-drawer',
  imports: [LangController, ThemeController, RouterLink],
  templateUrl: './nav-drawer.html',
  styleUrl: './nav-drawer.css',
  host: {
    class: 'drawer-side z-50 lg:hidden',
  },
})
export class NavDrawer {
  protected readonly t = inject(LanguageService).t;
  close = output<void>();
}
