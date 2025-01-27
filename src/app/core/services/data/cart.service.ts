import { computed, inject, Injectable, signal } from '@angular/core';
import { CartItem } from 'src/app/shared/models/card.model';
import { FakeStoreService } from '../http/fake-store.service';
import { Cart } from '../../models/cart.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _itemsSelected = signal<CartItem[]>([]);
  private _fakeStoreService = inject(FakeStoreService);
  private _datePipe = new DatePipe('en-US');
  idCartInDb = signal<number | null>(null);
  getItemsSelected = computed(() => this._itemsSelected());

  getTotalPrice = computed(() => {
    return this._itemsSelected().reduce((total, item) => {
      return total + item.price * item.quantity!;
    }, 0);
  });


  getItemQuantityById(id: number) {
    const items = this._itemsSelected().filter(item => item.id === id);
    return items.reduce((total, item) => total + item.quantity!, 0);
  }

  setItem(newItem: CartItem) {
    this._itemsSelected.update(items => {
      const existItemIndex = items.findIndex(product => product.id === newItem.id);
      if (existItemIndex !== -1) {
        items[existItemIndex].quantity! += 1;
        return [...items];
      } else {
        newItem.quantity = 1;
        return [...items, newItem];
      }
    });
    this.handleAddAndUpdateCartInDb();
  }

  removeItem(removeItem: CartItem) {
    this._itemsSelected.update(items => {
      const indexToRemove = items.findIndex(item => item.id === removeItem.id);
      if (indexToRemove !== -1) {
        if (items[indexToRemove].quantity! > 1) {
          items[indexToRemove].quantity!--;

          return [...items];
        } else {
          const updatedItems = [...items];
          updatedItems.splice(indexToRemove, 1);
          return updatedItems;
        }
      }

      return items;
    });
    this.handleAddAndUpdateCartInDb();
  }


  clear() {
    this._itemsSelected.set([]);
    this.deleteCartInDb();
  }

  private handleAddAndUpdateCartInDb() {
    if (Number(this.idCartInDb())) {
      this.updateProductInCartDB(this._itemsSelected().map(item => {
        return {
          productId: item.id,
          quantity: item.quantity!
        }
      }), this.idCartInDb()!);
    } else {
      this.addProductInCartDB(this._itemsSelected().map(item => {
        return {
          productId: item.id,
          quantity: item.quantity!
        }
      }));

    }

  }

  private addProductInCartDB(products: {productId: number, quantity: number}[]){
    const body: Cart = {
      userId: 5,
      date: this._datePipe.transform(new Date(), 'yyyy-MM-dd')!,
      products
    }
    this._fakeStoreService.addProductInCart(body)
    .subscribe({
      next: (data) => {
        if (data.id) {
          this.idCartInDb.set(data.id);
        }
      }
    })
  }

  private updateProductInCartDB(products: {productId: number, quantity: number}[], id: number) {
    const body: Cart = {
      userId: 5,
      date: this._datePipe.transform(new Date(), 'yyyy-MM-dd')!,
      products
    }
    this._fakeStoreService.updateProductInCart(body, id)
    .subscribe()
  }

  private deleteCartInDb(){
    this._fakeStoreService.deleteProductCart(this.idCartInDb()!).subscribe(
      {
        next: () => {
          this.idCartInDb.set(null);
        }
      }
    )
  }


}
