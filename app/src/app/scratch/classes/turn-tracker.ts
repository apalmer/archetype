import { BehaviorSubject } from "rxjs";
import { Combatant } from "./combatant";

export class TurnTracker { 
    combatants:BehaviorSubject<Array<Combatant>>;
    currentIndex:BehaviorSubject<number>;
    current:BehaviorSubject<Combatant>;

    initiativeCombatant:Map<number,Combatant>;
    combatantInitiative:Map<Combatant,number>;

    constructor(elements:Combatant[]){
        this.combatants = new BehaviorSubject<Array<Combatant>>([...elements]);
        this.currentIndex = new BehaviorSubject<number>(null);
        this.current = new BehaviorSubject<Combatant>(null);

        this.initiativeCombatant = new Map<number,Combatant>();
        this.combatantInitiative = new Map<Combatant,number>();
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

        this.initiativeCombatant.clear();
        this.combatants.value.forEach(
            combatant => {
                let initiative = orderer(combatant);
                while(this.initiativeCombatant.has(initiative)){
                    initiative = orderer(combatant);
                }

                this.initiativeCombatant.set(initiative, combatant);
                this.combatantInitiative.set(combatant,initiative);
            }
        )

        let shuffled:Combatant[] = [];
        let sorted = [...this.initiativeCombatant.keys()];
        sorted.sort((a,b) => b-a);
        sorted.forEach(
            (initiative, index) =>{
                let found = this.initiativeCombatant.get(initiative);
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
        return this.combatantInitiative.get(combatant);
    }

    insertCombatant(orderer, combatant:Combatant){
        if(this.combatants.value.includes(combatant)){
            return;
        }

        this.combatants.value.push(combatant);

        this.shuffle(individual => {
            if(individual === combatant){
                return orderer(individual);
            }
            else{
                return this.combatantInitiative.get(individual);
            }
        });
        
    };

    removedCombatant(combatant){
        if(this.getCurrent() == combatant){
            this.next();
        }
        let initiative = this.combatantInitiative.get(combatant);
        this.initiativeCombatant.delete(initiative);
        this.combatantInitiative.delete(combatant);

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