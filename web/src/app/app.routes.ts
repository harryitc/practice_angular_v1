import { Routes } from '@angular/router';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.routes').then(m => m.AUTH_ROUTES)
  },
  { path: '**', component: NotFoundComponent },
];
