import { Ability } from "./dice";
import { weaponData } from "./weapons-data";

export class Weapon {
    flare: string;
    name: string;
    damage: {
        "one-handed": { dice: number, sides: number, type: string },
        "two-handed": { dice: number, sides: number, type: string }
    };
    //TODO:The applicable abilities are way more complex
    ability: Ability[];
    cost:number;
    weight:number;
    property:string[];

    constructor(name:string) {
        let data = weaponData.find(x => x.Name === name);
        this.name = data.Name;
        this.cost = Number(data.Cost.match(/(\d*)/)[0]);
        this.weight = Number(data.Weight.match(/(\d*)/)[0]);
        this.property = data.Properties;

        let damage:RegExpMatchArray = data.Damage.match(/(\d*)d(\d*)(\s*)(.*)/);
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
            this.damage["two-handed"] = {
                dice: Number(damage[1]),
                sides: Number(damage[2]),
                type: damage[4]
            }
        }
        else{
            this.damage["one-handed"] = {
                dice: Number(damage[1]),
                sides: Number(damage[2]),
                type: damage[4]
            }
            if(versatile){
                this.damage["two-handed"] = {
                    dice: Number(versatileDamage[1]),
                    sides: Number(versatileDamage[2]),
                    type: damage[4]
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
