import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
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
export class Hero implements OnDestroy {
  t = inject(LanguageService).t;
  protected state = inject(PhysicsState);

  isVisible = signal(true);
  private host = inject(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          this.isVisible.set(entry.isIntersecting);
        },
        { threshold: 0 },
      );
      this.observer.observe(this.host.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
