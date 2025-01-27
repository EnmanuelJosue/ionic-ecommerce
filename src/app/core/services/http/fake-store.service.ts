import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Products } from '../../models/products.model';
import { Cart } from '../../models/cart.model';

@Injectable({providedIn: 'root'})
export class FakeStoreService {
  private readonly baseUrl = environment.apiUrl;
  private _http = inject(HttpClient);

  getProducts(): Observable<Products[]> {
    return this._http.get<Products[]>(`${this.baseUrl}/products`);
  }

  getCategories(): Observable<string[]>{
    return this._http.get<string[]>(`${this.baseUrl}/products/categories`);
  }

  getProductByCategory(category: string): Observable<Products[]>{
    return this._http.get<Products[]>(`${this.baseUrl}/products/category/${category}`);
  }

  addProductInCart(body: Cart): Observable<Cart>{
    return this._http.post<Cart>(`${this.baseUrl}/carts`, body);
  }

  updateProductInCart(body: Cart, id: number): Observable<Cart>{
    return this._http.put<Cart>(`${this.baseUrl}/carts/${id}`, body);
  }

  deleteProductCart(id: number): Observable<Cart>{
    return this._http.delete<Cart>(`${this.baseUrl}/carts/${id}`);
  }
}
