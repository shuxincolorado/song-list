import { TestBed } from '@angular/core/testing';

import { Sort } from './sort';

describe('Sort', () => {
  let sort: Sort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sort = TestBed.inject(Sort);
  });

  it('should be created', () => {
    expect(sort).toBeTruthy();
  });

});
