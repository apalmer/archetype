import { Combatant } from "./combatant";

export class Enemy extends Combatant {
    constructor(){
        super();

        this.name = "Dragon";
        this.hitPoints = this.maxHitPoints = 33;
        this.armorClass = 10;
        this.icon = 'assets/monsta/mimages/bwyr.jpg'
    }

}
