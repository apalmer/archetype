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
            this.icon = 'assets/monsta/mimages/bwyr.jpg'
            this.bio = {}
            this.bio.avatar = 'assets/monsta/mimages/bigwyr.png '
            return;
        }

        let data = enemyData.find(x => x.name.toLowerCase() === name.toLowerCase());
        this.name = data.name;
        this.hitPoints = this.maxHitPoints = Number(data.hit_points);
        this.armorClass = Number(data.armor_class);

        this.icon = 'assets/monsta/mimages/bwyr.jpg'
        this.bio = {}
        this.bio.avatar = 'assets/monsta/mimages/bigwyr.png'
        this.abilities={
            STR:data.strength,
            DEX:data.dexterity,
            CON:data.constitution,
            INT:data.intelligence,
            WIS:data.wisdom,
            CHR:data.charisma,
        }
        this.safethrowbonus=[]
        if(data.constitution_save){this.safethrowbonus.CON=data.constitution_save}
        if(data.strength_save){this.safethrowbonus.STR=data.strength_save}
        if(data.dexterity_save){this.safethrowbonus.DEX=data.dexterity_save}
        if(data.intelligence_save){this.safethrowbonus.INT=data.intelligence_save}
        if(data.wisdom_save){this.safethrowbonus.WIS=data.wisdom_save}
        if(data.charisma_save){this.safethrowbonus.CHR=data.charisma_save}


        this.actions = [];
        data.actions.forEach(
            dataAction => {
                let action = new Action();

                action.name = dataAction.name;
                action.description = dataAction.desc;
                action.attackBonus = dataAction.attack_bonus;

                if (dataAction.damage_dice || dataAction.damage_bonus) {
                    action.damage = new Array<DamageInfo>();
                    let first:DamageInfo = new DamageInfo();
                    let second:DamageInfo = null;
                    let typeparser = dataAction.desc.match(/(?<=\(\d*d.*\) )\w+/g)

                    if (dataAction.damage_bonus) {
                        first.bonus = dataAction.damage_bonus;
                        first.type=typeparser[0]
                    }
                    if (dataAction.damage_dice) {

                        let damageParser: RegExpMatchArray = dataAction.damage_dice.match(/(\d+)d(\d+)((\s*\+*\s*)(\d+)d(\d+))*/);

                        first.dice = Number(damageParser[1]);
                        first.sides = Number(damageParser[2]);

                        if(damageParser[5] && damageParser[6]){
                            second = new DamageInfo();
                            second.dice = Number(damageParser[5]);
                            second.sides = Number(damageParser[6]);
                            second.type=typeparser[1]
                        }
                    }
                    action.damage.push(first);
                    if(second){
                        action.damage.push(second);
                    }
                }

                this.actions.push(action);
            }
        );
    }


}
