import { Component, inject, input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { CartItem } from '../../models/card.model';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline } from 'ionicons/icons';
import { CartService } from 'src/app/core/services/data/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, CurrencyPipe]
})
export class CardComponent  implements OnInit {
  public _cartService = inject(CartService);
  cardItem = input.required<CartItem>();
  configWidth = input<boolean>(false);
  showQuantity = input<boolean>(false);

  constructor() {
    addIcons({ addOutline, removeOutline });
  }

  ngOnInit() {}



  addToCart(item: CartItem){
    this._cartService.setItem(item);
  }

  removeFromCart(item: CartItem){
    this._cartService.removeItem(item);

  }

}
