import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Combatant } from '../classes/combatant';
import { Enemy } from '../classes/enemy';
import { GameEngine } from '../classes/game-engine';
import { GameEvent } from '../classes/game-event';
import { Player } from '../classes/player';
import { AttackOptions } from '../models/attack-options';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private engine: GameEngine;
  player: Player;
  private target: Combatant;
  eventFeed: Observable<GameEvent>;

  constructor() {
    this.engine = new GameEngine();
    this.player = this.engine.encounter.player;
    this.eventFeed = this.engine.gameEvents;
  }

  getEnemies(): Enemy[] {
    return this.engine.encounter.enemies;
  }

  setTarget(target: Combatant): void {
    this.target = target;
  }

  isTarget(target: Combatant): boolean {
    return this.target === target;
  }

  attackTarget(attackOptions: AttackOptions): void {
    if (!this.target) {
      //what should happen if nothing is selected?
    }
    this.engine.combatSystem.attack(this.player, this.target, attackOptions);
  }

  attackPlayer(attackOptions: AttackOptions): void {
    this.engine.combatSystem.attack(this.target, this.player, attackOptions);
  }

}
