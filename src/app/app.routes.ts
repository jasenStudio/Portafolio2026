import { Routes } from '@angular/router';
import { provideNgtRenderer } from 'angular-three/dom';
import { PorfolioPage } from './pages/porfolio-page/porfolio-page';

export const routes: Routes = [
  {
    path: '',
    title: 'pageTitle.portfolio',
    component: PorfolioPage,
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
