import { Component, input } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  id = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  badges = input.required<string[]>();
  href = input.required<string>();
}
