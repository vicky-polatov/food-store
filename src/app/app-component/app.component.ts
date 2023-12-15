import { Component, OnInit, inject } from '@angular/core';
import { FoodService } from '../services/food.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  foodService = inject(FoodService)

  ngOnInit(): void {
    this.foodService.query()
      .pipe(take(1))
      .subscribe()
  }
}
