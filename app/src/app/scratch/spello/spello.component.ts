import { Component, OnInit } from '@angular/core';
import {spellson} from '../services/spellson';



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
  

  constructor() {
     this.spstring= JSON.stringify(spellson)
     var regex='*'
  this.spstring2=this.spstring.replace(/\*\*.*?\*\*/g, '')
  this.sps=JSON.parse(this.spstring2)
  this.gps=Object.keys(this.sps['0th'])
   }

  ngOnInit(): void {
  }

}
