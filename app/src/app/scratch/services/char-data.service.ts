import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable } from '@angular/core';
import {cant,spellcode} from '../services/spellist.service'
import { spellson } from './spellson';

@Injectable({
  providedIn: 'root'
})
export class CharDataService {

  barb=adven

  constructor() { }
}


const staff={name:'Old Staff', type:'quarterstaff', dmg: ['1d6','1d8'], dmgtype:'blunt', properties:['versatile'], icon:'', art:''}
const unarmed={name:'Fist', type:'unnamrmed', dmg: ['1d1'], dmgtype:'blunt', properties:['none'],icon:'("assets/images/fist.svg")',art:'', mod:'str'}
const knuckles={name:'Brass Knuckles', type:'club', dmg: ['1d4'], dmgtype:'blunt', properties:['light']}


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

var gun = new anyweap('Matchlock','firearm',['1d10', '1d12'],'dex')
gun.icon='("assets/images/mlok.svg")'
var staff1 =new anyweap('Gnarled Staff','quarterstaff',['1d6','1d8'],'str')
var axe = new anyweap('Garruks Rage', '2hnd Axe',['','1d12'],'str')




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

    items:Array<any>=[unarmed, gun]



        
    
    
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
