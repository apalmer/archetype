import { Combatant } from "./combatant";

export class Player extends Combatant {
    constructor() {
        super();

        this.name = "WuTang";
        this.hitPoints = this.maxHitPoints = 20;
        this.armorClass = 12;
    }

    get TotalLevel(): number {
        //TODO: Really implement total level based on classes
        return 1;
    }
}
