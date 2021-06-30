import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { rollIntit } from '../classes/dice'
import { TurnTracker } from '../classes/encounter';
import { Combatant } from '../classes/combatant';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  combatants: any = []
  play1
  nprime = 0
  diameter=40
  mprime=''
  dot=''
  hid=''
  rota=0
  rad=1
  eye = 0
  eye2 = 1
  eye3 = 2
  counter = 0
  turnTracker:TurnTracker
  current:Combatant
  cindex:number

  constructor(game: GameService) {
    game.player.subscribe(
      player =>
        this.play1 = player
    )

    this.turnTracker = game.getTurnTracker();

    this.turnTracker.combatants.subscribe(
      combatants => {
        this.combatants = combatants;
      }
    )

    this.turnTracker.current.subscribe(
      current => {
        this.current = current;
      }
    )

    this.turnTracker.currentIndex.subscribe(
      cindex=>{
        this.cindex=cindex
      }
    )

    //   for (let i=0;i<this.combatants.length;i++)
    //   {

    //     //let tempini=rollIntit(this.combatants[0])
    //     this.combatants[i].bonusobject.realini=rollIntit(this.combatants[i])
    //  }
    //  this.combatants=this.combatants.sort((a,b)=>b.bonusobject.realini - a.bonusobject.realini) 

  }

  getInitg(player) {
    this.turnTracker.insertCombatant(rollIntit, player);

    // player.bonusobject.realini = rollIntit(player)
    // if (this.combatants.includes(player)) { let be = 'cool' }
    // else {
    //   this.combatants.push(player)
    // }
    // this.combatants = this.combatants.sort((a, b) => b.bonusobject.realini - a.bonusobject.realini)

  }

  shuffle() {
    this.turnTracker.next();
    //this.combatants.push(this.combatants.shift())
    //this.nprime -= 60
    this.rad=.01
    this.dot='1px'
    this.hid='1000%'
    this.rota+=1
    setTimeout(() => {
      //this.nprime+=60
      this.rad=1
      this.dot='20px'
      this.hid='100%'
    }, 500);

    if (this.counter >= this.combatants.length - 1) { this.nprime = 0; this.counter = 0 }
    else { this.counter += 1 }


    // //this.counter+=1
    // if (this.eye < this.combatants.length - 1) { this.eye += 1 }
    // else { this.eye = 0 }
    // if (this.eye2 < this.combatants.length - 1) { this.eye2 += 1 }
    // else { this.eye2 = 0 }
    // if (this.eye3 < this.combatants.length - 1) { this.eye3 += 1 }
    // else { this.eye3 = 0 }


  }



  ngOnInit(): void {
  }

}
