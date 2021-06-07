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
    actives:Array<any>=[]
    skills:Array<{name:Skill, value:number}>
    weapons:Array<any>=[]

    constructor() {
        super();

        this.name = "WuTang";
        this.hitPoints = this.maxHitPoints = 20;
        
        
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
        this.actives=[]
        this.armorClass=12
        
        

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

        get armorClas():number{
            let ac=10
            if(this.classes.find(b=>b.class==='Monk')){
            ac= ((this.abilities.DEX+this.abilities.WIS-20)/2)+10
        }
            else if(this.classes.find(b=>b.class==='Barbarian')){
                ac= ((this.abilities.STR+this.abilities.CON-20)/2)+10}
            return ac}
    
    
    
    
    

    
    
}
