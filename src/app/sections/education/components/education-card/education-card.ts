import { Component, input } from '@angular/core';

@Component({
  selector: 'education-card',
  imports: [],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  degree = input.required<string>();
  school = input.required<string>();
  period = input.required<string>();
  description = input.required<string>();
}
