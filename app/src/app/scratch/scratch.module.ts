import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScratchRoutingModule } from './scratch-routing.module';
import { ScratchComponent } from './scratch.component';
import { CharUIComponent } from './char-ui/char-ui.component';
import { DiceComponent } from './dice/dice.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { CdkTreeModule } from '@angular/cdk/tree';


@NgModule({
  declarations: [
    ScratchComponent,
    CharUIComponent,
    DiceComponent,
    WeaponsComponent,
    TreeViewComponent,
  ],
  imports: [
    CdkTreeModule,
    CommonModule,
    ScratchRoutingModule
  ]
})
export class ScratchModule { }
