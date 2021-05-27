import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { CharactersComponent } from 'src/app/characters/characters.component';
import { AttackOptions } from '../models/attack-options';
import { CharDataService } from '../services/char-data.service';
import { GameService } from '../services/game.service';
import { ProRuleService } from '../services/pro-rule.service';



@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})

export class WeaponsComponent implements OnInit {
  @Input() advantages:string | null=null;
  @Input() charc:any | null=null;
  @Output() atkanim = new EventEmitter();
  @Output() attack = new EventEmitter<AttackOptions>()
  
  //sal= new CharDataService
  //charc= this.sal.barb[1]
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
  

  

  constructor(private rule: ProRuleService, private game:GameService) { 
    



  }

  ngOnInit(): void {

     this.lvl=this.rule.totlvl(this.charc)
     this.profic=this.rule.profic(this.lvl)
     this.strmod=this.rule.statmod('dex',this.charc)

     this.game.eventFeed.subscribe(
       message => this.onAttackEvent(message.payload.attack, message.payload.damage)
     )
     
  }
  atkbonus=0;
  dmgbonus=0;

  onAttack(weapon, swnum){

    let handiness:"one-handed"|"two-handed" = swnum ? 'two-handed':'one-handed';
    
    this.game.attackTarget({ weapon: weapon, handiness: handiness});
  }

  onAttackEvent(attack:number, damage:number){
    console.log(`${attack} - ${damage}`)
  }

  atknao(dmg,mod){

    this.atkanim.emit(this.atktxt)
    document.getElementById('atak').style.color='crimson'
    document.getElementById('dama').style.color='firebrick'
    
    var crit:boolean=false
   var dmgsplit =dmg.split("d")
    var ndice=Number(dmgsplit[0])
   var sdice=Number(dmgsplit[1])
   var nowmod=this.rule.statmod(mod,this.charc)
    this.atktxt=this.rule.attack(this.profic,this.advantages,nowmod)+this.atkbonus
    //function skuw(){if (this.atktxt<=12){return 0} else {return this.atktxt}}
    document.getElementById('atak').style.transform='skew(-'+this.atktxt*1.4+'deg)'
    document.getElementById("atak").style.animationDuration = 600-((this.atktxt-10)*20)+'ms';
    if (this.atktxt==20+this.profic+nowmod+this.atkbonus){
      crit=true;
      document.getElementById('atak').style.color='gold'
      document.getElementById('dama').style.color='darkorange'
    }
    else if(this.atktxt==1+this.profic+nowmod){
      document.getElementById('atak').style.color='gray'
    }
    document.getElementById('atak').classList.remove('atta');
    void document.getElementById('atak').offsetWidth;
    document.getElementById('atak').classList.add('atta');
    
    this.atkdmg= this.rule.damage(ndice,sdice,this.rule.statmod(mod,this.charc),crit)
    document.getElementById('dama').classList.remove('damma');
    document.getElementById('dama').style.fontSize=18+this.atkdmg+'px'


    void document.getElementById('dama').offsetWidth;
    document.getElementById('dama').classList.add('damma');
    document.getElementById('a1').style.visibility='visible';
    document.getElementById('d1').style.visibility='visible';
  }

  attest(){
     this.atktxt=100
  }



}
