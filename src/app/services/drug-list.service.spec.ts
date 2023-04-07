import { TestBed } from '@angular/core/testing';

import { DrugListService } from './drug-list.service';

describe('DrugListService', () => {
  let service: DrugListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
