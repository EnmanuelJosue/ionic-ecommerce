import { Routes } from '@angular/router';
import { TabsComponent } from 'src/app/shared/components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'feed',
        loadComponent: () => import('./pages/feed/feed.component'),
        data: { headerName: 'Home' }
      },
      {
        path: 'all-products',
        loadComponent: () => import('./pages/all-products/all-products.component'),
        data: { headerName: 'All products' }
      },
      {
        path: 'cart',
        loadComponent: () => import('../home/pages/cart/cart.component'),
        data: { headerName: 'Cart' }
      },
    ]
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  }
];
export default routes;
