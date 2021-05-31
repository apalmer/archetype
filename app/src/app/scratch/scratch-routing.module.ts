import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharUIComponent } from './char-ui/char-ui.component';
import { DiceComponent } from './dice/dice.component';
import { ScratchComponent } from './scratch.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ActionuiComponent } from './actionui/actionui.component'
import { MaproundComponent } from './mapround/mapround.component';
import { EnemyComponent } from './enemy/enemy.component';
import { SpelloComponent } from './spello/spello.component';
import { DebuggerComponent } from './debugger/debugger.component';


const routes: Routes = [
  { path: '', component: ScratchComponent },
  { path: 'char-ui', component: CharUIComponent },
  { path: 'dice', component: DiceComponent },
  { path: 'weapo', component: WeaponsComponent },
  { path: 'tree-view', component: TreeViewComponent },
  { path: 'actionui', component: ActionuiComponent },
  { path: 'mapro', component: MaproundComponent },
  { path: 'enemmon', component: EnemyComponent },
  { path: 'spello', component: SpelloComponent },
  { path: 'debugger', component: DebuggerComponent },
  { path: 'communication', loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule) },
  { path: 'tactics', loadChildren: () => import('./tactics/tactics.module').then(m => m.TacticsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScratchRoutingModule { }
