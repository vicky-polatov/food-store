import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent {

  route = inject(ActivatedRoute)
  foodService = inject(FoodService)
  food$ = this.route.data.pipe(map(data => data['food']))

  onSetFood() {
    this.food$ = this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.foodService.getFoodById(id)),
      )
  }

}
