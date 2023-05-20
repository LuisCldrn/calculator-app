import { TestBed } from '@angular/core/testing';

import { ClarificationListService } from './clarification-list.service';

describe('ClarificationListService', () => {
  let service: ClarificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClarificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
