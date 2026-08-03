import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { technology } from '../../content/technologies';

@Component({
  selector: 'app-tech-badge',
  imports: [RouterLink],
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
})
export class TechBadgeComponent {
  tech = input.required<technology>();
  variant = input<'default' | 'ghost'>('default');
}
