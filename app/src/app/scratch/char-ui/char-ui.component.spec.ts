import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { CharUIComponent } from './char-ui.component';

describe('CharUIComponent', () => {
  let component: CharUIComponent;
  let fixture: ComponentFixture<CharUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharUIComponent ],
      imports: [ MatSnackBarModule ]
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
