import { Component, OnInit } from '@angular/core';
import { Cell } from '../classes/cell';
import { Grid } from '../classes/grid';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TokenData } from '../classes/token-data';
import { TokenDropData } from '../classes/token-drop-data';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  grid: Cell[][];
  width: number;
  height: number;
  scale: number;

  constructor() {
    this.width = 8;
    this.height = 8;
    this.scale = 100;

    this.grid = new Grid(this.width, this.height);
    this.grid[1][1].data = { token: true };
    let tokenData = new TokenData();
    tokenData.name = "Something";
    this.grid[1][1].tokenData = tokenData;
  }

  ngOnInit(): void {
  }

  childCellDropped(data: TokenDropData) {
    if (data.target !== data.source) {
      data.target.tokenData = data.source.tokenData;
      data.source.tokenData = null;
    }
  }
}
