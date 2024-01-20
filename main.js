"use strict";
(self["webpackChunkFood_Store"] = self["webpackChunkFood_Store"] || []).push([["main"],{

/***/ 9723:
/*!************************************************!*\
  !*** ./src/app/app-component/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/food.service */ 776);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _services_user_msg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-msg.service */ 8790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmps/header/header.component */ 6065);
/* harmony import */ var _cmps_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmps/loader/loader.component */ 2183);
/* harmony import */ var _cmps_user_msg_user_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cmps/user-msg/user-msg.component */ 8747);









class AppComponent {
  constructor() {
    this.foodService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService);
    this.userMsgService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_user_msg_service__WEBPACK_IMPORTED_MODULE_1__.UserMsgService);
  }
  ngOnInit() {
    this.foodService.query().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe();
    // setTimeout(() => {
    //   this.userMsgService.setUserMsg({ type: 'info', msg: 'The restaurant is open!' })
    // }, 4000)
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [[1, "main-container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header")(2, "router-outlet")(3, "loader")(4, "user-msg");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _cmps_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _cmps_user_msg_user_msg_component__WEBPACK_IMPORTED_MODULE_4__.UserMsgComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_food_index_food_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/food-index/food-index.component */ 342);
/* harmony import */ var _views_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/food-details/food-details.component */ 7992);
/* harmony import */ var _resolvers_food_by_id_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/food-by-id.resolver */ 2280);
/* harmony import */ var _guards_food_by_id_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/food-by-id.guard */ 5274);
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/cart/cart.component */ 1863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: 'food-store',
  component: _views_food_index_food_index_component__WEBPACK_IMPORTED_MODULE_0__.FoodIndexComponent
}, {
  path: 'food-store/:id',
  component: _views_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_1__.FoodDetailsComponent,
  resolve: {
    food: _resolvers_food_by_id_resolver__WEBPACK_IMPORTED_MODULE_2__.foodByIdResolver
  },
  canActivate: [_guards_food_by_id_guard__WEBPACK_IMPORTED_MODULE_3__.foodByIdGuard]
}, {
  path: 'cart',
  component: _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent
}, {
  path: '',
  redirectTo: 'food-store',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ 6889);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-component/app.component */ 9723);
/* harmony import */ var _views_food_index_food_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/food-index/food-index.component */ 342);
/* harmony import */ var _cmps_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmps/food-list/food-list.component */ 8360);
/* harmony import */ var _cmps_food_preview_food_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/food-preview/food-preview.component */ 2085);
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/header/header.component */ 6065);
/* harmony import */ var _views_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/food-details/food-details.component */ 7992);
/* harmony import */ var _cmps_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/favorite/favorite.component */ 5975);
/* harmony import */ var _cmps_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/filter-box/filter-box.component */ 3904);
/* harmony import */ var _cmps_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/loader/loader.component */ 2183);
/* harmony import */ var _cmps_user_msg_user_msg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/user-msg/user-msg.component */ 8747);
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/cart/cart.component */ 1863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);

















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _views_food_index_food_index_component__WEBPACK_IMPORTED_MODULE_3__.FoodIndexComponent, _cmps_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__.FoodListComponent, _cmps_food_preview_food_preview_component__WEBPACK_IMPORTED_MODULE_5__.FoodPreviewComponent, _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _views_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_7__.FoodDetailsComponent, _cmps_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_8__.FavoriteComponent, _cmps_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_9__.FilterBoxComponent, _cmps_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__.LoaderComponent, _cmps_user_msg_user_msg_component__WEBPACK_IMPORTED_MODULE_11__.UserMsgComponent, _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__.CartComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule]
  });
})();

/***/ }),

/***/ 5975:
/*!*****************************************************!*\
  !*** ./src/app/cmps/favorite/favorite.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoriteComponent: () => (/* binding */ FavoriteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 776);
/* harmony import */ var src_app_services_user_msg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-msg.service */ 8790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






const _c0 = function (a0) {
  return {
    "favorite": a0
  };
};
class FavoriteComponent {
  constructor() {
    this.setFood = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.foodService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService);
    this.userMsgService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_user_msg_service__WEBPACK_IMPORTED_MODULE_1__.UserMsgService);
  }
  onSetFavorite() {
    const food = {
      ...this.food,
      isFavorite: !this.isFavorite
    };
    this.foodService.saveFood(food).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe({
      next: () => {
        this.userMsgService.setUserMsg({
          type: 'success',
          msg: `The dish has been ${food.isFavorite ? 'added to' : 'removed from'} your favorites list`
        });
        this.setFood.emit();
      },
      error: err => {
        this.userMsgService.setUserMsg({
          type: 'error',
          msg: 'Something went wrong...'
        });
        console.error('Something went wrong...', err);
      }
    });
  }
  static #_ = this.ɵfac = function FavoriteComponent_Factory(t) {
    return new (t || FavoriteComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FavoriteComponent,
    selectors: [["favorite"]],
    inputs: {
      isFavorite: "isFavorite",
      food: "food"
    },
    outputs: {
      setFood: "setFood"
    },
    decls: 2,
    vars: 3,
    consts: [[1, "favorite-heart", 3, "ngClass", "click"]],
    template: function FavoriteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavoriteComponent_Template_div_click_0_listener($event) {
          ctx.onSetFavorite();
          return $event.preventDefault();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx.food.isFavorite));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
    styles: [".favorite-heart[_ngcontent-%COMP%] {\n  color: gray;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.favorite-heart[_ngcontent-%COMP%]:hover:not(.favorite) {\n  background-color: rgba(235, 183, 183, 0.518);\n}\n.favorite-heart.favorite[_ngcontent-%COMP%] {\n  color: red;\n}\n.favorite-heart.favorite[_ngcontent-%COMP%]:hover {\n  background-color: rgba(210, 206, 206, 0.562);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY21wcy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL05ldyUyMEFuZyUyMFByb2ovRm9vZC1TdG9yZS9zcmMvYXBwL2NtcHMvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDSSw0Q0FBQTtBQ0NSO0FERUk7RUFDSSxVQUFBO0FDQVI7QURFUTtFQUNJLDRDQUFBO0FDQVoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3JpdGUtaGVhcnQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3Zlcjpub3QoLmZhdm9yaXRlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDE4MywgMTgzLCAwLjUxOCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mYXZvcml0ZSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMDYsIDIwNiwgMC41NjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5mYXZvcml0ZS1oZWFydCB7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGUtaGVhcnQ6aG92ZXI6bm90KC5mYXZvcml0ZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMTgzLCAxODMsIDAuNTE4KTtcbn1cbi5mYXZvcml0ZS1oZWFydC5mYXZvcml0ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZmF2b3JpdGUtaGVhcnQuZmF2b3JpdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjA2LCAyMDYsIDAuNTYyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3904:
/*!*********************************************************!*\
  !*** ./src/app/cmps/filter-box/filter-box.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterBoxComponent: () => (/* binding */ FilterBoxComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 776);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);





