import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { ArchetypesComponent } from './archetypes/archetypes.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'archetypes', component: ArchetypesComponent, canActivate: [LoggedInGuard] },
  { path: 'characters', component: CharacterComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
