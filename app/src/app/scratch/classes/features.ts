
import {weaponDamageRoll} from '../classes/dice'
import { Weapon } from './weapon';
import {GameService} from '../services/game.service'
import { Input } from '@angular/core';
import {savethrow} from '../classes/dice'
import { GameEngine } from './game-engine';
import {CharacterDataService} from '../services/character-data.service'
import { buildMapFromList } from '@angular/flex-layout/extended/typings/style/style-transforms';


 

export class Feature{
    name:string;
    desc:string;
    scrap:any;
    
    
    start(player?){}
    on(player?){}
    off(player?){}

   constructor(){}
    
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

 export var recklessAttack =new Feature
 recklessAttack.name='Reckless Attack'
 recklessAttack.desc='When you make your first Attack on Your Turn, you can decide to Attack recklessly. Doing so gives you advantage on melee weapon Attack Rolls using Strength during this turn, but Attack Rolls against you have advantage until your next turn.'
 recklessAttack.start=function(player){
   player.actives.push(recklessAttack)
 }

 export var brutalcrit=new Feature
 brutalcrit.name='Brutal Critical'
 brutalcrit.desc='you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee Attack.This increases to two additional dice at 13th level and three additional dice at 17th level.'
 brutalcrit.start=function(player){
   let bb
   let bblvl=player.classes.find(b=>b.class==='Barbarian').lvl
   if (bblvl>8){bb=1}
   if (bblvl>12&&bblvl<17){bb=2}
   if (bblvl>16){bb=3}
  player.bonusobject.cdice=bb
 }


 export var martial=new Feature
 martial.name='Martial Arts'
 martial.desc="your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn."

 martial.start=function(player){
    let msides=4
    let molvl=0

    if (player.classes.find(b=>b.class==="Monk")){
      molvl=player.classes.find(b=>b.class==="Monk").lvl
    }
    
    let mox= 2*(Math.floor((molvl+1)/6))
    msides+=mox


    var mars=new Weapon('Quarterstaff')
    mars.flare='Martial Arts'
   //mars.name='Martial Arts'
   mars.cost=0
   mars.weight=0
  mars.damage.oneHanded.sides=msides
  mars.damage.twoHanded.sides=msides
   mars.ability=['STR','DEX']

   player.weapons.push(mars)
    
 }

 export var ki=new Feature
 ki.name='Ki'
 ki.desc=`your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.

 You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
 
 When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
 
 Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:
 
 Ki save DC = 8 + your proficiency bonus + your Wisdom modifier
 
 Flurry of Blows. Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.
 Patient Defense. You can spend 1 ki point to take the Dodge action as a bonus action on your turn.
 Step of the Wind. You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.`
ki.start=function(player){

  const flurry=new Feature
  flurry.name='Flurry of Blows'
  flurry.desc='Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.'
  flurry.on=function(player){
    let kiref=player.resources.find(b=>b.name==='Ki')
    if (kiref.min===0){alert('You need a short Meditation')}
    else{
    kiref.min-=1}
    
  }

  const patient=new Feature
  patient.name='Patient Defense'
  patient.desc='You can spend 1 ki point to take the Dodge action as a bonus action on your turn'
  patient.on=function(player){
    let kiref=player.resources.find(b=>b.name==='Ki')
    if (kiref.min===0){alert('You need a short Meditation')}
    else{
    kiref.min-=1}
  }

  const step=new Feature
  step.name='Step of the Wind'
  step.desc='You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn'
  step.on=function(player){
    let kiref=player.resources.find(b=>b.name==='Ki')
    if (kiref.min===0){alert('You need a short Meditation')}
    else{
    kiref.min-=1}
    
  }

  player.actives.push(flurry,patient,step)
}

export var stunstrike=new Feature
stunstrike.name='Stunning Strike'
stunstrike.desc="you can interfere with the flow of ki in an opponent's body. When you ht another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
stunstrike.start=function (player){
  player.actives.push(stunstrike)
}
stunstrike.on=function (player){
  
  
  
  

}





