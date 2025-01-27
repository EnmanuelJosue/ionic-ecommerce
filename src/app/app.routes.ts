import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routes'),
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/checkout.routes'),
  },
  {
    path: '',
    redirectTo: 'home/feed',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home/feed',
    pathMatch: 'full',
  }
];
