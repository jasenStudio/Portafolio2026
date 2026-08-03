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
  private readonly _imageModal = signal<ImageModalData | null>(null);
  private readonly _descriptionModal = signal<DescriptionModalData | null>(null);

  readonly imageModal = this._imageModal.asReadonly();
  readonly descriptionModal = this._descriptionModal.asReadonly();

  openImage(data: ImageModalData): void {
    this._imageModal.set(data);
  }

  closeImage(): void {
    this._imageModal.set(null);
  }

  openDescription(data: DescriptionModalData): void {
    this._descriptionModal.set(data);
  }

  closeDescription(): void {
    this._descriptionModal.set(null);
  }
}
