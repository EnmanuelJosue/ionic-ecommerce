import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'form',
        loadComponent: () => import('./pages/form/form.component'),
        data: { headerName: 'Checkout' }
      },

    ]
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];
export default routes;
