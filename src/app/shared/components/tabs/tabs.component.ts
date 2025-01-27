import { Component, inject, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { starOutline, stopwatchOutline, checkmarkDoneCircleOutline, bagCheckOutline } from 'ionicons/icons';
import { CartService } from 'src/app/core/services/data/cart.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsComponent  implements OnInit {
  public cartService = inject(CartService);
  constructor() {
    addIcons({ starOutline, stopwatchOutline, checkmarkDoneCircleOutline, bagCheckOutline });
   }

  ngOnInit() {}

}
