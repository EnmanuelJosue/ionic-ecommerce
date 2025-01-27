import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent, IonChip, IonLabel } from '@ionic/angular/standalone';
import { forkJoin } from 'rxjs';
import { FakeStoreService } from 'src/app/core/services/http/fake-store.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CartItem } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  imports: [CardComponent, IonContent, IonChip, IonLabel],
})
export default class FeedComponent  implements OnInit {
  private _fakeStoreService = inject(FakeStoreService);
  cardItems = signal<CartItem[]>([]);
  categories = signal<string[]>([]);
  selectedCategory = signal<string>('');

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.fetchData();
  }

  private fetchData() {
    this.categories.set([]);
    this.cardItems.set([]);
    this.selectedCategory.set('');
    forkJoin({
      products: this._fakeStoreService.getProducts(),
      categories: this._fakeStoreService.getCategories()
    }).subscribe({
      next: (result) => {
        this.cardItems.set(result.products);
        this.categories.set(result.categories);
      },

    });
  }

  selectCategory(category: string){
    this.selectedCategory.set(category);
    this.getProductByCategory(category);
  }

  private getProductByCategory(category: string){
    this.cardItems.set([]);
    this._fakeStoreService.getProductByCategory(category)
    .subscribe(
      {
        next: (data) => {
          this.cardItems.set(data);
        }
      }
    )
  }

}
