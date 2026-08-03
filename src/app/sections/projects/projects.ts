import { Component, computed, inject } from '@angular/core';
import { AnimateOnViewport } from '../../directives/animate-on-viewport';
import { LanguageService } from '../../i18n/language.service';
import { ProjectCard } from './components/project-card/project-card';
import { projectsData } from './content/projects.data';
import { RouterLink } from '@angular/router';
import { Link } from '../../shared/components/link/link';

@Component({
  selector: 'app-projects',
  imports: [AnimateOnViewport, ProjectCard, Link],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private lang = inject(LanguageService);
  t = this.lang.t;
  projects = computed(() => projectsData[this.lang.current()]);
}
