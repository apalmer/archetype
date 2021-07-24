import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleRecursiveFormComponent } from './flexible-recursive-form.component';

describe('FlexibleRecursiveFormComponent', () => {
  let component: FlexibleRecursiveFormComponent;
  let fixture: ComponentFixture<FlexibleRecursiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexibleRecursiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleRecursiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
