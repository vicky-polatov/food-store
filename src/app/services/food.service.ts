import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, catchError, from, of, retry, tap, throwError } from 'rxjs';
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
        catchError((err: HttpErrorResponse) => {
          console.log('Something went wrong: FoodService|getFoodById', err)
          return of(null) // return EMPTY
        })
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
