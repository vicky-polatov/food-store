import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { CartItem } from 'src/app/model/cart-item';

import { CartService } from 'src/app/services/cart.service';
import { UserMsgService } from 'src/app/services/user.msg.service';

type QuantityToSet = { item: CartItem, diff: number }
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartService = inject(CartService)
  userMsgService = inject(UserMsgService)
  cart$ = this.cartService.cart$
  destroySubject$ = new Subject<null>()

  // testFood = {
  //   id: '101',
  //   name: 'Margherita Pizza',
  //   category: 'Pizza',
  //   price: 10.49,
  //   description: 'Traditional Italian pizza with tomato, mozzarella, and basil',
  //   imgUrl: 'https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg',
  //   cookTime: '15-30',
  //   isFavorite: true,
  //   stars: 4.8,
  // }

  ngOnInit(): void {
    this.cartService.query()
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe()

    // setTimeout((food) => {
    //   this.cartService.addToCart(food)
    //     .pipe(
    //       takeUntil(this.destroySubject$)
    //     )
    //     .subscribe()
    // }, 1000, this.testFood)
  }

  removeFromCart(item: CartItem) {
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

  ngOnDestroy() {
    this.destroySubject$.next(null)
    this.destroySubject$.complete()
  }

}
