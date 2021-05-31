import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../classes/cell';

@Component({
  selector: 'app-map-cell',
  templateUrl: './map-cell.component.html',
  styleUrls: ['./map-cell.component.css']
})
export class MapCellComponent implements OnInit {
  @Input() cell: Cell;
  constructor() { }

  ngOnInit(): void {
  }

}