class FilterBoxComponent {
  constructor(foodService) {
    this.foodService = foodService;
    this.filterSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.foodService.filter$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroySubject$)).subscribe(filter => {
      this.foodFilter = filter;
    });
    this.filterSubject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroySubject$), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(() => {
      this.foodService.setFilter(this.foodFilter);
    });
  }
  onSearch() {
    this.filterSubject$.next(this.foodFilter);
  }
  ngOnDestroy() {
    this.destroySubject$.next(null);
  }
  static #_ = this.ɵfac = function FilterBoxComponent_Factory(t) {
    return new (t || FilterBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FilterBoxComponent,
    selectors: [["filter-box"]],
    decls: 4,
    vars: 1,
    consts: [[1, "search-container"], [1, "search-icon"], ["type", "text", "placeholder", "Search here", 3, "ngModel", "ngModelChange"]],
    template: function FilterBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FilterBoxComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.foodFilter.name = $event;
        })("ngModelChange", function FilterBoxComponent_Template_input_ngModelChange_3_listener() {
          return ctx.onSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.foodFilter.name);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  max-width: 485px;\n  min-width: 250px;\n  position: relative;\n  padding: 10px 0;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-59%);\n  color: darkred;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 16px 10px 16px 40px;\n  border: 0;\n  border-radius: 30px;\n  background-color: rgb(240, 239, 239);\n  width: 100%;\n  font-size: 1.2em;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline-color: rgb(223, 222, 222);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY21wcy9maWx0ZXItYm94L2ZpbHRlci1ib3guY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9OZXclMjBBbmclMjBQcm9qL0Zvb2QtU3RvcmUvc3JjL2FwcC9jbXBzL2ZpbHRlci1ib3gvZmlsdGVyLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ1o7QURFUTtFQUNJLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREVZO0VBQ0ksaUNBQUE7QUNBaEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgLnNlYXJjaC1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01OSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogZGFya3JlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAxMHB4IDE2cHggNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmUtY29sb3I6IHJnYigyMjMsIDIyMiwgMjIyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNDg1cHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOmhvc3QgLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01OSUpO1xuICBjb2xvcjogZGFya3JlZDtcbn1cbjpob3N0IC5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcbiAgcGFkZGluZzogMTZweCAxMHB4IDE2cHggNDBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuOmhvc3QgLnNlYXJjaC1jb250YWluZXIgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmUtY29sb3I6IHJnYigyMjMsIDIyMiwgMjIyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8360:
/*!*******************************************************!*\
  !*** ./src/app/cmps/food-list/food-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodListComponent: () => (/* binding */ FoodListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _food_preview_food_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../food-preview/food-preview.component */ 2085);



