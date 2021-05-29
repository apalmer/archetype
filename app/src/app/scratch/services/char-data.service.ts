import { Injectable } from '@angular/core';
import {cant,spellcode} from '../services/spellist.service'
import { spellson } from './spellson';
import {Weapon} from '../classes/weapon'
import { Enemy } from '../classes/enemy';
import  {die} from '../classes/dice'

@Injectable({
  providedIn: 'root'
})
export class CharDataService {

  barb=adven

  constructor() { }
}





function anyweap(
  name:string,
  type:string,
  dmg1:Array<string>,
  mod:string,
  )
  {

this.name=name
this.type=type
this.dmg=dmg1
this.dmgtype='bluntslashpierce'
this.properties=[]
this.icon='icon.svg'
this.art='art.png'
this.mod=mod
}



function dweapon(varname, type:string, flar?:string, iconfile?:string){
 varname= new Weapon(type)
 varname.flare=flar
 varname.icon='("assets/images/'+iconfile+'")'
 return varname
}
var gun = new anyweap('Matchlock','firearm',['1d10', '1d12'],'dex')
gun.icon='("assets/images/mlok.svg")'
var staff1 =new anyweap('Quarterstaff','quarterstaff',['1d6','1d8'],'str')
var laxe = new anyweap('Garruks Rage', '2hnd Axe',['','1d12'],'str')
var dugery= new Weapon('Barbed Dagger')
var thugery= new Weapon('Quarterstaff')
var axe=dweapon(axe,'Greataxe', "Garruks's Rages",'gaxe.jpg')


dugery.flare='Dugerous Blade'
dugery.icon='("assets/images/barbs.svg")'



class anychar{
  stats:any;
  resources:any;
  items:any
  bio:any
}

class dndchar extends anychar{
  stats=
    {abscores:{str:0, dex:0,con:0,
      int:0,
      wis:0,
      chr:0}
      ,
    skills:
      {athletics:0,
      acrobatics:0,
      sleightofhand:0,
      stealth:0,  
      arcana:0,
      history:0,
      investigation:0,
      nature:0,
      religion:0,
      animalhandling:0,
      insight:0,
      medecine:0,
      perception:0,
      survival:0,
      deception:0,  
      intimidation:0,
      perform:0,
      persuasion:0}
      
    }
    bio:any={name:'Nom', 
         profile:'("assets/images/bil.svg")',
         class:[{name:'none',lvl:0}]
        }
    resources:any=
    [{name:'HP',max:10,min:9,bonus:0}]

    items:Array<any>=[thugery, dugery]



        
    
   

    constructor(nom?:string,clas?:string,clevel?:number){
      super()
      this.bio.name=nom
      this.bio.class[0]={name:clas,lvl:clevel}

    }
    
    
    
    
}


var balco=new dndchar("Balco", "Cleric", 5)
balco.resources[0]={name:'HP',max:10,min:8,bonus:0}
balco.resources.push({name:"ki",max:4, min:2,});
balco.stats.skills.acrobatics=4

var sol=new dndchar
sol.bio.class.push({name:'Fighter',lvl:6})
sol.bio.class[0]={name:'Barbarian', lvl:14}
sol.bio.name='Sol Bad'
sol.bio.profile='("assets/images/sol.svg")'
sol.stats.abscores={str:20, dex:16, con:20, int:10, wis:10, chr:9}
sol.bio.history='Future rat'
sol.stats.skills.acrobatics=5
sol.stats.skills.athletics=7
sol.stats.skills.intimidation=4
sol.resources.push({name:'Rage', max:5, min:5})
sol.resources[0]={name:'HP',max:223, min:183}
sol.bio.idlava="assets/images/solidl.gif"
sol.bio.idlrag="assets/images/solrg.gif"
sol.bio.atkan="assets/images/sol-a4.gif"
sol.items.push(axe)

function dndAb(char:dndchar, s:number,d:number,co:number,i:number,w:number,ch:number){
 char.stats.abscores={str:s,dex:d,con:co,int:i,wis:w,chr:ch}
}
//function dndsk(char:dndchar, skillname:string, lvl:number){
  //char.stats.skills[skillname]=lvl
//}

var jam=new dndchar('Jam','Monk',10)
dndAb(jam,11,16,13,8,18,12)
//dndsk(jam,'athletics',10)

export var adven=[jam,sol,balco]
jam.bio.profile='("assets/images/jam.gif")'
jam.bio.idlava="assets/images/jamid.gif"
jam.bio.atkan="assets/images/ocused_v3.gif"

var apbot=new dndchar('Sarah Applebottom', 'Bard', 12)
dndAb(apbot,8,18,10,12,14,16)
apbot.bio.profile='("assets/images/apbot.jpg")'
apbot.bio.idlava="assets/images/apbotful.jpg"

var rlet=new dndchar('RathLethal','Sorcerer', 14)
dndAb(rlet,8,16,10,12,14,20)
rlet.bio.profile='("assets/images/rleth.svg")'
rlet.bio.idlava='assets/images/rletidl2.gif'
rlet.bio.atkan='assets/images/rletatk.gif'
adven.push(rlet)
rlet.bio.spells=[]
rlet.bio.spells.push(cant[2], cant[0], cant[5], cant[40], cant[23], cant[3], cant[15], cant[11], 
  spellcode[0],spellcode[10], spellcode[8], spellcode[5], spellcode[70], spellcode[55], spellcode[45],
  spellcode[120], spellcode[150], spellcode[170], spellcode[200], spellcode[210], spellcode[220],
  )

balco
adven.push(apbot)

var abd= new Enemy
abd.name='Adult Black Dragon'
abd.challenge=14
abd.armorClass=19
abd.maxHitPoints=abd.hitPoints= 17*die(12)+85
abd.speed='40ft, fly80ft, swim40ft'
abd.abilities={STR:23,DEX:14,CON:21, INT:14, WIS:13, CHR:17}
abd.resistances.push({acid:100})
abd.safethrowbonus.DEX=7
abd.safethrowbonus.CON=10
abd.safethrowbonus.WIS=6
abd.safethrowbonus.CHR=8
abd.skills.push({name:'stealth',value:7},{name:'perception', value:11})
abd.senses='blinsight 60  ,darkvision 120, passive perception 21 '


