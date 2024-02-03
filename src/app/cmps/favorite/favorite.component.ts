import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { catchError, take } from 'rxjs';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';
import { UserMsgService } from 'src/app/services/user.msg.service';

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
  private userMsgService = inject(UserMsgService)

  onSetFavorite() {
    const food = { ...this.food, isFavorite: !this.isFavorite }
    this.foodService.saveFood(food)
      .pipe(
        take(1)
      )
      .subscribe({
        next: () => {
          this.userMsgService.setUserMsg({ type: 'success', msg: `The dish has been ${food.isFavorite ? 'added to' : 'removed from'} your favorites list` })
          this.setFood.emit()
        },
        error: (err) => {
          this.userMsgService.setUserMsg({ type: 'error', msg: 'Something went wrong...' })
          console.error('Something went wrong...', err)
        }
      })
  }
}
