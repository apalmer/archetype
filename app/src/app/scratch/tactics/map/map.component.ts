import { Component, OnInit } from '@angular/core';
import { GridRowStyleBuilder } from '@angular/flex-layout/grid/typings/row/row';
import { Cell } from '../classes/cell';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  grid:Cell[][];
  width:number;
  height:number;

  constructor() {
    this.width = 8;
    this.height = 8;

    this.grid = [];
    for (let y = 0; y < this.height; y++) {
      const row:Cell[] = [];
      for (let x = 0; x < this.height; x++) {
        const cell:Cell = new Cell();
        cell.x = x;
        cell.y = y;
        row.push(cell);     
      }
      this.grid.push(row);
    }

   }

  ngOnInit(): void {
  }

}
