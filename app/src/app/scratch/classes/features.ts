
import {weaponDamageRoll} from '../classes/dice'


 


export class Feature{
    name:string;
    desc:string;
    scrap:any;
    
    start(player?){}
    on(player?){}
    off(player?){}
}

export var rage= new Feature

rage.name='Rage'
rage.desc='rage does stuff'

rage.on=function(player){
    player.resistances.push(
      {type:'slashing', value:.5, source:'rage'},
      {type:'piercing', value:.5, source:'rage'},
      {type:'bludgeoning', value:.5, source:'rage'}
      )
    let bb
    let bblvl=player.classes.find(b=>b.class==='Barbarian').lvl
    if(bblvl<9){bb=2}
    else if(bblvl<16 && bblvl>=9){bb=3}
    else{bb=4}
    
    player.bonusobject.dmg+=bb
    player.conditions.rage='on'

}
rage.off=function(player){
    let bb
    let bblvl=player.classes.find(b=>b.class==='Barbarian').lvl
    if(bblvl<9){bb=2}
    else if(bblvl<16 && bblvl>=9){bb=3}
    else{bb=4}
    
    player.resistances=player.resistances.filter((bo)=>bo.source!=='rage')
   player.bonusobject.dmg-=bb
    player.conditions.rage='off'
}
rage.start=function(player?){
    player.actives.push(rage)


}

 var recklessAttack =new Feature
 recklessAttack.name='Reckless Attack'
 recklessAttack.desc='When you make your first Attack on Your Turn, you can decide to Attack recklessly. Doing so gives you advantage on melee weapon Attack Rolls using Strength during this turn, but Attack Rolls against you have advantage until your next turn.'
 recklessAttack.start=function(player){
   player.actives.push(recklessAttack)
 }

 export var brutalcrit=new Feature
 brutalcrit.name='Brutal Critical'
 brutalcrit.desc='you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee Attack.This increases to two additional dice at 13th level and three additional dice at 17th level.'
 brutalcrit.start=function(player){
   player.actives.push(brutalcrit)
   let bb
   let bblvl=player.classes.find(b=>b.class==='Barbarian').lvl
   if (bblvl>8){bb=1}
   if (bblvl>12&&bblvl<17){bb=2}
   if (bblvl>16){bb=3}
  player.bonusobject.cdice=bb
 }



