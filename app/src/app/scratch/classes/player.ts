import { Combatant } from "./combatant";

export class Player extends Combatant {
    constructor(){
        super();

        this.name = "WuTang";
        this.hitPoints = 20;
        this.armorClass = 12;
    }
}
