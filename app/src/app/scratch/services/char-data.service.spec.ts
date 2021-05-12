import { TestBed } from '@angular/core/testing';

import { CharDataService } from './char-data.service';

describe('CharDataService', () => {
  let service: CharDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
