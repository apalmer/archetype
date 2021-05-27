import { Enemy } from "./enemy"
import { Player } from "./player";

export class Encounter {
    enemies:Enemy[];
    player:Player;

    constructor(){
        this.player = new Player();
        
        this.enemies = Array<Enemy>();

        this.enemies.push(new Enemy());
        this.enemies.push(new Enemy());
        this.enemies.push(new Enemy());
    }
}
