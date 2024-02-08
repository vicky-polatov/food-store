import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

type QuantityToSet = { item: CartItem, diff: number }
@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  @Input() items!: CartItem[]
  @Output() removeFromCart = new EventEmitter<CartItem>()
  @Output() setQuantity = new EventEmitter<QuantityToSet>()

  onRemoveFromCart(ev: CartItem) {
    this.removeFromCart.emit(ev)
  }

  onSetQuantity(ev: QuantityToSet) {
    this.setQuantity.emit(ev)
  }
}
