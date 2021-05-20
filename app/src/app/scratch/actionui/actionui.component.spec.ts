import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionuiComponent } from './actionui.component';

describe('ActionuiComponent', () => {
  let component: ActionuiComponent;
  let fixture: ComponentFixture<ActionuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
