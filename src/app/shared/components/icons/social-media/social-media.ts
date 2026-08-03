import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SocialMedia {
  divClass = input<string | undefined>();
  mdWidthIcon = input<string | undefined>('md:w-8');
  mdHeightIcon = input<string | undefined>('md:h-8');
}
