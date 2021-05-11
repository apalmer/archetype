import { TestBed } from '@angular/core/testing';

import { CharDataServiceService } from './char-data-service.service';

describe('CharDataServiceService', () => {
  let service: CharDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