function FoodListComponent_food_preview_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "food-preview", 2);
  }
  if (rf & 2) {
    const food_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("food", food_r1);
  }
}
class FoodListComponent {
  static #_ = this.ɵfac = function FoodListComponent_Factory(t) {
    return new (t || FoodListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FoodListComponent,
    selectors: [["food-list"]],
    inputs: {
      foods: "foods"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "list-container"], [3, "food", 4, "ngFor", "ngForOf"], [3, "food"]],
    template: function FoodListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FoodListComponent_food_preview_1_Template, 1, 1, "food-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.foods);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _food_preview_food_preview_component__WEBPACK_IMPORTED_MODULE_0__.FoodPreviewComponent],
    styles: [".list-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  height: 85vh;\n  overflow-y: auto;\n}\n.list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY21wcy9mb29kLWxpc3QvZm9vZC1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vTmV3JTIwQW5nJTIwUHJvai9Gb29kLVN0b3JlL3NyYy9hcHAvY21wcy9mb29kLWxpc3QvZm9vZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksUUFBQTtBQ0NSIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4NXZoOyAvL2xhdGVyIGNhbGMgLWhlYWRlci1oZWlnaHQgLWZvb3Rlci1oZWlnaHRcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59IiwiLmxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG4gIGhlaWdodDogODV2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2085:
/*!*************************************************************!*\
  !*** ./src/app/cmps/food-preview/food-preview.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodPreviewComponent: () => (/* binding */ FoodPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../favorite/favorite.component */ 5975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




class FoodPreviewComponent {
  static #_ = this.ɵfac = function FoodPreviewComponent_Factory(t) {
    return new (t || FoodPreviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FoodPreviewComponent,
    selectors: [["food-preview"]],
    inputs: {
      food: "food"
    },
    decls: 17,
    vars: 11,
    consts: [[1, "preview"], [3, "routerLink"], [3, "src", "alt"], [1, "content"], [1, "card-header"], [1, "name"], [3, "food", "isFavorite"], [1, "card-footer"], [1, "category"]],
    template: function FoodPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "favorite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div")(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/food-store/", ctx.food.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.food.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.food.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.food.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("food", ctx.food)("isFavorite", ctx.food.isFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.food.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, ctx.food.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDD52", ctx.food.cookTime, "");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: darkred;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  height: 20rem;\n  border: 1px solid whitesmoke;\n  border-radius: 1rem;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: block;\n  color: gray;\n  background-color: whitesmoke;\n  font-size: 0.8em;\n  padding: 0 0.2em;\n  border-radius: 3px;\n  margin-bottom: 0.5em;\n}\n[_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 80%;\n}\n\n@media screen and (min-width: 680px) {\n  [_nghost-%COMP%] {\n    width: unset;\n  }\n  [_nghost-%COMP%]   .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 18rem;\n    margin: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY21wcy9mb29kLXByZXZpZXcvZm9vZC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vTmV3JTIwQW5nJTIwUHJvai9Gb29kLVN0b3JlL3NyYy9hcHAvY21wcy9mb29kLXByZXZpZXcvZm9vZC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDWjtBRENZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NoQjtBREVZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDQWhCO0FERWdCO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQXBCO0FERW9CO0VBQ0ksZ0JBQUE7QUNBeEI7QURJZ0I7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNGcEI7QURJb0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGeEI7QURRWTtFQUNJLFlBQUE7QUNOaEI7O0FEWUE7RUFDSTtJQUNJLFlBQUE7RUNUTjtFRFlVO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUNWZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnByZXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjb2xvcjogZGFya3JlZDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBnYXA6IDFlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIC4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICB3aWR0aDogdW5zZXQ7XHJcblxyXG4gICAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5wcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGRhcmtyZWQ7XG59XG46aG9zdCAucHJldmlldyBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLnByZXZpZXcgYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuOmhvc3QgLnByZXZpZXcgYSAuY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFlbTtcbn1cbjpob3N0IC5wcmV2aWV3IGEgLmNvbnRlbnQgLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLnByZXZpZXcgYSAuY29udGVudCAuY2FyZC1oZWFkZXIgLm5hbWUge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuOmhvc3QgLnByZXZpZXcgYSAuY29udGVudCAuY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAucHJldmlldyBhIC5jb250ZW50IC5jYXJkLWZvb3RlciAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDAgMC4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG46aG9zdCAucHJldmlldyBhOmhvdmVyIHtcbiAgb3BhY2l0eTogODAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2ODBweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICB9XG4gIDpob3N0IC5wcmV2aWV3IGEge1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6065:
/*!*************************************************!*\
  !*** ./src/app/cmps/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderComponent {
  // @HostBinding('class') classes = ['full'] // OPTION 2
  constructor() {
    // inject(ElementRef).nativeElement.className = 'full' // OPTION 3
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostAttrs: [1, "full"],
    decls: 2,
    vars: 0,
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2183:
/*!*************************************************!*\
  !*** ./src/app/cmps/loader/loader.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loader.service */ 1839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function LoaderComponent_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 1);
  }
}
class LoaderComponent {
  constructor() {
    this.isLoading$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService).isLoading$;
  }
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["loader"]],
    decls: 2,
    vars: 3,
    consts: [["src", "assets/imgs/loader.svg", "alt", "Loading...", "class", "loader", 4, "ngIf"], ["src", "assets/imgs/loader.svg", "alt", "Loading...", 1, "loader"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_img_0_Template, 1, 0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.isLoading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: [".loader[_ngcontent-%COMP%] {\n  width: 300px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY21wcy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vTmV3JTIwQW5nJTIwUHJvai9Gb29kLVN0b3JlL3NyYy9hcHAvY21wcy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxufSIsIi5sb2FkZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8747:
/*!*****************************************************!*\
  !*** ./src/app/cmps/user-msg/user-msg.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserMsgComponent: () => (/* binding */ UserMsgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_user_msg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user-msg.service */ 8790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function UserMsgComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.userMsg.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userMsg.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userMsg.msg);
  }
}
class UserMsgComponent {
  constructor(userMsgService) {
    this.userMsgService = userMsgService;
    this.userMsg = null;
  }
  ngOnInit() {
    this.subscription = this.userMsgService.userMsg$.subscribe(msg => {
      this.userMsg = msg;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function UserMsgComponent_Factory(t) {
    return new (t || UserMsgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_msg_service__WEBPACK_IMPORTED_MODULE_0__.UserMsgService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserMsgComponent,
    selectors: [["user-msg"]],
    decls: 1,
    vars: 1,
    consts: [["class", "msg-container", 3, "class", 4, "ngIf"], [1, "msg-container"]],
    template: function UserMsgComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserMsgComponent_div_0_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userMsg);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".msg-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0.6rem;\n  right: 0.6rem;\n  background-color: rgb(162, 218, 162);\n  color: darkgreen;\n  min-width: 20rem;\n  height: 4.2rem;\n  padding: 0.2rem 0.9rem;\n  border-radius: 0.3rem;\n}\n.msg-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .msg-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin: 0;\n  padding: 0;\n}\n.msg-container.error[_ngcontent-%COMP%] {\n  background-color: rgb(219, 168, 168);\n  color: darkred;\n}\n.msg-container.info[_ngcontent-%COMP%] {\n  background-color: rgb(255, 234, 179);\n  color: rgb(241, 157, 0);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY21wcy91c2VyLW1zZy91c2VyLW1zZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL05ldyUyMEFuZyUyMFByb2ovRm9vZC1TdG9yZS9zcmMvYXBwL2NtcHMvdXNlci1tc2cvdXNlci1tc2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7O0VBRUksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NSO0FERUk7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUNBUjtBREdJO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQ0RSIiwic291cmNlc0NvbnRlbnQiOlsiLm1zZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAuNnJlbTtcclxuICAgIHJpZ2h0OiAuNnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDIxOCwgMTYyKTtcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xyXG4gICAgaGVpZ2h0OiA0LjJyZW07XHJcbiAgICBwYWRkaW5nOiAuMnJlbSAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xyXG5cclxuICAgIGgyLFxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLmVycm9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxNjgsIDE2OCk7XHJcbiAgICAgICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbmZvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDIzNCAxNzkpO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQxIDE1NyAwKTtcclxuICAgIH1cclxufSIsIi5tc2ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDAuNnJlbTtcbiAgcmlnaHQ6IDAuNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMjE4LCAxNjIpO1xuICBjb2xvcjogZGFya2dyZWVuO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDQuMnJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDAuOXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuLm1zZy1jb250YWluZXIgaDIsXG4ubXNnLWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm1zZy1jb250YWluZXIuZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxNjgsIDE2OCk7XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuLm1zZy1jb250YWluZXIuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNCwgMTc5KTtcbiAgY29sb3I6IHJnYigyNDEsIDE1NywgMCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5274:
/*!********************************************!*\
  !*** ./src/app/guards/food-by-id.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   foodByIdGuard: () => (/* binding */ foodByIdGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/food.service */ 776);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9736);




const foodByIdGuard = route => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService).getFoodById(route.params['id']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(food => {
    if (!food) router.navigateByUrl('');
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(food => !!food));
};

/***/ }),

/***/ 6889:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule]
  });
})();

