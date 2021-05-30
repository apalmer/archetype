import { Component, Input, OnInit } from '@angular/core';
import { Enemy } from '../classes/enemy';
import { AttackOptions } from '../models/attack-options';
import { GameService } from '../services/game.service';
import {abd} from '../services/char-data.service'

@Component({
  selector: 'app-enemy-combatant',
  templateUrl: './enemy-combatant.component.html',
  styleUrls: ['./enemy-combatant.component.css']
})
export class EnemyCombatantComponent implements OnInit {
  @Input() enemy:Enemy;
  detailswitch='none'

  constructor(private game:GameService) { }

  ngOnInit(): void {
  }

  selectCombatant(){
    console.log('selecting combantant' + this.enemy);    
    this.game.setTarget(this.enemy);
  }

  isSelected(){
    let isSelected = this.game.isTarget(this.enemy);
    return isSelected;
  }

  attack(){
    let attackOptions: AttackOptions = { weapon: "Bite", handiness: "one-handed" };
    this.game.attackPlayer(attackOptions);
  }

  showdetail(){
    if(this.detailswitch==='none')
    this.detailswitch='block'
    else{this.detailswitch='none'}}

}
