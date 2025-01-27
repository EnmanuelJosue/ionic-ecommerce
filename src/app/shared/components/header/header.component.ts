import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { filter } from 'rxjs';

interface RouteData {
  headerName?: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton ]
})
export class HeaderComponent  implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  headerName = signal<string>('');


  ngOnInit() {
    // Escuchar los cambios de ruta
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        filter(() => !!this.activatedRoute.firstChild)  // Asegurarse de que haya una ruta hija
      )
      .subscribe(() => {
        const currentRoute = this.getCurrentRoute();
        if (currentRoute && currentRoute.data) {
          currentRoute.data.subscribe((data) => {
            this.headerName.set(data['headerName'] ?? 'Default Title');
          });
        }
      });
  }

  private getCurrentRoute() {
    let route = this.activatedRoute.firstChild;
    while (route?.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

}
