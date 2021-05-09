import { TestBed } from '@angular/core/testing';

import { FieldHelperService } from './field-helper.service';

describe('FieldHelperService', () => {
  let service: FieldHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
