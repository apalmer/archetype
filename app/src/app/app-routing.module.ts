import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { ArchetypeComponent } from './archetype/archetype.component';
import { CharacterComponent } from './character/character.component';
import { CharuiComponent } from './charui/charui.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'archetypes', component: ArchetypeComponent, canActivate: [LoggedInGuard] },
  { path: 'characters', component: CharacterComponent, canActivate: [LoggedInGuard] },
  { path: 'charui', component: CharuiComponent, canActivate:[LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
