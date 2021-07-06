import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Items } from '../classes/items';
import { Player } from '../classes/player';


@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.css']
})
export class EquipComponent implements OnInit {
  charl:Player
  chareq

  constructor(private game:GameService) {
    this.game.player.subscribe(player=>{
      this.charl=player;
    })
    this.chareq=this.charl.equipment.filter(b=>b.equippable===true)
  }

  filthyEQ(arrae:Array<any>){
    return arrae.filter(b=>b.equipped===true)
  }

  filthyEQBL(arrae){
    return arrae.filter(b=>b.equippable===true)
  }

  eq(item, i){
   
    if(this.charl.equipment[i].equipped===true){
     this.charl.equipment[i].uneqeffect(this.charl)
     this.charl.equipment[i].equipped=false

    }
    else{
      this.charl.equipment[i].eqeffect(this.charl)
      this.charl.equipment[i].equipped=true
    }
  }

  att(item,i){

    if(this.charl.equipment[i].attuned===true)
    {
      var index=this.charl.attunement.indexOf(this.charl.equipment[i])
      this.charl.attunement.splice(index,1)
      this.charl.equipment[i].attuned=false
    }
    //else if(this.charl.maxattune<=this.charl.attunement.length){alert("you need to unattune an item")}
    else if(this.charl.equipment[i].attuned===false){
      if (this.charl.maxattune>this.charl.attunement.length){
          this.charl.attunement.push(this.charl.equipment[i])
          this.charl.equipment[i].attuned=true
      }
      else{
        alert('You cant attune any more items, unattune something')
      }

    }
    
    
    

    //test=false
    //if (test){test=false}
    //else{test=true}
    
  }


  ngOnInit(): void {
  }

}
