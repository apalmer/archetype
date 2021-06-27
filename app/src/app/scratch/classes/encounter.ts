import { Enemy } from "./enemy";
import { Player } from "./player";
import {rollIntit} from "./dice"
import {abd} from "../services/char-data.service"
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { Combatant } from "./combatant";

export class TurnTracker { 
    combatants:BehaviorSubject<Array<Combatant>>;
    currentIndex:BehaviorSubject<number>;
    current:BehaviorSubject<Combatant>;

    combatantInitiative:Map<number,Combatant>;
    initiativeCombatant:Map<Combatant,number>;

    constructor(elements:Combatant[]){
        this.combatants = new BehaviorSubject<Array<Combatant>>([...elements]);
        this.currentIndex = new BehaviorSubject<number>(null);
        this.current = new BehaviorSubject<Combatant>(null);

        this.combatantInitiative = new Map<number,Combatant>();
        this.initiativeCombatant = new Map<Combatant,number>();
    }

    next() {
        let nextIndex = this.currentIndex.value + 1;

        if(nextIndex >= this.combatants.value.length) {
            this.currentIndex.next(0);
        }
        else{
            this.currentIndex.next(nextIndex);
        }
        
        this.current.next(this.getCurrent());
    };

    shuffle(orderer){
        let current = this.getCurrent();

        this.combatantInitiative.clear();
        this.combatants.value.forEach(
            combatant => {
                let initiative = orderer(combatant);
                while(this.combatantInitiative.has(initiative)){
                    initiative = orderer(combatant);
                }

                this.combatantInitiative.set(initiative, combatant);
                this.initiativeCombatant.set(combatant,initiative);
            }
        )

        let shuffled:Combatant[] = [];
        let sorted = [...this.combatantInitiative.keys()];
        sorted.sort((a,b) => b-a);
        sorted.forEach(
            (initiative, index) =>{
                let found = this.combatantInitiative.get(initiative);
                shuffled.push(found);
                if(found === current){
                    this.currentIndex.next(index);
                }
            }
        )

        this.combatants.next(shuffled);
        if(!current){
            this.currentIndex.next(0);
            this.current.next(this.getCurrent());
        }
    }

    getInitiative(combatant):number{
        return this.initiativeCombatant.get(combatant);
    }

    insertCombatant(orderer, combatant:Combatant){
        this.combatants.value.push(combatant);

        this.shuffle(individual => {
            if(individual === combatant){
                return orderer(individual);
            }
            else{
                return this.initiativeCombatant.get(individual);
            }
        });
        
    };

    removedCombatant(combatant){
        if(this.getCurrent() == combatant){
            this.next();
        }
        let initiative = this.initiativeCombatant.get(combatant);
        this.combatantInitiative.delete(initiative);
        this.initiativeCombatant.delete(combatant);

        let indexToRemove = this.combatants.value.indexOf(combatant);
        if(indexToRemove < this.currentIndex.value){
            this.currentIndex.next(this.currentIndex.value - 1);
        }
        this.combatants.value.splice(indexToRemove, 1);
        this.combatants.next(this.combatants.value);
    }

    getCurrent(){
        return this.combatants.value[this.currentIndex.value];
    };
};

export class Encounter {
    enemies:Enemy[];
    combatants:Combatant[];
    player:Player;
    turnorder: BehaviorSubject<Array<any>>
    tphase:any;
    turnTracker:TurnTracker;


    adult;//= JSON.parse(JSON.stringify(abd))
    black;//= JSON.parse(JSON.stringify(abd))
    drago;//= JSON.parse(JSON.stringify(abd))

    constructor(){
        
        this.enemies = Array<Enemy>();
        
        this.adult = new Enemy('Horned Devil')
        this.black = new Enemy('Young Silver Dragon');
        this.drago = new Enemy('Aboleth');

        this.enemies.push(this.adult);
        this.enemies.push(this.black);
        this.enemies.push(this.drago);

        this.combatants = new Array<Combatant>(...this.enemies);

        this.turnTracker = new TurnTracker(this.combatants);
        this.turnTracker.shuffle(rollIntit);

        // this.turnorder= new BehaviorSubject<Array<any>>(this.enemies)
        
        // if (this.turnorder.value.length>0){
        // for (let i=0;i>this.turnorder.value.length-1;i++)
        // {
        //     this.turnorder.value[i].bonusobject.realini=rollIntit(this.turnorder.value[i])
        // }
        // }
        // let liner

        // this.turnorder.subscribe(
        //     turnz=>{
        //         liner='uhh nothin i guess'
        //     }
        // )



        
    }
}
