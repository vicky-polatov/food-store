import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { FoodService } from '../services/food.service';
import { tap, take } from 'rxjs';
import { Food } from '../model/food';

export const foodByIdResolver: ResolveFn<Food | null> = (route) => {
  const { id } = route.params
  return inject(FoodService).getFoodById(id).pipe(take(1))
};
