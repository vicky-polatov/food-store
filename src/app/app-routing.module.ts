import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodIndexComponent } from './views/food-index/food-index.component';
import { FoodDetailsComponent } from './views/food-details/food-details.component';
import { foodByIdResolver } from './resolvers/food-by-id.resolver';
import { foodByIdGuard } from './guards/food-by-id.guard';

const routes: Routes = [
  { path: 'food-store', component: FoodIndexComponent },
  {
    path: 'food-store/:id',
    component: FoodDetailsComponent,
    resolve: { food: foodByIdResolver },
    canActivate: [foodByIdGuard]
  },
  { path: '', redirectTo: 'food-store', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
