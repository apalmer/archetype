import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharuiComponent } from './charui.component';

describe('CharuiComponent', () => {
  let component: CharuiComponent;
  let fixture: ComponentFixture<CharuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
