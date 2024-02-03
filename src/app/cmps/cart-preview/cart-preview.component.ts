import { Component, Input, inject } from '@angular/core';
import { take } from 'rxjs';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { UserMsgService } from 'src/app/services/user.msg.service';

@Component({
  selector: 'cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent {
  @Input() item!: CartItem

  private cartService = inject(CartService)
  private userMsgService = inject(UserMsgService)

  onRemoveFromCart(item: CartItem) {
    this.cartService.removeFromCart(item)
      .pipe(
        take(1)
      )
      .subscribe({
        next: () => {
          this.userMsgService.setUserMsg({ type: 'success', msg: 'The dish has been removed from your cart' })
        },
        error: () => {
          this.userMsgService.setUserMsg({ type: 'error', msg: 'Something went wrong.. try again later' })
        }
      })
  }

  onSetQuantity(item: CartItem, diff: number) {
    this.cartService.setQuantity(item, diff)
      .pipe(take(1))
      .subscribe({
        error: () => {
          this.userMsgService.setUserMsg({ type: 'error', msg: 'Something went wrong.. try again later' })
        }
      })
  }
}
