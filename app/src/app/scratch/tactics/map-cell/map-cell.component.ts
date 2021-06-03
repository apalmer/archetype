import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../classes/cell';
import { TokenData } from '../classes/token-data';
import { TokenDropData } from '../classes/token-drop-data';

@Component({
  selector: 'app-map-cell',
  templateUrl: './map-cell.component.html',
  styleUrls: ['./map-cell.component.css']
})
export class MapCellComponent implements OnInit {
  @Input() cell: Cell;
  @Output() dropped: EventEmitter<TokenDropData> = new EventEmitter<TokenDropData>();

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Cell>) {
    let tokenDropData = new TokenDropData();
    tokenDropData.source = event.item.data;
    tokenDropData.target = this.cell;
    tokenDropData.data = event.item.data.tokenData;
    this.dropped.emit(tokenDropData);
  }
}
