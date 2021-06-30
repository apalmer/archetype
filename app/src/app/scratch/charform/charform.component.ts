import { Component, OnInit } from '@angular/core';
import {Player} from '../classes/player'
@Component({
  selector: 'app-charform',
  templateUrl: './charform.component.html',
  styleUrls: ['./charform.component.css']
})
export class CharformComponent implements OnInit {
  newchar= new Player
  ico='url(assets/images/micon.svg)'
  biohide
  submitted=false
  onsubmit(){this.submitted=true}

  constructor() {
    
    this.newchar.bio.visuals={idle:'assets/images/defsilo.svg'}
    this.newchar.icon='("assets/images/micon.svg")'
    
   }

  ngOnInit(): void {
  }

}
