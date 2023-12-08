import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { FoodIndexComponent } from './views/food-index/food-index.component';
import { FoodListComponent } from './cmps/food-list/food-list.component';
import { FoodPreviewComponent } from './cmps/food-preview/food-preview.component';
import { HeaderComponent } from './cmps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodIndexComponent,
    FoodListComponent,
    FoodPreviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
