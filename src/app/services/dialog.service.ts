import { Injectable, signal } from '@angular/core';

export interface ImageModalData {
  images: string[];
  title: string;
  activeIndex: number;
}

export interface DescriptionModalData {
  title: string;
  description: string;
  href: string;
}

@Injectable({ providedIn: 'root' })
export class DialogService {
  readonly imageModal = signal<ImageModalData | null>(null);
  readonly descriptionModal = signal<DescriptionModalData | null>(null);

  openImage(data: ImageModalData): void {
    this.imageModal.set(data);
  }

  closeImage(): void {
    this.imageModal.set(null);
  }

  openDescription(data: DescriptionModalData): void {
    this.descriptionModal.set(data);
  }

  closeDescription(): void {
    this.descriptionModal.set(null);
  }
}
