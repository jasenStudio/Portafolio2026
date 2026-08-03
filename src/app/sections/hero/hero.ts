import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { HeroCanvas } from './components/hero-canvas/hero-canvas';
import { PhysicsState } from './components/hero-canvas/state';
import { SocialMedia } from '../../shared/components/icons/social-media/social-media';

@Component({
  selector: 'section-hero',
  imports: [HeroCanvas, SocialMedia],
  providers: [PhysicsState],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  t = inject(LanguageService).t;
  protected state = inject(PhysicsState);
}
