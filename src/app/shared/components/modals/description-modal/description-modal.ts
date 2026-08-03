import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { DialogService } from '../../../../services/dialog.service';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'description-modal',
  templateUrl: './description-modal.html',
  styleUrl: './description-modal.css',
})
export class DescriptionModal {
  private dialogService = inject(DialogService);
  private lang = inject(LanguageService);

  private dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  data = this.dialogService.descriptionModal;
  t = this.lang.t;

  constructor() {
    effect((onCleanup) => {
      const dialogRef = this.dialog();
      const data = this.data();
      if (!dialogRef) return;

      const dialog = dialogRef.nativeElement;

      // Sincroniza el cierre nativo (Esc, backdrop) con el estado del servicio
      const handleClose = () => {
        if (this.data()) {
          this.dialogService.closeDescription();
        }
      };
      dialog.addEventListener('close', handleClose);
      onCleanup(() => dialog.removeEventListener('close', handleClose));

      if (data) {
        if (!dialog.open) {
          dialog.showModal();
        }
      } else if (dialog.open) {
        dialog.close();
      }
    });
  }

  onClose(): void {
    this.dialogService.closeDescription();
  }
}
