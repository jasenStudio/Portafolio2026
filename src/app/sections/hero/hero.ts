import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { HeroCanvas } from './components/hero-canvas/hero-canvas';
import { PhysicsState } from './components/hero-canvas/state';

@Component({
  selector: 'section-hero',
  imports: [HeroCanvas],
  providers: [PhysicsState],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  t = inject(LanguageService).t;
  protected state = inject(PhysicsState);
}
