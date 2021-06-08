import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service'

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.css']
})
export class ActivesComponent implements OnInit {
  charp
  switchact
  actfeat
  ocolo
  ocsize
  opec=1
  ocolor

  constructor(private game:GameService) { 

    this.charp=this.game.player.value
  }

  ngOnInit(): void {
  }

  swi(activs, i){
    this.switchact=i
    this.actfeat=activs.name
  }

  useAc(){
    let newi=this.charp.actives.find(b=>b.name===this.actfeat)
    newi.on(this.charp)
    this.ocsize="scale(2,2)"
    this.opec=0
    this.ocolo= 'gold'
    this.ocolor='gold'

    setTimeout(() => {
      this.ocsize='scale(1,1)'
      this.ocolor='white'
      this.ocolo='darkred'
      
    }, 1050);
    setTimeout(() => {
      this.opec=1

    }, 1801);


    
  }

}
