import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs';
import { CartItem } from 'src/app/model/cart-item';

import { CartService } from 'src/app/services/cart.service';
import { UserMsgService } from 'src/app/services/user.msg.service';

type QuantityToSet = { item: CartItem, diff: number }
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService)
  private userMsgService = inject(UserMsgService)
  cart$ = this.cartService.cart$

  ngOnInit(): void {
    this.cartService.query()
      .pipe(take(1))
      .subscribe()
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.userMsgService.setUserMsg({ type: 'success', msg: 'The dish has been removed from your cart' })
        },
        error: () => {
          this.userMsgService.setUserMsg({ type: 'error', msg: 'Something went wrong.. try again later' })
        }
      })
  }

  onSetQuantity(ev: QuantityToSet) {
    const { item, diff } = ev
    this.cartService.setQuantity(item, diff)
      .pipe(take(1))
      .subscribe({
        error: () => {
          this.userMsgService.setUserMsg({ type: 'error', msg: 'Something went wrong.. try again later' })
        }
      })
  }
}
