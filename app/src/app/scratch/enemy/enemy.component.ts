import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonstaService  } from '../services/monsta.service'

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

  constructor(zal:MonstaService) {
   this.monstone=zal.monstlist1[0]

   
  
   }

   tdisplay(){
     if(this.tdisp=='none'){
     this.tdisp='block'}
     else {this.tdisp='none'}
   }

  ngOnInit(): void {
  
  }

}
