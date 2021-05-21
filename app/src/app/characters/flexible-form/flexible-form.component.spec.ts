import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleFormComponent } from './flexible-form.component';

describe('FlexibleFormComponent', () => {
  let component: FlexibleFormComponent;
  let fixture: ComponentFixture<FlexibleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexibleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
