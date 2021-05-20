import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { CharDataService } from '../services/char-data.service';
import { ProRuleService } from '../services/pro-rule.service';


@Component({
  selector: 'app-actionui',
  templateUrl: './actionui.component.html',
  styleUrls: ['./actionui.component.css']
})
export class ActionuiComponent implements OnInit {
  @Input() advantages:string | null=null;
  @Input() charc:any | null=null;
  @Output() atkan = new EventEmitter();
  
  varcolor='blue'
  varclo='clo'
  switchnum
  z=0

  constructor() { }

  ngOnInit(): void {

  }

  onattack2(){
    this.atkan.emit()

  }



  openweap(event: MouseEvent, an?){
    this.z=an;
    this.switchnum=an
       // if (this.onoff=='none'){this.onoff='block'};
    //this.arcolor='null';
    //this.varclo='cloactiv';
   //(event.target as HTMLElement).classList.remove('clo');
  //void (event.target as HTMLElement).offsetWidth;
   // (event.target as HTMLElement).classList.add('cloactiv');

  }
}