/***/ }),

/***/ 2280:
/*!**************************************************!*\
  !*** ./src/app/resolvers/food-by-id.resolver.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   foodByIdResolver: () => (/* binding */ foodByIdResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/food.service */ 776);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loader.service */ 1839);




const foodByIdResolver = route => {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService).setLoader(true);
  const {
    id
  } = route.params;
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService).getFoodById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1));
};

/***/ }),

/***/ 1315:
/*!***************************************************!*\
  !*** ./src/app/services/async-storage-service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageService: () => (/* binding */ storageService)
/* harmony export */ });
const storageService = {
  getFoods,
  getFoodById,
  removeFood,
  editFood
};
const STORAGE_KEY = 'food';
function getFoods(delay = 500) {
  let foods = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  if (!foods || !foods.length) {
    foods = _createFoods();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
  }
  return new Promise(resolve => {
    setTimeout(resolve, delay, foods);
  });
}
function getFoodById(foodId) {
  return new Promise((resolve, reject) => {
    const foods = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!foods || !foods.length) reject('No foods');
    const food = foods.find(food => food.id === foodId);
    if (!food) reject('No such a food');
    resolve(food);
  });
}
function removeFood(foodId) {
  return new Promise((resolve, reject) => {
    const foods = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!foods || !foods.length) reject('Something went wrong');
    const foodIdx = foods.findIndex(food => food.id === foodId);
    if (foodIdx < 0) reject('Something went wrong');
    const removedFood = foods.splice(foodIdx, 1)[0];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
    resolve(removedFood);
  });
}
function editFood(foodToSave) {
  return new Promise((resolve, reject) => {
    const foods = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!foods || !foods.length) reject('Something went wrong...');
    const foodIdx = foods.findIndex(food => food.id === foodToSave.id);
    if (foodIdx < 0) reject('Something went wrong...');
    const food = {
      ...foods[foodIdx],
      isFavorite: foodToSave.isFavorite
    };
    foods.splice(foodIdx, 1, food);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
    resolve(food);
  });
}
function _createFoods() {
  return [{
    id: '100',
    name: 'Spaghetti Carbonara',
    category: 'Pasta',
    price: 12.99,
    description: 'Classic pasta dish with bacon, eggs, and Parmesan cheese',
    imgUrl: 'https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg',
    cookTime: '15-20',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '101',
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 10.49,
    description: 'Traditional Italian pizza with tomato, mozzarella, and basil',
    imgUrl: 'https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg',
    cookTime: '15-30',
    isFavorite: true,
    stars: 4.8
  }, {
    id: '102',
    name: 'Pad Thai',
    category: 'Noodles',
    price: 11.99,
    description: 'Thai stir-fried rice noodles with tofu, shrimp, or chicken',
    imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg',
    cookTime: '20-30',
    isFavorite: true,
    stars: 4.5
  }, {
    id: '103',
    name: 'Lamb Kebab',
    category: 'Grill',
    price: 15.99,
    description: 'Grilled skewers of marinated lamb served with pita and sauce',
    imgUrl: 'https://food-images.files.bbci.co.uk/food/recipes/lambkebabs_2214_16x9.jpg',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.8
  }, {
    id: '104',
    name: 'Mango Sticky Rice',
    category: 'Dessert',
    price: 8.49,
    description: 'Thai dessert made with ripe mangoes and sweet sticky rice',
    imgUrl: 'https://omnivorescookbook.com/wp-content/uploads/2023/06/230619_Mango-Coconut-Rice_550.jpg',
    cookTime: '10-30',
    isFavorite: false,
    stars: 4.1
  }, {
    id: '105',
    name: 'Caesar Salad',
    category: 'Salad',
    price: 8.99,
    description: 'Fresh salad with romaine lettuce, croutons, and Caesar dressing',
    imgUrl: 'https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg',
    cookTime: '5-10',
    isFavorite: false,
    stars: 4.7
  }, {
    id: '106',
    name: 'Beef Tacos',
    category: 'Mexican',
    price: 9.99,
    description: 'Soft tortillas filled with seasoned beef, lettuce, and salsa',
    imgUrl: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-768x575.jpg',
    cookTime: '20-30',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '107',
    name: 'Miso Soup',
    category: 'Japanese',
    price: 4.99,
    description: 'Traditional Japanese soup with tofu and seaweed',
    imgUrl: 'https://thehealthyepicurean.com/wp-content/uploads/2022/03/Spicy-Miso-Soup-with-Ramen-1-scaled.jpg',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.1
  }, {
    id: '108',
    name: 'Greek Salad',
    category: 'Salad',
    price: 9.49,
    description: 'Salad with tomatoes, cucumbers, olives, feta cheese, and vinaigrette',
    imgUrl: 'https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/1:1/w_2560%2Cc_limit/greek-salad.jpg',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.2
  }, {
    id: '109',
    name: 'Pho',
    category: 'Vietnamese',
    price: 11.99,
    description: 'Vietnamese soup with rice noodles, beef, and aromatic herbs',
    imgUrl: 'https://img.hellofresh.com/hellofresh_s3/image/pho-style-beef-noodle-soup-f314a261.jpg',
    cookTime: '30-40',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '110',
    name: 'Falafel Wrap',
    category: 'Middle Eastern',
    price: 8.99,
    description: 'Chickpea fritters with tahini sauce wrapped in pita bread',
    imgUrl: 'https://static.toiimg.com/thumb/62708678.cms?width=1200&height=900',
    cookTime: '20-30',
    isFavorite: true,
    stars: 4.8
  }, {
    id: '111',
    name: 'Beef Bulgogi',
    category: 'Korean',
    price: 16.49,
    description: 'Marinated grilled beef served with rice and vegetables',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/bulgogi1-1659544883.jpg?crop=0.684xw:1.00xh;0.179xw,0&resize=1200:*',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.2
  }, {
    id: '112',
    name: 'Ratatouille',
    category: 'French',
    price: 12.99,
    description: 'Provençal vegetable stew with tomatoes, eggplant, and zucchini',
    imgUrl: 'https://www.allrecipes.com/thmb/F1rucOY3FQT5Ic0oyxdLoqU_yKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222006-disneys-ratatouille-DDMFS-4x3-36eb15843ab548a79e7aab761dac92e1.jpg',
    cookTime: '20-30',
    isFavorite: true,
    stars: 4.2
  }, {
    id: '113',
    name: 'Sushi Burrito',
    category: 'Japanese',
    price: 11.49,
    description: 'Sushi ingredients wrapped in seaweed and rice like a burrito',
    imgUrl: 'https://www.sidechef.com/recipe/0fbd70b3-d17d-4928-952f-80f4ebf19c6f.jpg?d=1408x1120',
    cookTime: '20-25',
    isFavorite: true,
    stars: 4.2
  }, {
    id: '114',
    name: 'Chicken Shawarma',
    category: 'Middle Eastern',
    price: 13.99,
    description: 'Grilled chicken in pita bread with tahini sauce and veggies',
    imgUrl: 'https://i0.wp.com/smokedfinefood.co.uk/wp-content/uploads/2018/05/IMG_8235-1.jpg?fit=1083%2C600&ssl=1',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.7
  }, {
    id: '115',
    name: 'Eggplant Parmesan',
    category: 'Italian',
    price: 10.99,
    description: 'Breaded and fried eggplant slices with tomato sauce and cheese',
    imgUrl: 'https://www.honeywhatscooking.com/wp-content/uploads/2023/09/eggplant-parmesan-pasta-featured2-1.jpg',
    cookTime: '30-40',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '116',
    name: 'Moussaka',
    category: 'Greek',
    price: 13.49,
    description: 'Layered dish with eggplant, minced meat, and béchamel sauce',
    imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg',
    cookTime: '30-40',
    isFavorite: true,
    stars: 4.8
  }, {
    id: '117',
    name: 'Pierogi',
    category: 'Polish',
    price: 11.99,
    description: 'Dumplings filled with various ingredients like potato or cheese',
    imgUrl: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/pierogi-1.jpg',
    cookTime: '20-30',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '118',
    name: 'Lomo Saltado',
    category: 'Peruvian',
    price: 15.99,
    description: 'Stir-fried beef, onions, tomatoes, and fries, served with rice',
    imgUrl: 'https://poormansgourmetkitchen.com/wp-content/uploads/2016/05/Youtube-Lomo-Saltado-Main-pic.jpg',
    cookTime: '15-25',
    isFavorite: false,
    stars: 4.7
  }, {
    id: '119',
    name: 'Banh Mi Sandwich',
    category: 'Vietnamese',
    price: 9.49,
    description: 'Baguette sandwich with meats, pickled vegetables, and herbs',
    imgUrl: 'https://www.allrecipes.com/thmb/HTJHVC_LYKmXaMF54dhe2gZQkNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg',
    cookTime: '20-25',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '120',
    name: 'Chicken Adobo',
    category: 'Filipino',
    price: 13.49,
    description: 'Chicken stewed in vinegar, soy sauce, garlic, and spices',
    imgUrl: 'https://www.chilipeppermadness.com/wp-content/uploads/2022/09/Chicken-Adobo-SQ.jpg',
    cookTime: '20-30',
    isFavorite: true,
    stars: 4.7
  }, {
    id: '121',
    name: 'Bibimbap',
    category: 'Korean',
    price: 12.49,
    description: 'Mixed rice with vegetables, beef, fried egg, and spicy sauce',
    imgUrl: 'https://australianmushrooms.com.au/wp-content/uploads/2023/04/MushroomBibimbapBowl_1080x720.jpg',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.6
  }, {
    id: '122',
    name: 'Jerk Chicken',
    category: 'Caribbean',
    price: 14.99,
    description: 'Grilled chicken marinated in Jamaican jerk spices',
    imgUrl: 'https://www.seriouseats.com/thmb/6xOGMN1PiMndv1KYHfBa--b42-o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230511-SEA-PanChicken-KarinaMatalon-hero-840f61c426c6444a8fdb3b80d67b577f.jpg',
    cookTime: '20-30',
    isFavorite: false,
    stars: 4.7
  }
  // {
  //     id: 2,
  //     name: 'Meatball',
  //     price: 20,
  //     cookTime: '20-30',
  //     isFavorite: true,
  //     origins: ['persia', 'middle east', 'china'],
  //     stars: 4.7,
  //     imageUrl: '/assets/images/foods/food-2.jpg',
  //     tags: ['SlowFood', 'Lunch'],
  // },
  // {
  //     id: 3,
  //     name: 'Hamburger',
  //     price: 5,
  //     cookTime: '10-15',
  //     isFavorite: false,
  //     origins: ['germany', 'us'],
  //     stars: 3.5,
  //     imageUrl: '/assets/images/foods/food-3.jpg',
  //     tags: ['FastFood', 'Hamburger'],
  // },
  // {
  //     id: 4,
  //     name: 'Fried Potatoes',
  //     price: 2,
  //     cookTime: '15-20',
  //     isFavorite: true,
  //     origins: ['belgium', 'france'],
  //     stars: 3.3,
  //     imageUrl: '/assets/images/foods/food-4.jpg',
  //     tags: ['FastFood', 'Fry'],
  // },
  // {
  //     id: 5,
  //     name: 'Chicken Soup',
  //     price: 11,
  //     cookTime: '40-50',
  //     isFavorite: false,
  //     origins: ['india', 'asia'],
  //     stars: 3.0,
  //     imageUrl: '/assets/images/foods/food-5.jpg',
  //     tags: ['SlowFood', 'Soup'],
  // },
  // {
  //     id: 6,
  //     name: 'Vegetables Pizza',
  //     price: 9,
  //     cookTime: '40-50',
  //     isFavorite: false,
  //     origins: ['italy'],
  //     stars: 4.0,
  //     imageUrl: '/assets/images/foods/food-6.jpg',
  //     tags: ['FastFood', 'Pizza', 'Lunch'],
  // },
  ];
}

