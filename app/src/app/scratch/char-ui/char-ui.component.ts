import { AttrAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharDataService, gio, dndplay } from '../services/char-data.service';
import { ProRuleService } from '../services/pro-rule.service';
import { CharOh } from "../models/char-oh";
import { GameService } from '../services/game.service';
import { Player } from '../classes/player';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CharacterDataService } from '../services/character-data.service';


export var charc; //=dndplay[0]

@Component({
  selector: 'app-char-ui',
  templateUrl: './char-ui.component.html',
  styleUrls: ['./char-ui.component.css']

})
export class CharUIComponent implements OnInit {
  charb = new CharOh;
  sal = new CharDataService
  charc = charc
  //claszt = this.allclasslvl(this.charc);
  f: number = 1
  anim;// = this.charc.bio.visuals.idle
  avtop = '350px'
  avright = '40px'
  avright2 = '40px'
  ntage = 'No Vantage'
  gloV = 'lo'
  mwidth = '70%'
  mheight = '48%'
  actiontop = '60%'
  advantages: string = 'non'
  charId = 0
  characterCandidates;
  atkright='-5px'
  hishow=0
  skews
  enattack:any=3
  endamage:any=40
  encolor
  encolorD
  dmgright
  dmgtop
  dmgsize
  dmgopac=0
  rcolor='blue'
  

  constructor(private proRule: ProRuleService, private game: GameService, private characterService:CharacterDataService, private snackBar: MatSnackBar) { 

    this.game.eventFeed.subscribe(
      event => this.snackBar.open(event.payload.origin+' attacks with '+ event.payload.attack+
      ' for '+event.payload.damage+' dmg.','close',{duration:2000})
    )
      
    this.game.eventFeed.subscribe(boom=> this.enatkanim(boom.payload.origin, boom.payload.attack, boom.payload.damage, boom.payload.critical)
    )
    

    this.game.player.subscribe(
      player => {
        this.charc = player;
        this.anim = this.charc.bio.visuals.idle;
      }
    );

    

    this.characterService.get().subscribe(
      characters => this.characterCandidates = characters
    );

  }


  rager(player)
  {
    let rae=player.features.find(bo=>bo.name==='Rage')
    if (player.conditions.rage==='on')
    {
      rae.off(player);
      this.rcolor='slategray'}
    else{
      rae.on(player);
      this.onRage()
      this.rcolor='red'}
  }

  charswitch() {
    let selected:Player;
    if (this.charId < this.characterCandidates.length - 1) {
      this.charId = this.charId + 1
      selected =this.characterCandidates[this.charId]
      // this.anim = this.charc.bio.visuals.idle
    }
    else {
      this.charId = 0
      selected =this.characterCandidates[this.charId]
      // this.anim = this.charc.bio.visuals.idle
    }

    this.game.setPlayer(selected);
  }

  allclasslvl(char: any) {
    var covo = 0;
    var i
    for (i = 0; i < char.bio.class.length; i++) {
      covo += Number(char.bio.class[i].lvl);
    }
    return covo;
  }

  onattack() {
    this.anim = this.charc.bio.visuals.atk1
    setTimeout(() => {
      this.anim = this.charc.bio.visuals.idle;
    }, 1000)
  }


  onRage(event?: MouseEvent) {
    //(event.target as HTMLElement).style.backgroundColor = "blue";
    let sae=this.charc.resources.find(bo=>bo.name==='Rage')
    if (sae.min == 0) { alert('too tired') }
    else {
      sae.min = sae.min - 1;
      this.anim = this.charc.bio.visuals.rage

      setTimeout(() => {
        this.anim = this.charc.bio.visuals.idle;
        //(event.target as HTMLElement).style.backgroundColor = "red"
          ;
      }, 2000)
    }
  }

  avlayout() {
    this.mwidth = '70%'
    this.mheight = '48%'
    if (this.avtop == '350px') {
      this.avtop = '55px'
      this.avright = "4px"
      this.avright2 = "400px"
    }
    else {
      this.avtop = '350px'
      this.avright = "40px"
      this.avright2 = '40px'
    }
  }

  msize1() {
    this.mwidth = '85%'
    this.mheight = '65%'
    this.avtop = "68%"
    this.avright2 = '-10%'
    this.avright = "-2%"
    this.actiontop = '70%'

  }

  enatkanim(origin, attack, damage, critical){
    if(origin==='enemy'){
    this.enattack=attack
    this.atkright='200px';
    this.skews='skewX(-'+20+attack+'deg)'
    this.encolor='red'
    this.encolorD='orangered'
    this.dmgsize=16
    this.dmgtop='150px'
    this.dmgright='-20px'

    if (critical==='success')
    {this.encolor='yellow'
    this.encolorD='orange'
    }
    
    setTimeout(() => {
      this.atkright='-40px';
      this.hishow=1
    }, 200);

    setTimeout(() => {
      this.dmgright='20px'
      this.dmgtop='70px'
      this.dmgopac=1
      this.dmgsize=20+(damage*2)
      this.endamage=damage
    }, 800);


    setTimeout(() => {
      this.hishow=0
      this.skews='skewX(-15deg)'
    },1100);

    setTimeout(() => {
      this.dmgopac=0
    }, 1700);
    
  

  }}


  actui1() {
    this.mwidth = '70%'
    this.mheight = '48%'
    this.actiontop = '60%'
    if (this.avright2 == '-10%') {
      this.avright2 = '40px'
      this.avright = '40px'
    }
    this.avtop = '350px'
    // }
  }

  avante() {
    if (this.ntage == 'No Vantage') {
      this.gloV = 'glo'
      this.ntage = 'Advantage'
      this.advantages = 'advantage'
      this.charc.advantage=this.advantages
    }
    else if (this.ntage == 'Advantage') {
      this.gloV = 'blo'
      this.ntage = 'disadvantage'
      this.advantages = 'disadvantage'
      this.charc.advantage =this.advantages
    }
    else if (this.ntage == 'disadvantage') {
      this.gloV = 'lo'
      this.ntage = 'No Vantage'
      this.advantages = 'non'
      this.charc.advantage = this.advantages
      
    }
    
  }
  

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
    //document.body.style.backgroundColor='black'
    //function featinit()
    //let ipsos=0
     // for (ipsos=0;ipsos<this.charc.features.length;ipsos++)
      //  {this.charc.features[ipsos].start(this.charc)}
   // }
   // featinit()

  }
  
}




