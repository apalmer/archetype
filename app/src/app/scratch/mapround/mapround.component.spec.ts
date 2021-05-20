import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaproundComponent } from './mapround.component';

describe('MaproundComponent', () => {
  let component: MaproundComponent;
  let fixture: ComponentFixture<MaproundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaproundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaproundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
