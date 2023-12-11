import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { map, tap } from 'rxjs';

export const foodByIdGuard: CanActivateFn = (route) => {
  const router = inject(Router)
  return inject(FoodService).getFoodById(route.params['id'])
    .pipe(
      tap(food => {
        if (!food) router.navigateByUrl('')
      }),
      map(food => !!food),
    )
};
