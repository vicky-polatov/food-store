import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  route = inject(ActivatedRoute)
  food!: Food

  ngOnInit(): void {
    this.route.data
      .pipe(
        map(data => data['food']),
        take(1)
      )
      .subscribe((food) => {
        this.food = food
      })
  }

}
