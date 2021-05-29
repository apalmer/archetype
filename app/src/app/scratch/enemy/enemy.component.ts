import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonstaService  } from '../services/monsta.service'
import { Enemy } from '../classes/enemy'

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css'],
  
})
export class EnemyComponent implements OnInit {
  @Output() emitmonster = new EventEmitter();
  momicon
  monstone
  tdisp='none'
  drg=new Enemy

  constructor(zal:MonstaService) {
   this.monstone=zal.monstlist1[0]

   
  
   }

   tdisplay(){
     this.emitmonster.emit(this.monstone)

     if(this.tdisp=='none'){
     this.tdisp='block'}
     else {this.tdisp='none'}
     this.monstone.hp.min=this.monstone.hp.min-3
     
   }

  ngOnInit(): void {
  
  }

}
