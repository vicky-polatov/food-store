import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, take } from 'rxjs';
import { Food } from 'src/app/model/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { LoaderService } from 'src/app/services/loader.service';
import { UserMsgService } from 'src/app/services/user.msg.service';

@Component({
  selector: 'food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private foodService = inject(FoodService)
  private cartService = inject(CartService)
  private loaderService = inject(LoaderService)
  private userMsgService = inject(UserMsgService)
  private router = inject(Router)

  food$ = this.route.data.pipe(map(data => data['food']))

  ngOnInit(): void {
    this.loaderService.setLoader(false)
  }

  onSetFood() {
    this.food$ = this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.foodService.getFoodById(id)),
      )
  }

  onAddToCart(food: Food) {
    this.cartService.addToCart(food)
      .pipe(
        take(1)
      )
      .subscribe({
        next: () => {
          this.userMsgService.setUserMsg({ type: 'success', msg: 'The dish has been added to your cart' })
          this.router.navigateByUrl('food-store')
        },
        error: () => {
          this.userMsgService.setUserMsg({ type: 'error', msg: 'Something went wrong.. try again later' })
          this.router.navigateByUrl('food-store')
        }
      })
  }

}
