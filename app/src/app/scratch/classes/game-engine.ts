import { Observable, Subject } from "rxjs";
import { CombatSystem } from "./combat-system";
import { Encounter } from "./encounter";
import { GameEvent } from "./game-event";

export class GameEngine {
    encounter:Encounter;
    combatSystem:CombatSystem;
    gameEventSource:Subject<GameEvent> = new Subject<GameEvent>()
    gameEvents:Observable<GameEvent> = this.gameEventSource.asObservable();

    constructor(){
        this.encounter = new Encounter();
        this.combatSystem = new CombatSystem();
        this.combatSystem.combatEvents.subscribe(
            combatEvent => {
                this.gameEventSource.next(combatEvent);
            }
        )
    }
}
