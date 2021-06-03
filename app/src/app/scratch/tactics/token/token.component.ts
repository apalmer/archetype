import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../classes/cell';
import { TokenData } from '../classes/token-data';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  @Input() cell:Cell;
  @Input() data:TokenData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
