import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../classes/player';

@Component({
  selector: 'app-char-disp',
  templateUrl: './char-disp.component.html',
  styleUrls: ['./char-disp.component.css']
})
export class CharDispComponent implements OnInit {
  @Input() newchar:Player | null=null;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
