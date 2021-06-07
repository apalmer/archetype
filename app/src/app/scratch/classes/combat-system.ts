import { Observable, Subject } from "rxjs";
import { AttackOptions } from "../models/attack-options";
import { Combatant } from "./combatant";
import { GameEvent } from "./game-event";
import { Weapon } from "./weapon";
import { attackRoll, weaponDamageRoll, ActAttackRoll, attackDamageRoll, damageresist } from "./dice"
import { InstancedBufferAttribute } from "three";
import { Player } from "./player";
import { Action, DamageInfo } from "./enemy";

export class CombatSystem {
    public combatEventSource: Subject<GameEvent> = new Subject<GameEvent>();
    combatEvents: Observable<GameEvent> = this.combatEventSource.asObservable();

    constructor() {

    }

    attack(source, target, attackOption) {
        let attack
        let weapon
        if(source instanceof Player){var tacker='play'}
        else{var tacker='enemy'}
        if(attackOption instanceof Action){
           attack=  ActAttackRoll(source,attackOption)
        }
        //figure out attack based on attack options
        //is attackOptions valid for the source
        else{
            weapon = new Weapon(attackOption.weapon);
        //figure out attack chance to hit based on source, dice and modifiers
            attack = attackRoll(source, weapon);
        //figure out attack chance to hit based on target
        }
        let success = attack.value >= target.armorClass;
        var isCritical = attack.critical === "success";

        //figure out damage based on attack success, attack options, source and target
        if (success && source instanceof Player) {
            let weaponDamage = attackOption.handiness === "one-handed" ? weapon.damage.oneHanded : weapon.damage.twoHanded;
            
            let damage = weaponDamageRoll(source, weapon,
                weaponDamage.dice, weaponDamage.sides, isCritical);
                damage= damageresist(damage,target,weapon.damageType)

            //apply damage to target
            target.hitPoints -= damage;
            this.combatEventSource.next({ type: 'Combat', payload: {origin:tacker, attack: attack.value, critical: attack.critical, damage: damage } });

        }

        else if(success && attackOption instanceof Action){

            let dam2=0
          let dam1=attackDamageRoll(attackOption.damage[0].dice,attackOption.damage[0].sides,isCritical)+attackOption.damage[0].bonus
          dam1=damageresist(dam1,target,attackOption.damage[0].type)
          if (attackOption.damage[1]){
              dam2= attackDamageRoll(attackOption.damage[1].dice,attackOption.damage[1].sides,isCritical)
              dam2=damageresist(dam2,target,attackOption.damage[1].type)
            }
            let damage=dam1+dam2

            target.hitPoints -= damage

            this.combatEventSource.next({ type: 'Combat', payload: {origin:tacker, attack: attack.value, critical: attack.critical, damage: damage } });



        }
        else {
            this.combatEventSource.next({ type: 'Combat', payload: {origin:tacker, attack: attack.value, critical: attack.critical, damage:0 } });
        }

    }

    safeevent(end){

        this.combatEventSource.next({ type: 'Combat', payload:{dc:end.dc, roll:end.roll, test:end.test}})
    }
}
