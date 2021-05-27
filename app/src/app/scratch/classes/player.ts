import { Combatant } from "./combatant";

export class Player extends Combatant {
    constructor() {
        super();

        this.name = "WuTang";
        this.hitPoints = this.maxHitPoints = 20;
        this.armorClass = 12;
        this.abilities = {
            "CHR": 10,
            "CON": 10,
            "DEX": 10,
            "INT": 10,
            "STR": 16,
            "WIS": 10
        }
    }

    get TotalLevel(): number {
        //TODO: Really implement total level based on classes
        return 10;
    }
}
