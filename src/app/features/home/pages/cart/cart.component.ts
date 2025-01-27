import { CurrencyPipe } from '@angular/common';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { CartService } from 'src/app/core/services/data/cart.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CartItem } from 'src/app/shared/models/card.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [IonContent, CardComponent, IonGrid, IonRow, IonCol, IonButton, CurrencyPipe, RouterLink],
})
export default class CartComponent  implements OnInit {
  public cartService = inject(CartService);
  uniqueItems = signal<CartItem[]>([]); ;

  checkItems = effect(() => {
    this.filterUniqueItems();
  })
  constructor() { }

  ngOnInit() {
    this.filterUniqueItems();
  }
  filterUniqueItems() {
    const items = this.cartService.getItemsSelected();
    const uniqueItemsMap = new Map<number, CartItem>();

    items.forEach(item => {
      if (!uniqueItemsMap.has(item.id)) {
        uniqueItemsMap.set(item.id, item);
      }
    });

    this.uniqueItems.set(Array.from(uniqueItemsMap.values()));
  }
}
