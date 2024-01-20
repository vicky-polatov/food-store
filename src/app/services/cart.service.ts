import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, of, tap, throwError } from 'rxjs';
import { Cart } from '../model/cart';
import { cartStorageService } from './cart-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart$ = new BehaviorSubject<Cart>(cartStorageService.getDefaultCart())
  public cart$ = this._cart$.asObservable()

  query() {
    return from(cartStorageService.getCart())
      .pipe(
        tap(cart => this._cart$.next(cart)),
        catchError((err: HttpErrorResponse) => {
          console.log('Something went wrong: CartService|query', err)
          return of(null)
        })
      )
  }

  addToCart(food: Food) {
    return from(cartStorageService.addToCart(food))
      .pipe(
        tap(cart => this._cart$.next(cart)),
        catchError((err: HttpErrorResponse) => {
          console.log('Something went wrong: CartService|addToCart', err)
          return of(null)
        })
      )
  }

}
