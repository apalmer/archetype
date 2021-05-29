import { Combatant } from "./combatant";
import { Ability, Skill } from "./dice";

export class Enemy extends Combatant {
    type:string
    alignment:string
    speed:string
    senses:string
    actions:Array<any>;
    safethrowbonus:any = {};
    skills:Array<{name:Skill, value:number}> = []
    resistances:any[] = [];
    //damage immunity=100% resistance Vulnerabilty =-100%resistance regular resistance =50% 
    //formula would be like, damage-(x%resistance*damage)
    immunityCon:Array<string>
    //immunity for conditions
    challenge:any;
    traits:any
    


    
    constructor(){
        super();

        this.name = "Dragon";
        this.hitPoints = this.maxHitPoints = 33;
        this.armorClass = 17;
        this.icon = 'assets/monsta/mimages/bwyr.jpg'

    }


}
