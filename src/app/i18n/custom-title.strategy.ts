import { Injectable, inject } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { LanguageService } from './language.service';
import { translations } from './translations';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  private langService = inject(LanguageService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(snapshot);
    if (!titleKey) return;

    const lang = this.langService.current();
    const t = translations[lang];

    const resolved = (titleKey as string).split('.').reduce((obj: Record<string, unknown> | undefined, key) => {
      if (obj && typeof obj === 'object' && key in obj) {
        return (obj as Record<string, unknown>)[key] as Record<string, unknown>;
      }
      return undefined;
    }, t as unknown as Record<string, unknown> | undefined);

    if (typeof resolved === 'string') {
      document.title = resolved;
    } else {
      document.title = titleKey as string;
    }
  }
}
