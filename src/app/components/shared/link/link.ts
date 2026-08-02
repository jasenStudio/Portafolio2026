import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink],
  templateUrl: './link.html',
  styleUrl: './link.css',
})
export class Link {
  mode = input<'multi' | 'single' | 'default'>('default');
  singleParameter = input<string>('');
  parameters = input<string[]>([]); // <- ahora es array
  path = input.required<string>();
  linkClass = input<string>('underline hover:no-underline');

  routerLinkValue = computed(() => {
    if (this.mode() === 'single') return [this.path(), this.singleParameter()];
    if (this.mode() === 'multi') return [this.path(), ...this.parameters()]; // <- spread
    return [this.path()];
  });
}
