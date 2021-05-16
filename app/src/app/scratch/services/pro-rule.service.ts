import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProRuleService {

  constructor() { }

  rolldice(side: number) {
    return Math.floor((Math.random() * side)+1)
  };
  
  advantage(side:number) {
      let roll1=this.rolldice(side);
      let roll2=this.rolldice(side);
  
      if (roll1>= roll2){return roll1}
      else {return roll2}
  
  };
  
  disadvantage(side:number) {
      let roll1=this.rolldice(side);
      let roll2=this.rolldice(side);
      if (roll1<= roll2) {return roll1}
      else {return roll2}
  };
  
  damage(num: number, side:number, bonus:number, crit?:boolean) {
      //if (crit=true) {num=num*2}
      return ((num*this.rolldice(side))+bonus);
  };
  
  abcheck(profic:number,adv:string) {
      if (adv ="advantage") {var roll:number=this.advantage(20);}
      else if (adv = "disadvantage") {var roll:number=this.disadvantage(20);}
      else {var roll:number=this.rolldice(20)}
  
      return (roll+profic);
  
  }
  
  attack(profic:number,adv:string,mod:number){
      return this.abcheck(profic,adv)+mod;
  }
  
  skillcheck(profic:number,adv:string,mod:number,skill:number) {
      return this.abcheck(profic,adv)+mod+skill;
  }

  profic(lvl){
    return 2+Math.floor((lvl-1)/4)
  }

  totlvl(charc){
    var covo = 0;
    var i
    for (i = 0; i < charc.bio.class.length; i++) {
      covo += Number(charc.bio.class[i].lvl);
    }
    return covo;

  }
  statmod(sta,charc){
    return Math.floor((charc.stats.abscores[sta]-10)/2)
  }

}


