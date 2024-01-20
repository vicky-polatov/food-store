import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent {
  @Input() item!: CartItem

}
