import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonLoading } from '@ionic/angular/standalone';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, HeaderComponent, IonContent],
})
export class AppComponent {
  constructor() {}
}