/***/ }),

/***/ 7384:
/*!**************************************************!*\
  !*** ./src/app/services/cart-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cartStorageService: () => (/* binding */ cartStorageService)
/* harmony export */ });
const cartStorageService = {
  getCart,
  getDefaultCart,
  addToCart
};
const STORAGE_KEY = 'cart';
function getCart() {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart();
  return new Promise(resolve => resolve(cart));
}
function addToCart(food) {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart();
  let itemToAdd = cart.items?.find(item => item.id === 'CartItem-' + food.id);
  if (itemToAdd) {
    itemToAdd.quantity++;
    itemToAdd.price += food.price;
  } else {
    itemToAdd = {
      id: 'CartItem-' + food.id,
      food,
      quantity: 1,
      price: food.price
    };
    cart.items.push(itemToAdd);
  }
  cart.totalPrice += food.price;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  return new Promise(resolve => resolve(cart));
}
function getDefaultCart() {
  return {
    items: [],
    totalPrice: 0
  };
}

/***/ }),

/***/ 2623:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _cart_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-storage.service */ 7384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);



class CartService {
  constructor() {
    this._cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_cart_storage_service__WEBPACK_IMPORTED_MODULE_0__.cartStorageService.getDefaultCart());
    this.cart$ = this._cart$.asObservable();
  }
  query() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_cart_storage_service__WEBPACK_IMPORTED_MODULE_0__.cartStorageService.getCart()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(cart => this._cart$.next(cart)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.log('Something went wrong: CartService|query', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }));
  }
  addToCart(food) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_cart_storage_service__WEBPACK_IMPORTED_MODULE_0__.cartStorageService.addToCart(food)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(cart => this._cart$.next(cart)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.log('Something went wrong: CartService|addToCart', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }));
  }
  static #_ = this.ɵfac = function CartService_Factory(t) {
    return new (t || CartService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: CartService,
    factory: CartService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 776:
/*!******************************************!*\
  !*** ./src/app/services/food.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodService: () => (/* binding */ FoodService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6360);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _async_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-storage-service */ 1315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ 1839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);





