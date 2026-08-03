import { Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { DialogService } from '../../../../services/dialog.service';

@Component({
  selector: 'image-modal',
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.css',
})
export class ImageModal {
  private dialogService = inject(DialogService);

  private dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  data = this.dialogService.imageModal;
  activeIndex = signal(0);

  constructor() {
    effect(() => {
      const dialogRef = this.dialog();
      const data = this.data();
      if (!dialogRef) return;

      const dialog = dialogRef.nativeElement;
      if (data) {
        this.activeIndex.set(data.activeIndex);
        if (!dialog.open) {
          dialog.showModal();
        }
      } else {
        if (dialog.open) {
          dialog.close();
        }
      }
    });
  }

  onClose(): void {
    this.dialogService.closeImage();
  }

  prevImage(): void {
    const data = this.data();
    if (!data) return;
    const length = data.images.length;
    this.activeIndex.update((index) => (index - 1 + length) % length);
  }

  nextImage(): void {
    const data = this.data();
    if (!data) return;
    const length = data.images.length;
    this.activeIndex.update((index) => (index + 1) % length);
  }
}
