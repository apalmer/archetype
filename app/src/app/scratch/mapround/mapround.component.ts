import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Enemy } from '../classes/enemy';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-mapround',
  templateUrl: './mapround.component.html',
  styleUrls: ['./mapround.component.css']
})
export class MaproundComponent implements OnInit {
  ghide='hidden'
  enemies:Enemy[];

  scale=1
  scalet='scale('+this.scale+')'
  constructor(game:GameService) {
    this.enemies = game.getEnemies(); 
  }

  ngOnInit(): void {
  }

  zoomp(){
    this.scale=(this.scale*1.1) 
    this.scalet='scale('+this.scale+')'}
  zoomm(){
    this.scale=(this.scale*.9)
    this.scalet='scale('+this.scale+')'
  
  }
  ghider(){
    if(this.ghide==='hidden'){
      this.ghide='visible'
    }
    else{this.ghide='hidden'}
  }
}
