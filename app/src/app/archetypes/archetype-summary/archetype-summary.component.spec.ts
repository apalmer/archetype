import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchetypeSummaryComponent } from './archetype-summary.component';

describe('ArchetypeSummaryComponent', () => {
  let component: ArchetypeSummaryComponent;
  let fixture: ComponentFixture<ArchetypeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchetypeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchetypeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
