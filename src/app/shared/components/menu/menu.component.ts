import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonMenu, IonHeader, IonToolbar, IonContent, IonTitle, IonList,IonButtons, IonMenuButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonMenu, IonHeader, IonToolbar, IonContent, IonTitle],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
