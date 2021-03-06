import { ThisReceiver } from "@angular/compiler";
import { ÉµBrowserGetTestability } from "@angular/platform-browser";
import { Combatant } from "./combatant";
import { Ability, DamageType, Skill } from "./dice";
import { enemyData } from "./enemy-data";

export class DamageInfo {
    dice?: number;
    sides?: number;
    bonus?: number;
    type?: string;
}

export class Action {
    name: string;
    description: string;
    attackBonus: number;
    damage?: DamageInfo[];
    save?: any;
}

export class Enemy extends Combatant {
    type: string
    alignment: string
    speed: string
    senses: string
    actions: Array<Action>;
    safethrowbonus: any = {};
    skills: Array<{ name: Skill, value: number }> = []
    //damage immunity=100% resistance Vulnerabilty =-100%resistance regular resistance =50% 
    //formula would be like, damage-(x%resistance*damage)
    immunityCon: Array<string>
    //immunity for conditions
    challenge: any;
    traits: any

    constructor(name?: string) {
        super();

        if (!name) {

            this.name = "Dragon";
            this.hitPoints = this.maxHitPoints = 33;
            this.armorClass = 17;
            this.icon = '("assets/images/sol.svg")'
            this.bio = {}
            this.bio.avatar = 'assets/monsta/mimages/bigwyr.png '
            return;
        }

        let data = enemyData.find(x => x.name.toLowerCase() === name.toLowerCase());
        this.name = data.name;
        this.hitPoints = this.maxHitPoints = Number(data.hit_points);
        this.armorClass = Number(data.armor_class);
        if (data.damage_immunities) {
            var immunities = data.damage_immunities
                .replace('bludgeoning, piercing, and slashing from nonmagical weapons', 'nonmagical')
                .replace("that aren't adamantine", ',nonadamantine')
                .replace("that aren't silvered", ',nonsilver')
                .replace(/;/g, ',')
                .split(',');

            var transformed = immunities.map(immunity => { return { type: immunity.trim(), value: 0, source: 'natural' }; });

            transformed.forEach(i => this.resistances.push(i));
        }

        if (data.damage_resistances) {
            var resistances = data.damage_resistances
                .replace('bludgeoning, piercing, and slashing from nonmagical weapons', 'nonmagical')
                .replace("that aren't adamantine", ',nonadamantine')
                .replace("that aren't silvered", ',nonsilver')
                .replace(/;/g, ',')
                .split(',');

            var transformed = resistances.map(resistancy => { return { type: resistancy.trim(), value: .5, source: 'natural' }; });

            transformed.forEach(i => this.resistances.push(i));
        }

        if (data.damage_vulnerabilities) {
            var vulnerabilties = data.damage_vulnerabilities
                .replace('bludgeoning, piercing, and slashing from nonmagical weapons', 'nonmagical')
                .replace("that aren't adamantine", ',nonadamantine')
                .replace("that aren't silvered", ',nonsilver')
                .replace(/;/g, ',')
                .split(',');

            var transformed = vulnerabilties.map(vulner => { return { type: vulner.trim(), value: 2, source: 'natural' }; });

            transformed.forEach(i => this.resistances.push(i));
        }

        this.icon = '("assets/monsta/mimages/bwyr.jpg")'
        this.bio = {}
        this.bio.avatar = 'assets/monsta/mimages/bigwyr.png'
        this.abilities = {
            STR: data.strength,
            DEX: data.dexterity,
            CON: data.constitution,
            INT: data.intelligence,
            WIS: data.wisdom,
            CHR: data.charisma,
        }
        this.safethrowbonus = []
        if (data.constitution_save) { this.safethrowbonus.CON = data.constitution_save }
        if (data.strength_save) { this.safethrowbonus.STR = data.strength_save }
        if (data.dexterity_save) { this.safethrowbonus.DEX = data.dexterity_save }
        if (data.intelligence_save) { this.safethrowbonus.INT = data.intelligence_save }
        if (data.wisdom_save) { this.safethrowbonus.WIS = data.wisdom_save }
        if (data.charisma_save) { this.safethrowbonus.CHR = data.charisma_save }


        this.actions = [];
        data.actions && data.actions.forEach(
            dataAction => {
                let action = new Action();

                action.name = dataAction.name;
                action.description = dataAction.desc;
                action.attackBonus = dataAction.attack_bonus;

                let dcparser = dataAction.desc.match(/(DC) (\d*) (\w+)/)
                function beAbility(longab) {
                    if (longab === 'Constitution') { longab = 'CON' }
                    else if (longab === 'Strength') { longab = 'STR' }
                    else if (longab === 'Dexterity') { longab = 'DEX' }
                    else if (longab === 'Intelligence') { longab = 'INT' }
                    else if (longab === 'Wisdom') { longab = 'WIS' }
                    else if (longab === 'Charisma') { longab = 'CHR' }
                    else { longab = null }
                    return longab


                }
                if (dcparser) {
                    action.save = { DC: dcparser[2], ability: beAbility(dcparser[3]) }
                }

                if (dataAction.damage_dice || dataAction.damage_bonus) {
                    action.damage = new Array<DamageInfo>();
                    let first: DamageInfo = new DamageInfo();
                    let second: DamageInfo = null;
                    let typeparser = dataAction.desc.match(/(?<=\(\d*d.*\) )\w+/g) || dataAction.desc.match(/Hit: 1 (\w+)/g)

                    if (dataAction.damage_bonus) {
                        first.bonus = dataAction.damage_bonus;
                        first.type = typeparser[0]
                    }
                    else {
                        first.bonus = 0;
                        first.type = typeparser[0]
                    }

                    if (dataAction.damage_dice) {

                        let damageParser: RegExpMatchArray = dataAction.damage_dice.match(/(\d+)d(\d+)((\s*\+*\s*)(\d+)d(\d+))*/);

                        first.dice = Number(damageParser[1]);
                        first.sides = Number(damageParser[2]);

                        if (damageParser[5] && damageParser[6]) {
                            second = new DamageInfo();
                            second.dice = Number(damageParser[5]);
                            second.sides = Number(damageParser[6]);
                            second.type = typeparser[1]
                        }
                    }
                    action.damage.push(first);
                    if (second) {
                        action.damage.push(second);
                    }
                }

                this.actions.push(action);
            }
        );
    }
}
