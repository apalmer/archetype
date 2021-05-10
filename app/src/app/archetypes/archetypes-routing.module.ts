import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchetypesComponent } from './archetypes.component';
import { ArchetypeEditorComponent } from './archetype-editor/archetype-editor.component';

const routes: Routes = [
  { path: '', component: ArchetypesComponent },
  { path: 'create', component: ArchetypeEditorComponent },
  { path: 'edit/:archetypeId', component: ArchetypeEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchetypesRoutingModule { }
