import { Observable, Subject } from "rxjs";
import { AttackOptions } from "../models/attack-options";
import { Combatant } from "./combatant";
import { GameEvent } from "./game-event";
import { Weapon } from "./weapon";
import { attackRoll, weaponDamageRoll } from "./dice"

export class CombatSystem {
    private combatEventSource: Subject<GameEvent> = new Subject<GameEvent>();
    combatEvents: Observable<GameEvent> = this.combatEventSource.asObservable();

    constructor() {

    }

    attack(source: Combatant, target: Combatant, attackOption: AttackOptions) {

        //figure out attack based on attack options
        //is attackOptions valid for the source
        let weapon = new Weapon(attackOption.weapon);
        //figure out attack chance to hit based on source, dice and modifiers
        let attack = attackRoll(source, weapon);
        //figure out attack chance to hit based on target
        let success = attack.value >= target.armorClass;

        //figure out damage based on attack success, attack options, source and target
        if (success) {
            let weaponDamage = attackOption.handiness === "one-handed" ? weapon.damage.oneHanded : weapon.damage.twoHanded;
            let isCritical = attack.critical === "success";
            let damage = weaponDamageRoll(source, weapon,
                weaponDamage.dice, weaponDamage.sides, isCritical);

            //apply damage to target
            target.hitPoints -= damage;
            this.combatEventSource.next({ type: 'Combat', payload: { attack: attack.value, critical: attack.critical, damage: damage } });

        }
        else {
            this.combatEventSource.next({ type: 'Combat', payload: { attack: attack.value, critical: attack.critical, damage:0 } });
        }

    }
}
