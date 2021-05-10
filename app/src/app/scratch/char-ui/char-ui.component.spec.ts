import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharUIComponent } from './char-ui.component';

describe('CharUIComponent', () => {
  let component: CharUIComponent;
  let fixture: ComponentFixture<CharUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
