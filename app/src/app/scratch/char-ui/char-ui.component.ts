import { AttrAst } from '@angular/compiler';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharDataService } from '../services/char-data.service';
import { ProRuleService } from '../services/pro-rule.service';
import { CharOh } from "../models/char-oh";
import { GameService } from '../services/game.service';

var bal = new CharOh;

@Component({
  selector: 'app-char-ui',
  templateUrl: './char-ui.component.html',
  styleUrls: ['./char-ui.component.css']

})
export class CharUIComponent implements OnInit {
  charb = new CharOh;
  sal = new CharDataService
  charc = this.sal.barb[3]
  //claszt = this.allclasslvl(this.charc);
  f: number = 1
  anim = this.charc.bio.idlava
  avtop='350px'
  avright='40px'
  avright2='40px'
  ntage='No Vantage'
  gloV='lo'
  mwidth='70%'
  mheight='48%'
  actiontop='60%'
  advantages:string='non'
  charId=1


  constructor(private proRule: ProRuleService, private game: GameService) { }

  charswitch(){
    if (this.charId<this.sal.barb.length-1){
      this.charId=this.charId+1
      this.charc=this.sal.barb[this.charId]
      this.anim=this.charc.bio.idlava
    }
    else {
      this.charId=0
      this.charc=this.sal.barb[this.charId]
      this.anim=this.charc.bio.idlava
    }
  }

  allclasslvl(char: any) {
    var covo = 0;
    var i
    for (i = 0; i < char.bio.class.length; i++) {
      covo += Number(char.bio.class[i].lvl);
    }
    return covo;
  }

onattack(){
  this.anim = this.charc.bio.atkan
  setTimeout(() =>{
    this.anim=this.charc.bio.idlava;
  },900)
}


  onRage(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "blue";
    if (this.charc.resources[1].min == 0) { alert('too tired') }
    else {
      this.charc.resources[1].min = this.charc.resources[1].min - 1;
      this.anim = this.charc.bio.idlrag

      setTimeout(() => {
        this.anim = this.charc.bio.idlava;
        (event.target as HTMLElement).style.backgroundColor = "red"
          ;
      }, 2000)
    }
  }

  avlayout(){
    this.mwidth='70%'
    this.mheight='48%'
    if(this.avtop=='350px'){
    this.avtop='55px'
    this.avright="4px"
    this.avright2="400px"}
    else{
      this.avtop='350px'
      this.avright="40px"
      this.avright2='40px'
    }
  }

  msize1(){
    this.mwidth='85%'
    this.mheight='65%'
    this.avtop="68%"
    this.avright2='-10%'
    this.avright="-2%"
    this.actiontop='70%'

  }

  actui1(){
    this.mwidth='70%'
    this.mheight='48%'
    this.actiontop='60%'
    if(this.avright2=='-10%'){
    this.avright2='40px'
    this.avright='40px'}
    this.avtop='350px'
   // }
  }

  avante(){
    if (this.ntage=='No Vantage'){
    this.gloV='glo'
    this.ntage='Advantage'
    this.advantages='advantage'
    }
    else if(this.ntage=='Advantage'){
      this.gloV='blo'
      this.ntage='disadvantage'
      this.advantages='disadvantage'
    }
    else if(this.ntage=='disadvantage'){
      this.gloV='lo'
      this.ntage='No Vantage'
      this.advantages='non'
    }
  }

  ngOnInit(): void {
    document.body.style.overflow='hidden'
    //document.body.style.backgroundColor='black'
  
  }
}


