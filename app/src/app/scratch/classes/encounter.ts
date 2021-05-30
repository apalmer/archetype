import { Enemy } from "./enemy"
import { Player } from "./player";
import { charc} from "../char-ui/char-ui.component"
import {abd} from "../services/char-data.service"

export class Encounter {
    enemies:Enemy[];
    player:Player;
    adult= JSON.parse(JSON.stringify(abd))
    black= JSON.parse(JSON.stringify(abd))
    drago= JSON.parse(JSON.stringify(abd))
    

    constructor(){
        this.player = charc;
        
        this.enemies = Array<Enemy>();

        this.enemies.push(this.adult);
        this.enemies.push(this.black);
        this.enemies.push(this.drago);
    }
}
