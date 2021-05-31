import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacticsComponent } from './tactics.component';

const routes: Routes = [
  { path: '', component: TacticsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacticsRoutingModule { }
