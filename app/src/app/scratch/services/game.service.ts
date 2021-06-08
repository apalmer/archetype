import { Attribute, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Combatant } from '../classes/combatant';
import { Action, Enemy } from '../classes/enemy';
import { GameEngine } from '../classes/game-engine';
import { GameEvent } from '../classes/game-event';
import { Player } from '../classes/player';
import { AttackOptions } from '../models/attack-options';
import { CharacterDataService } from './character-data.service';
import { Ability, savethrow} from '../classes/dice'

/////////////////////////////////////////////////////////
// Wrapper for the core game logic, Integration between game engine classes and angular
// Stores core state of the application
/////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class GameService {
  ini
  private engine: GameEngine;
  public target: Combatant;

  // The Real Instance of Player that is used by the entire app
  player: BehaviorSubject<Player>;

  eventFeed: Observable<GameEvent>;

  constructor(private characterService: CharacterDataService) {
    this.engine = new GameEngine();

    this.characterService.getCharacter('defaultCharacterId').subscribe(
      character => {
        this.player = new BehaviorSubject<Player>(character);
        this.setPlayer(character);
      }
    );

    this.eventFeed = this.engine.gameEvents;
  }

  setPlayer(selectedPlayer: Player) {
    this.engine.encounter.player = selectedPlayer;
    this.player.next(this.engine.encounter.player);
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
    this.engine.combatSystem.attack(this.player.value, this.target, attackOptions);
  }

  attackPlayer(enattackOptions:Action): void {
    this.engine.combatSystem.attack(this.target, this.player.value, enattackOptions);
  }

  assaultplayer(act){
    let end=savethrow(act.save.DC,this.player.value,act.save.ability)
    this.engine.combatSystem.safeevent(end)

    return end.test
    
  }

  assaultother(player, tability,sourceability){
    let end=savethrow(player,this.target,tability,sourceability)
    this.engine.combatSystem.safeevent(end)
    return end.test
  }

  activesFeed(player, activename){
    this.engine.combatSystem.combatEventSource.next({type:'Combat',payload:{player:player.name, active:activename}})
  }

  bom(tab:Ability, low:Ability){
   let bang=tab+low
  }
  

}