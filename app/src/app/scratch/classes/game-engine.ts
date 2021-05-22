import { CombatSystem } from "./combat-system";
import { Encounter } from "./encounter";

export class GameEngine {
    encounter:Encounter;
    combatSystem:CombatSystem;

    constructor(){
        this.encounter = new Encounter();
        this.combatSystem = new CombatSystem();
    }
}
