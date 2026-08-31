import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { register } from 'swiper/element';
import Swiper from 'swiper';
import { Zoom } from 'swiper/modules';
import { DialogService } from '../../../../services/dialog.service';

Swiper.use([Zoom]);
register();

@Component({
  selector: 'image-modal',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.css',
})
export class ImageModal {
  private dialogService = inject(DialogService);

  private dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  private swiperContainer = viewChild<ElementRef<HTMLElement>>('swiperContainer');

  data = this.dialogService.imageModal;
  activeIndex = signal(0);

  constructor() {
    effect((onCleanup) => {
      const dialogRef = this.dialog();
      const data = this.data();
      if (!dialogRef) return;

      const dialog = dialogRef.nativeElement;

      const handleClose = () => {
        if (this.data()) {
          this.dialogService.closeImage();
        }
      };

      const handleKeydown = (event: KeyboardEvent) => {
        if (!dialog.open) return;
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          this.prevImage();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          this.nextImage();
        }
      };

      document.addEventListener('keydown', handleKeydown, { capture: true });
      onCleanup(() => {
        dialog.removeEventListener('close', handleClose);
        document.removeEventListener('keydown', handleKeydown, { capture: true });
      });

      if (data) {
        this.activeIndex.set(data.activeIndex);
        queueMicrotask(() => {
          const el = this.swiperContainer()?.nativeElement as any;
          el?.swiper?.slideTo?.(data.activeIndex, 0);
        });
        if (!dialog.open) {
          dialog.showModal();
        }
      } else if (dialog.open) {
        dialog.close();
      }
    });
  }

  onClose(): void {
    this.dialogService.closeImage();
  }

  onSlideChange(event: Event): void {
    const swiper = (event as CustomEvent).detail?.[0];
    if (swiper) {
      this.activeIndex.set(swiper.activeIndex);
    }
  }

  private goto(delta: number): void {
    const el = this.swiperContainer()?.nativeElement as any;
    if (el?.swiper) {
      delta > 0 ? el.swiper.slideNext() : el.swiper.slidePrev();
    } else {
      const data = this.data();
      if (!data) return;
      const length = data.images.length;
      this.activeIndex.update((index) => (index + delta + length) % length);
    }
  }

  prevImage(): void {
    this.goto(-1);
  }

  nextImage(): void {
    this.goto(1);
  }
}
