import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllyUiComponent } from './ally-ui.component';

describe('AllyUiComponent', () => {
  let component: AllyUiComponent;
  let fixture: ComponentFixture<AllyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllyUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
