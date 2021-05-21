import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonstaService {

  constructor() { }
}

function newmonsta(
  name:string,
  type:string,
  align:string,
  ac:number,
  hp:number,
  speed?:any,
  
  ){
    this.name=name
    this.type=type
    this.align=align
    this.ac=ac
    // have to set this.hp or it will be null
    this.hp = {}
    this.hp.max=hp
    this.hp.min =hp
    this.hp.dice
    this.speed=speed
    this.absco
    // have to set this.bio or it will be null
    this.bio = {}
    this.bio.sthro
    this.bio.skills
    this.resist
    this.action
    this.icon
    }

    var bdragwyrm= new newmonsta('Black Dragon Wrymling','medium dragon','chaotic evil',17,33,[30,60,30]
    )
    var boar= new newmonsta('Boar', 'medium beast','unaligned',11,11,[40])
  
