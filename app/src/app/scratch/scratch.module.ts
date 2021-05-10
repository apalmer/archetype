import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScratchRoutingModule } from './scratch-routing.module';
import { ScratchComponent } from './scratch.component';
import { CharUIComponent } from './char-ui/char-ui.component';
import { ProRuleComponent } from './pro-rule/pro-rule.component';


@NgModule({
  declarations: [
    ScratchComponent,
    CharUIComponent,
    ProRuleComponent
  ],
  imports: [
    CommonModule,
    ScratchRoutingModule
  ]
})
export class ScratchModule { }
