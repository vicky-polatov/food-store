import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodIndexComponent } from './views/food-index/food-index.component';

const routes: Routes = [
  { path: 'food-store', component: FoodIndexComponent },
  { path: '', redirectTo: 'food-store', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
