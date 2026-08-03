import { Component, inject, output } from '@angular/core';
import { ThemeService } from '../../../../../services/theme';

@Component({
  selector: 'theme-controller',
  imports: [],
  templateUrl: './theme-controller.html',
  styleUrl: './theme-controller.css',
})
export class ThemeController {
  protected readonly themeService = inject(ThemeService);
  selectionChange = output<void>();

  toggleTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.themeService.changeTheme(checked ? 'night' : 'cupcake');
    this.selectionChange.emit();
  }
}
