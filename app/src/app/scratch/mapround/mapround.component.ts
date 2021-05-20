import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapround',
  templateUrl: './mapround.component.html',
  styleUrls: ['./mapround.component.css']
})
export class MaproundComponent implements OnInit {

  scale=1
  scalet='scale('+this.scale+')'
  constructor() { }

  ngOnInit(): void {
  }

  zoomp(){
    this.scale=(this.scale*1.1) 
    this.scalet='scale('+this.scale+')'}
  zoomm(){
    this.scale=(this.scale*.9)
    this.scalet='scale('+this.scale+')'
  
  }
}
