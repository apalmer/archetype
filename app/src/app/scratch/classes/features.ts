
import {bonusobject, weaponDamageRoll} from '../classes/dice'


 


export class Feature{
    name:string;
    desc:string;
    
    start(player?){}
    on(player?){}
    off(player?){}
}

var rage= new Feature
var bblvl
bonusobject
rage.name='Rage'
rage.desc='rage does stuff'
rage.on=function(player){
    player.resistances.push(
      {type:'slashing', value:.5, source:'rage'},
      {type:'piercing', value:.5, source:'rage'},
        {type:'bludgeoning', value:.5, source:'rage'}
      )
    //var bblvl=player.classes.find('Barbarian')
    
    player.bonusobject.dmg+=3
    player.conditions.rage='on'

}
rage.off=function(player){
    player.resistances=player.resistances.filter((bo)=>bo.source!=='rage')
   player.bonusobject.dmg-=3
    player.conditions.rage='off'
}
rage.start=function(player?){
    player.actives.push(rage)


}

export var raget = rage


