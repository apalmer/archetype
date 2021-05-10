import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'

import { ArchetypesRoutingModule } from './archetypes-routing.module';
import { ArchetypesComponent } from './archetypes.component';
import { ArchetypeEditorComponent } from './archetype-editor/archetype-editor.component';
import { ArchetypeListComponent } from './archetype-list/archetype-list.component';
import { ArchetypeSummaryComponent } from './archetype-summary/archetype-summary.component';


@NgModule({
  declarations: [
    ArchetypesComponent,
    ArchetypeEditorComponent,
    ArchetypeListComponent,
    ArchetypeSummaryComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ArchetypesRoutingModule
  ]
})
export class ArchetypesModule { }
