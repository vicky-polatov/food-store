import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

type QuantityToSet = { item: CartItem, diff: number }

@Component({
  selector: 'cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent {
  @Input() item!: CartItem
  @Output() removeFromCart = new EventEmitter<CartItem>()
  @Output() setQuantity = new EventEmitter<QuantityToSet>()

  onRemoveFromCart(item: CartItem) {
    this.removeFromCart.emit(item)
  }

  onSetQuantity(item: CartItem, diff: number) {
    this.setQuantity.emit({ item, diff })
  }
}
