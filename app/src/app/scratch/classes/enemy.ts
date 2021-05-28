import { Combatant } from "./combatant";
import { Skill } from "./dice";

export class Enemy extends Combatant {
    speed:any
    senses:any
    actions:Array<any>;
    safethrowbonus:Array<any>;
    skills:[{Name:Skill, Value:number}]
    resistances:any;
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
