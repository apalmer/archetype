import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CharactersComponent } from 'src/app/characters/characters.component';
import { CharDataService } from '../services/char-data.service';
import { ProRuleService } from '../services/pro-rule.service';



@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  sal= new CharDataService
  charc= this.sal.barb[0]
  swnum=0
  swnam='1hnd'
  strmod
  profic
  lvl
  atktxt:any='ready'
  atkdmg:any='go'
  dmgswtch(ip){
    if (this.swnum<ip.dmg.length-1){
    this.swnum=this.swnum+1
    this.swnam='2hnd'
  }
    else {this.swnum=0
    this.swnam='1hnd'}

  }
  

  

  constructor(private rule: ProRuleService) { 
    



  }

  ngOnInit(): void {

     this.lvl=this.rule.totlvl(this.charc)
     this.profic=this.rule.profic(this.lvl)
     this.strmod=this.rule.statmod('dex',this.charc)
     
  }

  atknao(dmg){
   var dmgsplit =dmg.split("d")
    var ndice=Number(dmgsplit[0])
   var sdice=Number(dmgsplit[1])
    this.atktxt=this.rule.attack(this.profic,'non',this.strmod)
    document.getElementById('atak').classList.remove('atta');
    void document.getElementById('atak').offsetWidth;
    document.getElementById('atak').classList.add('atta');
    
    this.atkdmg= this.rule.damage(ndice,sdice,this.strmod,false)
    document.getElementById('dama').classList.remove('damma');
    void document.getElementById('dama').offsetWidth;
    document.getElementById('dama').classList.add('damma');
    document.getElementById('a1').style.visibility='visible';
    document.getElementById('d1').style.visibility='visible';
  }

  attest(){
     this.atktxt=100
  }



}
