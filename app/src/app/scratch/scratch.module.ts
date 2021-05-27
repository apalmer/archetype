import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScratchRoutingModule } from './scratch-routing.module';
import { ScratchComponent } from './scratch.component';
import { CharUIComponent } from './char-ui/char-ui.component';
import { DiceComponent } from './dice/dice.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ActionuiComponent } from './actionui/actionui.component';
import { MaproundComponent } from './mapround/mapround.component';
import { EnemyComponent } from './enemy/enemy.component';
import { SpelloComponent } from './spello/spello.component';
import { DebuggerComponent } from './debugger/debugger.component';


@NgModule({
  declarations: [
    ScratchComponent,
    CharUIComponent,
    DiceComponent,
    WeaponsComponent,
    TreeViewComponent,
    ActionuiComponent,
    MaproundComponent,
    EnemyComponent,
    SpelloComponent,
    DebuggerComponent,
  ],
  imports: [
    CdkTreeModule,
    CommonModule,
    ScratchRoutingModule
  ]
})
export class ScratchModule { }
