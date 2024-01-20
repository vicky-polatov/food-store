import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  @Input() items!: CartItem[]

}
