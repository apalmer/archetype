import { Observable, Subject } from "rxjs";
import { AttackOptions } from "../models/attack-options";
import { Combatant } from "./combatant";
import { GameEvent } from "./game-event";

export class CombatSystem {
    private combatEventSource:Subject<GameEvent> = new Subject<GameEvent>();
    combatEvents:Observable<GameEvent> = this.combatEventSource.asObservable();

    constructor(){

    }
    
    attack(source:Combatant, target:Combatant, attackOption:AttackOptions){

        //figure out attack based on attack options
            //is attackOptions valid for the source
            //figure out attack chance to hit based on source, dice and modifiers
            //figure out attack chance to hit based on target
            //calculate attack success
        //figure out damage based on attack success, attack options, source and target
        //apply damage to target

        target.hitPoints -= 3;
        this.combatEventSource.next({type:'Combat', payload:` ${source.name} hit ${target.name} for 4 damage`});
    }
}
