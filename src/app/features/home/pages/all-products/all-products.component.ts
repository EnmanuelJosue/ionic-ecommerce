import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { FakeStoreService } from 'src/app/core/services/http/fake-store.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CartItem } from 'src/app/shared/models/card.model';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  imports: [IonContent, CardComponent],
})
export default class AllProductsComponent  implements OnInit {
  private _fakeStoreService = inject(FakeStoreService);
  cardItems = signal<CartItem[]>([]);
  constructor() { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.fetchData();
  }
  private fetchData() {
    this.cardItems.set([]);
    this._fakeStoreService.getProducts().
    subscribe({
      next: (data) => {
        this.cardItems.set(data);
      }
    });
  }
}
