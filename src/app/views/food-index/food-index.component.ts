import { Component, inject } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-index',
  templateUrl: './food-index.component.html',
  styleUrls: ['./food-index.component.scss']
})
export class FoodIndexComponent {

  private foodService = inject(FoodService)
  foods$ = this.foodService.foods$

}
