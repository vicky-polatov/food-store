import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { foodByIdGuard } from './food-by-id.guard';

describe('foodByIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => foodByIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
