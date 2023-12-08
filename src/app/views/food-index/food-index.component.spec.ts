import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIndexComponent } from './food-index.component';

describe('FoodIndexComponent', () => {
  let component: FoodIndexComponent;
  let fixture: ComponentFixture<FoodIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodIndexComponent]
    });
    fixture = TestBed.createComponent(FoodIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
