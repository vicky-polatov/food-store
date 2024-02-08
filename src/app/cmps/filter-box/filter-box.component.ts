import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { Filter } from 'src/app/model/filter';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit, OnDestroy {
  constructor(private foodService: FoodService) { }

  foodFilter!: Filter
  filterSubject$ = new Subject()
  destroySubject$ = new Subject<null>()

  ngOnInit(): void {
    this.foodService.filter$
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe((filter) => {
        this.foodFilter = filter
      })

    this.filterSubject$
      .pipe(
        takeUntil(this.destroySubject$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.foodService.setFilter(this.foodFilter)
      })
  }

  onSearch() {
    this.filterSubject$.next(this.foodFilter)
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(null)
  }
}
