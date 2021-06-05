import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cell } from '../classes/cell';

import { MapCellComponent } from './map-cell.component';

describe('MapCellComponent', () => {
  let component: MapCellComponent;
  let fixture: ComponentFixture<MapCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCellComponent);
    component = fixture.componentInstance;
    component.cell = new Cell();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
