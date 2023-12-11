import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { foodByIdResolver } from './food-by-id.resolver';

describe('foodByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => foodByIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