class FoodService {
  constructor(loaderService, location) {
    this.loaderService = loaderService;
    this.location = location;
    this._foods$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.foods$ = this._foods$.asObservable();
    this._filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this._getDefaultFilter());
    this.filter$ = this._filter$.asObservable();
  }
  query() {
    if (this.location.path() === '/food-store' && !this._foods$.value.length) {
      this.loaderService.setLoader(true);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_async_storage_service__WEBPACK_IMPORTED_MODULE_0__.storageService.getFoods()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(foods => {
      this.loaderService.setLoader(false);
      const filterBy = this._filter$.value;
      const rgx = new RegExp(filterBy?.name || '', 'i');
      const filteredFoods = foods.filter(food => rgx.test(food.name));
      this._foods$.next(filteredFoods);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(this._handleError));
  }
  getFoodById(foodId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_async_storage_service__WEBPACK_IMPORTED_MODULE_0__.storageService.getFoodById(foodId)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.log('Something went wrong: FoodService|getFoodById', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null); // return EMPTY
    }));
  }

  removeFood(foodId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_async_storage_service__WEBPACK_IMPORTED_MODULE_0__.storageService.removeFood(foodId)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      const foods = this._foods$.value;
      const newFoods = foods.filter(food => food.id !== foodId);
      this._foods$.next(newFoods);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(this._handleError));
  }
  setFilter(filterBy) {
    const filter = this._filter$.value;
    this._filter$.next({
      ...filter,
      ...filterBy
    });
    this.query().subscribe();
  }
  saveFood(food) {
    return food.id ? this._editFood(food) : this._addFood(food);
  }
  _editFood(food) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_async_storage_service__WEBPACK_IMPORTED_MODULE_0__.storageService.editFood(food)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(food => {
      const foods = this._foods$.value;
      const foodIdx = foods.findIndex(_food => _food.id === food.id);
      foods.splice(foodIdx, 1, food);
      this._foods$.next([...foods]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(this._handleError));
  }
  _addFood(food) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)([]);
  }
  _handleError(err) {
    this.loaderService.setLoader(false);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => err);
  }
  _getDefaultFilter() {
    return {
      name: ''
    };
  }
  static #_ = this.ɵfac = function FoodService_Factory(t) {
    return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: FoodService,
    factory: FoodService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1839:
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class LoaderService {
  constructor() {
    this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoading$ = this._isLoading$.asObservable();
  }
  setLoader(isLoading) {
    this._isLoading$.next(isLoading);
  }
  static #_ = this.ɵfac = function LoaderService_Factory(t) {
    return new (t || LoaderService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoaderService,
    factory: LoaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8790:
/*!**********************************************!*\
  !*** ./src/app/services/user-msg.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserMsgService: () => (/* binding */ UserMsgService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class UserMsgService {
  constructor() {
    this._userMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.userMsg$ = this._userMsg$.asObservable();
  }
  setUserMsg(userMsg, delay = 3000) {
    this._userMsg$.next(userMsg);
    if (this.timeOutId) clearTimeout(this.timeOutId);
    this.timeOutId = setTimeout(() => this._userMsg$.next(null), delay);
  }
  static #_ = this.ɵfac = function UserMsgService_Factory(t) {
    return new (t || UserMsgService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UserMsgService,
    factory: UserMsgService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1863:
/*!**********************************************!*\
  !*** ./src/app/views/cart/cart.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 2623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





class CartComponent {
  constructor() {
    this.cartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService);
    this.cart$ = this.cartService.cart$;
    this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.testFood = {
      id: '101',
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 10.49,
      description: 'Traditional Italian pizza with tomato, mozzarella, and basil',
      imgUrl: 'https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg',
      cookTime: '15-30',
      isFavorite: true,
      stars: 4.8
    };
  }
  ngOnInit() {
    this.cartService.query().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject$)).subscribe();
    setTimeout(food => {
      this.cartService.addToCart(food).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject$)).subscribe();
    }, 1000, this.testFood);
  }
  ngOnDestroy() {
    this.destroySubject$.next(null);
    this.destroySubject$.complete();
  }
  static #_ = this.ɵfac = function CartComponent_Factory(t) {
    return new (t || CartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CartComponent,
    selectors: [["cart"]],
    decls: 6,
    vars: 5,
    template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cart works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx.cart$)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7992:
/*!**************************************************************!*\
  !*** ./src/app/views/food-details/food-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodDetailsComponent: () => (/* binding */ FoodDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 776);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loader.service */ 1839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _cmps_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/favorite/favorite.component */ 5975);









function FoodDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5)(4, "div", 6)(5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "favorite", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("setFood", function FoodDetailsComponent_div_2_Template_favorite_setFood_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSetFood());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const food_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", food_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", food_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](food_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](food_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](food_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("food", food_r1)("isFavorite", food_r1.isFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", food_r1.cookTime, "\uD83D\uDD52");
  }
}
class FoodDetailsComponent {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.foodService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService);
    this.loaderService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService);
    this.food$ = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data['food']));
  }
  ngOnInit() {
    this.loaderService.setLoader(false);
  }
  onSetFood() {
    this.food$ = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(params => params['id']), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => this.foodService.getFoodById(id)));
  }
  static #_ = this.ɵfac = function FoodDetailsComponent_Factory(t) {
    return new (t || FoodDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FoodDetailsComponent,
    selectors: [["food-details"]],
    decls: 4,
    vars: 3,
    consts: [["routerLink", "/food-store"], ["class", "inner-page-container", 4, "ngIf"], [1, "inner-page-container"], [1, "img-container"], [3, "src", "alt"], [1, "food-details-container"], [1, "titles"], [1, "category"], [1, "extra-details"], [3, "food", "isFavorite", "setFood"]],
    template: function FoodDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Back to Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FoodDetailsComponent_div_2_Template, 15, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.food$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _cmps_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_2__.FavoriteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  height: 85vh;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 2px;\n  left: 2px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\u21E0 \";\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%] {\n  height: max-content;\n  display: flex;\n  gap: 5%;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52%;\n  padding-top: 25px;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 14px;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-basis: 50%;\n  color: gray;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: darkred;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: rgb(87, 87, 87);\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.7rem 0;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: gray;\n  background-color: whitesmoke;\n  padding: 0 0.2em;\n  border-radius: 3px;\n}\n[_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .food-details-container[_ngcontent-%COMP%]   .extra-details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n@media screen and (min-width: 1000px) {\n  [_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%] {\n    flex-direction: unset;\n    height: unset;\n    width: unset;\n  }\n  [_nghost-%COMP%]   .inner-page-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 50%;\n    max-width: 500px;\n    flex-basis: 50%;\n    height: 68vh;\n    padding-top: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL05ldyUyMEFuZyUyMFByb2ovRm9vZC1TdG9yZS9zcmMvYXBwL3ZpZXdzL2Zvb2QtZGV0YWlscy9mb29kLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2Zvb2QtZGV0YWlscy9mb29kLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0FJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QURFUjtBQ0FRO0VBQ0ksYUFBQTtBREVaO0FDRUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREFSO0FDRVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEQVo7QUNHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRERaO0FDSVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREZaO0FDSVk7RUFDSSxjQUFBO0FERmhCO0FDS1k7RUFDSSxzQkFBQTtBREhoQjtBQ01ZOztFQUVJLGdCQUFBO0FESmhCO0FDT1k7RUFDSSxTQUFBO0FETGhCO0FDUVk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUROaEI7QUNTWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRFBoQjs7QUNhQTtFQUVRO0lBQ0kscUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFRFhWO0VDYVU7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VEWGQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA4NXZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG59XG46aG9zdCBhOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOiwofCoCBcIjtcbn1cbjpob3N0IC5pbm5lci1wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNSU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuaW5uZXItcGFnZS1jb250YWluZXIgLmltZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MiU7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuOmhvc3QgLmlubmVyLXBhZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuOmhvc3QgLmlubmVyLXBhZ2UtY29udGFpbmVyIC5mb29kLWRldGFpbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIGNvbG9yOiBncmF5O1xuICBmbGV4LWdyb3c6IDE7XG59XG46aG9zdCAuaW5uZXItcGFnZS1jb250YWluZXIgLmZvb2QtZGV0YWlscy1jb250YWluZXIgaDEge1xuICBjb2xvcjogZGFya3JlZDtcbn1cbjpob3N0IC5pbm5lci1wYWdlLWNvbnRhaW5lciAuZm9vZC1kZXRhaWxzLWNvbnRhaW5lciBoMiB7XG4gIGNvbG9yOiByZ2IoODcsIDg3LCA4Nyk7XG59XG46aG9zdCAuaW5uZXItcGFnZS1jb250YWluZXIgLmZvb2QtZGV0YWlscy1jb250YWluZXIgaDEsXG46aG9zdCAuaW5uZXItcGFnZS1jb250YWluZXIgLmZvb2QtZGV0YWlscy1jb250YWluZXIgaDIge1xuICBtYXJnaW46IDAuN3JlbSAwO1xufVxuOmhvc3QgLmlubmVyLXBhZ2UtY29udGFpbmVyIC5mb29kLWRldGFpbHMtY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaW5uZXItcGFnZS1jb250YWluZXIgLmZvb2QtZGV0YWlscy1jb250YWluZXIgLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMCAwLjJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuOmhvc3QgLmlubmVyLXBhZ2UtY29udGFpbmVyIC5mb29kLWRldGFpbHMtY29udGFpbmVyIC5leHRyYS1kZXRhaWxzIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgOmhvc3QgLmlubmVyLXBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XG4gICAgaGVpZ2h0OiB1bnNldDtcbiAgICB3aWR0aDogdW5zZXQ7XG4gIH1cbiAgOmhvc3QgLmlubmVyLXBhZ2UtY29udGFpbmVyIC5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIGhlaWdodDogNjh2aDtcbiAgICBwYWRkaW5nLXRvcDogdW5zZXQ7XG4gIH1cbn0iLCI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA4NXZoOyAvL2xhdGVyIGNhbGMgLWhlYWRlci1oZWlnaHQgLWZvb3Rlci1oZWlnaHRcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgbGVmdDogMnB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnw6LCh8KgICc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbm5lci1wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogNSU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTIlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb2QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDg3LCA4NywgODcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAuN3JlbSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmV4dHJhLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICAuaW5uZXItcGFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiB1bnNldDtcclxuXHJcbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2OHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IHVuc2V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 342:
/*!**********************************************************!*\
  !*** ./src/app/views/food-index/food-index.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodIndexComponent: () => (/* binding */ FoodIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _cmps_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmps/food-list/food-list.component */ 8360);
/* harmony import */ var _cmps_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/filter-box/filter-box.component */ 3904);






function FoodIndexComponent_food_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "food-list", 2);
  }
  if (rf & 2) {
    const foods_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("foods", foods_r1);
  }
}
class FoodIndexComponent {
  constructor() {
    this.foodService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService);
    this.foods$ = this.foodService.foods$;
  }
  static #_ = this.ɵfac = function FoodIndexComponent_Factory(t) {
    return new (t || FoodIndexComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FoodIndexComponent,
    selectors: [["app-food-index"]],
    decls: 4,
    vars: 3,
    consts: [[1, "main-food-container"], [3, "foods", 4, "ngIf"], [3, "foods"]],
    template: function FoodIndexComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "filter-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FoodIndexComponent_food_list_2_Template, 1, 1, "food-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.foods$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _cmps_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_1__.FoodListComponent, _cmps_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_2__.FilterBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map