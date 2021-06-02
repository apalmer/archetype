import { Enemy } from "./enemy"
import { Player } from "./player";
import {abd} from "../services/char-data.service"

export class Encounter {
    enemies:Enemy[];
    player:Player;

    adult;//= JSON.parse(JSON.stringify(abd))
    black;//= JSON.parse(JSON.stringify(abd))
    drago;//= JSON.parse(JSON.stringify(abd))

    constructor(){
        
        this.enemies = Array<Enemy>();
        
        this.adult = new Enemy('Adult Black Dragon')
        this.black = new Enemy('Young Silver Dragon');
        this.drago = new Enemy('Ancient Green Dragon');

        this.enemies.push(this.adult);
        this.enemies.push(this.black);
        this.enemies.push(this.drago);
    }
}
