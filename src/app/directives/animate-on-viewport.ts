import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, OnDestroy, PLATFORM_ID, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[animateOnViewport]',
  standalone: true,
})
export class AnimateOnViewport implements OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      if (this.hasAnimated) return;
      const targets = this.el.nativeElement.querySelectorAll('.animate-on-viewport');
      if (targets.length === 0) return;
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            targets.forEach((el: Element) => el.classList.add('animate-fade-in'));
            this.observer?.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
