import { Component, Input } from '@angular/core';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'food-preview',
  templateUrl: './food-preview.component.html',
  styleUrls: ['./food-preview.component.scss']
})
export class FoodPreviewComponent {
  @Input() food!: Food
}
