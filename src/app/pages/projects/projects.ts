import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { debounce, form, FormField } from '@angular/forms/signals';
import { projectsData, Project } from '../../sections/projects/content/projects.data';
import { LanguageService } from '../../i18n/language.service';
import { technologiesData, technology } from '../../shared/content/technologies';
import { ProjectGalleryCard } from './components/project-gallery-card/project-gallery-card';
import { ImageModal } from '../../shared/components/modals/image-modal/image-modal';
import { DescriptionModal } from '../../shared/components/modals/description-modal/description-modal';

interface filtersData {
  search: string;
  technology: string;
}

@Component({
  selector: 'app-page-projects',
  imports: [FormField, ProjectGalleryCard, ImageModal, DescriptionModal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class ProjectsPage {
  private lang = inject(LanguageService);
  private route = inject(ActivatedRoute);

  private techFromUrl = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('tech'))),
    { initialValue: null },
  );

  t = this.lang.t;

  filtersModel = signal<filtersData>({
    search: '',
    technology: '',
  });

  filterForm = form(this.filtersModel, (schemaPath) => {
    debounce(schemaPath.search, 300);
  });

  constructor() {
    effect(() => {
      const tech = this.techFromUrl();
      if (tech !== null) {
        this.filtersModel.update((m) => ({ ...m, technology: tech }));
      }
    });
  }

  groupedTechnologies = computed(() => {
    const byType = new Map<technology['type'], technology[]>();
    for (const tech of technologiesData) {
      const existing = byType.get(tech.type) || [];
      byType.set(tech.type, [...existing, tech]);
    }
    return [...byType.entries()].map(([type, items]) => ({ type, items }));
  });

  private projectsForLanguage = computed(() => projectsData[this.lang.current()]);

  filteredProjects = computed<Project[]>(() => {
    const search = this.filterForm.search().value().toLowerCase().trim();
    const technology = this.filterForm.technology().value();

    return this.projectsForLanguage().filter((project) => {
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search);

      const matchesTechnology = !technology || project.technologyIds.includes(Number(technology));

      return matchesSearch && matchesTechnology;
    });
  });

  techsFor(project: Project): technology[] {
    return project.technologyIds
      .map((id) => technologiesData.find((t) => t.id === id))
      .filter((t): t is technology => t !== undefined);
  }
}
