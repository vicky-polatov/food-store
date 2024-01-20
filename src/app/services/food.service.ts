import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, from, of, retry, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Food } from '../model/food';
import { storageService } from './async-storage-service';
import { Filter } from '../model/filter';
import { LoaderService } from './loader.service';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private loaderService: LoaderService, private location: Location) { }

  private _foods$ = new BehaviorSubject<Food[]>([])
  public foods$ = this._foods$.asObservable()

  private _filter$ = new BehaviorSubject<Filter>(this._getDefaultFilter())
  public filter$ = this._filter$.asObservable()

  query() {
    if (this.location.path() === '/food-store' && !this._foods$.value.length) {
      this.loaderService.setLoader(true)
    }
    return from(storageService.getFoods())
      .pipe(
        tap(foods => {
          this.loaderService.setLoader(false)
          const filterBy = this._filter$.value
          const rgx = new RegExp(filterBy?.name || '', 'i')
          const filteredFoods = foods.filter(food => rgx.test(food.name))
          this._foods$.next(filteredFoods)
        }),
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
          const foods = this._foods$.value
          const newFoods = foods.filter(food => food.id !== foodId)
          this._foods$.next(newFoods)
        }),
        retry(1),
        catchError(this._handleError)
      )
  }

  setFilter(filterBy: Filter) {
    const filter = this._filter$.value
    this._filter$.next({ ...filter, ...filterBy })
    this.query().subscribe()
  }

  saveFood(food: Food) {
    return food.id ? this._editFood(food) : this._addFood(food)
  }

  private _editFood(food: Food): Observable<Food> {
    return from(storageService.editFood(food))
      .pipe(
        tap((food) => {
          const foods = this._foods$.value
          const foodIdx = foods.findIndex(_food => _food.id === food.id)
          foods.splice(foodIdx, 1, food)
          this._foods$.next([...foods])
        }),
        retry(1),
        catchError(this._handleError)
      )
  }

  private _addFood(food: Food) {
    return from([])
  }

  private _handleError(err: HttpErrorResponse) {
    this.loaderService.setLoader(false)
    return throwError(() => err)
  }

  private _getDefaultFilter() {
    return { name: '' }
  }

}
