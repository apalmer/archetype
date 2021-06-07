
import { Testability } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AmbientLight } from "three";
import { AttackOptions } from "../models/attack-options";
import { CombatSystem } from "./combat-system";
import { Combatant } from "./combatant";
import { Action, Enemy } from "./enemy";
import { Player } from "./player";
import { Weapon } from "./weapon";

const abilityValues = ["STR", "DEX", "CON", "INT", "WIS", "CHR"] as ["STR", "DEX", "CON", "INT", "WIS", "CHR"];
export type Ability = typeof abilityValues[number];

export type Advantage = "advantage" | "disadvantage" | "none";

const skillValues = ["athletics", "acrobatics", "sleightofhand", "stealth",
    "arcana", "history", "investigation", "nature", "religion", "animalhandling"
    , "insight", "medecine", "perception", "survival", "deception", "intimidation"
    , "perform", "persuasion"] as ["athletics", "acrobatics", "sleightofhand", "stealth",
        "arcana", "history", "investigation", "nature", "religion", "animalhandling"
        , "insight", "medecine", "perception", "survival", "deception", "intimidation"
        , "perform", "persuasion"];
export type Skill = typeof skillValues[number];

export type DamageType = "Acid" |"bludgeoning" | "Cold" |"Fire"|"Force"|"Lightning"|
"Necrotic"|"piercing"|"Poison"|"Psychic"|"Radiant"|"slashing"|"Thunder";



export function die(sides) {
    return Math.floor((sides * Math.random()) + 1);
}

export var bonusobject=0

function roll20(advantage: Advantage, bonus?: number) {
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
    else if (value===20) {
        critical = "success";
    }
    else {
        critical = "normal";
    }
    if (bonus)

    {value= value+bonus}

    return { value: value, critical: critical };
}

export function ActAttackRoll(combatant, action:Action){
    let roll=roll20(combatant.advantage, action.attackBonus)
    return roll
}

export function attackRoll(combatant,weapon:Weapon) {
    let mod
if (combatant.features.find(b=>b.name==='Martial Arts') && (weapon.requires==='simple' || weapon.name==='Shortsword')){
    mod= Math.max(getMod(combatant, weapon.ability[0]), getMod(combatant, "DEX"))}
        else{

    if (weapon.ability[1] == null) {
        mod = getMod(combatant, weapon.ability[0]);

    }
    else {
        mod = Math.max(getMod(combatant, weapon.ability[0]), getMod(combatant, weapon.ability[1]))
    }

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

   // if (proficiencyApplies(combatant)) {
      //  roll.value += getProficiency(combatant as Player);
   // }

    return roll;
}

export function weaponDamageRoll(combatant, weapon:Weapon, 
    dice: number, sides: number, isCritical?: boolean, bonus?) {
        let mod

    if (combatant.features.find(c=>c.name==='Martial Arts') && (weapon.requires==='simple' || weapon.name==='Shortsword')){
        mod= Math.max(getMod(combatant, weapon.ability[0]), getMod(combatant, "DEX"))}
        else{
    
            if (weapon.ability[1] == null) {
            mod = getMod(combatant, weapon.ability[0]);

            }
            else {
            mod = Math.max(getMod(combatant, weapon.ability[0]), getMod(combatant, weapon.ability[1]))
            }
        }

    dice=critdice(dice,isCritical, combatant, weapon)

    

    let sum = 0;
    for (let index = 0; index < dice; index++) {
        sum += die(sides);
    }
    sum += mod+combatant.bonusobject.dmg
    return sum;
}

function critdice(dice,isCritical,player?,weapon?)
{ 
    let bon=0
    if(player.features.find(b=>b.name==='Brutal Critical'&& weapon.category==='melee'))
    {bon=player.bonusobject.cdice}
    if(isCritical){
    dice*=2+bon
    return dice
}
else {return dice}
}




export function attackDamageRoll(dice, sides, isCritical?:Boolean, combatant?, ability?:Ability){
    let mod=0
    if (ability){
    getMod(combatant,ability)}
    if (isCritical) {
        dice *= 2;
    }

    let sum = 0;
    for (let index = 0; index < dice; index++) {
        sum += die(sides);
    }
    sum += mod
    return sum


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
export function savethrow(source, target, tability: Ability, sourceability?, bonus?: number) {
    var dc
    if (source instanceof Player) {
        dc = 8 + getMod(source, sourceability) + getProficiency(source) + bonus
    }
    if (!isNaN(source)) {
        dc = source
    }

    if (target instanceof Player) {
        let probonus = 0
        //maybe have alert and a response functiom later. automated for now
        if (isproficient(target, tability)) {
            probonus = getProficiency(target)
        }
        let saferoll = abilityRoll(target, tability).value +probonus
        if (saferoll >= dc) 
            { return {test:'succeeded', dc:dc, roll:saferoll} }
             else { return {test:'failed', dc:dc, roll:saferoll }}

   }

    if (target instanceof Enemy) {
       var i
       var result
       if (target.safethrowbonus[tability]) {
           result = roll20('none').value + target.safethrowbonus[tability]
        }
        else {
           result = roll20('none').value + getMod(target, tability)
        }

        if (result >= dc) { return {test:'succeeded', dc:dc, roll:result }}
        else { return {test:'failed', dc:dc, roll:result }}

    }






}

export function isproficient(player: Player, atathing, save?) {
    if (atathing instanceof Weapon) {
        if (player.proficiencies.weapon.includes(atathing.name)) { return true }
        else if (player.proficiencies.weapontype.includes(atathing.requires)) { return true }
        else { return false }
    }
    if (skillValues.includes(atathing)) {
        if (player.proficiencies.skills.includes(atathing)) { return true }
        else { return false }
    }
    if (abilityValues.includes(atathing)) {
        if (player.proficiencies.saves.includes(atathing)) { return true }
        else { return false }
    }
    return false;
}

export function damageresist(dmg, target, dmgtype?)

{
    if(target.resistances.find((bo)=>bo.type===dmgtype))
    {let resist=target.resistances.find((bo)=>bo.type===dmgtype)
    dmg=Math.floor(dmg*resist.value)}
    else {dmg=dmg}

    return dmg

}


