import { TestBed } from '@angular/core/testing';

import { ProRuleService } from './pro-rule.service';

describe('ProRuleService', () => {
  let service: ProRuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProRuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
