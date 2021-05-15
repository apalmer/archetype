import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterEditorComponent } from "./character-editor/character-editor.component";

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'create', component: CharacterEditorComponent },
  { path: 'edit/:characterId', component: CharacterEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
