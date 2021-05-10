import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProRuleComponent } from './pro-rule.component';

describe('ProRuleComponent', () => {
  let component: ProRuleComponent;
  let fixture: ComponentFixture<ProRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
