import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private foodService = inject(FoodService)
  private loaderService = inject(LoaderService)
  food$ = this.route.data.pipe(map(data => data['food']))

  ngOnInit(): void {
    this.loaderService.setLoader(false)
  }

  onSetFood() {
    this.food$ = this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.foodService.getFoodById(id)),
      )
  }

}
