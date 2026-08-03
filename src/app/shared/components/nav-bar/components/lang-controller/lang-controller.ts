import { Component, inject, input, output } from '@angular/core';
import { LanguageService } from '../../../../../i18n/language.service';

@Component({
  selector: 'lang-controller',
  imports: [],
  templateUrl: './lang-controller.html',
  styleUrl: './lang-controller.css',
})
export class LangController {
  protected languageService = inject(LanguageService);
  dropdownTop = input(false);
  selectionChange = output<void>();

  changeLang(lang: 'es' | 'en') {
    this.languageService.changeLang(lang);
    this.selectionChange.emit();
  }
}
