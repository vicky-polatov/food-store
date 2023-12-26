import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app-component/app.component';
import { FoodIndexComponent } from './views/food-index/food-index.component';
import { FoodListComponent } from './cmps/food-list/food-list.component';
import { FoodPreviewComponent } from './cmps/food-preview/food-preview.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FoodDetailsComponent } from './views/food-details/food-details.component';
import { FavoriteComponent } from './cmps/favorite/favorite.component';
import { FilterBoxComponent } from './cmps/filter-box/filter-box.component';
import { LoaderComponent } from './cmps/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodIndexComponent,
    FoodListComponent,
    FoodPreviewComponent,
    HeaderComponent,
    FoodDetailsComponent,
    FavoriteComponent,
    FilterBoxComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
