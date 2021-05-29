import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelloComponent } from './spello.component';

describe('SpelloComponent', () => {
  let component: SpelloComponent;
  let fixture: ComponentFixture<SpelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
