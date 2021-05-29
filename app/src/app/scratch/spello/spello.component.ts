import { Component, OnInit } from '@angular/core';
import {spellson} from '../services/spellson';
import {adven} from '../services/char-data.service'



var spstring= JSON.stringify(spellson)
spstring.replace(/\*. *\*/g, '')
var spform= spellson



@Component({
  selector: 'app-spello',
  templateUrl: './spello.component.html',
  styleUrls: ['./spello.component.css']
})
export class SpelloComponent implements OnInit {
  spstring
  spstring2
  sps
  gps
  charc=adven[3]
  colerase='gold'
  magic

  constructor() {
     this.spstring= JSON.stringify(spellson)
     var regex='*'
  this.spstring2=this.spstring.replace(/\*\*.*?\*\*/g, '')
  this.sps=JSON.parse(this.spstring2)
  this.gps=Object.keys(this.sps['0th'])
   }

  ngOnInit(): void {

  }
  sclicks(event,spel,i){
    this.magic=spel.name

  }
  smouseov(spel,i){
    var spellid='spellno'+i
    document.getElementById(spellid).style.display='block'
  }
  
  smouseof(spel,i){
    var spellid='spellno'+i
    document.getElementById(spellid).style.display='none'
  }

}
