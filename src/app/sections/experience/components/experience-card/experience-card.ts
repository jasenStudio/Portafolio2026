import { Component, input } from '@angular/core';
import { ExperienceDetailsList } from '../experience-details-list/experience-details-list';

@Component({
  selector: 'experience-card',
  imports: [ExperienceDetailsList],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  role = input.required<string>();
  company = input.required<string>();
  period = input.required<string>();
  activities = input.required<string[]>();
  isLastItem = input.required<boolean>();
}
