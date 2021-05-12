import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
  { path: 'archetypes', loadChildren: () => import('./archetypes/archetypes.module').then(m => m.ArchetypesModule) },
  { path: 'scratch', loadChildren: () => import('./scratch/scratch.module').then(m => m.ScratchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
