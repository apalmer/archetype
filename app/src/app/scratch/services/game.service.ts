import { Injectable } from '@angular/core';
import { Combatant } from '../classes/combatant';
import { Enemy } from '../classes/enemy';
import { GameEngine } from '../classes/game-engine';
import { Player } from '../classes/player';
import { AttackOptions } from '../models/attack-options';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  engine: GameEngine;
  player: Player;
  target: Combatant;

  constructor() {
    this.engine = new GameEngine();
  }

  setTarget(target: Combatant) {
    this.target = target;
  }

  isTarget(target: Combatant) {
    this.target === target;
  }

  attackTarget(attackOptions: AttackOptions) {
    if(!this.target){
      //what should happen if nothing is selected?
    }
    this.engine.combatSystem.attack(this.player, this.target, attackOptions);
  }

  attackPlayer() {
    let attackOptions: AttackOptions = { weapon: "Bite", handiness: "one-handed" };
    this.engine.combatSystem.attack(this.target, this.player, attackOptions);
  }

}
