import { Enemy } from "./enemy";
import { Player } from "./player";
import {rollIntit} from "./dice"
import {abd} from "../services/char-data.service"
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { Combatant } from "./combatant";
import { TurnTracker } from "./turn-tracker";

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
