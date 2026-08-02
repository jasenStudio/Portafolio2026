import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../../../../components/shared/link/link';

@Component({
  selector: 'project-card',
  imports: [Link],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  id = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  badges = input.required<string[]>();
  href = input.required<string>();
  slug = input.required<string>();
}
