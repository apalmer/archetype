import { TestBed } from '@angular/core/testing';

import { SpellistService } from './spellist.service';

describe('SpellistService', () => {
  let service: SpellistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
