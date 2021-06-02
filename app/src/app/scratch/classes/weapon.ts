import { Ability } from "./dice";
import { weaponData } from "./weapons-data";

export class Weapon {
    flare: string;
    name: string;
    icon: string;'icon.svg'
    damage: {
        oneHanded: { dice: number, sides: number, type: string } | null,
        twoHanded: { dice: number, sides: number, type: string } | null
    };
    //TODO:The applicable abilities are way more complex
    ability: Ability[];
    cost:number;
    weight:number;
    property:string[];
    requires:string

    constructor(name:string) {
        let data = weaponData.find(x => x.Name.toLowerCase() === name.toLowerCase());
        this.name = data.Name;
        this.cost = Number(data.Cost.match(/(\d*)/)[0]);
        this.weight = Number(data.Weight.match(/(\d*)/)[0]);
        this.property = data.Properties;
        this.requires=data.Requires

        let damage:RegExpMatchArray = data.Damage.match(/(\d*)d(\d*)(\s*)(.*)/);
        let damageType =data.Damagetype || damage[4];
        let twoHanded:boolean = data.Properties.includes("Two-Handed");
        let versatile:boolean = false;
        let versatileDamage:RegExpMatchArray = null;
        data.Properties.forEach(property => {
            if(property.includes("Versatile")){
                versatile = true;
                versatileDamage = property.match(/(\d*)d(\d*)(\s*)(.*)/);
            }
        });
        if(twoHanded){
            this.damage = { oneHanded:null, twoHanded:null };
            this.damage.twoHanded = {
                dice: Number(damage[1]),
                sides: Number(damage[2]),
                type: damageType
            }
        }
        else{
            this.damage = { oneHanded:null, twoHanded:null };
            this.damage.oneHanded = {
                dice: Number(damage[1]),
                sides: Number(damage[2]),
                type: damageType
            }
            if(versatile){
                this.damage.twoHanded = {
                    dice: Number(versatileDamage[1]),
                    sides: Number(versatileDamage[2]),
                    type: damageType
                }
            }
        }

        this.ability=[];
        let finesse = data.Properties.includes("Finesse");
        if(finesse){
            this.ability.push("STR");
            this.ability.push("DEX");
        }
        else if(data.Category === "Ranged"){
            this.ability.push("DEX")
        }
        else{
            this.ability.push("STR");
        }
    }
    // get damageString(){
    //     return this.damage.dice +"d"+this.damage.sides;
    // }

    // set damageString(str:string){
    //     let vals = str.split("d");
    //     this.damage.dice = Number(vals[0]);
    //     this.damage.sides = Number(vals[1]);
    // }
}
