import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MonstaService {
monstlist1=monstlist
  constructor() { }


}

function newmonsta(
  name:string,
  type:string,
  align:string,
  ac:number,
  hp:number,
  speed?:any
  )
  {
    this.name=name;
    this.type=type;
    this.align=align;
    this.ac=ac;
    this.hp={max:hp,min:hp,dice:''};
    this.speed=speed;
    this.absco;
    this.bio={sthro:{},skills:[]}
    this.resist;
    this.action;
    this.icon;
    }
    function addscore(monsta,s,d,co,i,w,cr){
    monsta.absco={str:s,dex:d,con:co,int:i,wis:w,chr:cr}
  }

   var bdragwyrm= new newmonsta('Black Dragon Wrymling','medium dragon','chaotic evil',17,33,[30,60,30])
   addscore(bdragwyrm,15,14,13,10,11,13)
   bdragwyrm.icon='assets/monsta/mimages/bwyr.jpg'
   bdragwyrm.avatar='assets/monsta/mimages/bigwyr.png'
   var boar= new newmonsta('Boar', 'medium beast','unaligned',11,11,[40])
   addscore(boar,13, 11, 12, 2, 9, 5)
   boar.icon='assets/monsta/mimages/boar.jpg'

  var acolyte= new newmonsta('Acolyte','medium humanoid','any align',10,9,[30])
  addscore(acolyte,10,10,10,10,14,11)
  acolyte.icon='assets/monsta/mimages/aco.jpg'
  
  var monstlist=[bdragwyrm,boar,acolyte]

