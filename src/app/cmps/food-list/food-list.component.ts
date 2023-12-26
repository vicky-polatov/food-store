import { Component, Input } from '@angular/core';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  @Input() foods!: Food[]

}
