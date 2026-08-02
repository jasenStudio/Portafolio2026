import { Routes } from '@angular/router';
import { PorfolioPage } from './pages/porfolio-page/porfolio-page';
export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: PorfolioPage,
  },
  {
    path: 'projects',
    title: 'Project',
    loadComponent: () => import('./pages/projects/projects'),
  },
  {
    path: 'projects/:slug',
    title: 'Project',
    loadComponent: () => import('./pages/projects/projects'),
  },
];
