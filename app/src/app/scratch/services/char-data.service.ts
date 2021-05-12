import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharDataService {

  barb=adven

  constructor() { }
}


const staff={name:'Old Staff', type:'quarterstaff', dmg1: '1d6',dmg2:'1d8', dmgtype:'blunt', properties:['versatile']}
const unarmed={name:'Fists', type:'unnamrmed', dmg1: '1d1',dmg2:'1d1', dmgtype:'blunt', properties:['none']}
const knuckles={name:'Brass Knuckles', type:'club', dmg1: '1d4',dmg2:'1d4', dmgtype:'blunt', properties:['light']}



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

    items:any={unarmed}



        
    
    
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

function dndAb(char:dndchar, s:number,d:number,co:number,i:number,w:number,ch:number){
 char.stats.abscores={str:s,dex:d,con:co,int:i,wis:w,chr:ch}
}
//function dndsk(char:dndchar, skillname:string, lvl:number){
  //char.stats.skills[skillname]=lvl
//}

var jam=new dndchar('Jam','Monk',10)
dndAb(jam,11,16,13,8,18,12)
//dndsk(jam,'athletics',10)

var adven=[jam,sol,balco]
jam.bio.profile='("assets/images/jam.gif")'
jam.bio.idlava="assets/images/jamid.gif"

