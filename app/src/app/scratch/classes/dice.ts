import { EventListenerFocusTrapInertStrategy } from "@angular/cdk/a11y";
import { resolveSanitizationFn } from "@angular/compiler/src/render3/view/template";
import { RouterOutlet } from "@angular/router";
import { resourceUsage } from "process";
import { AttackOptions } from "../models/attack-options";
import { Combatant } from "./combatant";
import { Player } from "./player";
import { Weapon } from "./weapon";

export type Ability = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHR";
export type Advantage = "advantage" | "disadvantage" | "none";

function die(sides) {
    return Math.floor((sides * Math.random()) + 1);
}

function roll20(advantage: Advantage) {
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

export function attackRoll(combatant: Combatant, ability: Ability){
    return abilityRoll(combatant,ability);
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

export function damageRoll(dice:number, sides:number, isCritical?:boolean){

    let dagger = new Weapon('dagger');
    
    if(isCritical){
        dice *= 2;
    }

    let sum = 0;
    for (let index = 0; index < dice; index++) {
        sum += die(sides);
    }
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


