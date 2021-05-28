import { EventListenerFocusTrapInertStrategy } from "@angular/cdk/a11y";
import { resolveSanitizationFn } from "@angular/compiler/src/render3/view/template";
import { RouterOutlet } from "@angular/router";
import { resourceUsage } from "process";
import { AttackOptions } from "../models/attack-options";
import { CombatSystem } from "./combat-system";
import { Combatant } from "./combatant";
import { Enemy } from "./enemy";
import { Player } from "./player";
import { Weapon } from "./weapon";

export type Ability = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHR";
export type Advantage = "advantage" | "disadvantage" | "none";
export type Skill ="athletics" | "acrobatics" | "sleightofhand"|"stealth"|
    "arcana"|"history"|"investigation"|"nature"|"religion"|"animalhandling"
    |"insight"|"medecine"|"perception"|"survival"|"deception"|"intimidation"
    |"perform"|"persuasion";





export function die(sides) {
    return Math.floor((sides * Math.random()) + 1);
}

function roll20(advantage: Advantage, bonus?:number) {
    let value: number;
    let critical: "success" | "failure" | "normal";

    if (advantage === "advantage") {
        value = Math.max(die(20), die(20));
    }
    else if (advantage === "disadvantage") {
        value = Math.min(die(20), die(20));
    }
    else {
        value = die(20);
    }

    if (value === 1) {
        critical = "failure";
    }
    else if (value === 20) {
        critical = "success";
    }
    else {
        critical = "normal";
    }

    return { value: value, critical: critical };
}

export function attackRoll(combatant: Combatant, ability: Ability, ability2:Ability){
    let mod
    if(ability2==null){
        mod = getMod(combatant, ability);
       
    }
    else{
        mod=Math.max(getMod(combatant,ability), getMod(combatant, ability2))
    }

    let roll = roll20(combatant.advantage);
    roll.value += mod;

    if (proficiencyApplies(combatant)) {
        roll.value += getProficiency(combatant as Player);
    }

    return roll;
}

function abilityRoll(combatant: Combatant, ability: Ability) {
    let mod = getMod(combatant, ability);
    let roll = roll20(combatant.advantage);
    roll.value += mod;

    if (proficiencyApplies(combatant)) {
        roll.value += getProficiency(combatant as Player);
    }

    return roll;
}

export function damageRoll(combatant: Combatant, ability:Ability, ability2:Ability, 
    dice:number, sides:number, isCritical?:boolean){

    let dagger = new Weapon('dagger');
    let mod
    if(ability2==null){
        mod = getMod(combatant, ability);
       
    }
    else{
        mod=Math.max(getMod(combatant,ability), getMod(combatant, ability2))
    }
    
    if(isCritical){
        dice *= 2;
    }

    let sum = 0;
    for (let index = 0; index < dice; index++) {
        sum += die(sides);
    }
    sum+=mod
    return sum;
}

function getMod(combatant: Combatant, ability: Ability) {
    let value = combatant.abilities[ability];
    let mod = Math.floor((value - 10) / 2);
    return mod;
}

function proficiencyApplies(combatant: Combatant): boolean {
    //TODO: Determine how to determine if proficiency applies.
    //This is a simplified implementation
    return combatant instanceof Player;
}

function getProficiency(player: Player): number {
    let proficiency = Math.floor((player.TotalLevel - 1) / 4) + 2;
    return proficiency;
}

//do not use yet! sketching idea
function savethrow(source, target, sourceability:Ability , tability:Ability, bonus?:number){
    var dc
    if (source instanceof Player){
    dc=8+ getMod(source,sourceability) + getProficiency(source)+bonus}
    if (source instanceof Number){
        dc=source
    }

    if (target instanceof Player){
        //incimplete, build isproficient method lookup
    alert('Roll the '+tability+ ' Save Check!')}

    if (target instanceof Enemy) {
        var i
        var result
        for (i=0;i<target.safethrowbonus.length;i++){
            {if (target.safethrowbonus[i].ability===tability){
                if (roll20('none')+target.safethrowbonus[i].value>=dc){result= 'pass'}
                }

            }

        }


    }

    //




}


