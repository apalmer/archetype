import { TestBed } from '@angular/core/testing';

import { MonstaService } from './monsta.service';

describe('MonstaService', () => {
  let service: MonstaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
