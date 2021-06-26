import { Advantage } from "./dice";

export class Combatant {
    name:string;
    hitPoints:number;
    maxHitPoints:number;
    armorClass:any;
    icon:string;
    resistances:any [] =[]
    conditions:any={rage:'off'}
    bonusobject:any={dmg:0,atk:0,cdice:0, ini:0}
    

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
