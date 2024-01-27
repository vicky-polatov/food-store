import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, of, tap, throwError } from 'rxjs';
import { Cart } from '../model/cart';
import { cartStorageService } from './cart-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Food } from '../model/food';
import { CartItem } from '../model/cart-item';

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
        catchError((err) => this._handleError(err, 'CartService|query'))
      )
  }

  addToCart(food: Food) {
    return from(cartStorageService.addToCart(food))
      .pipe(
        tap(cart => this._cart$.next(cart)),
        catchError((err) => this._handleError(err, 'CartService|addToCart'))
      )
  }

  removeFromCart(item: CartItem) {
    return from(cartStorageService.removeFromCart(item))
      .pipe(
        tap(cart => this._cart$.next(cart)),
        catchError((err) => this._handleError(err, 'CartService|removeFromCart'))
      )
  }

  private _handleError(err: HttpErrorResponse, errLocation: string) {
    console.log(`Something went wrong: ${errLocation}`, err)
    return of(null)
  }

}
