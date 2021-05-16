import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from "@angular/material/tree";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";

import { ArchetypesRoutingModule } from './archetypes-routing.module';
import { ArchetypesComponent } from './archetypes.component';
import { ArchetypeEditorComponent } from './archetype-editor/archetype-editor.component';
import { ArchetypeListComponent } from './archetype-list/archetype-list.component';
import { ArchetypeSummaryComponent } from './archetype-summary/archetype-summary.component';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';


@NgModule({
  declarations: [
    ArchetypesComponent,
    ArchetypeEditorComponent,
    ArchetypeListComponent,
    ArchetypeSummaryComponent,
    PropertyDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ArchetypesRoutingModule
  ]
})
export class ArchetypesModule { }
