import { AttrAst } from '@angular/compiler';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../services/char-data.service';
import { ProRuleService } from '../services/pro-rule.service';
import { CharOh } from "../models/char-oh";

var bal = new CharOh;

@Component({
  selector: 'app-char-ui',
  templateUrl: './char-ui.component.html',
  styleUrls: ['./char-ui.component.css']

})
export class CharUIComponent implements OnInit {
  charb = new CharOh;
  sal = new CharDataService
  charc = this.sal.barb[2]
  claszt = this.allclasslvl(this.charc);
  f: number = 1
  anim = this.charc.bio.idlava

  constructor(private proRule: ProRuleService) { }

  allclasslvl(char: any) {
    var covo = 0;
    var i
    for (i = 0; i < char.bio.class.length; i++) {
      covo += Number(char.bio.class[i].lvl);
    }
    return covo;
  }

  onRage(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "blue";
    if (this.charc.resources[1].min == 0) { alert('too tired') }
    else {
      this.charc.resources[1].min = this.charc.resources[1].min - 1;
      this.anim = this.charc.bio.idlrag

      setTimeout(() => {
        this.anim = this.charc.bio.idlava;
        (event.target as HTMLElement).style.backgroundColor = "red"
          ;
      }, 2000)
    }
  }

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

