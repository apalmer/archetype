import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharformComponent } from './charform.component';

describe('CharformComponent', () => {
  let component: CharformComponent;
  let fixture: ComponentFixture<CharformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
