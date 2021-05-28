import { Combatant } from "./combatant";
import { Ability } from "./dice";

export class Player extends Combatant {
    proficiencies:{
        skills:Array<string>
        weapon:Array<string>
        saves:Array<Ability>
        armor:Array<string>
    }
    resources:any
    bio:any
    classes:[{class:string, lvl:number }]
    spells:any

    constructor() {
        super();

        this.name = "WuTang";
        this.hitPoints = this.maxHitPoints = 20;
        this.armorClass = 12;
        this.abilities = {
            "CHR": 10,
            "CON": 10,
            "DEX": 20,
            "INT": 10,
            "STR": 16,
            "WIS": 10
        }
        this.advantage='none'
    }

    get TotalLevel(): number {
        //TODO: Really implement total level based on classes
        return 10;
    }
}
