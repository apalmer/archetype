import { AttrAst } from '@angular/compiler';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import {CharDataServiceService} from '../char-data-service.service';
import{CharOh} from '../charui/charoh';


var bal=new CharOh;



function allclasslvl(char:any){
  
  var covo= 0;
  
  var i
  for (i=0; i <char.bio.class.length; i++){
     covo += Number(char.bio.class[i].lvl);
     }
     return covo;
}


@Component({
  selector: 'app-charui',
  templateUrl: './charui.component.html',
  styleUrls: ['./charui.component.css']
  
})
export class CharuiComponent implements OnInit {
  charb=new CharOh;
  sal=new CharDataServiceService
  charc=this.sal.barb[1]
  claszt=allclasslvl(this.charc);
  f:number=1
  anim=this.charc.bio.idlava

  onRage(event: MouseEvent){
    (event.target as HTMLElement).style.backgroundColor="blue";
    if (this.charc.resources[1].min==0) {alert('too tired')}
    else {this.charc.resources[1].min=this.charc.resources[1].min-1;
      this.anim=this.charc.bio.idlrag
    
      setTimeout( ()=>{this.anim=this.charc.bio.idlava;
      (event.target as HTMLElement).style.backgroundColor="red"
      ;}, 2000)
    }
    

   // if (this.f<this.sal.barb.length-1){
    //this.f=this.f+1
    //this.charc=this.sal.barb[this.f]}
  //  else {this.f=0
   //   this.charc=this.sal.barb[this.f]}
  
  
    
    
  }

   

  constructor() { }

  ngOnInit(): void {
  }
  

}


