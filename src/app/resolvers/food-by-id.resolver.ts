import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { FoodService } from '../services/food.service';
import { tap, take } from 'rxjs';
import { Food } from '../model/food';
import { LoaderService } from '../services/loader.service';

export const foodByIdResolver: ResolveFn<Food | null> = (route) => {
  inject(LoaderService).setLoader(true)
  const { id } = route.params
  return inject(FoodService).getFoodById(id).pipe(take(1))
};
