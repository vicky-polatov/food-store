import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { catchError, take } from 'rxjs';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input() isFavorite!: boolean
  @Input() food!: Food
  @Output() setFood = new EventEmitter<void>()

  private foodService = inject(FoodService)

  onSetFavorite() {
    const food = { ...this.food, isFavorite: !this.isFavorite }
    this.foodService.saveFood(food)
      .pipe(
        take(1)
      )
      .subscribe({
        next: () => { this.setFood.emit() },
        error: (err) => console.log('Something went wrong...', err)
      })
  }
}
