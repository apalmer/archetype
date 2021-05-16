import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharUIComponent } from './char-ui/char-ui.component';
import { DiceComponent } from './dice/dice.component';
import { ScratchComponent } from './scratch.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
  { path: '', component: ScratchComponent },
  { path: 'char-ui', component: CharUIComponent},
  { path: 'dice', component: DiceComponent},
  { path: 'weapo', component: WeaponsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScratchRoutingModule { }
