import { Routes } from '@angular/router';
import { provideNgtRenderer } from 'angular-three/dom';

export const routes: Routes = [
  {
    path: '',
    title: 'pageTitle.portfolio',
    loadComponent: () => import('./pages/porfolio-page/porfolio-page').then((m) => m.PorfolioPage),
    providers: [provideNgtRenderer()],
  },
  {
    path: 'projects',
    title: 'pageTitle.projects',
    loadComponent: () => import('./pages/projects/projects'),
  },
  {
    path: 'projects/:slug',
    title: 'pageTitle.projects',
    loadComponent: () => import('./pages/projects/projects'),
  },
];
