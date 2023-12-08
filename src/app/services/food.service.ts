import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, retry, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Food } from '../model/food';
import { storageService } from './async-storage-service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  private _foods = new BehaviorSubject<Food[]>([])
  public foods = this._foods.asObservable()

  query() {
    return from(storageService.getFoods())
      .pipe(
        tap(foods => this._foods.next(foods)),
        retry(1),
        catchError(this._handleError)
      )

  }

  getFoodById(foodId: string) {
    return from(storageService.getFoodById(foodId))
      .pipe(
        catchError(this._handleError)
      )
  }

  removeFood(foodId: string) {
    return from(storageService.removeFood(foodId))
      .pipe(
        tap(() => {
          const foods = this._foods.value
          const newFoods = foods.filter(food => food.id !== foodId)
          this._foods.next(newFoods)
        }),
        retry(1),
        catchError(this._handleError)
      )
  }

  private _handleError(err: HttpErrorResponse) {
    return throwError(() => err)
  }
}
