import { Component, OnInit } from '@angular/core';
import { GridRowStyleBuilder } from '@angular/flex-layout/grid/typings/row/row';
import { Cell } from '../classes/cell';
import { Grid } from '../classes/grid';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  grid:Cell[][];
  width:number;
  height:number;
  scale:number;

  constructor() {
    this.width = 8;
    this.height = 8;
    this.scale = 100;
    
    this.grid = new Grid(this.width,this.height);

   }

  ngOnInit(): void {
  }

}
