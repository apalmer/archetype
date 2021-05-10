import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { ProRuleService } from '../services/pro-rule.service';

class CharOh {
  name = "Balca Bo";
  classes = [['Monk', 9], ['Barbarian', 1]];
  profi = 'assets/images/bil.svg'
  weapon = [staff, unarmed, knuckles]
  resource = [['HP', 24, 10], ['ki', 4, 3]]
};

// class Char{
//   name:string='';
//   classes:[]=[];
//   profile:string='';
//   weapon:[]=[];
//   resource:[]=[];

//   constructor(x:number){
//   }
// }

const staff = { name: 'Old Staff', type: 'quarterstaff', dmg1: '1d6', dmg2: '1d8', dmgtype: 'blunt', properties: ['versatile'] }
const unarmed = { name: 'Fists', type: 'unnamrmed', dmg1: '1d1', dmg2: '1d1', dmgtype: 'blunt', properties: ['none'] }
const knuckles = { name: 'Brass Knuckles', type: 'club', dmg1: '1d4', dmg2: '1d4', dmgtype: 'blunt', properties: ['light'] }
var bal = new CharOh;

@Component({
  selector: 'app-char-ui',
  templateUrl: './char-ui.component.html',
  styleUrls: ['./char-ui.component.css']

})
export class CharUIComponent implements OnInit {
  myhero = "Windstorm"
  charb = bal;
  claszt = this.allclasslvl(bal);
  nop = 10;

  constructor(private proRule: ProRuleService) { }



  allclasslvl(char: CharOh) {

    var covo = 0;

    var i
    for (i = 0; i < char.classes.length; i++) {
      covo += Number(char.classes[i][1]);
    }
    return covo;
  }
  hpcenter(bu: any) {
    var boom = bu + "%";
    var x = document.getElementById('#hpcent')!;
    x.style.width = boom

  };


  ngOnInit(): void {
  }
}

// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>{{title}}</h1>
//     <h2>My favorite hero is: {{myHero}}</h2>
//     `
// })
// export class AppComponent {
//   title = 'Tour of Heroes';
//   myHero = 'Windstorm';

// }

