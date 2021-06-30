import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDispComponent } from './char-disp.component';

describe('CharDispComponent', () => {
  let component: CharDispComponent;
  let fixture: ComponentFixture<CharDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDispComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
