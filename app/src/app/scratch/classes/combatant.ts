import { Advantage } from "./dice";

export class Combatant {
    name:string;
    hitPoints:number;
    maxHitPoints:number;
    armorClass:number;
    icon:string;
    resistances:any [] =[]

    advantage:Advantage;

    abilities: {
        STR:number;
        DEX:number;
        CON:number;
        INT:number;
        WIS:number;
        CHR:number;
    }
    bio:any;
}
