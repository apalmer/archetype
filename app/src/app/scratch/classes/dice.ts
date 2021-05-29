
import { Testability } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { resourceUsage } from "process";
import { AmbientLight } from "three";
import { AttackOptions } from "../models/attack-options";
import { CombatSystem } from "./combat-system";
import { Combatant } from "./combatant";
import { Enemy } from "./enemy";
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



export function die(sides) {
    return Math.floor((sides * Math.random()) + 1);
}

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
    else if (value === 20) {
        critical = "success";
    }
    else {
        critical = "normal";
    }

    return { value: value, critical: critical };
}

export function attackRoll(combatant: Combatant, ability: Ability, ability2: Ability) {
    let mod
    if (ability2 == null) {
        mod = getMod(combatant, ability);

    }
    else {
        mod = Math.max(getMod(combatant, ability), getMod(combatant, ability2))
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

export function damageRoll(combatant: Combatant, ability: Ability, ability2: Ability,
    dice: number, sides: number, isCritical?: boolean) {

    let dagger = new Weapon('dagger');
    let mod
    if (ability2 == null) {
        mod = getMod(combatant, ability);

    }
    else {
        mod = Math.max(getMod(combatant, ability), getMod(combatant, ability2))
    }

    if (isCritical) {
        dice *= 2;
    }

    let sum = 0;
    for (let index = 0; index < dice; index++) {
        sum += die(sides);
    }
    sum += mod
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
function savethrow(source, target, sourceability: Ability, tability: Ability, bonus?: number) {
    var dc
    if (source instanceof Player) {
        dc = 8 + getMod(source, sourceability) + getProficiency(source) + bonus
    }
    if (source instanceof Number) {
        dc = source
    }

    if (target instanceof Player) {
        var probonus = 0
        //maybe have alert and a response functiom later. automated for now
        if (isproficient(target, tability)) {
            probonus = getProficiency(target)
        }
        var saferoll = abilityRoll(target, tability).value + probonus
        if (saferoll >= dc) { return 'pass' }
        else { return 'fail' }

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

        if (result >= dc) { return 'pass' }
        else { return 'fail' }

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


