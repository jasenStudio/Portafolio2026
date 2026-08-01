import { Component, input } from '@angular/core';

@Component({
  selector: 'experience-details-list',
  imports: [],
  templateUrl: './experience-details-list.html',
  styleUrl: './experience-details-list.css',
})
export class ExperienceDetailsList {
  activities = input.required<string[]>();
}
