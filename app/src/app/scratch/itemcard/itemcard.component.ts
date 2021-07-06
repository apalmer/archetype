import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../classes/items';
import { Player } from '../classes/player';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit {
  @Input() itemA:Items | null=null;
  @Input() chare:Player |null=null;
  testurl='url("assets/images/bootl.jpg")'
  

  constructor() { }

  
    
    

  

  ngOnInit(): void {
  }

}
