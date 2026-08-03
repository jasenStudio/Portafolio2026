import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, inject, input, signal } from '@angular/core';
import { register } from 'swiper/element';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { LanguageService } from '../../../../i18n/language.service';
import { technologiesData, technology } from '../../../../shared/content/technologies';
import { DialogService } from '../../../../services/dialog.service';

Swiper.use([Navigation, Pagination]);
register();

const DESCRIPTION_LIMIT = 120;

@Component({
  selector: 'project-gallery-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './project-gallery-card.html',
  styleUrl: './project-gallery-card.css',
})
export class ProjectGalleryCard {
  private lang = inject(LanguageService);
  private dialogService = inject(DialogService);
  t = this.lang.t;

  id = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  badges = input.required<number[]>();
  href = input.required<string>();
  slug = input.required<string>();
  images = input.required<string[]>();
  cardClass = input<string>('');

  activeImageIndex = signal(0);

  techs = computed<technology[]>(() => {
    return this.badges()
      .map((id) => technologiesData.find((t) => t.id === id))
      .filter((t): t is technology => t !== undefined);
  });

  hasExternalLink = computed(() => this.href() !== '');

  hasMultipleImages = computed(() => this.images().length > 1);

  isTruncated = computed(() => this.description().length > DESCRIPTION_LIMIT);

  truncatedDescription = computed(() => {
    const description = this.description();
    if (description.length <= DESCRIPTION_LIMIT) return null;
    return description.slice(0, DESCRIPTION_LIMIT).trimEnd() + '…';
  });

  onSlideChange(event: Event): void {
    const swiper = (event as CustomEvent).detail?.[0];
    if (swiper) {
      this.activeImageIndex.set(swiper.activeIndex);
    }
  }

  openImageModal(): void {
    this.dialogService.openImage({
      images: this.images(),
      title: this.title(),
      activeIndex: this.activeImageIndex(),
    });
  }

  openDescriptionModal(): void {
    this.dialogService.openDescription({
      title: this.title(),
      description: this.description(),
      href: this.href(),
    });
  }
}
