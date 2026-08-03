import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../i18n/language.service';
import { SocialMedia } from '../icons/social-media/social-media';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [SocialMedia, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  t = inject(LanguageService).t;
}
