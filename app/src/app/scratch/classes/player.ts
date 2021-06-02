import { Combatant } from "./combatant";
import { Ability, Skill } from "./dice";

export class Player extends Combatant {
    proficiencies:{
        skills:Array<Skill>
        weapon:Array<string>
        weapontype:Array<string>
        saves:Array<Ability>
        armor:Array<string>
    }
    resources:Array<{name:string, min:number, max:number}>=[]
    bio:any
    classes:Array<{class:string, lvl:number }>=[]
    spells:Array<any>=[]
    features:Array<any>=[]
    skills:Array<{name:Skill, value:number}>
    weapons:Array<any>=[]

    constructor() {
        super();

        this.name = "WuTang";
        this.hitPoints = this.maxHitPoints = 20;
        this.armorClass = 12
        this.abilities = {
            "CHR": 10,
            "CON": 10,
            "DEX": 20,
            "INT": 10,
            "STR": 16,
            "WIS": 10
        }
        this.advantage='none'
        this.classes=[]
        this.resources=[]
        this.proficiencies={
        weapon:[],
        weapontype:[],
        skills:[],
        saves:[],
        armor:[]}
        this.weapons=[]
        this.resistances=[{}]
    
        
        
        
        
    }


    get TotalLevel(): number {
        //TODO: Really implement total level based on classes
        if (this.classes===[])
        {return 10;}
        else
        {
            var i
            var tlvl=0
            for (i=0;i<this.classes.length;i++)
            {tlvl+=this.classes[i].lvl}
            return tlvl
        }
    }
}
