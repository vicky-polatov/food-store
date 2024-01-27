import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartService = inject(CartService)
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

  ngOnDestroy() {
    this.destroySubject$.next(null)
    this.destroySubject$.complete()
  }

}
