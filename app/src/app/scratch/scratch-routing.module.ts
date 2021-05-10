import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharUIComponent } from './char-ui/char-ui.component';
import { ProRuleComponent } from './pro-rule/pro-rule.component';
import { ScratchComponent } from './scratch.component';

const routes: Routes = [
  { path: '', component: ScratchComponent },
  { path: 'pro-rule', component: ProRuleComponent },
  { path: 'char-ui', component: CharUIComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScratchRoutingModule { }
