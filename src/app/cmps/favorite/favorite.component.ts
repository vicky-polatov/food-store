import { Component, Input } from '@angular/core';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input() isFavorite!: Boolean
  @Input() food!: Food
}
